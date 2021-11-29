import { LitElement, css, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { get, set } from 'idb-keyval';
import { selectFile } from './dom';
import players from './players.json';
import draw from './images/draw.png';
import badLuckCoin from './images/coin-bad-luck.png';
import reRollCoin from './images/coin-re-roll.png';
import starSignCoin from './images/coin-star-sign.png';


const bufferToUrl = new WeakMap<ArrayBuffer, string>();

@customElement('x-root')
export class View extends LitElement {
  static styles = css`
    :host {
      display: grid;
      grid: auto 1fr / minmax(600px, 1fr) auto;
      gap: 20px;
      padding: 15px 30px 50px;
    }

    table th {
      font-size: 32px;
    }
    table td {
      font-size: 26px;
    }
    table th + th,
    table td + td {
      padding-left: 40px;
    }

    header {
      display: flex;
      align-items: center;
      grid-column: span 2;
      gap: 20px;
      padding-bottom: 100px;
    }

    header h1 {
      flex: 1;
      margin: 0;
    }

    header input,
    header select {
      color: var(--on-bg);
      background-color: rgba(255, 255, 255, .3);
      border-radius: 5px;
      font-size: inherit;
      font-family: inherit;
      line-height: 1.8;
      margin: 0 10px;
      padding: 0 10px;
      width: 100px;
    }
    header select {
      width: 200px;
    }
    header select option {
      background-color: var(--bg-alt);
    }

    header button {
      cursor: pointer;
      color: var(--on-primary);
      background-color: var(--primary);
      border: 0;
      border-radius: 5px;
      font-size: inherit;
      font-family: inherit;
      line-height: 2.4;
      padding: 0 24px;
      transition: all .25s;
    }
    header button:hover {
      background-color: var(--primary-alt);
    }

    .star-chart {
      cursor: url('${unsafeCSS(draw)}') 0 20, pointer;
      position: absolute;
      top: 17%;
      left: 59%;
      width: 31.5%;
      height: 37.5%;
      overflow: hidden;
      user-select: none;
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
      border: dashed 7px var(--hint);
      flex: 1;
      font-size: 30px;
      font-family: inherit;
      padding: 0 20px;
      transition: all .2s;
    }
    .inputs input:focus-visible {
      border-color: var(--hint-active);
      outline: 0;
    }
    .inputs.sheet2 input {
      font-size: 24px;
      border-width: 5px;
    }

    .stats {
      display: grid;
      grid: repeat(7, 1fr) / repeat(8, 1fr);
      position: absolute;
      top: 75.8%;
      left: 69.2%;
      width: 23%;
      height: 23%;
    }
    .stat-value {
      cursor: pointer;
      background-color: transparent;
      border: dashed 4px transparent;
      transition: all .2s;
    }
    .stat-value:hover {
      border-color: var(--hint-active);
    }
    .stat-value.active {
      background-color: var(--hint);
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
      filter: brightness(1.25);
    }
    .coin.bad-luck {
      background-image: url('${unsafeCSS(badLuckCoin)}');
      filter: brightness(1.6);
      transform: rotate(120deg);
    }
    .coin.re-roll {
      background-image: url('${unsafeCSS(reRollCoin)}');
    }
    .coin.star-sign {
      background-image: url('${unsafeCSS(starSignCoin)}');
      transform: rotate(45deg);
    }
  `;

  #canvas = this.#createCanvas();
  #state = this.#defaultState();
  #die?: number;
  #sentStoragePrompt = false;

  async connectedCallback() {
    super.connectedCallback();
    const state = await get('state');
    this.#state = { ...this.#state, ...state };

    if (this.#state.starSign) {
      const img = new Image();
      const canvas = this.#canvas;
      const drawImage = () => canvas.getContext('2d')!.drawImage(img, 0, 0);
      img.src = URL.createObjectURL(this.#state.starSign);
      img.addEventListener('load', drawImage, { once: true });
    }

    this.requestUpdate();
  }

  getSheet(index: 0 | 1) {
    const buffer = this.#state[index === 0 ? 'sheet1' : 'sheet2'];
    if (buffer && !bufferToUrl.has(buffer)) {
      bufferToUrl.set(buffer, URL.createObjectURL(new Blob([buffer])));
    }
    return bufferToUrl.get(buffer!);
  }

  async selectSheet(index: 0 | 1) {
    const file = await selectFile('image/*');
    if (!file) return;
    const ab = await file.arrayBuffer();
    const prop = index === 0 ? 'sheet1' : 'sheet2';
    this.#state[prop] = ab;
    this.persist();
  }

  async persist() {
    this.requestUpdate();

    const storage = navigator.storage;
    if (!this.#sentStoragePrompt && storage && !await storage.persisted()) {
      await storage.persist();
      this.#sentStoragePrompt = true;
    }

    await set('state', this.#state);
  }

  updateField(event: InputEvent) {
    const el = event.currentTarget as HTMLInputElement;
    const name = el.name;
    this.#state[name] = el.value;
    this.persist();
  }

  clear() {
    const clear = confirm('Are you sure you want to remove all locally saved data?');
    if (!clear) return;
    this.#canvas = this.#createCanvas();
    this.#state = this.#defaultState();
    this.persist();
  }

  #defaultState() {
    const y = 90;
    return {
      sheet1: undefined as ArrayBuffer | undefined,
      sheet2: undefined as ArrayBuffer | undefined,
      starSign: undefined as Blob | undefined,
      name: '',
      blank1: '',
      blank2: '',
      blank3: '',
      blank4: '',
      blank5: '',
      coinSize: 80,
      skills: {
        exploration: 0,
        brawn: 0,
        hunting: 0,
        aim: 0,
        swagger: 0,
        navigation: 0
      },
      coins: [
        ...range(10).map(i => ({ id: i, type: 'bad-luck', x: 30 + 25 * i, y })),
        ...range(10).map(i => ({ id: i, type: 're-roll', x: 350 + 25 * i, y })),
        ...range(5).map(i => ({ id: i, type: 'star-sign', x: 670 + 25 * i, y }))
      ]
    }
  }

  #createCanvas() {
    const canvas = document.createElement('canvas');
    canvas.width = 600;
    canvas.height = 600;
    return canvas;
  }

  coinStyle(x: number, y: number, size = this.#state.coinSize) {
    return `--x: ${x}; --y: ${y}; --size: ${size};`;
  }

  coinDragStart(e: MouseEvent) {
    const coin = e.currentTarget as HTMLElement & { coin: any };
    const { x, y } = coin.coin;
    const { pageX: startX, pageY: startY } = e;

    const drag = (e: MouseEvent) => {
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

  updateCoinSize(e: Event) {
    const value = (e.currentTarget as HTMLInputElement).value as any as number;
    this.#state.coinSize = value;
    this.persist();
  }

  setStat(skill: string, value: number) {
    this.#state.skills[skill] = value;
    this.persist();
  }

  changeFont(e: Event) {
    document.documentElement.style.setProperty('--font-family', (e.currentTarget as HTMLSelectElement).value);
  }

  startDraw(e: MouseEvent) {
    const canvas = this.#canvas;
    const ctx = canvas.getContext('2d')!;
    const doErase = e.button === 2;
    const { x, y } = canvas.getBoundingClientRect();

    const draw = (e: MouseEvent) => {
      ctx.beginPath();
      ctx.fillStyle = 'firebrick';
      ctx.arc(e.x - x, e.y - y, doErase ? 9 : 5, 0, 2 * Math.PI);
      if (doErase) {
        ctx.save();
        ctx.clip();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.restore();
      } else {
        ctx.fill();
      }
    };
    const drawStop = () => {
      this.#canvas.toBlob(blob => {
        this.#state.starSign = blob!;
        this.persist();
      });
      document.body.removeEventListener('mousemove', draw);
      document.body.removeEventListener('mouseup', drawStop);
    };

    document.body.addEventListener('mousemove', draw);
    document.body.addEventListener('mouseup', drawStop);

    draw(e);
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
      <header>
        <h1>Forgotten Waters - Pirate sheet</h1>
        ${this.#die === undefined ? '' : html`<span class="roll">Current roll: <span class="roll-value">${String(this.#die + 1).padStart(2, ' ')}</span></span>`}
        <button @click=${this.rollDie}>Roll die (1-12)</button>
        <button @click=${() => this.selectSheet(0)}>Set Pirate sheet 1</button>
        <button @click=${() => this.selectSheet(1)}>Set Pirate sheet 2</button>
        <button @click=${this.clear}>Clear</button>
        <label>Coin size:<input type="number" .value=${this.#state.coinSize} @input=${this.updateCoinSize}></label>
        <label>
          Font:
          <select @change=${this.changeFont}>
            <option value="Mansalva" selected>Mansalva</option>
            <option value="Caveat">Caveat</option>
            <option value="JustMeAgainDownHere">Just Me Again Down Here</option>
            <option value="Verdana">Verdana</option>
          </select>
        </label>
      </header>
      <main>
        ${!this.#state.sheet1 ? '' : html`
          <section>
            <div class="sheet1 inputs">
              <input type="text" name="name" placeholder="Pirate name" .value=${this.#state.name ?? ''} @input=${this.updateField}>
            </div>
            <div class="star-chart" @mousedown=${ this.startDraw } @contextmenu=${ (e: Event) => e.preventDefault() }>
              ${this.#canvas}
            </div>
            <div class="stats">
              ${repeat(Object.keys(this.#state.skills), skill => repeat(range(8), value => html`
                <button class="stat-value${value > 0 && this.#state.skills[skill] >= value ? ' active' : ''}" @click=${() => this.setStat(skill, value)}></button>
              `))}
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
      </main>
      <aside>
        <table>
          <thead>
            <tr>
              <th>Player</th>
              <th>Pirate Name</th>
              <th>Pirate Type</th>
            </tr>
          </thead>
          <tbody>
            ${repeat(players, ([name, type, pirateName]) => html`<tr>
              <td>${name}</td>
              <td>${pirateName}</td>
              <td>${type}</td>
            </tr>`)}
          </tbody>
        </table>
      </aside>


      ${ repeat(this.#state.coins, (c) => html`
        <div class="coin ${c.type}" .style="${this.coinStyle(c.x, c.y)}" .coin=${c} @mousedown=${this.coinDragStart}></div>
      `)}
    `;
  }
}

function range(index: number) {
  return Array.from({ length: index }, (_, i) => i);
}
