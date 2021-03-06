import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { live } from 'lit/directives/live.js';
import { generalCss } from '../main-css';
import { StateController } from '../store/controller';
import { actions, State } from '../state';
import { inputActionFactory } from '../util';


@customElement('x-controls')
export class View extends LitElement {
  static styles = [generalCss, css`
    :host {
      display: flex;
      gap: 10px 0;
      grid-area: controls;
      flex-direction: column;
      padding: 0 15px;
    }

    p {
      color: var(--inactive);
      font-size: .7em;
      margin: 0;
    }

    label {
      font-size: .85rem;
      font-weight: bold;
      margin-top: -1em;
      transform: translate(0, .7em);
    }

    input:not([type="checkbox"]), select {
      width: 100%;
      min-width: 100px;
    }
  `];

  @state() declare state: State;

  #stateController = new StateController(this);
  #inputAction = inputActionFactory(this.#stateController);
  readonly #defaultThemeValue = '--default--';

  get #social() {
    return this.state.social;
  }

  #selectPirate(event: Event) {
    const select = event.currentTarget as HTMLSelectElement;
    this.#stateController.dispatch(actions.social.selectPirate(select.value));
  }

  #constellationSize() {
    const { social: { pirate: pirateType }, data: { pirates } } = this.state;
    const { chartEvents = [], chartProgress = [] } = pirates.find(p => p.id === pirateType)?.positions ?? {};
    return chartEvents.length + chartProgress.length;
  }

  #clear() {
    const performClear = confirm('Are you sure you want to delete all saved data?');
    if (performClear) this.#stateController.dispatch(actions.global.clear());
  }

  #import() {
    this.#stateController.dispatch(actions.global.importData());
  }

  #export() {
    this.#stateController.dispatch(actions.global.exportData());
  }

  #togglePirate() {
    this.#stateController.dispatch(actions.ui.togglePirate());
  }

  #toggleStoryBlanks() {
    this.#stateController.dispatch(actions.ui.toggleStoryBlanks());
  }

  #toggleSettings() {
    this.#stateController.dispatch(actions.ui.toggleSettings());
  }

  #selectTheme(event: Event) {
    const value = (event.currentTarget as HTMLSelectElement).value;
    this.#stateController.dispatch(actions.settings.selectTheme(value === this.#defaultThemeValue ? undefined : value));
  }

  #selectFont(event: Event) {
    const value = (event.currentTarget as HTMLSelectElement).value;
    this.#stateController.dispatch(actions.settings.selectFont(value));
  }

  #toggleSounds() {
    this.#stateController.dispatch(actions.settings.toggleSounds());
  }

  #adjustVolume(event: Event) {
    const value = Number((event.currentTarget as HTMLInputElement).value);
    this.#stateController.dispatch(actions.settings.adjustVolume(value));
  }

  render() {
    return html`
      <x-form-section legend="Pirate" .open=${this.state.ui.isPirateOpen} @toggle=${this.#togglePirate}>
        <label for="nickname">Nickname</label>
        <input id="nickname" type="text" name="nickname" placeholder="Pogchamp" .xautofocus=${this.#social.nickname.length === 0} .value=${this.#social.nickname} @input=${this.#inputAction(value => actions.social.updateNickname(value))}>

        <label for="pirateName">Pirate name</label>
        <input id="pirateName" type="text" name="pirateName" placeholder="Randy McDude" .value=${this.#social.pirateName} @input=${this.#inputAction(value => actions.social.updateName(value))}>

        <label for="pirate">Pirate type</label>
        <select id="pirate" name="pirate" .value=${this.#social.pirate ?? ''} @change=${this.#selectPirate}>
          <option value="">Select a pirate!</option>
          ${this.state.data.pirates.map(({ id, name }) => html`
            <option value=${id} .selected=${id === this.#social.pirate}>${name}</option>
          `)}
        </select>
        ${this.#constellationSize() > 0 ? html`<p>Constellation event count: ${this.#constellationSize()}</p>` : ''}
      </x-form-section>

      <x-form-section legend="Story blanks" .open=${this.state.ui.isStoryBlanksOpen} @toggle=${this.#toggleStoryBlanks}>
        ${this.#social.storyBlanks.map((value, i) => html`
          <label for="blank${i}">#${i + 1}</label>
          <input
              id="blank${i}"
              type="text"
              name="blank${i}"
              placeholder="Story..."
              .value=${value}
              @input=${this.#inputAction(v => actions.social.updateStoryBlank([i, v]))}>
        `)}
      </x-form-section>

      <x-form-section legend="Settings" .open=${this.state.ui.isSettingsOpen} @toggle=${this.#toggleSettings}>
        <label for="theme">Theme</label>
        <select id="theme" name="theme" .value=${live(this.state.settings.theme ?? this.#defaultThemeValue)} @change=${this.#selectTheme}>
          <option value=${this.#defaultThemeValue}>Comforting sky</option>
          <option value="moldy-parchment">Moldy parchment</option>
          <option value="ocean-heart">Ocean's heart</option>
          <option value="bright-skies">Bright skies</option>
          <option value="bright-parchment">Bright parchment</option>
        </select>

        <label for="font">Font</label>
        <select id="font" name="font" .value=${live(this.state.settings.font ?? 'Mansalva')} @change=${this.#selectFont}>
          <option value="Mansalva">Mansalva</option>
          <option value="Caveat">Caveat</option>
          <option value="JustMeAgainDownHere">Just Me Again Down Here</option>
          <option value="Verdana">Verdana</option>
        </select>

        <label for="sound-volume">Sound volume (0-1)</label>
        <input id="sound-volume" name="sound-volume" type="number" min="0" max="1" step="0.02" .value=${this.state.settings.soundVolume} @input=${this.#adjustVolume}>

        <label for="sounds">Sounds enabled</label>
        <input id="sounds" name="sounds" type="checkbox" .checked=${this.state.settings.shouldPlaySounds} @change=${this.#toggleSounds}><br>
      </x-form-section>

      <hr style="width: 90%">

      <button @click=${this.#clear}>Clear</button>
      <button @click=${this.#import}>Import</button>
      <button @click=${this.#export}>Export</button>
    `;
  }
}
