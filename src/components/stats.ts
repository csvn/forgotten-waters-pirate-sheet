import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { repeat } from 'lit/directives/repeat.js';
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
      transition: all .2s;
    }
    .stat-value:hover {
      background-color: transparent;
      border-width: 2px;
      border-color: var(--hint-active);
    }
    .stat-value.active {
      background-color: var(--hint);
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
