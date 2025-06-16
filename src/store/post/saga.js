import { takeLatest, call, put, all } from 'redux-saga/effects';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { BASE_URL } from '../../utils/urls';

import { 
    POST_ACTIVITY_LIKE_STARTED,
	POST_ACTIVITY_FAVORITE_STARTED,
	POST_ACTIVITY_SMILED_STARTED
} from './types';

import {
    postActivityLikeSuccess,
    postActivityLikeError,
	postActivityFavoriteSuccess,
	postActivityFavoriteError,
	postActivitySmiledSuccess,
	postActivitySmiledError
} from './actions';

const cookies = new Cookies();


function* postActivityLikeTask(action) {
	const { payload } = action;
	const { postId, status } = payload;
	const token = cookies.get('chatAppToken');
    
	try {
		const response = yield call(axios.post, `${BASE_URL}/user/post/like/${postId}`, 
        {
			status: status
		},
        {
            headers: { Authorization: `Bearer ${token}` },
        });
		const { data } = response;
		yield put(postActivityLikeSuccess(data));
	} catch (error) {
		yield put(postActivityLikeError(error?.response?.data));
		console.log(error?.response);
	}
}

function* postActivityFavoriteTask(action) {
	const { payload } = action;
	const { postId, status } = payload;
	const token = cookies.get('chatAppToken');
    
	try {
		const response = yield call(axios.post, `${BASE_URL}/user/post/favorite/${postId}`, 
        {
			status: status
		},
        {
            headers: { Authorization: `Bearer ${token}` },
        });
		const { data } = response;
		yield put(postActivityFavoriteSuccess(data));
	} catch (error) {
		yield put(postActivityFavoriteError(error?.response?.data));
		console.log(error?.response);
	}
}

function* postActivitySmiledTask(action) {
	const { payload } = action;
	const { postId, status } = payload;
	const token = cookies.get('chatAppToken');
    
	try {
		const response = yield call(axios.post, `${BASE_URL}/user/post/smile/${postId}`, 
        {
			status
		},
        {
            headers: { Authorization: `Bearer ${token}` },
        });
		const { data } = response;
		yield put(postActivitySmiledSuccess(data));
	} catch (error) {
		yield put(postActivitySmiledError(error?.response?.data));
		console.log(error?.response);
	}
}


// -------- WATCH FUNCTIONS ---------

function* watchPostActivityLike() {
	yield takeLatest(POST_ACTIVITY_LIKE_STARTED, postActivityLikeTask);
}

function* watchPostActivityFavorite() {
	yield takeLatest(POST_ACTIVITY_FAVORITE_STARTED, postActivityFavoriteTask);
}

function* watchPostActivitySmile() {
	yield takeLatest(POST_ACTIVITY_SMILED_STARTED, postActivitySmiledTask);
}

export default function* saga() {
	yield all([
        watchPostActivityLike(),
		watchPostActivityFavorite(),
		watchPostActivitySmile()
	]);
}