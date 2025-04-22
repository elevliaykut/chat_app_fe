"use client";
import { all } from 'redux-saga/effects';
import userSaga from './user/saga';
import definitionSaga from './definitions/saga';
import postSaga from './post/saga';

export default function* sagas() {
	yield all([
		userSaga(),
		definitionSaga(),
		postSaga()
	]);
}
// NOTE: WORK IN PROGRESS