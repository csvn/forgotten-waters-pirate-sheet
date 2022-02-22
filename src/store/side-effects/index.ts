import { AnyAction, Dispatch, Middleware, MiddlewareAPI } from '@reduxjs/toolkit';
import { State } from '../../state';
import { fetchPirates } from '../../state/data';
import { delay } from '../../util';
import { importExport } from './import-export';
import { appSoundEffects } from './play-sounds';
import { updateThemeFactory } from './theme';


type PotentialPromise<T> = T | Promise<T>;
type EffectCallback = (action: AnyAction, state: State) => PotentialPromise<AnyAction | undefined | void>;

export const sideEffectsMiddleware: Middleware = store => {
  const updateTheme = updateThemeFactory();
  runInitialSideEffects(store);

  return next => (action: AnyAction) => {
    const res = next(action);
    runSideEffects(store, res, store.getState());
    updateTheme(store.getState());
    return res;
  };
}


async function runInitialSideEffects(store: MiddlewareAPI<Dispatch<AnyAction>, any>) {
  const initializers = [fetchPirates];
  await delay(1);
  initializers.forEach(fn => store.dispatch(fn() as any));
}

async function runSideEffects(store: MiddlewareAPI<Dispatch<AnyAction>, any>, action: AnyAction, state: State) {
  const potentialActions = [appSoundEffects, importExport]
    .map((fn: EffectCallback) => fn(action, state));

  for (const a of await Promise.all(potentialActions)) {
    if (typeof a !== 'undefined') {
      store.dispatch(a);
    }
  }
}
