"use client";
import { all } from 'redux-saga/effects';
import userSaga from './user/saga';
import definitionSaga from './definitions/saga';
import postSaga from './post/saga';
import memberSaga from './member/saga';
import notificationsSaga from './notifications/saga';

export default function* sagas() {
	yield all([
		userSaga(),
		definitionSaga(),
		postSaga(),
		memberSaga(),
		notificationsSaga()
	]);
}
// NOTE: WORK IN PROGRESS