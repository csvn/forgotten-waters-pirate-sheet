import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { playSoundsMiddleware } from './side-effects/play-sounds';
import { IDBStorage } from './storage';
import { rootReducer } from '../state';
import { fetchPirates } from '../state/ui';


export const store = configureStore({
  reducer: persistReducer({
    key: 'root',
    storage: new IDBStorage()
  }, rootReducer),
  devTools: true,
  middleware: defaultMiddleware => [...defaultMiddleware(), playSoundsMiddleware]
});
// export const persistor = persistStore(store);

store.dispatch(fetchPirates());
