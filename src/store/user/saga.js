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
	GET_MY_FAVORITE_USERS_STARTED,
	GET_MY_SMILED_PROFILES_STARTED,
	GET_MY_LIKED_PROFILES_STARTED,
	GET_MY_BLOCKED_PROFILES_STARTED,
	GET_ONLINE_PROFILES_STARTED,
	USER_ACTIVITY_LIKED_STARTED,
	USER_ACTIVITY_FAVORITE_STARTED,
	USER_ACTIVITY_SMILED_STARTED,
	USER_BLOCKED_STARTED,
	USER_REPORTS_STARTED,
	USER_UPDATE_SPOUSE_CANDIDATE_STARTED,
	USER_UPDATE_CARACTERISTIC_FEATURE_STARTED,
	GET_MY_POSTS_STARTED,
	CREATE_USER_PROFILE_VISIT_LOG_STARTED,
	GET_USER_PROFILE_VISIT_STARTED,
	GET_USER_MATCH_STARTED,
	GET_MATCH_PREVIUS_USER_STARTED,
	USER_LOGOUT_STARTED
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
	getUsersError,
	getMyFavoriteUsersSuccess,
	getMyFavoriteUsersError,
	getMySmiledProfilesSuccess,
	getMySmiledProfilesError,
	getMyLikedProfilesSuccess,
	getMyLikedProfilesError,
	getMyBlockedProfilesSuccess,
	getMyBlockedProfilesError,
	getOnlineProfilesSuccess,
	getOnlineProfilesError,
	userActivityLikedSuccess,
	userActivityLikedError,
	userActivityFavoriteSuccess,
	userActivityFavoriteError,
	userActivitySmiledSuccess,
	userActivitySmiledError,
	userBlockedSuccess,
	userBlockedError,
	userReportsSuccess,
	userReportsError,
	userUpdateSpouseCandidateSuccess,
	userUpdateSpouseCandidateError,
	userUpdateCaracteristicFeatureSuccess,
	userUpdateCaracteristicFeatureError,
	getMyPostsSuccess,
	getMyPostsError,
	createUserProfileVisitLogSuccess,
	createUserProfileVisitLogError,
	getUserProfileVisitSuccess,
	getUserProfileVisitError,
	getUserMatchSuccess,
	getUserMatchError,
	getMatchPreviusUserSuccess,
	getMatchPreviusUserError,
	userLogoutSuccess
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
		cookies.set('chatAppToken', data?.token);
		window.location = '/home';
		
		cookies.set('userName', data?.data?.name);
		cookies.set('userSurname', data?.data?.surname);

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
	const { payload = {} } = action;
	const { 
		id, 
		creatorUserId,
		status,
		nearUsers, 
		bornTodayDate, 
		gender, 
		startsBetween, 
		username,
		minAgeRange,
		maxAgeRange,
		minTall,
		maxTall,
		minWeight,
		maxWeight,
		cityId,
		job,
		maritalStatus,
		headCraft,
		haveAChild,
		useCigarette,
		useAlcohol,
		education,
		salary,
		physical,
		hasPhotos
	} = payload;

	const token = cookies.get('chatAppToken');

	const query = `?filter[id]=${id ? id : ''}
					&filter[creator_user_id]=${creatorUserId ? creatorUserId : ''}
					&filter[status]=${status ? status : ''}
					&filter[near_users]=${nearUsers ? nearUsers : ''}
					&filter[born_today_date]=${bornTodayDate ? bornTodayDate : ''}
					&filter[gender]=${gender ? gender : ''}
					&filter[starts_between]=${startsBetween ? startsBetween : ''}
					
					&filter[username]=${username ? username : ''}
					&filter[min_age_range]=${minAgeRange ? minAgeRange : ''}
					&filter[max_age_range]=${maxAgeRange ? maxAgeRange : ''}
					&filter[min_tall]=${minTall ? minTall : ''}
					&filter[max_tall]=${maxTall ? maxTall : ''}
					&filter[min_weight]=${minWeight ? minWeight : ''}
					&filter[max_weight]=${maxWeight ? maxWeight : ''}
					&filter[city_id]=${cityId ? cityId : ''}
					&filter[job]=${job ? job : ''}
					&filter[marital_status]=${maritalStatus ? maritalStatus : ''}
					&filter[head_craft]=${headCraft ? headCraft : ''}
					&filter[have_a_child]=${haveAChild ? haveAChild : ''}
					&filter[use_cigarette]=${useCigarette ? useCigarette : ''}
					&filter[use_alcohol]=${useAlcohol ? useAlcohol : ''}
					&filter[education]=${education ? education : ''}
					&filter[salary]=${salary ? salary : ''}
					&filter[has_photos]=${hasPhotos ? hasPhotos : ''}
					&filter[physical]=${physical ? physical : ''}`;
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

function* getMyFavoriteUsersTask(action) {
	const { payload } = action;
	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.get, `${BASE_URL}/user/activity/favorite-profiles`,
			{
				headers: { Authorization: `Bearer ${token}` },
			},
			
		);
		const { data } = response;
		yield put(getMyFavoriteUsersSuccess(data));
	} catch (error) {
		yield put(getMyFavoriteUsersError(error?.response?.data));
		console.log(error?.response);
	}
}

function* getMySmiledProfilesTask(action) {
	const { payload } = action;
	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.get, `${BASE_URL}/user/activity/similed-profiles`,
			{
				headers: { Authorization: `Bearer ${token}` },
			},
			
		);
		const { data } = response;
		yield put(getMySmiledProfilesSuccess(data));
	} catch (error) {
		yield put(getMySmiledProfilesError(error?.response?.data));
		console.log(error?.response);
	}
}

function* getMyLikedProfilesTask(action) {
	const { payload } = action;
	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.get, `${BASE_URL}/user/activity/liked-profiles`,
			{
				headers: { Authorization: `Bearer ${token}` },
			},
			
		);
		const { data } = response;
		yield put(getMyLikedProfilesSuccess(data));
	} catch (error) {
		yield put(getMyLikedProfilesError(error?.response?.data));
		console.log(error?.response);
	}
}

function* getMyBlockedProfilesTask(action) {
	const { payload } = action;
	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.get, `${BASE_URL}/user/my-blocked-users`,
			{
				headers: { Authorization: `Bearer ${token}` },
			},
			
		);
		const { data } = response;
		yield put(getMyBlockedProfilesSuccess(data));
	} catch (error) {
		yield put(getMyBlockedProfilesError(error?.response?.data));
		console.log(error?.response);
	}
}

function* getOnlineProfilesTask(action) {
	const { payload } = action;
	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.get, `${BASE_URL}/user/activity/online-users`,
			{
				headers: { Authorization: `Bearer ${token}` },
			},
			
		);
		const { data } = response;
		yield put(getOnlineProfilesSuccess(data));
	} catch (error) {
		yield put(getOnlineProfilesError(error?.response?.data));
		console.log(error?.response);
	}
}

function* userActivityLikedTask(action) {
	const { payload } = action;
	const { userId } = payload;

	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.post, `${BASE_URL}/user/activity/like/${userId}`,
			{},
			{
				headers: { Authorization: `Bearer ${token}` },
			},
			
		);
		const { data } = response;
		yield put(userActivityLikedSuccess(data));
	} catch (error) {
		yield put(userActivityLikedError(error?.response?.data));
		console.log(error?.response);
	}
}

function* userActivityFavoriteTask(action) {
	const { payload } = action;
	const { userId } = payload;

	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.post, `${BASE_URL}/user/activity/favorite/${userId}`,
			{},
			{
				headers: { Authorization: `Bearer ${token}` },
			},
			
		);
		const { data } = response;
		yield put(userActivityFavoriteSuccess(data));
	} catch (error) {
		yield put(userActivityFavoriteError(error?.response?.data));
		console.log(error?.response);
	}
}

function* userActivitySmiledTask(action) {
	const { payload } = action;
	const { userId } = payload;

	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.post, `${BASE_URL}/user/activity/smile/${userId}`,
			{},
			{
				headers: { Authorization: `Bearer ${token}` },
			},
			
		);
		const { data } = response;
		yield put(userActivitySmiledSuccess(data));
	} catch (error) {
		yield put(userActivitySmiledError(error?.response?.data));
		console.log(error?.response);
	}
}

function* userBlockedTask(action) {
	const { payload } = action;
	const { userId } = payload;
	
	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.post, `${BASE_URL}/user/blocked/${userId}`,
			{},
			{
				headers: { Authorization: `Bearer ${token}` },
			},
			
		);
		const { data } = response;
		yield put(userBlockedSuccess(data));
	} catch (error) {
		yield put(userBlockedError(error?.response?.data));
		console.log(error?.response);
	}
}

function* userReportsTask(action) {
	const { payload } = action;
	const { description, type, userId } = payload;

	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.post, `${BASE_URL}/user/report/${userId}`,
			{
				description: description,
				type: type
			},
			{
				headers: { Authorization: `Bearer ${token}` },
			},
		);
		const { data } = response;
		yield put(userReportsSuccess(data));
	} catch (error) {
		yield put(userReportsError(error?.response?.data));
		console.log(error?.response);
	}
}

function* userUpdateSpouseCanidateTask(action) {
	const { payload } = action;
	const { 
		ageRange,
		maritalStatus,
		haveAChild,
		useCigarette,
		useAlcohol,
		educationStatus,
		salary,
		notCompromise,
		community,
		sect,
		doYouPray,
		physicalDisability,
		about,
		tall,
		weight,
		eyeColor,
		hairColor,
		skinColor,
		bodyType,
		wantAChild,
		lookingQualities
	} = payload;
	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.put, `${BASE_URL}/user/spouse-candidate`,
			{
				age_range: ageRange,
				marital_status: maritalStatus,
				have_a_child: haveAChild,
				use_cigarette: useCigarette,
				use_alcohol: useAlcohol,
				education_status: educationStatus,
				salary: salary,
				not_compromise: notCompromise,
				community: community,
				sect: sect,
				do_you_pray: doYouPray,
				physical_disability: physicalDisability,
				about: about,
				tall: tall,
				weight: weight,
				eye_color: eyeColor,
				hair_color: hairColor,
				skin_color: skinColor,
				body_type: bodyType,
				want_a_child: wantAChild,
				looking_qualities: lookingQualities,
			},	
			{
				headers: { Authorization: `Bearer ${token}` },
			},
			
		);
		const { data } = response;
		yield put(userUpdateSpouseCandidateSuccess(data));
	} catch (error) {
		yield put(userUpdateSpouseCandidateError(error?.response?.data));
		console.log(error?.response);
	}
}

function* userUpdateCaracteristicFeatureTask(action) {
	const { payload } = action;
	const { 
		questionOne,
		questionTwo,
		questionThree,
		questionFour,
		questionFive,
		questionSix,
		questionSeven,
		questionEight,
		questionNine,
		questionTen,
		questionEleven,
	} = payload;
	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.put, `${BASE_URL}/user/caracteristic-feature`,
			{
				question_one: questionOne,
				question_two: questionTwo,
				question_three: questionThree,
				question_four: questionFour,
				question_five: questionFive,
				question_six: questionSix,
				question_seven: questionSeven,
				question_eight: questionEight,
				question_nine: questionNine,
				question_ten: questionTen,
				question_eleven: questionEleven,
			},	
			{
				headers: { Authorization: `Bearer ${token}` },
			},
			
		);
		const { data } = response;
		yield put(userUpdateCaracteristicFeatureSuccess(data));
	} catch (error) {
		yield put(userUpdateCaracteristicFeatureError(error?.response?.data));
		console.log(error?.response);
	}
}

function* getMyPostsTask(action) {
	const { payload } = action;
	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.get, `${BASE_URL}/user/my-posts`,
			{
				headers: { Authorization: `Bearer ${token}` },
			},
		);
		const { data } = response;
		yield put(getMyPostsSuccess(data));
	} catch (error) {
		yield put(getMyPostsError(error?.response?.data));
		console.log(error?.response);
	}
}

function* createUserProfileVisitLogTask(action) {
	const { payload } = action;
	const { userId } = payload;

	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.post, `${BASE_URL}/user/profile/visit/${userId}`,
			{},
			{
				headers: { Authorization: `Bearer ${token}` },
			},
		);
		const { data } = response;
		yield put(createUserProfileVisitLogSuccess(data));
	} catch (error) {
		yield put(createUserProfileVisitLogError(error?.response?.data));
		console.log(error?.response);
	}
}

function* getUserProfileVisitTask(action) {
	const { payload } = action;
	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.get, `${BASE_URL}/user/profile/visit`,
			{
				headers: { Authorization: `Bearer ${token}` },
			},
		);
		const { data } = response;
		yield put(getUserProfileVisitSuccess(data));
	} catch (error) {
		yield put(getUserProfileVisitError(error?.response?.data));
		console.log(error?.response);
	}
}

function* getUserMatchTask(action) {
	const { payload = {} } = action;
	const { 
		id, 
		creatorUserId,
		status,
		nearUsers, 
		bornTodayDate, 
		gender, 
		startsBetween, 
		username,
		minAgeRange,
		maxAgeRange,
		minTall,
		maxTall,
		minWeight,
		maxWeight,
		cityId,
		job,
		maritalStatus,
		headCraft,
		haveAChild,
		useCigarette,
		useAlcohol,
		education,
		salary,
		physical,
		hasPhotos
	} = payload;

	const token = cookies.get('chatAppToken');

	const query = `?filter[id]=${id ? id : ''}
					&filter[creator_user_id]=${creatorUserId ? creatorUserId : ''}
					&filter[status]=${status ? status : ''}
					&filter[near_users]=${nearUsers ? nearUsers : ''}
					&filter[born_today_date]=${bornTodayDate ? bornTodayDate : ''}
					&filter[gender]=${gender ? gender : ''}
					&filter[starts_between]=${startsBetween ? startsBetween : ''}
					
					&filter[username]=${username ? username : ''}
					&filter[min_age_range]=${minAgeRange ? minAgeRange : ''}
					&filter[max_age_range]=${maxAgeRange ? maxAgeRange : ''}
					&filter[min_tall]=${minTall ? minTall : ''}
					&filter[max_tall]=${maxTall ? maxTall : ''}
					&filter[min_weight]=${minWeight ? minWeight : ''}
					&filter[max_weight]=${maxWeight ? maxWeight : ''}
					&filter[city_id]=${cityId ? cityId : ''}
					&filter[job]=${job ? job : ''}
					&filter[marital_status]=${maritalStatus ? maritalStatus : ''}
					&filter[head_craft]=${headCraft ? headCraft : ''}
					&filter[have_a_child]=${haveAChild ? haveAChild : ''}
					&filter[use_cigarette]=${useCigarette ? useCigarette : ''}
					&filter[use_alcohol]=${useAlcohol ? useAlcohol : ''}
					&filter[education]=${education ? education : ''}
					&filter[salary]=${salary ? salary : ''}
					&filter[has_photos]=${hasPhotos ? hasPhotos : ''}
					&filter[physical]=${physical ? physical : ''}`;
	try {
		const response = yield call(axios.get, `${BASE_URL}/user/match${query}`,
			{
				headers: { Authorization: `Bearer ${token}` },
			},
			
		);
		const { data } = response;
		yield put(getUserMatchSuccess(data));
	} catch (error) {
		yield put(getUserMatchError(error?.response?.data));
		console.log(error?.response);
	}
}

function* getMatchPreviusUserTask(action) {
	const { payload } = action;
	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.get, `${BASE_URL}/user/match/previus`,
			{
				headers: { Authorization: `Bearer ${token}` },
			},
		);
		const { data } = response;
		yield put(getMatchPreviusUserSuccess(data));
	} catch (error) {
		yield put(getMatchPreviusUserError(error?.response?.data));
		console.log(error?.response);
	}
}

function* userLogoutTask(action) {
	yield put(userLogoutSuccess());
	window.location = '/';
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

function* watchGetMyFavoriteUsers() {
	yield takeLatest(GET_MY_FAVORITE_USERS_STARTED, getMyFavoriteUsersTask);
}

function* watchGetMySmiledProfiles() {
	yield takeLatest(GET_MY_SMILED_PROFILES_STARTED, getMySmiledProfilesTask);
}

function* watchGetMyLikedProfiles() {
	yield takeLatest(GET_MY_LIKED_PROFILES_STARTED, getMyLikedProfilesTask);
}

function* watchGetMyBlockedProfiles() {
	yield takeLatest(GET_MY_BLOCKED_PROFILES_STARTED, getMyBlockedProfilesTask);
}

function* watchGetOnlineProfiles() {
	yield takeLatest(GET_ONLINE_PROFILES_STARTED, getOnlineProfilesTask);
}

function* watchGetUserActivityLiked() {
	yield takeLatest(USER_ACTIVITY_LIKED_STARTED, userActivityLikedTask);
}

function* watchGetUserActivityFavorite() {
	yield takeLatest(USER_ACTIVITY_FAVORITE_STARTED, userActivityFavoriteTask);
}

function* watchGetUserActivitySmiled() {
	yield takeLatest(USER_ACTIVITY_SMILED_STARTED, userActivitySmiledTask);
}

function* watchUserBlocked() {
	yield takeLatest(USER_BLOCKED_STARTED, userBlockedTask);
}

function* watchUserReports() {
	yield takeLatest(USER_REPORTS_STARTED, userReportsTask);
}

function* wathcUserUpdateSpouseCandidate() {
	yield takeLatest(USER_UPDATE_SPOUSE_CANDIDATE_STARTED, userUpdateSpouseCanidateTask);
}

function* watchUserUpdateCaracteristicFeature() {
	yield takeLatest(USER_UPDATE_CARACTERISTIC_FEATURE_STARTED, userUpdateCaracteristicFeatureTask);
}

function* watchGetMyPosts() {
	yield takeLatest(GET_MY_POSTS_STARTED, getMyPostsTask);
}

function* watchCreateUserProfileVisitLog() {
	yield takeLatest(CREATE_USER_PROFILE_VISIT_LOG_STARTED, createUserProfileVisitLogTask);
}

function* watchGetUserProfileVisit() {
	yield takeLatest(GET_USER_PROFILE_VISIT_STARTED, getUserProfileVisitTask);
}

function* watchGetUserMatch() {
	yield takeLatest(GET_USER_MATCH_STARTED, getUserMatchTask);
}

function* watchGetMatchPreviusUser() {
	yield takeLatest(GET_MATCH_PREVIUS_USER_STARTED, getMatchPreviusUserTask);
}

function* watchUserLogout() {
	yield takeLatest(USER_LOGOUT_STARTED, userLogoutTask);
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
		watchGetUsers(),
		watchGetMyFavoriteUsers(),
		watchGetMySmiledProfiles(),
		watchGetMyLikedProfiles(),
		watchGetMyBlockedProfiles(),
		watchGetOnlineProfiles(),
		watchGetUserActivityLiked(),
		watchGetUserActivityFavorite(),
		watchGetUserActivitySmiled(),
		watchUserBlocked(),
		watchUserReports(),
		wathcUserUpdateSpouseCandidate(),
		watchUserUpdateCaracteristicFeature(),
		watchGetMyPosts(),
		watchCreateUserProfileVisitLog(),
		watchGetUserProfileVisit(),
		watchGetUserMatch(),
		watchGetMatchPreviusUser(),
		watchUserLogout()
	]);
}
