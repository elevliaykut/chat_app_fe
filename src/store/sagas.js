import { all } from 'redux-saga/effects';

import userSaga from './user/saga';

export default function* sagas() {
	yield all([
		userSaga(),
	]);
}

// NOTE: WORK IN PROGRESS
