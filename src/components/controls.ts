import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { generalCss } from '../main-css';
import { StateController } from '../store/controller';
import { actions, State } from '../state';


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

  changeFont(e: Event) {
    document.documentElement.style.setProperty('--font-family', (e.currentTarget as HTMLSelectElement).value);
  }

  selectPirate(event: Event) {
    const select = event.currentTarget as HTMLSelectElement;
    this.#stateController.dispatch(actions.social.selectPirate(select.value));
  }

  clear() {
    // TODO
  }

  render() {
    return html`
      <label>
        Pirate:
        <select name="pirate" .value=${this.state.social.pirate ?? ''} @change=${this.selectPirate}>
          <option value="">Select a pirate!</option>
          ${this.state.ui.pirates.map(({ id, name }: { id: string, name: string }) => html`
            <option value=${id}>${name}</option>
          `)}
        </select>
      </label>
      <label>
        Font:
        <select @change=${this.changeFont}>
          <option value="Mansalva" selected>Mansalva</option>
          <option value="Caveat">Caveat</option>
          <option value="JustMeAgainDownHere">Just Me Again Down Here</option>
          <option value="Verdana">Verdana</option>
        </select>
      </label>
      <button @click=${this.clear}>Clear</button>
    `;
  }
}
