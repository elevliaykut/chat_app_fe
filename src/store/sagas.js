"use client";
import { all } from 'redux-saga/effects';
import userSaga from './user/saga';
import definitionSaga from './definitions/saga';

export default function* sagas() {
	yield all([
		userSaga(),
		definitionSaga()
	]);
}
// NOTE: WORK IN PROGRESS