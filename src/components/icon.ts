import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { svgIcons } from '../images';
import { generalCss } from '../main-css';



@customElement('x-icon')
export class Icon extends LitElement {
  static styles = [generalCss, css`
    :host {
      color: var(--on-bg);
      display: inline-grid;
      width: 1.2em;
    }

    svg {
      fill: currentColor;
      aspect-ratio: 1;
    }
  `];

  updated() {
    this.setAttribute('aria-hidden', 'true');
  }

  render() {
    const href = `${svgIcons}#${this.textContent?.trim()}`;
    return html`
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <use href="${href}" />
      </svg>
    `;
  }
}
