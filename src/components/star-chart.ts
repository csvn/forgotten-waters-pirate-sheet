import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { drawIcon } from '../images';
import { actions, State } from '../state';
import { StateController } from '../store/controller';


@customElement('x-star-chart')
export class StarChart extends LitElement {
  static styles = css`
    :host {
      display: block;
      /* cursor: url('${unsafeCSS(drawIcon)}') 0 20, pointer; */
      aspect-ratio: 1.21;
      position: relative;
      overflow: hidden;
      user-select: none;
      z-index: 2;
    }

    button {
      background: rgb(255 255 0 / 0.5);
      border: 0;
      border-radius: 50%;
      aspect-ratio: 1;
      position: absolute;
      width: 5%;
      top: calc(var(--y) * 100%);
      left: calc(var(--x) * 100%);
      transform: translate(-50%, -50%);
    }

    .progress {
      width: 3.2%;
    }

    .event {
      width: 5.5%;
    }
  `;

  #canvas = this.#createCanvas();
  #stateController = new StateController(this);

  @state() declare state: State;

  #createCanvas() {
    const canvas = document.createElement('canvas');
    canvas.width = 600;
    canvas.height = 600;
    return canvas;
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
      document.body.removeEventListener('mousemove', draw);
      document.body.removeEventListener('mouseup', drawStop);
    };

    document.body.addEventListener('mousemove', draw);
    document.body.addEventListener('mouseup', drawStop);

    draw(e);
  }

  #constellation() {
    const { social, ui } = this.state;
    return ui.pirates.find(p => p.id === social.pirate)?.constellation ?? [];
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', (e: MouseEvent) => {
      const t = e.currentTarget as HTMLElement;
      const { x, y, width, height } = t.getBoundingClientRect();
      console.log(`"x": ${((e.clientX - x) / width).toFixed(3)}, "y": ${((e.clientY - y) / height).toFixed(3)}`);
    });
  }

  render() {
    return html`
      <div class="star-chart" @mousedown=${this.startDraw} @contextmenu=${(e: Event) => e.preventDefault()}>
        ${this.#canvas}
        ${this.#constellation().map(c => html`
          <button class=${c.type} style="--x: ${c.x}; --y: ${c.y};"></button>
        `)}
      </div>
    `;
  }
}
