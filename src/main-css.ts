import { css } from 'lit';


export const generalCss = css`
  button {
    cursor: pointer;
    color: var(--on-primary);
    background-color: var(--primary);
    border: 0;
    border-radius: 5px;
    font-size: inherit;
    font-family: inherit;
    line-height: 2.4;
    padding: 0 1em;
    transition: all .25s;
  }
  button:hover {
    background-color: var(--primary-alt);
  }

  input:not([type="checkbox"]),
  select {
    display: block;
    color: var(--on-input);
    background-color: var(--input);
    border: solid 1px var(--border);
    border-radius: 5px;
    font-size: inherit;
    font-family: inherit;
    line-height: 1.8;
    padding: 0 10px;
  }
  input:not([type="checkbox"]):focus {
    background-color: var(--input-active);
  }
  select option {
    background-color: var(--input);
  }
  select option[selected] {
    background-color: var(--input-active);
  }

  input[type="checkbox"] {
    margin-left: 20px;
    transform: scale(1.8);
  }
`;

export const mainCss = css`
  :host {
    display: grid;
    grid:
      "header header" auto
      "controls main" 1fr
      "footer footer" auto
      / auto 1fr;
  }

  header, x-controls {
    background-color: var(--bg-alt);
  }

  header {
    display: flex;
    grid-area: header;
    align-items: center;
    gap: 20px;
    padding: 5px 25px;
    position: sticky;
    top: 0;
    z-index: var(--z-header);
  }

  header h1 {
    font-size: 1.6em;
    flex: 1;
    margin: 0;
  }

  main {
    padding: 25px;
  }

  .sheets {
    display: grid;
    gap: 50px 10px;
    grid-auto-rows: minmax(1000px, calc(100vh - 105px));
    grid-template-columns: repeat(2, minmax(10px, 1fr));
    /* grid-template-columns: repeat(auto-fill, minmax(max-content, 1fr));*/
    justify-items: center;
  }

  footer {
    grid-area: footer;
    text-align: center;
  }

  @media (max-width: 1820px) {
    .sheets {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 1900px) and (min-height: 1140px) {
    .sheets {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 1970px) and (min-height: 1200px) {
    .sheets {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 2050px) and (min-height: 1240px) {
    .sheets {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 2080px) and (min-height: 1280px) {
    .sheets {
      grid-template-columns: 1fr;
    }
  }
`;
