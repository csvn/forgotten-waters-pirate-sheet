import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { IDBStorage } from './storage';
import { rootReducer } from '../state';
import { fetchPirates } from '../state/ui';
import { sideEffectsMiddleware } from './side-effects';


export const store = configureStore({
  reducer: persistReducer({
    key: 'root',
    blacklist: ['ui'],
    storage: new IDBStorage()
  }, rootReducer),
  devTools: true,
  middleware: defaultMiddleware => [...defaultMiddleware({
    serializableCheck: {
      ignoredActions: ['persist/PERSIST']
    }
  }), sideEffectsMiddleware]
});
export const persistor = persistStore(store);

store.dispatch(fetchPirates());
