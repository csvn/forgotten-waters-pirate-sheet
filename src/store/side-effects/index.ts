import { AnyAction, AsyncThunkAction, Middleware } from '@reduxjs/toolkit';
import { appSoundEffects } from './play-sounds';


export const sideEffectsMiddleware: Middleware = _store => next => (action: AnyAction) => {
  console.log('action', typeof action);
  appSoundEffects(action);
  const res = next(action);
  console.log('res', res);
  return res;
};
