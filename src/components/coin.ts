import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { when } from 'lit/directives/when.js';
import { coin } from '../images';
import { generalCss } from '../main-css';
import { actions, CoinsState, State } from '../state';
import { StateController } from '../store/controller';


@customElement('x-coin')
export class Coin extends LitElement {
  static styles = [generalCss, css`
    :host {
      display: flex;
      gap: 8px;
      font-size: 1.3em;
      align-items: center;
      margin: 0 4px;
    }

    button {
      font-size: .7rem;
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
  @property() declare type: keyof CoinsState;

  increment() {
    this.#stateController.dispatch(actions.coins.increment(this.type));
  }

  render() {
    return html`
      ${when(this.type !== 'constellationEvent', () => html`
        <button @click=${this.increment}>+</button>
      `)}
      ${this.state.coins[this.type]}x
      <div class=${classMap({ coin: true, [this.type]: true })}></div>
    `;
  }
}
