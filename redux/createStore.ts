import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from './reducers';

const store = createStore(rootReducer);

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const initStore = () => {
  //storage.removeItem('persist:root');
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return { store, persistor };
};
