import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { actions, State } from '../state';
import { StateController } from '../store/controller';


@customElement('x-star-chart')
export class StarChart extends LitElement {
  static styles = css`
    :host {
      display: block;
      aspect-ratio: 1.21;
      position: relative;
    }

    button {
      cursor: pointer;
      background: transparent;
      border: dashed 4px transparent;
      border-radius: 50%;
      aspect-ratio: 1;
      position: absolute;
      width: 5%;
      top: calc(var(--y) * 100%);
      left: calc(var(--x) * 100%);
      transform: translate(-50%, -50%);
    }
    button:hover {
      background: var(--hint);
      border-color: var(--hint-active);
    }

    .progress {
      width: 5.1%;
    }

    .event {
      width: 7.5%;
    }
  `;

  #stateController = new StateController(this);

  @state() declare state: State;

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
      ${this.#constellation().map(c => html`
        <button class=${c.type} style="--x: ${c.x}; --y: ${c.y};"></button>
      `)}
    `;
  }
}
