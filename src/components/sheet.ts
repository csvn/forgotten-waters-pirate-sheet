import { ResizeController } from '@lit-labs/observers/resize_controller.js';
import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
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
      left: 12%;
      width: 74.2%;
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
      color: var(--hint-active);
      position: absolute;
      top: calc(18.25% + var(--y) * 13%);
      left: 7.5%;
      width: 3.5%;
      height: 3.5%;
      z-index: 2;
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

  sheetUrl() {
    return pirateSheet(this.pirate!, this.type === 'cover' || this.type === 'endings' ? 1 : 2);
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

      ${when(this.type === 'constellation', () => html`
        ${range(0).map(i => html`<x-icon class="exclamation" style="--y: ${i}">exclamation</x-icon>`)}
      `)}

      <img class="sheet ${classMap({ [this.type]: true })}" src=${this.sheetUrl()}>
    `;
  }
}
