import { takeLatest, call, put, all } from 'redux-saga/effects';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { BASE_URL } from '../../utils/urls';

import {
    GET_NOTIFICATIONS_STARTED,
	READ_NOTIFICATION_STARTED,
	GET_ALL_NOTIFICATION_STARTED,
	DELETE_NOTIFICATION_STARTED,
	GET_MESSAGE_LOGS_STARTED,
	GET_OUTGOING_MESSAGE_LOGS_STARTED,
	GET_MESSAGES_STARTED
} from './types';

import {
    getNotificationsSuccess,
    getNotificationsError,
	readNotificationSuccess,
	readNotificationError,
	getAllNotificationSuccess,
	getAllNotificationError,
	deleteNotificationSuccess,
	deleteNotificationError,
	getMessageLogsSuccess,
	getMessageLogsError,
	getOutGoingMessageLogsSuccess,
	getOutGoingMessageLogsError,
	getMessagesSuccess,
	getMessagesError
} from './actions';

const cookies = new Cookies();

function* getNotificationsTask(action) {
	const { payload = {} } = action;
	const token = cookies.get('chatAppToken');

	const filterQuery = payload.read !== undefined
		? `?filter[is_that_read]=${payload.read}`
		: '';

	try {
		const response = yield call(axios.get, `${BASE_URL}/notification${filterQuery}`,
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

function* readNotificationTask(action) {
	const { payload } = action;
	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.post, `${BASE_URL}/notification/read-all`,
			{},
			{
				headers: { Authorization: `Bearer ${token}` },
			}
		);
		const { data } = response;
		yield put(readNotificationSuccess(data));
	} catch (error) {
		yield put(readNotificationError(error?.response?.data));
		console.log(error?.response);
	}
}

function* getAllNotificationTask(action) {
	const { payload } = action;
	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.get, `${BASE_URL}/notification`,
			{
				headers: { Authorization: `Bearer ${token}` },
			}
		);
		const { data } = response;
		yield put(getAllNotificationSuccess(data));
	} catch (error) {
		yield put(getAllNotificationError(error?.response?.data));
		console.log(error?.response);
	}
}

function* deleteNotificationTask(action) {
	const { payload = {} } = action;
	const { id } = payload;

	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.delete, `${BASE_URL}/notification/${id}`,
			{
				headers: { Authorization: `Bearer ${token}` },
			}
		);
		const { data } = response;
		yield put(deleteNotificationSuccess(data));
	} catch (error) {
		yield put(deleteNotificationError(error?.response?.data));
		console.log(error?.response);
	}
}

function* getMessageLogsTask(action) {
	const { payload = {} } = action;
	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.get, `${BASE_URL}/user/incoming-message-logs`,
			{
				headers: { Authorization: `Bearer ${token}` },
			}
		);
		const { data } = response;
		yield put(getMessageLogsSuccess(data));
	} catch (error) {
		yield put(getMessageLogsError(error?.response?.data));
		console.log(error?.response);
	}
}

function* getOutGoingMessageLogsTask(action) {
	const { payload = {} } = action;
	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.get, `${BASE_URL}/user/outgoing-message-logs`,
			{
				headers: { Authorization: `Bearer ${token}` },
			}
		);
		const { data } = response;
		yield put(getOutGoingMessageLogsSuccess(data));
	} catch (error) {
		yield put(getOutGoingMessageLogsError(error?.response?.data));
		console.log(error?.response);
	}
}

function* getMessagesTask(action) {
	const { payload = {} } = action;
	const { userId } = payload;

	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.get, `${BASE_URL}/user/messages/${userId}`,
			{
				headers: { Authorization: `Bearer ${token}` },
			}
		);
		const { data } = response;
		yield put(getMessagesSuccess(data));
	} catch (error) {
		yield put(getMessagesError(error?.response?.data));
		console.log(error?.response);
	}
}

// -------- WATCH FUNCTIONS ---------

function* watchGetNotifications() {
	yield takeLatest(GET_NOTIFICATIONS_STARTED, getNotificationsTask);
}

function* watchReadNotification() {
	yield takeLatest(READ_NOTIFICATION_STARTED, readNotificationTask);
}

function* watchGetAllNotification() {
	yield takeLatest(GET_ALL_NOTIFICATION_STARTED, getAllNotificationTask);
}

function* watchDeleteNotification() {
	yield takeLatest(DELETE_NOTIFICATION_STARTED, deleteNotificationTask);
}

function* watchGetMessageLogs() {
	yield takeLatest(GET_MESSAGE_LOGS_STARTED, getMessageLogsTask);
}

function* watchGetOutGoingMessageLogs() {
	yield takeLatest(GET_OUTGOING_MESSAGE_LOGS_STARTED, getOutGoingMessageLogsTask);
}

function* watchGetMessages() {
	yield takeLatest(GET_MESSAGES_STARTED, getMessagesTask);
}

export default function* saga() {
    yield all([
        watchGetNotifications(),
		watchReadNotification(),
		watchGetAllNotification(),
		watchDeleteNotification(),
		watchGetMessageLogs(),
		watchGetOutGoingMessageLogs(),
		watchGetMessages()
    ]);
}
