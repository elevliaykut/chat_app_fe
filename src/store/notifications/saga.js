import { takeLatest, call, put, all } from 'redux-saga/effects';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { BASE_URL } from '../../utils/urls';

import {
    GET_NOTIFICATIONS_STARTED
} from './types';

import {
    getNotificationsSuccess,
    getNotificationsError
} from './actions';

const cookies = new Cookies();

function* getNotificationsTask(action) {
	const { payload } = action;

	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.get, `${BASE_URL}/notification?filter[is_that_read]=false`,
			{
				headers: { Authorization: `Bearer ${token}` },
			}
		);
		const { data } = response;
		yield put(getNotificationsSuccess(data));
	} catch (error) {
		yield put(getNotificationsError(error?.response?.data));
		console.log(error?.response);
	}
}

// -------- WATCH FUNCTIONS ---------

function* watchGetNotifications() {
	yield takeLatest(GET_NOTIFICATIONS_STARTED, getNotificationsTask);
}

export default function* saga() {
    yield all([
        watchGetNotifications()
    ]);
}
