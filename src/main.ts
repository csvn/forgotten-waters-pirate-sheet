import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { generalCss, mainCss } from './main-css';
import { StateController } from './store/controller';
import { delay, event } from './util';
import { State } from './state';
import pageTurn1 from './assets/sounds/page-turn.mp3';
import pageTurn2 from './assets/sounds/page-turn-2.mp3';
import pageTurn3 from './assets/sounds/page-turn-3.mp3';
import './components/coin';
import './components/controls';
import './components/sheet';


async function playSounds() {
  await delay(1000);

  const audio1 = new Audio(pageTurn1);
  await event(audio1, 'canplay');
  audio1.play();

  await delay(2000);

  const audio2 = new Audio(pageTurn2);
  await event(audio2, 'canplay');
  audio2.play();

  await delay(2000);

  const audio3 = new Audio(pageTurn3);
  await event(audio3, 'canplay');
  audio3.play();
}

// playSounds();

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
