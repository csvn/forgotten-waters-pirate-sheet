import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { when } from 'lit/directives/when.js';
import { coin } from '../images';
import { generalCss } from '../main-css';
import { actions, CoinsState, State } from '../state';
import { StateController } from '../store/controller';
import { throws } from '../util';


@customElement('x-coin')
export class Coin extends LitElement {
  static styles = [generalCss, css`
    :host {
      display: flex;
      gap: 8px;
      font-size: 1.8em;
      align-items: center;
      margin: 0 8px;
    }

    .buttons {
      display: flex;
      flex-direction: column;
      gap: 5px;
      padding: 5px;
    }

    button {
      display: block;
      aspect-ratio: 1;
      font-size: 1rem;
      line-height: 1.4;
      padding: 0 .3em;
    }

    .coin {
      --size: 35px;
      background-position: center;
      background-size: 120%;
      border-radius: 50%;
      width: var(--size);
      height: var(--size);
      user-select: none;
      filter: brightness(1.25);
    }
    .coin.reRoll {
      background-image: url('${unsafeCSS(coin.reRoll)}');
    }
    .coin.misfortune {
      background-image: url('${unsafeCSS(coin.misfortune)}');
      filter: brightness(1.6);
      transform: rotate(30deg);
    }
    .coin.constellationEvent {
      background-image: url('${unsafeCSS(coin.constellationEvent)}');
      transform: rotate(45deg);
    }
  `];

  #stateController = new StateController(this);

  @state() declare state: State;
  @property() declare type: keyof CoinsState | 'constellationEvent';

  get #coinValue() {
    const { dice, constellation: { events, chartEvents } } = this.state;
    if (this.type === 'constellationEvent') return chartEvents.length - events.filter(v => v).length;
    return dice[this.type];
  }
  get #coinTypeLabel() {
    return this.type === 'reRoll' ? 'Re-Roll' :
      this.type === 'misfortune' ? 'Misfortune' :
      this.type === 'constellationEvent' ? 'Constellation-Event' :
      throws(new Error(`Invalid type "${this.type}"`));
  }
  get #incrementTitle() {
    return `Increment ${this.#coinTypeLabel} coin`;
  }
  get #decrementTitle() {
    return `Decrement ${this.#coinTypeLabel} coin`;
  }

  #increment() {
    this.#stateController.dispatch(actions.dice.increment(this.type as keyof CoinsState));
  }

  #decrement() {
    this.#stateController.dispatch(actions.dice.decrement(this.type as keyof CoinsState));
  }

  render() {
    return html`
      <div class=${classMap({ coin: true, [this.type]: true })}></div>
      x${this.#coinValue}
      ${when(this.type !== 'constellationEvent', () => html`
        <div class="buttons">
          <button aria-label=${this.#incrementTitle} title=${this.#incrementTitle} @click=${this.#increment}>+</button>
          <button aria-label=${this.#decrementTitle} title=${this.#decrementTitle} @click=${this.#decrement}>-</button>
        </div>
      `)}
    `;
  }
}
