declare global {
  interface ImportMeta {
    globEager(glob: string): Record<string, { default: string }>;
  }
}

const imageMap = Object.fromEntries(
  Object.entries(import.meta.globEager('./assets/**/*.(svg|webp)'))
    .map(([path, module]) => [path, module.default] as const)
);

export  const svgIcons = imageMap['./assets/icons.svg'];

export const drawIcon = imageMap['./assets/draw.webp'];

export const coin = {
  reRoll: imageMap['./assets/coin-re-roll.webp'],
  misfortune: imageMap['./assets/coin-misfortune.webp'],
  constellationEvent: imageMap['./assets/coin-constellation-event.webp']
};

export function pirateSheet(id: string, sheet: 1 | 2) {
  return imageMap[`./assets/pirates/${id}_${sheet}.webp`];
}
