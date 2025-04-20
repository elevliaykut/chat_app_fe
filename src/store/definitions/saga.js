import { takeLatest, call, put, all, take } from 'redux-saga/effects';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { BASE_URL } from '../../utils/urls';
import {
	getCitiesSuccess,
	getCitiesError,
	getDistrictsSuccess,
	getDistrictsError,
} from './actions';
import {
	GET_CITIES_STARTED,
	GET_DISTRICTS_STARTED
} from './types';

const cookies = new Cookies();

/**
 * 
 * @param {*} action 
 */
function* getCitiesTask(action) {
	const { payload = {} } = action;
	try {
		const response = yield call(axios.get, `${BASE_URL}/cities`);
		const { data } = response;
		yield put(getCitiesSuccess(data));
	} catch (e) {
		yield put(getCitiesError(e?.response?.data));
		console.log(e?.response);
	}
}

/**
 * 
 * @param {*} action 
 */
function* getDistrictsTask(action) {
	const { payload = {} } = action;
	const { cityId } = payload;

	try {
		const response = yield call(
			axios.get,
			`${BASE_URL}/districts/${cityId}`
		);
		const { data } = response;
		yield put(getDistrictsSuccess(data));
	} catch (e) {
		yield put(getDistrictsError(e?.response?.data));
		console.log(e?.response);
	}
}

// ---- Watch Functions -------- //

function* watchGetCities() {
	yield takeLatest(GET_CITIES_STARTED, getCitiesTask);
}

function* watchGetDistricts() {
	yield takeLatest(GET_DISTRICTS_STARTED, getDistrictsTask);
}

export default function* saga() {
	yield all([
		watchGetCities(),
		watchGetDistricts()
	]);
}
