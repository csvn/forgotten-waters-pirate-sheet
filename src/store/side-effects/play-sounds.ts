import type { AnyAction } from '@reduxjs/toolkit';
import { delay, event } from '../../util';
import { actions, State } from '../../state';
import coinClink from '../../assets/sounds/coin-clink.mp3';
import coinClink2 from '../../assets/sounds/coin-clink-2.mp3';
import coinUse from '../../assets/sounds/coin-use.mp3';
import penScratch from '../../assets/sounds/pen-scratch.mp3';
import bell from '../../assets/sounds/bell.mp3';
// import pageTurn1 from '../../assets/sounds/page-turn.mp3';
// import pageTurn2 from '../../assets/sounds/page-turn-2.mp3';
// import pageTurn3 from '../../assets/sounds/page-turn-3.mp3';


function playSoundFactory(state: State) {
  return async (...urls: string[]) => {
    const url = urls[Math.floor(Math.random() * urls.length)];
    const audio = new Audio(url);
    audio.volume = state.settings.soundVolume;
    await event(audio, 'canplay');
    await audio.play();
    await delay(audio.duration * 1000);
  }
}

export async function appSoundEffects(action: AnyAction, state: State) {
  if (!state.settings.shouldPlaySounds) return;

  const playSound = playSoundFactory(state);
  const playCoins = () => playSound(coinClink, coinClink2);
  const { constellation } = state;

  if (actions.constellation.toggleChartProgress.match(action) && constellation.chartProgress.includes(action.payload)) {
    await playSound(penScratch);
  }
  if (actions.constellation.toggleChartEvent.match(action) && constellation.chartEvents.includes(action.payload)) {
    await playSound(penScratch);
    await playCoins();
  }
  if (actions.constellation.toggleEvent.match(action)) {
    await playSound(penScratch);
    await (constellation.events[action.payload] ? playSound(coinUse) : playCoins());
  }

  if (actions.dice.increment.match(action)) {
    await playCoins();
  }
  if (actions.dice.decrement.match(action)) {
    await playSound(coinUse);
  }

  if (actions.skills.update.match(action)) {
    await playSound(penScratch);
  }

  // Import
  if (action.type === 'persist/REHYDRATE' && action.import) {
    await playSound(bell);
  }
};
