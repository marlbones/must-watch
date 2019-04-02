import { createStore } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
// import reduxReset from 'redux-reset';
import storage from 'redux-persist/es/storage';

import deviceReducer from '../reducers/device';

// config for redux-persist. Default storage is AsyncStorage
const config = {
  key: 'root',
  storage,
};

const store = createStore(
  persistCombineReducers(config, {
    user: deviceReducer,
  }),
//   reduxReset()
);

// instance of persisted store
const persistor = persistStore(store);

export { store, persistor };
