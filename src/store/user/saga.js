import { takeLatest, call, put, all } from 'redux-saga/effects';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { BASE_URL } from '../../utils/urls';
import {
	USER_LOGIN_STARTED,
} from './types';
import {
	loginUserSuccess,
	loginUserError
} from './actions';

const cookies = new Cookies();

function* loginUserTask(action) {
	const { payload } = action;
	const { email, password } = payload;
	try {
		const response = yield call(axios.post, `${BASE_URL}/admin/login`, {
			email,
			password,
		});
		const { data } = response;
		yield put(loginUserSuccess(data));
		cookies.set('chatAppToken', data?.data?.token, {
			path: '/',
		});
		cookies.set('userName', data?.data?.name);
		cookies.set('userSurname', data?.data?.surname);
	} catch (error) {
		yield put(loginUserError(error?.response?.data));
		console.log(error?.response);
	}
}

// -------- WATCH FUNCTIONS ---------

function* watchLoginUser() {
	yield takeLatest(USER_LOGIN_STARTED, loginUserTask);
}

export default function* saga() {
	yield all([
		watchLoginUser()
	]);
}
