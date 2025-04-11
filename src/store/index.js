import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import reducers from './reducers.js';
import sagas from './sagas.js';

const persistConfig = {
	key: 'root',
	storage,
};

const persistedReducers = persistReducer(persistConfig, reducers);

const bindMiddleware = middleware => {
	if (process.env.NODE_ENV !== 'production') {
		return composeWithDevTools(applyMiddleware(...middleware));
	}
	return applyMiddleware(...middleware);
};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistedReducers, bindMiddleware([sagaMiddleware]));
export const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export default store;
