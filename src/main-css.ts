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

  input,
  select {
    color: var(--on-bg);
    background-color: rgba(255, 255, 255, .3);
    border-radius: 5px;
    font-size: inherit;
    font-family: inherit;
    line-height: 1.8;
    padding: 0 10px;
  }
  select option {
    background-color: var(--bg-alt);
  }

  label > input,
  label > select {
    margin-left: 15px;
  }
`;

export const mainCss = css`
  :host {
    display: grid;
    grid:
      "header header header" auto
      "controls main aside" 1fr
      "footer footer footer" auto
      / auto 1fr auto;
    gap: 20px;
    padding: 15px 30px 50px;
  }

  header {
    display: flex;
    grid-area: header;
    align-items: center;
    gap: 20px;
  }

  header h1 {
    flex: 1;
    margin: 0;
  }

  .sheets {
    display: grid;
    gap: 50px 10px;
    grid-auto-rows: minmax(1000px, calc(100vh - 105px));
    grid-template-columns: repeat(2, minmax(10px, 1fr));
    /* grid-template-columns: repeat(auto-fill, minmax(max-content, 1fr));*/
    justify-items: center;
  }

  aside {
    grid-area: aside;
  }

  footer {
    grid-area: footer;
  }

  @media (max-width: 2300px) {
    .sheets {
      grid-template-columns: 1fr;
    }
  }
`;
