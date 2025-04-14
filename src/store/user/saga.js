import { takeLatest, call, put, all } from 'redux-saga/effects';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { BASE_URL } from '../../utils/urls';
import {
	USER_LOGIN_STARTED,
	USER_REGISTER_STARTED
} from './types';
import {
	loginUserSuccess,
	loginUserError,
	userRegisterSuccess,
	userRegisterError
} from './actions';

const cookies = new Cookies();

function* loginUserTask(action) {
	const { payload } = action;
	const { username, password } = payload;
	try {
		const response = yield call(axios.post, `${BASE_URL}/user/login`, {
			username: username,
			password: password,
		});
		const { data } = response;
		yield put(loginUserSuccess(data));
		cookies.set('chatAppToken', data?.token, {
			path: '/',
		});
		cookies.set('userName', data?.data?.name);
		cookies.set('userSurname', data?.data?.surname);
		window.location = '/home';
	} catch (error) {
		yield put(loginUserError(error?.response?.data));
		console.log(error?.response);
	}
}

function* userRegisterTask(action) {
	const { payload } = action;
	const { formData } = payload;
	try {
		const response = yield call(axios.post, `${BASE_URL}/user/register`,
			formData
		);
		const { data } = response;
		yield put(userRegisterSuccess(data));
	} catch (error) {
		yield put(userRegisterError(error?.response?.data));
		console.log(error?.response);
	}
}

// -------- WATCH FUNCTIONS ---------

function* watchLoginUser() {
	yield takeLatest(USER_LOGIN_STARTED, loginUserTask);
}

function* watchRegisterUser() {
	yield takeLatest(USER_REGISTER_STARTED, userRegisterTask);
}

export default function* saga() {
	yield all([
		watchLoginUser(),
		watchRegisterUser()
	]);
}
