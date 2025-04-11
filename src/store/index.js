"use client";
import { persistReducer, persistStore } from 'redux-persist';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware, { Task } from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import createRootReducer from './reducers';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import rootSagas from './sagas';

const createNoopStorage = () => {
  return {
    getItem(_key) {
		return Promise.resolve(null);
	  },
	  setItem(_key, value) {
		return Promise.resolve();
	  },
	  removeItem(_key) {
		return Promise.resolve();
	  },
	  
  };
};

const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, createRootReducer);

const bindMiddleware = middleware => {
	if (process.env.NODE_ENV !== 'production') {
		return composeWithDevTools(applyMiddleware(...middleware));
	}
	return applyMiddleware(...middleware);
};

const sagaMiddleware = createSagaMiddleware();
const store = createStore(persistedReducer, bindMiddleware([sagaMiddleware]));
export const persistor = persistStore(store);

sagaMiddleware.run(rootSagas);

export default store;