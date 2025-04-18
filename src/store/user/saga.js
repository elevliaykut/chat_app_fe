import { takeLatest, call, put, all } from 'redux-saga/effects';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { BASE_URL } from '../../utils/urls';
import {
	USER_LOGIN_STARTED,
	USER_REGISTER_STARTED,
	USER_POST_LIST_STARTED,
	USER_CREATE_POST_STARTED,
	USER_UPLOAD_PROFILE_PHOTO_STARTED,
	GET_USER_ME_STARTED,
	UPDATE_USER_PERSONAL_INFO_STARTED
} from './types';
import {
	loginUserSuccess,
	loginUserError,
	userRegisterSuccess,
	userRegisterError,
	userPostListSuccess,
	userPostListError,
	userCreatePostSuccess,
	userCreatePostError,
	userUploadProfilePhotoSuccess,
	userUploadProfilePhotoError,
	getUserMeSuccess,
	getUserMeError,
	updateUserPersonalInfoSuccess,
	updateUserPersonalInfoError
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

function* userPostListTask(action) {
	const { payload } = action;
	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.get, `${BASE_URL}/user/post`,
			{
				headers: { Authorization: `Bearer ${token}` },
			}
		);
		const { data } = response;
		yield put(userPostListSuccess(data));
	} catch (error) {
		yield put(userPostListError(error?.response?.data));
		console.log(error?.response);
	}
}

function* userCreatePostTask(action) {
	const { payload } = action;
	const { formData } = payload;
	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.post, `${BASE_URL}/user/post`,
			formData,
			{
				headers: { Authorization: `Bearer ${token}` },
			},
			
		);
		const { data } = response;
		yield put(userCreatePostSuccess(data));
	} catch (error) {
		yield put(userCreatePostError(error?.response?.data));
		console.log(error?.response);
	}
}

function* userUploadProfilePhotoTask(action) {
	const { payload } = action;
	const { formData } = payload;
	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.post, `${BASE_URL}/user/upload-profile-photo`,
			formData,
			{
				headers: { Authorization: `Bearer ${token}` },
			},
			
		);
		const { data } = response;
		yield put(userUploadProfilePhotoSuccess(data));
	} catch (error) {
		yield put(userUploadProfilePhotoError(error?.response?.data));
		console.log(error?.response);
	}
}

function* getUserMeTask(action) {
	const { payload } = action;
	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.get, `${BASE_URL}/user/me`,
			{
				headers: { Authorization: `Bearer ${token}` },
			},
			
		);
		const { data } = response;
		yield put(getUserMeSuccess(data));
	} catch (error) {
		yield put(getUserMeError(error?.response?.data));
		console.log(error?.response);
	}
}

function* updateUserPersonalInfoTask(action) {
	const { payload } = action;
	const { profileSummary } = payload;
	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.put, `${BASE_URL}/user/personal-information`,
			{
				profile_summary: profileSummary
			},	
			{
				headers: { Authorization: `Bearer ${token}` },
			},
			
		);
		const { data } = response;
		yield put(updateUserPersonalInfoSuccess(data));
	} catch (error) {
		yield put(updateUserPersonalInfoError(error?.response?.data));
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

function* watchUserPostList() {
	yield takeLatest(USER_POST_LIST_STARTED, userPostListTask);
}

function* watchUserCreatePost() {
	yield takeLatest(USER_CREATE_POST_STARTED, userCreatePostTask);
}

function* watchUserUploadProfilePhoto() {
	yield takeLatest(USER_UPLOAD_PROFILE_PHOTO_STARTED, userUploadProfilePhotoTask);
}

function* watchGetUserMe() {
	yield takeLatest(GET_USER_ME_STARTED, getUserMeTask);
}

function* watchUpdateUserPersonalInfo() {
	yield takeLatest(UPDATE_USER_PERSONAL_INFO_STARTED, updateUserPersonalInfoTask);
}

export default function* saga() {
	yield all([
		watchLoginUser(),
		watchRegisterUser(),
		watchUserPostList(),
		watchUserCreatePost(),
		watchUserUploadProfilePhoto(),
		watchGetUserMe(),
		watchUpdateUserPersonalInfo()
	]);
}
