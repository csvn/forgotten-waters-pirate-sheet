import { ResizeController } from '@lit-labs/observers/resize_controller.js';
import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { when } from 'lit/directives/when.js';
import { pirateSheet } from '../images';
import { actions, State } from '../state';
import { StateController } from '../store/controller';
import { inputActionFactory, range } from '../util';
import './star-chart';
import './stats';


@customElement('x-sheet')
export class Sheet extends LitElement {
  static styles = css`
    :host {
      display: grid;
      grid: "sheet" 1fr / 1fr;
      aspect-ratio: 1 / var(--paper-ratio);
      position: relative;
      height: 100%;
    }

    .sheet {
      grid-area: sheet;
      object-fit: cover;
      filter: var(--sheet-filter);
      width: 100%;
      height: 100%;
    }

    .sheet.cover {
      object-position: top right;
    }
    .sheet.background {
      object-position: top left;
    }
    .sheet.constellation {
      object-position: top right;
    }
    .sheet.endings {
      object-position: top left;
    }

    .stats {
      position: absolute;
      top: 75.4%;
      left: 14.9%;
      width: 69.3%;
      z-index: 2;
    }

    .star-chart {
      position: absolute;
      top: 17.5%;
      left: 17%;
      width: 64%;
      z-index: 2;
    }

    .inputs {
      display: flex;
      flex-direction: column;
      position: absolute;
      gap: 2%;
      z-index: 2;
    }

    .inputs.cover {
      top: 11%;
      left: 11.2%;
      width: 75.2%;
      height: 6.5%;
    }
    .inputs.background {
      top: 12.5%;
      left: 48%;
      width: 45%;
      height: 28.4%;
    }

    .inputs input {
      color: var(--on-bg);
      background-color: transparent;
      border: dashed 7px var(--hint);
      flex: 1;
      font-size: calc(var(--base-height, 1) * 30px);
      font-family: inherit;
      padding: 0 20px;
      transition: all .2s;
    }
    .inputs input:focus-visible {
      border-color: var(--hint-active);
      outline: 0;
    }
    .inputs.background input {
      font-size: calc(var(--base-height, 1) * 24px);
      border-width: 5px;
    }

    .exclamation {
      aspect-ratio: 1;
      background-color: transparent;
      border: 0;
      border-radius: 50%;
      padding: 0;
    }

    .exclamation:not([disabled]) {
      cursor: pointer;
    }
    .exclamation:not([disabled]):hover {
      background-color: var(--hint);
    }
    .exclamation:not([disabled]):not(.active) {
      --to: var(--hint);
      animation: pulseBg 2s linear infinite;
    }

    .exclamation x-icon {
      color: transparent;
      width: 100%;
      height: 100%;
    }
    .exclamation.active x-icon {
      color: var(--hint-active);
    }
    .exclamation:not([disabled]):not(.active) x-icon {
      --to: var(--hint-active);
      animation: pulse 2s linear infinite;
    }

    .exclamation.constellation-event {
      position: absolute;
      padding: 3px;
      top: var(--y);
      left: 7.2%;
      width: 4.2%;
      z-index: 2;
    }

    .ending {
      display: grid;
      grid: 1fr / repeat(5, 1fr);
      position: absolute;
      top: calc(10.35% + var(--y));
      width: 16.9%;
      height: 2.34%;
      z-index: 2;
    }
    .bad {
      left: calc(42.4% + var(--x));
    }
    .good {
      left: calc(38.5% + var(--x));
    }
    .legendary {
      left: calc(32.3% + var(--x));
    }

    @keyframes pulse {
      0% {
        color: transparent;
      }
      40%, 60% {
        color: var(--to);
      }
      100% {
        color: transparent;
      }
    }

    @keyframes pulseBg {
      0% {
        background-color: transparent;
      }
      40%, 60% {
        background-color: var(--to);
      }
      100% {
        background-color: transparent;
      }
    }
  `;

  #stateController = new StateController(this);
  #resizeController = new ResizeController(this, {
    callback: ([entry]) => entry ? entry.contentRect.height : undefined
  });
  #inputAction = inputActionFactory(this.#stateController);

  @state() declare state: State;
  @property() declare type: 'cover' | 'background' | 'constellation' | 'endings';

  get pirate() {
    return this.state.social.pirate;
  }

  get social() {
    return this.state.social;
  }

  #sheetUrl() {
    return pirateSheet(this.pirate!, this.type === 'cover' || this.type === 'endings' ? 1 : 2);
  }

  #constellationEventCount() {
    return this.state.constellation.events.reduce((sum, active) => sum + (active ? 1 : 0), 0);
  }

  #canSelectConstellationEvent(i: number) {
    const { constellation: { events, chartEvents } } = this.state;
    return chartEvents.length > i &&
      (events[i] && !(events[i + 1] ?? false) ||
      !events[i] && (events[i - 1] ?? true));
  }

  #toggleConstellationEvent(i: number) {
    this.#stateController.dispatch(actions.constellation.toggleEvent(i));
  }

  #constellationEventPosition(i: number) {
    const { social: { pirate }, data: { pirates } } = this.state;
    const top = pirates.find(p => p.id === pirate)?.positions.constellationEvents[i] ?? i * 10;
    return `${top}%`;
  }

  #endingsPositions(type: 'bad' | 'good' | 'legendary') {
    const { social: { pirate }, data: { pirates } } = this.state;
    const { x = 0, y = 0 } = pirates.find(p => p.id === pirate)?.positions.endings[type] ?? {};
    return { '--x': `${x}%`, '--y': `${y}%` };
  }

  updated() {
    const height = this.#resizeController.value as number | undefined;
    if (height) this.style.setProperty('--base-height', (height / 1100).toPrecision(2));
  }

  render() {
    if (!this.pirate) return nothing;
    return html`
      ${when(this.type === 'cover', () => html`
        <div class="inputs cover">
          <input type="text" name="pirateName" placeholder="Pirate name" .value=${this.social.pirateName} @input=${this.#inputAction(value => actions.social.updateName(value))}>
        </div>
        <x-star-chart class="star-chart"></x-star-chart>
        <x-stats class="stats"></x-stats>
      `)}

      ${when(this.type === 'background', () => html`
        <div class="inputs background">
          ${this.social.storyBlanks.map((v, i) => html`
            <input type="text" name="blank${i}" placeholder="Story blank ${i + 1}" .value=${v} @input=${this.#inputAction(value => actions.social.updateStoryBlank([i, value]))}>
          `)}
        </div>
      `)}

      ${when(this.type === 'constellation', () => this.state.constellation.events.map((active, i) => html`
        <button
            class="exclamation constellation-event ${classMap({ active })}"
            style="--y: ${this.#constellationEventPosition(i)}"
            .disabled=${!this.#canSelectConstellationEvent(i)}
            @click=${() => this.#toggleConstellationEvent(i)}>
          <x-icon>exclamation</x-icon>
        </button>
      `))}

      ${when(this.type === 'endings', () => html`
        <div class="ending bad" style=${styleMap(this.#endingsPositions('bad'))}>
          ${range(3).map(i => html`
            <button
                class="exclamation ${classMap({ active: this.#constellationEventCount() > i })}"
                .disabled=${true}>
              <x-icon>exclamation</x-icon>
            </button>
          `)}
        </div>
        <div class="ending good" style=${styleMap(this.#endingsPositions('good'))}>
          ${range(4).map(i => html`
            <button
                class="exclamation ${classMap({ active: this.#constellationEventCount() > i })}"
                .disabled=${true}>
              <x-icon>exclamation</x-icon>
            </button>
          `)}
        </div>
        <div class="ending legendary" style=${styleMap(this.#endingsPositions('legendary'))}>
          ${range(5).map(i => html`
            <button
                class="exclamation ${classMap({ active: this.#constellationEventCount() > i })}"
                .disabled=${true}>
              <x-icon>exclamation</x-icon>
            </button>
          `)}
        </div>
      `)}

      <img class="sheet${classMap({ [this.type]: true })}" src=${this.#sheetUrl()}>
    `;
  }
}
