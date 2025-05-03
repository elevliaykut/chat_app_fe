import { userReportReset } from './actions';
import {
	USER_LOGIN_STARTED,
	USER_LOGIN_SUCCEEDED,
	USER_LOGIN_FAILED,
	USER_RESET_ERROR,
	USER_REGISTER_STARTED,
	USER_REGISTER_SUCCEEDED,
	USER_REGISTER_FAILED,
	USER_REGISTER_COMPLETED_RESET,
	USER_POST_LIST_STARTED,
	USER_POST_LIST_SUCCEEDED,
	USER_POST_LIST_FAILED,
	USER_CREATE_POST_STARTED,
	USER_CREATE_POST_SUCCEEDED,
	USER_CREATE_POST_FAILED,
	RESET_CREATE_POST_COMPLETE,
	USER_UPLOAD_PROFILE_PHOTO_STARTED,
	USER_UPLOAD_PROFILE_PHOTO_SUCCEEDED,
	USER_UPLOAD_PROFILE_PHOTO_FAILED,
	RESET_UPLOAD_PROFILE_PHOTO_COMPLETE,
	GET_USER_ME_STARTED,
	GET_USER_ME_SUCCEEDED,
	GET_USER_ME_FAILED,
	UPDATE_USER_PERSONAL_INFO_STARTED,
	UPDATE_USER_PERSONAL_INFO_SUCCEEDED,
	UPDATE_USER_PERSONAL_INFO_FAILED,
	RESET_UPDATE_USER_PERSONAL_INFO_COMPLETE,
	GET_USERS_STARTED,
	GET_USERS_SUCCEEDED,
	GET_USERS_FAILED,
	GET_MY_FAVORITE_USERS_STARTED,
	GET_MY_FAVORITE_USERS_SUCCEEDED,
	GET_MY_FAVORITE_USERS_FAILED,
	GET_MY_SMILED_PROFILES_STARTED,
	GET_MY_SMILED_PROFILES_SUCCEEDED,
	GET_MY_SMILED_PROFILES_FAILED,
	GET_MY_LIKED_PROFILES_STARTED,
	GET_MY_LIKED_PROFILES_SUCCEEDED,
	GET_MY_LIKED_PROFILES_FAILED,
	GET_MY_BLOCKED_PROFILES_STARTED,
	GET_MY_BLOCKED_PROFILES_SUCCEEDED,
	GET_MY_BLOCKED_PROFILES_FAILED,
	GET_ONLINE_PROFILES_STARTED,
	GET_ONLINE_PROFILES_SUCCEEDED,
	GET_ONLINE_PROFILES_FAILED,
	USER_ACTIVITY_LIKED_STARTED,
	USER_ACTIVITY_LIKED_SUCCEEDED,
	USER_ACTIVITY_LIKED_FAILED,
	USER_ACTIVITY_LIKED_RESET,
	USER_ACTIVITY_FAVORITE_STARTED,
	USER_ACTIVITY_FAVORITE_SUCCEEDED,
	USER_ACTIVITY_FAVORITE_FAILED,
	USER_ACTIVITY_FAVORITE_RESET,
	USER_ACTIVITY_SMILED_STARTED,
	USER_ACTIVITY_SMILED_SUCCEEDED,
	USER_ACTIVITY_SMILED_FAILED,
	USER_ACTIVITY_SMILED_RESET,
	USER_BLOCKED_STARTED,
	USER_BLOCKED_SUCCEEDED,
	USER_BLOCKED_FAILED,
	USER_BLOCKED_RESET,
	USER_REPORTS_STARTED,
	USER_REPORTS_SUCCEEDED,
	USER_REPORTS_FAILED,
	USER_REPORTS_RESET,
	USER_UPDATE_SPOUSE_CANDIDATE_STARTED,
	USER_UPDATE_SPOUSE_CANDIDATE_SUCCEEDED,
	USER_UPDATE_SPOUSE_CANDIDATE_FAILED,
	USER_UPDATE_SPOUSE_CANIDATE_RESET,
	USER_UPDATE_CARACTERISTIC_FEATURE_STARTED,
	USER_UPDATE_CARACTERISTIC_FEATURE_SUCCEEDED,
	USER_UPDATE_CARACTERISTIC_FEATURE_FAILED,
	USER_UPDATE_CARACTERISTIC_FEATURE_RESET,
	GET_MY_POSTS_STARTED,
	GET_MY_POSTS_SUCCEEDED,
	GET_MY_POSTS_FAILED
} from './types';

const initialState = {
	id: '',
	firstName: '',
	lastName: '',
	phone: '',
	email: '',
	status: '',
	token: '',
	isUserLoggedIn: false,
	registerCompleted: false,
	error: null,
	info: {},
	isLoading: false,
	pageLoading: false,
	createPostComplete: false,
	createPostLoading: false,
	uploadProfilePhotoComplete: false,
	uploadProfilePhotoIsLoading: false,
	posts: [],
	userMe: {},
	userMeLoading: false,
	updateUserPersonalInfoComplete: false,
	members: [],
	favoriteUsers: [],
	smiledProfiles: [],
	likedProfiles: [],
	blockedProfiles: [],
	onlineProfiles: [],
	userActivityLikedCompleted: false,
	userActivityFavoriteCompleted: false,
	userActivitySmiledCompleted: false,
	userBlockedComplete: false,
	userReportsComplete: false,
	userUpdateSpouseCandidateInfoComplete: false,
	userUpdateCaracteristicFeatureComplete: false,
	myPosts: []
};

const user = (state = initialState, action) => {
	const { payload } = action;

	switch (action.type) {
		case USER_LOGIN_STARTED:
			return {
				...state,
				isLoading: true
			};
		case USER_LOGIN_SUCCEEDED:
			return {
				...state,
				token: payload.token,
				isUserLoggedIn: true,
				firstName: payload?.data?.name,
				lastName: payload?.data?.surname,
				phone: payload?.data?.phone,
				email: payload?.data?.email,
				status: payload?.data?.status,
				isLoading: false
			};
        case USER_LOGIN_FAILED:
            return {
                ...state,
                isLoading: false,
                error: payload
            };
		case USER_RESET_ERROR:
			return {
				...state,
				error: null,
			};
		case USER_REGISTER_STARTED:
			return {
				...state,
				registerCompleted: false,
				isLoading: true
			};
		case USER_REGISTER_SUCCEEDED:
			return {
				...state,
				isLoading: false,
				registerCompleted: true,
			};
		case USER_REGISTER_FAILED:
			return {
				...state,
				isLoading: false,
				registerCompleted: false,
				error: payload
			};
		case USER_REGISTER_COMPLETED_RESET:
			return {
				...state,
				registerCompleted: false
			};
		case USER_POST_LIST_STARTED:
			return {
				...state,
				isLoading: true,
				pageLoading: true
			};
		case USER_POST_LIST_SUCCEEDED:
			return {
				...state,
				isLoading: false,
				pageLoading: false,
				posts: payload?.data
			};
		case USER_POST_LIST_FAILED:
			return {
				...state,
				isLoading: false,
				pageLoading: false,
				error: payload
			};
		case USER_CREATE_POST_STARTED:
			return {
				...state,
				isLoading: true,
				createPostLoading: true,
				createPostComplete: false
			};
		case USER_CREATE_POST_SUCCEEDED:
			return {
				...state,
				isLoading: false,
				createPostLoading: false,
				createPostComplete: true
			};
		case USER_CREATE_POST_FAILED:
			return {
				...state,
				isLoading: false,
				createPostLoading: false,
				createPostComplete: false
			};
		case USER_UPLOAD_PROFILE_PHOTO_STARTED:
			return {
				...state,
				isLoading: true,
				uploadProfilePhotoIsLoading: true,
				uploadProfilePhotoComplete: false
			};
		case USER_UPLOAD_PROFILE_PHOTO_SUCCEEDED:
			return {
				...state,
				isLoading: false,
				uploadProfilePhotoIsLoading: false,
				uploadProfilePhotoComplete: true
			};
		case USER_UPLOAD_PROFILE_PHOTO_FAILED:
			return {
				...state,
				isLoading: false,
				uploadProfilePhotoIsLoading: false,
				uploadProfilePhotoComplete: false
			};
		case RESET_UPLOAD_PROFILE_PHOTO_COMPLETE:
			return {
				...state,
				uploadProfilePhotoComplete: false
			};
		case RESET_CREATE_POST_COMPLETE:
			return {
				...state,
				createPostComplete: false
			};
		case GET_USER_ME_STARTED:
			return {
				...state,
				isLoading: true,
				userMeLoading: true
			};
		case GET_USER_ME_SUCCEEDED:
			return {
				...state,
				isLoading: false,
				userMeLoading: false,
				userMe: payload?.data
			};
		case GET_USER_ME_FAILED:
			return {
				...state,
				isLoading: false,
				userMeLoading: false,
				error: payload
			};
		case UPDATE_USER_PERSONAL_INFO_STARTED:
			return {
				...state,
				isLoading: true,
				updateUserPersonalInfoComplete: false,
			};
		case UPDATE_USER_PERSONAL_INFO_SUCCEEDED:
			return {
				...state,
				isLoading: false,
				updateUserPersonalInfoComplete: true,
				userMe: payload?.data
			};
		case UPDATE_USER_PERSONAL_INFO_FAILED:
			return {
				...state,
				isLoading: false,
				updateUserPersonalInfoComplete: false,
				error: payload
			};
		case RESET_UPDATE_USER_PERSONAL_INFO_COMPLETE:
			return {
				...state,
				updateUserPersonalInfoComplete: false
			};
		case GET_USERS_STARTED:
			return {
				...state,
				isLoading: true,
				pageLoading: false
			};
		case GET_USERS_SUCCEEDED:
			return {
				...state,
				isLoading: false,
				pageLoading: true,
				members: payload?.data
			};
		case GET_USERS_FAILED:
			return {
				...state,
				isLoading: false,
				pageLoading: false,
				error: payload
			};
		case GET_MY_FAVORITE_USERS_STARTED:
			return {
				...state,
				isLoading: true,
				pageLoading: false,
			};
		case GET_MY_FAVORITE_USERS_SUCCEEDED:
			return {
				...state,
				isLoading: false,
				pageLoading: true,
				favoriteUsers: payload?.data
			};
		case GET_MY_FAVORITE_USERS_FAILED:
			return {
				...state,
				isLoading: false,
				pageLoading: false,
				error: payload
			};
		case GET_MY_SMILED_PROFILES_STARTED:
			return {
				...state,
				isLoading: true
			};
		case GET_MY_SMILED_PROFILES_SUCCEEDED:
			return {
				...state,
				isLoading: false,
				smiledProfiles: payload?.data
			};
		case GET_MY_SMILED_PROFILES_FAILED:
			return {
				...state,
				isLoading: false,
				error: payload
			};
		case GET_MY_LIKED_PROFILES_STARTED:
			return {
				...state,
				isLoading: true
			};
		case GET_MY_LIKED_PROFILES_SUCCEEDED:
			return {
				...state,
				isLoading: false,
				likedProfiles: payload?.data
			};
		case GET_MY_LIKED_PROFILES_FAILED:
			return {
				...state,
				isLoading: false,
				error: payload
			};
		case GET_MY_BLOCKED_PROFILES_STARTED:
			return {
				...state,
				isLoading: true,
			};
		case GET_MY_BLOCKED_PROFILES_SUCCEEDED:
			return {
				...state,
				isLoading: false,
				blockedProfiles: payload?.data
			};
		case GET_MY_BLOCKED_PROFILES_FAILED:
			return {
				...state,
				isLoading: false,
				error: payload
			};
		case GET_ONLINE_PROFILES_STARTED:
			return {
				...state,
				isLoading: true,
				pageLoading: true
			};
		case GET_ONLINE_PROFILES_SUCCEEDED:
			return {
				...state,
				isLoading: false,
				pageLoading: false,
				onlineProfiles: payload?.data
			};
		case GET_ONLINE_PROFILES_FAILED:
			return {
				...state,
				isLoading: false,
				pageLoading: false,
				error: payload
			};
		case USER_ACTIVITY_LIKED_STARTED:
			return {
				...state,
				isLoading: true,
				userActivityLikedCompleted: false
			};
		case USER_ACTIVITY_LIKED_SUCCEEDED:
			return {
				...state,
				isLoading: false,
				userActivityLikedCompleted: true,
			};
		case USER_ACTIVITY_LIKED_FAILED:
			return {
				...state,
				isLoading: false,
				userActivityLikedCompleted: false,
				error: payload
			};
		case USER_ACTIVITY_LIKED_RESET:
			return {
				...state,
				userActivityLikedCompleted: false
			};
		case USER_ACTIVITY_FAVORITE_STARTED:
			return {
				...state,
				isLoading: true,
				userActivityFavoriteCompleted: false,
			};
		case USER_ACTIVITY_FAVORITE_SUCCEEDED:
			return {
				...state,
				isLoading: false,
				userActivityFavoriteCompleted: true
			};
		case USER_ACTIVITY_FAVORITE_FAILED:
			return {
				...state,
				isLoading: false,
				userActivityFavoriteCompleted: false,
				error: payload
			};
		case USER_ACTIVITY_FAVORITE_RESET:
			return {
				...state,
				userActivityFavoriteCompleted: false,
			};
		case USER_ACTIVITY_SMILED_STARTED:
			return {
				...state,
				isLoading: true,
				userActivitySmiledCompleted: false
			};
		case USER_ACTIVITY_SMILED_SUCCEEDED:
			return {
				...state,
				isLoading: false,
				userActivitySmiledCompleted: true
			};
		case USER_ACTIVITY_SMILED_FAILED:
			return {
				...state,
				isLoading: false,
				userActivitySmiledCompleted: false,
				error: payload
			};
		case USER_ACTIVITY_SMILED_RESET:
			return {
				...state,
				userActivitySmiledCompleted: false
			};
		case USER_BLOCKED_STARTED:
			return {
				...state,
				isLoading: true,
				userBlockedComplete: false
			};
		case USER_BLOCKED_SUCCEEDED:
			return {
				...state,
				isLoading: false,
				userBlockedComplete: true
			};
		case USER_BLOCKED_FAILED:
			return {
				...state,
				isLoading: false,
				userBlockedComplete: false,
				error: payload
			};
		case USER_BLOCKED_RESET:
			return {
				...state,
				userBlockedComplete: false
			};
		case USER_REPORTS_STARTED:
			return {
				...state,
				isLoading: true,
				userReportsComplete: false
			};
		case USER_REPORTS_SUCCEEDED:
			return {
				...state,
				isLoading: false,
				userReportsComplete: true
			};
		case USER_REPORTS_FAILED:
			return {
				...state,
				isLoading: false,
				userReportsComplete: false,
				error: payload
			};
		case USER_REPORTS_RESET:
			return {
				...state,
				userReportsComplete: false
			};
		case USER_UPDATE_SPOUSE_CANDIDATE_STARTED:
			return {
				...state,
				isLoading: true,
				userUpdateSpouseCandidateInfoComplete: false
			};
		case USER_UPDATE_SPOUSE_CANDIDATE_SUCCEEDED:
			return {
				...state,
				isLoading: false,
				userUpdateSpouseCandidateInfoComplete: true
			};
		case USER_UPDATE_SPOUSE_CANDIDATE_FAILED:
			return {
				...state,
				isLoading: false,
				userUpdateSpouseCandidateInfoComplete: false
			};
		case USER_UPDATE_SPOUSE_CANIDATE_RESET:
			return {
				...state,
				userUpdateSpouseCandidateInfoComplete: false
			};
		case USER_UPDATE_CARACTERISTIC_FEATURE_STARTED:
			return {
				...state,
				isLoading: true,
				userUpdateCaracteristicFeatureComplete: false
			};
		case USER_UPDATE_CARACTERISTIC_FEATURE_SUCCEEDED:
			return {
				...state,
				isLoading: false,
				userUpdateCaracteristicFeatureComplete: true
			};
		case USER_UPDATE_CARACTERISTIC_FEATURE_FAILED:
			return {
				...state,
				isLoading: false,
				userUpdateCaracteristicFeatureComplete: false,
				error: payload
			};
		case USER_UPDATE_CARACTERISTIC_FEATURE_RESET:
			return {
				...state,
				userUpdateCaracteristicFeatureComplete: false
			};
		case GET_MY_POSTS_STARTED:
			return {
				...state,
				isLoading: true
			};
		case GET_MY_POSTS_SUCCEEDED:
			return {
				...state,
				isLoading: false,
				myPosts: payload?.data
			};
		case GET_MY_POSTS_FAILED:
			return {
				...state,
				isLoading: false,
				error: payload
			};
		default:
			return state;
	}
};
export default user;
