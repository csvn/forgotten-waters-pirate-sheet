import { LitElement, html } from 'lit';
import { repeat } from 'lit/directives/repeat.js';
import { get, set } from 'idb-keyval';


const bufferToUrl = new WeakMap();

class View extends LitElement {
  #state = { ...this.defaultCoins() };
  #die;

  async connectedCallback() {
    super.connectedCallback();
    const state = await get('state');
    this.#state = { ...state };
    this.requestUpdate();
  }

  getSheet(index) {
    const buffer = this.#state[index === 0 ? 'sheet1' : 'sheet2'];
    if (!bufferToUrl.has(buffer)) {
      bufferToUrl.set(buffer, URL.createObjectURL(new Blob([buffer])));
    }
    return bufferToUrl.get(buffer);
  }

  async selectSheet(index) {
    const file = await selectFile('image/*');
    if (!file) return;
    const ab = await file.arrayBuffer();
    const prop = index === 0 ? 'sheet1' : 'sheet2';
    this.#state[prop] = ab;
    this.persist();
  }

  async persist() {
    this.requestUpdate();
    await set('state', this.#state);
  }

  updateField(event) {
    const el = event.currentTarget;
    const name = el.name;
    this.#state[name] = el.value;
    this.persist();
  }

  clear() {
    const clear = confirm('Are you sure you want to remove all locally saved data?');
    if (!clear) return;
    this.#state = { ...this.defaultCoins() };
    this.persist();
  }

  defaultCoins() {
    const y = 90;
    return {
      coinSize: 80,
      coins: [
        ...range(10).map(i => ({ id: i, type: 'bad-luck', x: 30 + 25 * i, y })),
        ...range(10).map(i => ({ id: i, type: 're-roll', x: 350 + 25 * i, y })),
        ...range(5).map(i => ({ id: i, type: 'star-sign', x: 670 + 25 * i, y }))
      ]
    }
  }

  coinStyle(x, y, size = this.#state.coinSize) {
    return `--x: ${x}; --y: ${y}; --size: ${size};`;
  }

  coinDragStart(e) {
    const coin = e.currentTarget;
    const { x, y } = coin.coin;
    const { pageX: startX, pageY: startY } = e;

    const drag = e => {
      const { pageX, pageY } = e;
      const dx = pageX - startX;
      const dy = pageY - startY;
      coin.style = this.coinStyle(x + dx, y + dy);
      coin.coin.x = x + dx;
      coin.coin.y = y + dy;
    };
    const dragStop = () => {
      this.persist();
      document.body.removeEventListener('mousemove', drag);
      document.body.removeEventListener('mouseup', dragStop);
    };

    document.body.addEventListener('mousemove', drag);
    document.body.addEventListener('mouseup', dragStop);
  }

  updateCoinSize(e) {
    const value = e.currentTarget.value;
    this.#state.coinSize = value;
    this.persist();
  }

  rollDie() {
    const iter = 10 + Math.random() * 12;
    let i = 0;
    const frames = () => {
      if (i < iter) requestAnimationFrame(frames);
      this.#die = Math.floor(i) % 12;
      i += 0.2;
      this.requestUpdate();
    };
    frames();
  }

  render() {
    return html`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 30px;
        }

        header {
          display: flex;
          align-items: center;
          gap: 20px;
          padding-bottom: 100px;
        }

        header h1 {
          flex: 1;
          margin: 0;
        }

        section {
          flex: 1;
          position: relative;
          max-width: 1600px;
        }
        section img {
          width: 100%;
          height: auto;
        }

        .inputs {
          display: flex;
          flex-direction: column;
          position: absolute;
          gap: 2%;
        }
        .sheet1 {
          top: 11%;
          left: 56%;
          width: 37%;
          height: 6.5%;
        }
        .sheet2 {
          top: 13%;
          left: 20.5%;
          width: 25%;
          height: 27%;
        }

        .inputs input {
          background-color: transparent;
          border: dashed 7px rgb(237 177 40 / 40%);
          flex: 1;
          font-size: 30px;
          padding: 0 20px;
        }
        .inputs input:focus-visible {
          border: dashed 7px rgb(237 177 40 / 80%);
          outline: 0;
        }
        .inputs.sheet2 input {
          font-size: 24px;
          border-width: 5px;
        }

        button {
          cursor: pointer;
          color: #fff;
          background-color: #17368d;
          border: 0;
          border-radius: 5px;
          height: 36px;
          padding: 0 16px;
          transition: all .25s;
        }
        button:hover {
          background-color: #37469d;
        }

        .roll {
          font-size: 20px;
          white-space: pre;
        }
        .roll-value {
          font-family: monospace;
        }

        .coin {
          --size: 80px;
          cursor: move;
          background-position: center;
          background-size: 120%;
          border-radius: 50%;
          top: var(--y);
          left: var(--x);
          width: var(--size);
          height: var(--size);
          position: absolute;
          user-select: none;
        }
        .coin.bad-luck {
          background-image: url('/images/coin-bad-luck.png');
        }
        .coin.re-roll {
          background-image: url('/images/coin-re-roll.png');
        }
        .coin.star-sign {
          background-image: url('/images/coin-star-sign.png');
        }
      </style>

      <header>
        <h1>Forgotten Waters - Pirate sheet</h1>
        ${this.#die === undefined ? '' : html`<span class="roll">Current roll: <span class="roll-value">${String(this.#die + 1).padStart(2, ' ')}</span></span>`}
        <button @click=${this.rollDie}>Roll die (1-12)</button>
        <button @click=${() => this.selectSheet(0)}>Set Pirate sheet 1</button>
        <button @click=${() => this.selectSheet(1)}>Set Pirate sheet 2</button>
        <button @click=${this.clear}>Clear</button>
        <label>Coin size:<input type="number" .value=${this.#state.coinSize} @input=${this.updateCoinSize}></label>
      </header>
      ${!this.#state.sheet1 ? '' : html`
        <section>
          <div class="sheet1 inputs">
            <input type="text" name="name" placeholder="Pirate name" .value=${this.#state.name ?? ''} @input=${this.updateField}>
          </div>
          <img src=${this.getSheet(0)}>
        </section>
      `}
      ${!this.#state.sheet2 ? '' : html`
        <section>
          <div class="sheet2 inputs">
            <input type="text" name="blank1" placeholder="Story blank 1" .value=${this.#state.blank1 ?? ''} @input=${this.updateField}>
            <input type="text" name="blank2" placeholder="Story blank 2" .value=${this.#state.blank2 ?? ''} @input=${this.updateField}>
            <input type="text" name="blank3" placeholder="Story blank 3" .value=${this.#state.blank3 ?? ''} @input=${this.updateField}>
            <input type="text" name="blank4" placeholder="Story blank 4" .value=${this.#state.blank4 ?? ''} @input=${this.updateField}>
            <input type="text" name="blank5" placeholder="Story blank 5" .value=${this.#state.blank5 ?? ''} @input=${this.updateField}>
          </div>
          <img src=${this.getSheet(1)}>
        </section>
      `}

      ${ repeat(this.#state.coins, (c) => html`
        <div class="coin ${c.type}" .style="${this.coinStyle(c.x, c.y)}" .coin=${c} @mousedown=${this.coinDragStart}></div>
      `)}
    `;
  }
}
customElements.define('x-root', View);

function range(index) {
  return Array.from({ length: index }, (_, i) => i);
}

async function selectFile(mime) {
  const file = document.createElement('input');
  file.type = 'file';
  file.accept = mime;
  file.multiple = false;
  file.hidden = true;
  file.click();
  await nextEvent(file, 'change');
  return file.files?.[0];
}

function nextEvent(el, event) {
  return new Promise(resolve => {
    el.addEventListener(event, e => resolve(e), { once: true });
  });
}
