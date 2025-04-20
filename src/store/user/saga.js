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
	UPDATE_USER_PERSONAL_INFO_STARTED,
	GET_USERS_STARTED,
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
	updateUserPersonalInfoError,
	getUsersSuccess,
	getUsersError
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
	const { 
		profileSummary,
		biography,
		horoscope,
		cityId,
		districtId,
		maritalStatus,
		headscarf,
		tall,
		weight,
		eyeColor,
		hairColor,
		skinColor,
		bodyType,
		haveAChild,
		wantAChild,
		useCigarette,
		useAlcohol,
		educationStatus,
		foreignLanguage,
		job,
		salary,
		workStatus,
		liveWith,
		clothingStyle,
		notCompromise,
		community,
		sect,
		doYouPray,
		doYouKnowQuran,
		areYouFasting,
		considerImportantInIslam,
		listeningMusicType,
		readingBookTypes,
		lookingQualities,
		yourHobbies,
		yourPersonality,
		physicalDisability
	} = payload;
	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.put, `${BASE_URL}/user/personal-information`,
			{
				profile_summary: profileSummary,
				biography: biography,
				horoscope: horoscope,
				city_id: cityId,
				district_id: districtId,
				marital_status: maritalStatus,
				headscarf: headscarf,
				tall: tall,
				weight: weight,
				eye_color: eyeColor,
				hair_color: hairColor,
				skin_color: skinColor,
				body_type: bodyType,
				have_a_child: haveAChild,
				want_a_child: wantAChild,
				use_cigarette: useCigarette,
				use_alcohol: useAlcohol,
				education_status: educationStatus,
				foreign_language: foreignLanguage,
				job: job,
				salary: salary,
				work_status: workStatus,
				live_with: liveWith,
				clothing_style: clothingStyle,
				not_compromise: notCompromise,
				community: community,
				sect: sect,
				do_you_pray: doYouPray,
				do_you_know_quran: doYouKnowQuran,
				are_you_fasting: areYouFasting,
				consider_important_in_islam: considerImportantInIslam,
				listening_music_types: listeningMusicType,
				reading_book_types: readingBookTypes,
				looking_qualities: lookingQualities,
				your_hobbies: yourHobbies,
				your_personality: yourPersonality,
				physical_disability: physicalDisability
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

function* getUsersTask(action) {
	const { payload } = action;
	const { id, nearUsers, bornTodayDate, gender, startsBetween } = payload;

	const token = cookies.get('chatAppToken');

	const query = `?filter[id]=${id ? id : ''}
					&filter[near_users]=${nearUsers ? nearUsers : ''}
					&filter[born_today_date]=${bornTodayDate ? bornTodayDate : ''}
					&filter[gender]=${gender ? gender : ''}
					&filter[starts_between]=${startsBetween ? startsBetween : ''}`;
	try {
		const response = yield call(axios.get, `${BASE_URL}/user/activity/filter${query}`,
			{
				headers: { Authorization: `Bearer ${token}` },
			},
			
		);
		const { data } = response;
		yield put(getUsersSuccess(data));
	} catch (error) {
		yield put(getUsersError(error?.response?.data));
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

function* watchGetUsers() {
	yield takeLatest(GET_USERS_STARTED, getUsersTask);
}

export default function* saga() {
	yield all([
		watchLoginUser(),
		watchRegisterUser(),
		watchUserPostList(),
		watchUserCreatePost(),
		watchUserUploadProfilePhoto(),
		watchGetUserMe(),
		watchUpdateUserPersonalInfo(),
		watchGetUsers()
	]);
}
