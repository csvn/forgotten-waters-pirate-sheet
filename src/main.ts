import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { generalCss, mainCss } from './main-css';
import { StateController } from './store/controller';
import { State } from './state';
import './components/coin';
import './components/controls';
import './components/icon';
import './components/sheet';


@customElement('x-root')
export class View extends LitElement {
  static styles = [generalCss, mainCss];

  @state() declare state: State;

  #stateController = new StateController(this);

  changeFont(e: Event) {
    document.documentElement.style.setProperty('--font-family', (e.currentTarget as HTMLSelectElement).value);
  }

  render() {
    return html`
      <header>
        <h1>Forgotten Waters <small>- Pirate sheet</small></h1>
        <x-coin type="reRoll"></x-coin>
        <x-coin type="misfortune"></x-coin>
        <x-coin type="constellationEvent"></x-coin>
      </header>

      <x-controls></x-controls>

      <main class="sheets">
        <x-sheet type="cover"></x-sheet>
        <x-sheet type="background"></x-sheet>
        <x-sheet type="constellations"></x-sheet>
        <x-sheet type="endings"></x-sheet>
      </main>

      <aside>
        <p></p>
      </aside>

      <footer>
        <p>Copyright © Dunno, 2022</p>
      </footer>
    `;
  }
}
