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
	GET_APPROVE_USERS_STARTED,
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
	USER_LOGOUT_STARTED,
	GET_STORY_STARTED,
	GET_MY_STORY_STARTED,
	CREATE_STORY_STARTED,
	USER_UPLOAD_PHOTO_STARTED,
	GET_USER_PHOTO_STARTED,
	USER_FREEZE_ACCOUNT_STARTED,
	USER_DELETE_ACCOUNT_STARTED,
	USER_CHANGE_EMAIL_STARTED,
	USER_CHANGE_PASSWORD_STARTED,
	CREATE_PAYMENT_STARTED,
	ADMIN_GET_USERS_STARTED,
	ADMIN_GET_USER_DETAILS_STARTED,
	ADMIN_DELETE_USER_STARTED,
	ADMIN_GET_STORIES_STARTED,
	ADMIN_APPROVE_STORY_STARTED,
	ADMIN_GET_PHOTOS_STARTED,
	ADMIN_APPROVE_PHOTO_STARTED,
	ADMIN_GET_POSTS_STARTED,
	ADMIN_APPROVE_POST_STARTED,
	ADMIN_GET_PROFILE_TEXTS_STARTED,
	ADMIN_APPROVE_PROFILE_TEXT_STARTED,
	ADMIN_GET_PAYMENTS_STARTED,
	ADMIN_APPROVE_PAYMENT_STARTED,
	GET_USER_PHOTOS_STARTED,
	GET_USER_REPORTS_STARTED,
	ADMIN_APPROVE_REPORT_STARTED,
	ADMIN_GET_PROFILE_PHOTOS_STARTED,
	ADMIN_APPROVE_PROFILE_PHOTO_STARTED,
	USER_DELETE_PHOTO_STARTED,
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
	getApproveUsersSuccess,
	getApproveUsersError,
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
	userLogoutSuccess,
	getStorySuccess,
	getStoryError,
	getMyStorySuccess,
	getMyStoryError,
	createStorySuccess,
	createStoryError,
	userUploadPhotoSuccess,
	userUploadPhotoError,
	getUserPhotoSuccess,
	getUserPhotoError,
	userFreezeAccountSuccess,
	userFreezeAccountError,
	userDeleteAccountSuccess,
	userDeleteAccountError,
	userChangeEmailSuccess,
	userChangeEmailError,
	userChangePasswordSuccess,
	userChangePasswordError,
	createPaymentSuccess,
	createPaymentError,
	adminGetUsersSuccess,
	adminGetUsersError,
	adminGetUserDetailsSuccess,
	adminGetUserDetailsError,
	adminDeleteUserSuccess,
	adminDeleteUserError,
	adminGetStoriesSuccess,
	adminGetStoriesError,
	adminApproveStorySuccess,
	adminApproveStoryError,
	adminGetPhotosSuccess,
	adminGetPhotosError,
	adminApprovePhotoSuccess,
	adminApprovePhotoError,
	adminGetPostsSuccess,
	adminGetPostsError,
	adminApprovePostSuccess,
	adminApprovePostError,
	adminGetProfileTextsSuccess,
	adminGetProfileTextsError,
	adminApproveProfileTextSuccess,
	adminApproveProfileTextError,
	adminGetPaymentsSuccess,
	adminGetPaymentsError,
	adminApprovePaymentSuccess,
	adminApprovePaymentError,
	getUserPhotosSuccess,
	getUserPhotosError,
	getUserReportsSuccess,
	getUserReportsError,
	adminApproveReportSuccess,
	adminApproveReportError,
	adminGetProfilePhotosSuccess,
	adminGetProfilePhotosError,
	adminApproveProfilePhotoSuccess,
	adminApproveProfilePhotoError,
	userDeletePhotoSuccess,
	userDeletePhotoError
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

		if(data?.data?.type === 1) {
			if(data?.data?.personal_info_complete === 1 || data?.data?.personal_info_complete === true) {
				window.location = '/home';
			}
			if(data?.data?.personal_info_complete === 0 || data?.data?.personal_info_complete === false) {
				window.location = '/info';
			}
		}

		if(data?.data?.type === 2) {
			window.location = '/dashboard';
		}

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
		name,
		surname,
		age,
		phone,
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
				name: name,
				surname: surname,
				age: age,
				phone: phone,
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

function* getApproveUsersTask(action) {
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
		const response = yield call(axios.get, `${BASE_URL}/user/activity/approve${query}`,
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
	const { userId, status } = payload;

	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.post, `${BASE_URL}/user/activity/like/${userId}`,
			{
				status: status
			},
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
	const { userId, status } = payload;

	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.post, `${BASE_URL}/user/activity/favorite/${userId}`,
			{
				status: status
			},
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
	const { userId, status } = payload;

	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.post, `${BASE_URL}/user/activity/smile/${userId}`,
			{
				status: status
			},
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
	const { userId, status } = payload;
	
	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.post, `${BASE_URL}/user/blocked/${userId}`,
			{
				status: status
			},
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
	const { description, type, userId, postId } = payload;

	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.post, `${BASE_URL}/user/report/${userId}`,
			{
				description: description,
				type: type,
				post_id: postId
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

function* getStoryTask(action) {
	const { payload = {} } = action;
	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.get, `${BASE_URL}/user/story`,
			{
				headers: { Authorization: `Bearer ${token}` },
			},
		);
		const { data } = response;
		yield put(getStorySuccess(data));
	} catch (error) {
		yield put(getStoryError(error?.response?.data));
		console.log(error?.response);
	}
}

function* getMyStoryTask(action) {
	const { payload = {} } = action;
	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.get, `${BASE_URL}/user/story/me`,
			{
				headers: { Authorization: `Bearer ${token}` },
			},
		);
		const { data } = response;
		yield put(getMyStorySuccess(data));
	} catch (error) {
		yield put(getMyStoryError(error?.response?.data));
		console.log(error?.response);
	}
}

function* creteStoryTask(action) {
	const { payload = {} } = action;
	const { formData } = payload;
	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.post, `${BASE_URL}/user/story`,
			formData,
			{
				headers: { Authorization: `Bearer ${token}` },
			},
			
		);
		const { data } = response;
		yield put(createStorySuccess(data));
	} catch (error) {
		yield put(createStoryError(error?.response?.data));
		console.log(error?.response);
	}
}

function* userUploadPhotoTask(action) {
	const { payload = {} } = action;
	const { formData } = payload;
	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.post, `${BASE_URL}/user/photo`,
			formData,
			{
				headers: { Authorization: `Bearer ${token}` },
			},
			
		);
		const { data } = response;
		yield put(userUploadPhotoSuccess(data));
	} catch (error) {
		yield put(userUploadPhotoError(error?.response?.data));
		console.log(error?.response);
	}
}

function* getUserPhotoTask(action) {
	const { payload = {} } = action;
	const { userId } = payload;

	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.get, `${BASE_URL}/user/photo/${userId}`,
			{
				headers: { Authorization: `Bearer ${token}` },
			},
		);
		const { data } = response;
		yield put(getUserPhotoSuccess(data));
	} catch (error) {
		yield put(getUserPhotoError(error?.response?.data));
		console.log(error?.response);
	}
}

function* userFreezeAccountTask(action) {
	const { payload = {} } = action;
	const { status } = payload;

	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.post, `${BASE_URL}/user/account/freeze/${status}`,
			{},
			{
				headers: { Authorization: `Bearer ${token}` },
			},
		);
		const { data } = response;
		yield put(userFreezeAccountSuccess(data));
	} catch (error) {
		yield put(userFreezeAccountError(error?.response?.data));
		console.log(error?.response);
	}
}

function* userDeleteAccountTask(action) {
	const { payload = {} } = action;
	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.delete, `${BASE_URL}/user/account/delete`,
			{
				headers: { Authorization: `Bearer ${token}` },
			},
		);
		const { data } = response;
		yield put(userDeleteAccountSuccess(data));
	} catch (error) {
		yield put(userDeleteAccountError(error?.response?.data));
		console.log(error?.response);
	}
}

function* userChangeEmailTask(action) {
	const { payload = {} } = action;
	const { email } = payload;

	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.post, `${BASE_URL}/user/account/change-email`,
			{
				email: email
			},	
			{
				headers: { Authorization: `Bearer ${token}` },
			},
		);
		const { data } = response;
		yield put(userChangeEmailSuccess(data));
	} catch (error) {
		yield put(userChangeEmailError(error?.response?.data));
		console.log(error?.response);
	}
}

function* userChangePasswordTask(action) {
	const { payload = {} } = action;
	const { password, passwordConfirmation } = payload;
	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.post, `${BASE_URL}/user/change-password`,
			{
				password: password,
				password_confirmation: passwordConfirmation
			},	
			{
				headers: { Authorization: `Bearer ${token}` },
			},
		);
		const { data } = response;
		yield put(userChangePasswordSuccess(data));
	} catch (error) {
		yield put(userChangePasswordError(error?.response?.data));
		console.log(error?.response);
	}
}

function* createPaymentTask(action) {
	const { payload = {} } = action;
	const { formData } = payload;

	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.post, `${BASE_URL}/user/payment`,
			formData,
			{
				headers: { Authorization: `Bearer ${token}` },
			},
		);
		const { data } = response;
		yield put(createPaymentSuccess(data));
	} catch (error) {
		yield put(createPaymentError(error?.response?.data));
		console.log(error?.response);
	}
}

function* adminGetUsersTask(action) {
	const { payload = {} } = action;
	const { username } = payload;

	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.get, `${BASE_URL}/admin/user?filter[username]=${username ? username : ''}`,
			{
				headers: { Authorization: `Bearer ${token}` },
			},
		);
		const { data } = response;
		yield put(adminGetUsersSuccess(data));
	} catch (error) {
		yield put(adminGetUsersError(error?.response?.data));
		console.log(error?.response);
	}
}

function* adminGetUserDetailsTask(action) {
	const { payload = {} } = action;
	const { userId } = payload;

	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.get, `${BASE_URL}/admin/user/${userId}`,
			{
				headers: { Authorization: `Bearer ${token}` },
			},
		);
		const { data } = response;
		yield put(adminGetUserDetailsSuccess(data));
	} catch (error) {
		yield put(adminGetUserDetailsError(error?.response?.data));
		console.log(error?.response);
	}
}

function* adminDeleteUserTask(action) {
	const { payload = {} } = action;
	const { userId } = payload;
	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.delete, `${BASE_URL}/admin/user/${userId}`,
			{
				headers: { Authorization: `Bearer ${token}` },
			},
		);
		const { data } = response;
		yield put(adminDeleteUserSuccess(data));
	} catch (error) {
		yield put(adminDeleteUserError(error?.response?.data));
		console.log(error?.response);
	}
}

function* adminGetStoriesTask(action) {
	const { payload = {} } = action;
	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.get, `${BASE_URL}/admin/user/stories/list`,
			{
				headers: { Authorization: `Bearer ${token}` },
			},
		);
		const { data } = response;
		yield put(adminGetStoriesSuccess(data));
	} catch (error) {
		yield put(adminGetStoriesError(error?.response?.data));
		console.log(error?.response);
	}
}

function* adminApproveStoryTask(action) {
	const { payload = {} } = action;
	const { storyId } = payload;
	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.post, `${BASE_URL}/admin/user/approve/story/${storyId}`,
			{},
			{
				headers: { Authorization: `Bearer ${token}` },
			},
		);
		const { data } = response;
		yield put(adminApproveStorySuccess(data));
	} catch (error) {
		yield put(adminApproveStoryError(error?.response?.data));
		console.log(error?.response);
	}
}

function* adminGetPhotosTask(action) {
	const { payload = {} } = action;
	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.get, `${BASE_URL}/admin/user/photos/list`,
			{
				headers: { Authorization: `Bearer ${token}` },
			},
		);
		const { data } = response;
		yield put(adminGetPhotosSuccess(data));
	} catch (error) {
		yield put(adminGetPhotosError(error?.response?.data));
		console.log(error?.response);
	}
}

function* adminApprovePhotoTask(action) {
	const { payload = {} } = action;
	const { photoId } = payload;
	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.post, `${BASE_URL}/admin/user/approve/photo/${photoId}`,
			{},
			{
				headers: { Authorization: `Bearer ${token}` },
			},
		);
		const { data } = response;
		yield put(adminApprovePhotoSuccess(data));
	} catch (error) {
		yield put(adminApprovePhotoError(error?.response?.data));
		console.log(error?.response);
	}
}

function* adminGetPostsTask(action) {
	const { payload = {} } = action;
	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.get, `${BASE_URL}/admin/user/posts/list`,
			{
				headers: { Authorization: `Bearer ${token}` },
			},
		);
		const { data } = response;
		yield put(adminGetPostsSuccess(data));
	} catch (error) {
		yield put(adminGetPostsError(error?.response?.data));
		console.log(error?.response);
	}
}

function* adminAprovePostTask(action) {
	const { payload = {} } = action;
	const { postId } = payload;

	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.post, `${BASE_URL}/admin/user/approve/post/${postId}`,
			{},
			{
				headers: { Authorization: `Bearer ${token}` },
			},
		);
		const { data } = response;
		yield put(adminApprovePostSuccess(data));
	} catch (error) {
		yield put(adminApprovePostError(error?.response?.data));
		console.log(error?.response);
	}
}

function* adminGetProfileTextsTask(action) {
	const { payload = {} } = action;
	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.get, `${BASE_URL}/admin/user/profile/text/list`,
			{
				headers: { Authorization: `Bearer ${token}` },
			},
		);
		const { data } = response;
		yield put(adminGetProfileTextsSuccess(data));
	} catch (error) {
		yield put(adminGetProfileTextsError(error?.response?.data));
		console.log(error?.response);
	}
}

function* adminApproveProfileTextTask(action) {
	const { payload = {} } = action;
	const { detailId } = payload;

	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.post, `${BASE_URL}/admin/user/profile/text/approve/${detailId}`,
			{},
			{
				headers: { Authorization: `Bearer ${token}` },
			},
		);
		const { data } = response;
		yield put(adminApproveProfileTextSuccess(data));
	} catch (error) {
		yield put(adminApproveProfileTextError(error?.response?.data));
		console.log(error?.response);
	}
}

function* adminGetPaymentsTask(action) {
	const { payload = {} } = action;
	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.get, `${BASE_URL}/admin/user/payment/list`,
			{
				headers: { Authorization: `Bearer ${token}` },
			},
		);
		const { data } = response;
		yield put(adminGetPaymentsSuccess(data));
	} catch (error) {
		yield put(adminGetPaymentsError(error?.response?.data));
		console.log(error?.response);
	}
}

function* adminApprovePaymentTask(action) {
	const { payload = {} } = action;
	const { paymentId } = payload;

	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.post, `${BASE_URL}/admin/user/payment/approve/${paymentId}`,
			{},
			{
				headers: { Authorization: `Bearer ${token}` },
			},
		);
		const { data } = response;
		yield put(adminApprovePaymentSuccess(data));
	} catch (error) {
		yield put(adminApprovePaymentError(error?.response?.data));
		console.log(error?.response);
	}
}

function* getUserPhotosTask(action) {
	const { payload = {} } = action;
	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.get, `${BASE_URL}/user/photos`,
			{
				headers: { Authorization: `Bearer ${token}` },
			},
		);
		const { data } = response;
		yield put(getUserPhotosSuccess(data));
	} catch (error) {
		yield put(getUserPhotosError(error?.response?.data));
		console.log(error?.response);
	}
}

function* getUserReportsTask(action) {
	const { payload = {} } = action;
	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.get, `${BASE_URL}/admin/user/reports/list`,
			{
				headers: { Authorization: `Bearer ${token}` },
			},
		);
		const { data } = response;
		yield put(getUserReportsSuccess(data));
	} catch (error) {
		yield put(getUserReportsError(error?.response?.data));
		console.log(error?.response);
	}
}

function* adminApproveReportTask(action) {
	const { payload = {} } = action;
	const { reportId } = payload;

	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.delete, `${BASE_URL}/admin/user/report/${reportId}`,
			{
				headers: { Authorization: `Bearer ${token}` },
			},
		);
		const { data } = response;
		yield put(adminApproveReportSuccess(data));
	} catch (error) {
		yield put(adminApproveReportError(error?.response?.data));
		console.log(error?.response);
	}
}

function* adminGetProfilePhotosTask(action) {
	const { payload = {} } = action;
	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.get, `${BASE_URL}/admin/user/profile-photos/list`,
			{
				headers: { Authorization: `Bearer ${token}` },
			},
		);
		const { data } = response;
		yield put(adminGetProfilePhotosSuccess(data));
	} catch (error) {
		yield put(adminGetProfilePhotosError(error?.response?.data));
		console.log(error?.response);
	}
}

function* adminApproveProfilePhotoTask(action) {
	const { payload = {} } = action;
	const { userId } = payload;

	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.post, `${BASE_URL}/admin/user/profile-photo/approve/${userId}`,
			{},
			{
				headers: { Authorization: `Bearer ${token}` },
			},
		);
		const { data } = response;
		yield put(adminApproveProfilePhotoSuccess(data));
	} catch (error) {
		yield put(adminApproveProfilePhotoError(error?.response?.data));
		console.log(error?.response);
	}
}

function* userDeletePhotoTask(action) {
	const { payload = {} } = action;
	const { photoId } = payload;

	const token = cookies.get('chatAppToken');

	try {
		const response = yield call(axios.delete, `${BASE_URL}/user/photo/${photoId}`,
			{
				headers: { Authorization: `Bearer ${token}` },
			},
		);
		const { data } = response;
		yield put(userDeletePhotoSuccess(data));
	} catch (error) {
		yield put(userDeletePhotoError(error?.response?.data));
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

function* watchGetApproveUsers() {
	yield takeLatest(GET_APPROVE_USERS_STARTED, getApproveUsersTask);
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

function* watchGetStory() {
	yield takeLatest(GET_STORY_STARTED, getStoryTask);
}

function* watchGetMyStory() {
	yield takeLatest(GET_MY_STORY_STARTED, getMyStoryTask);
}

function* watchCreateStory() {
	yield takeLatest(CREATE_STORY_STARTED, creteStoryTask);
}

function* watchUserUploadPhoto() {
	yield takeLatest(USER_UPLOAD_PHOTO_STARTED, userUploadPhotoTask);
}

function* watchGetUserPhoto() {
	yield takeLatest(GET_USER_PHOTO_STARTED, getUserPhotoTask);
}

function* watchUserFreezeAccount() {
	yield takeLatest(USER_FREEZE_ACCOUNT_STARTED, userFreezeAccountTask);
}

function* watchUserDeleteAccount() {
	yield takeLatest(USER_DELETE_ACCOUNT_STARTED, userDeleteAccountTask);
}

function* watchUserChangeEmail() {
	yield takeLatest(USER_CHANGE_EMAIL_STARTED, userChangeEmailTask);
}

function* watchUserChangePassword() {
	yield takeLatest(USER_CHANGE_PASSWORD_STARTED, userChangePasswordTask);
}

function* watchCreatePayment() {
	yield takeLatest(CREATE_PAYMENT_STARTED, createPaymentTask);
}

function* watchAdminGetUsers() {
	yield takeLatest(ADMIN_GET_USERS_STARTED, adminGetUsersTask);
}

function* watchAdminGetUserDetails() {
	yield takeLatest(ADMIN_GET_USER_DETAILS_STARTED, adminGetUserDetailsTask);
}

function* watchAdminDeleteUser() {
	yield takeLatest(ADMIN_DELETE_USER_STARTED, adminDeleteUserTask);
}

function* watchAdminGetStories() {
	yield takeLatest(ADMIN_GET_STORIES_STARTED, adminGetStoriesTask);
}

function* watchAdminApproveStory() {
	yield takeLatest(ADMIN_APPROVE_STORY_STARTED, adminApproveStoryTask);
}

function* watchGetAdminPhotos() {
	yield takeLatest(ADMIN_GET_PHOTOS_STARTED, adminGetPhotosTask);
}

function* watchAdminApprovePhoto() {
	yield takeLatest(ADMIN_APPROVE_PHOTO_STARTED, adminApprovePhotoTask);
}

function* watchAdminGetPosts() {
	yield takeLatest(ADMIN_GET_POSTS_STARTED, adminGetPostsTask);
}

function* watchAdminApprovePost() {
	yield takeLatest(ADMIN_APPROVE_POST_STARTED, adminAprovePostTask);
}

function* watchAdminGetProfileTexts() {
	yield takeLatest(ADMIN_GET_PROFILE_TEXTS_STARTED, adminGetProfileTextsTask);
}

function* watchAdminApproveProfileText() {
	yield takeLatest(ADMIN_APPROVE_PROFILE_TEXT_STARTED, adminApproveProfileTextTask);
}

function* watchAdminGetPayments() {
	yield takeLatest(ADMIN_GET_PAYMENTS_STARTED, adminGetPaymentsTask);
}

function* watchAdminApprovePayment() {
	yield takeLatest(ADMIN_APPROVE_PAYMENT_STARTED, adminApprovePaymentTask);
}

function* watchGetUserPhotos() {
	yield takeLatest(GET_USER_PHOTOS_STARTED, getUserPhotosTask);
}

function* watchGetUserReports() {
	yield takeLatest(GET_USER_REPORTS_STARTED, getUserReportsTask);
}

function* watchAdminApproveReport() {
	yield takeLatest(ADMIN_APPROVE_REPORT_STARTED, adminApproveReportTask);
}

function* watchAdminGetProfilePhotos() {
	yield takeLatest(ADMIN_GET_PROFILE_PHOTOS_STARTED, adminGetProfilePhotosTask);
}

function* watchAdminApproveProfilePhoto() {
	yield takeLatest(ADMIN_APPROVE_PROFILE_PHOTO_STARTED, adminApproveProfilePhotoTask);
}

function* watchUserDeletePhoto() {
	yield takeLatest(USER_DELETE_PHOTO_STARTED, userDeletePhotoTask);
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
		watchGetApproveUsers(),
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
		watchUserLogout(),
		watchGetStory(),
		watchGetMyStory(),
		watchCreateStory(),
		watchUserUploadPhoto(),
		watchGetUserPhoto(),
		watchUserFreezeAccount(),
		watchUserDeleteAccount(),
		watchUserChangeEmail(),
		watchUserChangePassword(),
		watchCreatePayment(),
		watchAdminGetUsers(),
		watchAdminGetUserDetails(),
		watchAdminDeleteUser(),
		watchAdminGetStories(),
		watchAdminApproveStory(),
		watchGetAdminPhotos(),
		watchAdminApprovePhoto(),
		watchAdminGetPosts(),
		watchAdminApprovePost(),
		watchAdminGetProfileTexts(),
		watchAdminApproveProfileText(),
		watchAdminGetPayments(),
		watchAdminApprovePayment(),
		watchGetUserPhotos(),
		watchGetUserReports(),
		watchAdminApproveReport(),
		watchAdminGetProfilePhotos(),
		watchAdminApproveProfilePhoto(),
		watchUserDeletePhoto()
	]);
}
