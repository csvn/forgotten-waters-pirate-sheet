import type { AnyAction, Middleware } from '@reduxjs/toolkit';
import { delay, event } from '../../util';
import { coins } from '../../state/coins';
import { constellationToggle } from '../../state/global';
import coinClink from '../../assets/sounds/coin-clink.mp3';
import penScratch from '../../assets/sounds/pen-scratch.mp3';
// import pageTurn1 from '../../assets/sounds/page-turn.mp3';
// import pageTurn2 from '../../assets/sounds/page-turn-2.mp3';
// import pageTurn3 from '../../assets/sounds/page-turn-3.mp3';


async function playSound(url: string, volume = 0.2) {
  const audio = new Audio(url);
  audio.volume = volume;
  await event(audio, 'canplay');
  await audio.play();
  await delay(audio.duration * 1000);
}

async function soundReducer(action: AnyAction) {
  if (constellationToggle.match(action) && action.payload[2]) {
    await playSound(penScratch);
    if (action.payload[1] === 'event') await playSound(coinClink);
  }
  if (coins.actions.increment.match(action)) {
    await playSound(coinClink);
  }
}

export const playSoundsMiddleware: Middleware = _store => next => (action: AnyAction) => {
  soundReducer(action);
  return next(action);
};
