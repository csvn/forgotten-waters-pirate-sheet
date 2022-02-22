import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';


@customElement('x-form-section')
export class FormSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      position: relative;
    }

    fieldset {
      border: solid var(--border);
      border-width: 3px 0 0;
      margin: 0;
      padding: 0;
      overflow: hidden;
    }

    legend {
      font-size: 1.2rem;
      margin: 0 15px;
      padding: 0 10px;
    }

    button {
      cursor: pointer;
      aspect-ratio: 1;
      background-color: var(--input);
      border: none;
      border-radius: 50%;
      position: absolute;
      top: 3px;
      right: 10px;
      transition: background .3s linear, transform .3s cubic-bezier(.82,.02,.13,.98);
    }
    button:hover {
      background: var(--input-active);
    }
    button.rotate {
      transform: rotate(180deg);
    }

    .collapsible {
      padding: 2px;
    }
    .collapsible:not(.open) {
      height: 0;
      overflow: hidden;
    }
  `;

  @property() declare legend: string;
  @property() declare open?: boolean;

  get #open() {
    return this.open ?? true;
  }

  toggle() {
    this.dispatchEvent(new Event('toggle'));
  }

  render() {
    return html`
      <fieldset>
        <legend>${this.legend}</legend>
        <button class=${classMap({ rotate: !this.#open })} @click=${this.toggle}>
          <x-icon>arrow-down</x-icon>
        </button>
        <div class="collapsible${classMap({ open: this.#open })}">
          <slot></slot>
        </div>
      </fieldset>
    `;
  }
}
