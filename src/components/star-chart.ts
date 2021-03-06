import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { svgIcons } from '../images';
import { actions, State } from '../state';
import { StateController } from '../store/controller';


@customElement('x-star-chart')
export class StarChart extends LitElement {
  static styles = css`
    :host {
      display: block;
      aspect-ratio: 1.204;
      position: relative;
    }

    button {
      cursor: pointer;
      background-color: transparent;
      border: dashed 3px transparent;
      border-radius: 50%;
      box-sizing: border-box;
      aspect-ratio: 1;
      position: absolute;
      width: 5%;
      top: calc(var(--y) * 100%);
      left: calc(var(--x) * 100%);
      transform: translate(-50%, -50%);
      transition: background-color .2s linear, border-color .2s linear;
    }
    button.selected {
      background-color: var(--hint-active);
      mask-image: url('${unsafeCSS(svgIcons + '#cross-mask')}');
      -webkit-mask-image: url('${unsafeCSS(svgIcons + '#cross-mask')}');
      animation: grow 0.4s cubic-bezier(.71,.51,.58,2.4);
      transform-origin: top left;
    }
    button:hover:not(.selected) {
      background-color: var(--hint);
      border-color: var(--hint-active);
    }
    button.pulse:not(:hover):not(.selected) {
      --to: var(--hint);
      animation: pulse 2s linear infinite;
    }

    .progress {
      width: 5.2%;
    }

    .event {
      width: 7.2%;
    }

    #help {
      cursor: help;
      color: var(--hint-active);
      position: absolute;
      right: -10%;
      bottom: -10%;
    }

    @keyframes grow {
      0% {
        transform: scale(0) translate(-50%, -50%);
      }
      100% {
        transform: scale(1) translate(-50%, -50%);
      }
    }

    @keyframes pulse {
      0% {
        background-color: transparent;
      }
      35% {
        background-color: var(--to);
      }
      70%, 100% {
        background-color: transparent;
      }
    }
  `;

  #stateController = new StateController(this);

  @state() declare pulse?: boolean;
  @state() declare state: State;

  #chart(type: 'chartEvents' | 'chartProgress') {
    const { social, data, constellation } = this.state;
    const list = data.pirates.find(p => p.id === social.pirate)?.positions[type] ?? [];
    const selected = type === 'chartEvents' ? constellation.chartEvents : constellation.chartProgress;
    const actionCreator = actions.constellation[type === 'chartEvents' ? 'toggleChartEvent' : 'toggleChartProgress'];
    return list.map((point, id) => ({
      ...point,
      type: type === 'chartEvents' ? 'event' : 'progress',
      selected: selected.includes(id),
      toggle: () => this.#stateController.dispatch(actionCreator(id))
    }));
  }

  #events() {
    return this.#chart('chartEvents');
  }

  #progress() {
    return this.#chart('chartProgress');
  }

  render() {
    return html`
      ${[...this.#progress(), ...this.#events()].map(c => html`
        <button
            class=${classMap({ selected: c.selected, pulse: this.pulse!, [c.type]: true })}
            style=${styleMap({ '--x': String(c.x), '--y': String(c.y) })}
            @click=${c.toggle}></button>
      `)}

      <x-icon
          id="help"
          title="Click on constellation nodes to select them"
          @mouseenter=${() => this.pulse = true}
          @mouseleave=${() => this.pulse = false}>
        questionmark
      </x-icon>
    `;
  }
}
