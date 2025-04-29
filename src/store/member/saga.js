import { takeLatest, call, put, all } from 'redux-saga/effects';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { BASE_URL } from '../../utils/urls';

import {
    GET_MEMBER_DETAILS_STARTED,
	GET_MEMBER_POSTS_STARTED
} from './types';

import {
    getMemberDetailsSuccess,
    getMemberDetailsError,
	getMemberPostsSuccess,
	getMemberPostsError
} from './actions';

const cookies = new Cookies();


function* getMemberDetailTask(action) {
	const { payload } = action;
    const { memberId } = payload;

	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.get, `${BASE_URL}/member/detail/${memberId}`,
			{
				headers: { Authorization: `Bearer ${token}` },
			}
		);
		const { data } = response;
		yield put(getMemberDetailsSuccess(data));
	} catch (error) {
		yield put(getMemberDetailsError(error?.response?.data));
		console.log(error?.response);
	}
}

function* getMemberPostsTask(action) {
	const { payload } = action;
    const { memberId } = payload;

	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.get, `${BASE_URL}/member/posts/${memberId}`,
			{
				headers: { Authorization: `Bearer ${token}` },
			}
		);
		const { data } = response;
		yield put(getMemberPostsSuccess(data));
	} catch (error) {
		yield put(getMemberPostsError(error?.response?.data));
		console.log(error?.response);
	}
}

function* watchGetMemberDetail() {
	yield takeLatest(GET_MEMBER_DETAILS_STARTED, getMemberDetailTask);
}

function* watchGetMemberPosts() {
	yield takeLatest(GET_MEMBER_POSTS_STARTED, getMemberPostsTask);
}

export default function* saga() {
	yield all([
		watchGetMemberDetail(),
		watchGetMemberPosts()
	]);
}