import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
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
      --size: 45px;
      background-position: center;
      background-size: 120%;
      border-radius: 50%;
      width: var(--size);
      height: var(--size);
      user-select: none;
      filter: var(--filter);
      transform: rotate(var(--image-rotation));
    }
    .coin.reRoll {
      --image-rotation: 100deg;
      --filter: var(--coin-re-roll-filter);
      background-image: url('${unsafeCSS(coin.reRoll)}');
    }
    .coin.misfortune {
      --image-rotation: 35deg;
      --filter: var(--coin-misfortune-filter);
      background-image: url('${unsafeCSS(coin.misfortune)}');
    }
    .coin.constellationEvent {
      --image-rotation: 45deg;
      --filter: var(--coin-constellation-event-filter);
      background-image: url('${unsafeCSS(coin.constellationEvent)}');
    }
  `];

  #stateController = new StateController(this);
  #previousCoinValue?: number;

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

  updated() {
    const prev = this.#previousCoinValue;

    if (prev !== undefined && prev !== this.#coinValue) {
      const coin = this.shadowRoot?.querySelector<HTMLElement>('.coin')!;
      const rotation = Number(getComputedStyle(coin).getPropertyValue('--image-rotation').replace(/deg$/, ''));
      const x = Math.sin((rotation * Math.PI) / 180);
      const y = Math.cos((rotation * Math.PI) / 180);
      coin.animate([
        { transform: `rotate(${rotation}deg)` },
        { transform: `rotate(${rotation}deg) rotate3d(${x}, ${y}, 0, 180deg) scale(1.55)`, offset: .5 },
        { transform: `rotate(${rotation}deg) rotate3d(${x}, ${y}, 0, 360deg)`, offset: 1 }
      ], { duration: 400 });
    }

    if (this.state?._persist.rehydrated) this.#previousCoinValue = this.#coinValue;
  }

  render() {
    return html`
      <div class="coin ${this.type}"></div>
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
