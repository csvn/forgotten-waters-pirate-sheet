import { State } from '../../state';


export function updateThemeFactory() {
  const linkSibling = [...document.styleSheets].at(-1).ownerNode as HTMLElement;
  const link = document.createElement('link');
  link.type = 'text/css';
  link.rel = 'stylesheet';

  const themeNames = ['bright-parchment', 'bright-skies', 'moldy-parchment', 'ocean-heart'];
  const urlMap = new Map(themeNames.map(id => [id, `${import.meta.env.BASE_URL}${id}.css`]));

  return (state: State) => {
    const t = state.settings.theme;

    if (t === undefined && link.parentNode !== null) {
      link.remove();
    } else if (t !== undefined) {
      const url = urlMap.get(t) ?? 'undefined.css';
      if (link.href !== url) link.href = url;
      if (link.parentNode === null) linkSibling.insertAdjacentElement('afterend', link);
    }

    const f = state.settings.font;
    const docStyle = document.documentElement.style;
    if (f !== undefined && f !== docStyle.getPropertyValue('--font-family')) {
      docStyle.setProperty('--font-family', f);
    }
  };
};
