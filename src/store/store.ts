import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { IDBStorage } from './storage';
import { rootReducer } from '../state';
import { fetchPirates } from '../state/ui';


export const store = configureStore({
  reducer: persistReducer({
    key: 'root',
    storage: new IDBStorage()
  }, rootReducer),
  devTools: true
});
// export const persistor = persistStore(store);

store.dispatch(fetchPirates());
