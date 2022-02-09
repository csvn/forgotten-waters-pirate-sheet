import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { generalCss } from '../main-css';
import { StateController } from '../store/controller';
import { actions, State } from '../state';
import { inputActionFactory } from '../util';


@customElement('x-controls')
export class View extends LitElement {
  static styles = [generalCss, css`
    :host {
      display: flex;
      gap: 20px 0;
      grid-area: controls;
      flex-direction: column;
    }

    select {
      min-width: 300px;
    }
  `];

  @state() declare state: State;

  #stateController = new StateController(this);
  #inputAction = inputActionFactory(this.#stateController);

  get #social() {
    return this.state.social;
  }

  #changeFont(e: Event) {
    document.documentElement.style.setProperty('--font-family', (e.currentTarget as HTMLSelectElement).value);
  }

  #selectPirate(event: Event) {
    const select = event.currentTarget as HTMLSelectElement;
    this.#stateController.dispatch(actions.social.selectPirate(select.value));
  }

  #constellationSize() {
    const { social, ui } = this.state;
    return ui.pirates.find(p => p.id === social.pirate)?.constellation?.length ?? 0;
  }

  #clear() {
    const performClear = confirm('Are you sure you want to delete all saved data?');
    if (performClear) this.#stateController.dispatch(actions.global.clear());
  }

  render() {
    return html`
      <label>
        Nickname:
        <input type="text" name="nickname" placeholder="Player nickname" .value=${this.#social.nickname} @input=${this.#inputAction(value => actions.social.updateNickname(value))}>
      </label>
      <label>
        Pirate name:
        <input type="text" name="pirateName" placeholder="Pirate name" .value=${this.#social.pirateName} @input=${this.#inputAction(value => actions.social.updateName(value))}>
      </label>
      <label>
        Pirate:
        <select name="pirate" .value=${this.#social.pirate ?? ''} @change=${this.#selectPirate}>
          <option value="">Select a pirate!</option>
          ${this.state.ui.pirates.map(({ id, name }: { id: string, name: string }) => html`
            <option value=${id} .selected=${id === this.#social.pirate}>${name}</option>
          `)}
        </select>
      </label>
      ${this.#constellationSize() > 0 ? html`<p style="margin: 0;"><small>Constellation size: ${this.#constellationSize()}</small></p>` : ''}
      <hr style="width: 90%">
      <label>
        Font:
        <select @change=${this.#changeFont}>
          <option value="Mansalva" selected>Mansalva</option>
          <option value="Caveat">Caveat</option>
          <option value="JustMeAgainDownHere">Just Me Again Down Here</option>
          <option value="Verdana">Verdana</option>
        </select>
      </label>
      <hr style="width: 90%">
      <button @click=${this.#clear}>Clear</button>
    `;
  }
}
