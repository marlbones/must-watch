import { createStore } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';

import deviceReducer from '../reducers/device';

// config for redux-persist. Default storage is AsyncStorage
const config = {
  key: 'root',
  storage,
};

const store = createStore(
  persistCombineReducers(config, {
    device: deviceReducer,
  }),
);

// instance of persisted store
const persistor = persistStore(store);

export { store, persistor };
