import { createStore } from 'redux';
import rootReducer from './rootReducer';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['cart'],
};

const persistedReducer = persistReducer<any, any>(persistConfig, rootReducer);
const store = createStore(persistedReducer);

const persistor = persistStore(store);
export { store, persistor };
