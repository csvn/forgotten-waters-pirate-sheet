import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { repeat } from 'lit/directives/repeat.js';
import { svgIcons } from '../images';
import { actions, SkillsState, State } from '../state';
import { StateController } from '../store/controller';
import { keys, range } from '../util';


@customElement('x-stats')
export class Stats extends LitElement {
  static styles = css`
    :host {
      display: grid;
      grid: 17.6% repeat(5, 1fr) / 32.8% 8.7% repeat(6, 1fr) 9%;
      gap: 1px;
      aspect-ratio: 324 / 133;
    }
    .labels {
      grid-row: span 6;
    }
    .stat-value {
      cursor: pointer;
      background-color: transparent;
      border: dashed 1px var(--hint);
      padding: 0;
      transition: background-color .2s linear;
    }
    .stat-value:hover {
      background-color: var(--hint);
      border-color: var(--hint-active);
    }
    .stat-value.active {
      background-color: var(--hint-active);
      mask-image: url('${unsafeCSS(svgIcons + '#cross-mask')}');
      -webkit-mask-image: url('${unsafeCSS(svgIcons + '#cross-mask')}');
      animation: grow 0.4s cubic-bezier(.71,.51,.58,2.4);
    }

    @keyframes grow {
      0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
      }
    }
  `;

  #stateController = new StateController(this);

  @state() declare state: State;

  #isActive(skill: keyof SkillsState, value: number) {
    return value > 0 && this.state.skills[skill] >= value;
  }

  #skillTypes() {
    return keys(this.state.skills);
  }

  #setStat(skill: keyof SkillsState, value: number) {
    this.#stateController.dispatch(actions.skills.update([skill, value]));
  }

  render() {
    return html`
      <div class="labels"></div>
      ${repeat(this.#skillTypes(), skill => repeat(range(8), value => html`
        <button class="stat-value${classMap({ active: this.#isActive(skill, value) })}" @click=${() => this.#setStat(skill, value)}></button>
      `))}
    `;
  }
}
