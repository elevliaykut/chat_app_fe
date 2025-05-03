import {
	USER_LOGIN_STARTED,
	USER_LOGIN_SUCCEEDED,
	USER_LOGIN_FAILED,
	USER_REGISTER_STARTED,
	USER_REGISTER_SUCCEEDED,
	USER_REGISTER_FAILED,
	USER_REGISTER_COMPLETED_RESET,
    USER_RESET_ERROR,
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

export const loginUser = values => ({
	type: USER_LOGIN_STARTED,
	payload: values
});

export const loginUserSuccess = data => ({
	type: USER_LOGIN_SUCCEEDED,
	payload: data,
});

export const loginUserError = error => ({
	type: USER_LOGIN_FAILED,
	payload: error,
});

export const resetError = () => ({
	type: USER_RESET_ERROR,
});

export const userRegisterCompletedReset = () => ({
	type: USER_REGISTER_COMPLETED_RESET
});

export const userRegister = values => ({
	type: USER_REGISTER_STARTED,
	payload: values
});

export const userRegisterSuccess = data => ({
	type: USER_REGISTER_SUCCEEDED,
	payload: data
});

export const userRegisterError = error => ({
	type: USER_REGISTER_FAILED,
	payload: error
});

export const userPostList = values => ({
	type: USER_POST_LIST_STARTED,
	payload: values
});

export const userPostListSuccess = data => ({
	type: USER_POST_LIST_SUCCEEDED,
	payload: data
});

export const userPostListError = error => ({
	type: USER_POST_LIST_FAILED,
	payload: error
});

export const userCreatePost = values => ({
	type: USER_CREATE_POST_STARTED,
	payload: values
});

export const userCreatePostSuccess = data => ({
	type: USER_CREATE_POST_SUCCEEDED,
	payload: data
});

export const userCreatePostError = error => ({
	type: USER_CREATE_POST_FAILED,
	payload: error
});

export const resetCreatePostComplete = () => ({
	type: RESET_CREATE_POST_COMPLETE
});

export const userUploadProfilePhoto = values => ({
	type: USER_UPLOAD_PROFILE_PHOTO_STARTED,
	payload: values
});

export const userUploadProfilePhotoSuccess = data => ({
	type: USER_UPLOAD_PROFILE_PHOTO_SUCCEEDED,
	payload: data
});

export const userUploadProfilePhotoError = error => ({
	type: USER_UPLOAD_PROFILE_PHOTO_FAILED,
	payload: error
});

export const resetUploadProfilePhotoComplete = () => ({
	type: RESET_UPLOAD_PROFILE_PHOTO_COMPLETE
});

export const getUserMe = values => ({
	type: GET_USER_ME_STARTED,
	payload: values
});

export const getUserMeSuccess = data => ({
	type: GET_USER_ME_SUCCEEDED,
	payload: data
});

export const getUserMeError = error => ({
	type: GET_USER_ME_FAILED,
	payload: error
});

export const updateUserPersonalInfo = values => ({
	type: UPDATE_USER_PERSONAL_INFO_STARTED,
	payload: values
});

export const updateUserPersonalInfoSuccess = data => ({
	type: UPDATE_USER_PERSONAL_INFO_SUCCEEDED,
	payload: data
});

export const updateUserPersonalInfoError = error => ({
	type: UPDATE_USER_PERSONAL_INFO_FAILED,
	payload: error
});

export const resetUpdateUserPersonalInfoComplete = () => ({
	type: RESET_UPDATE_USER_PERSONAL_INFO_COMPLETE
});

export const getUsers = values => ({
	type: GET_USERS_STARTED,
	payload: values
});

export const getUsersSuccess = data => ({
	type: GET_USERS_SUCCEEDED,
	payload: data
});

export const getUsersError = error => ({
	type: GET_USERS_FAILED,
	payload: error
});

export const getMyFavoriteUsers = values => ({
	type: GET_MY_FAVORITE_USERS_STARTED,
	payload: values
});

export const getMyFavoriteUsersSuccess = data => ({
	type: GET_MY_FAVORITE_USERS_SUCCEEDED,
	payload: data
});

export const getMyFavoriteUsersError = error => ({
	type: GET_MY_FAVORITE_USERS_FAILED,
	payload: error
});

export const getMySmiledProfiles = values => ({
	type: GET_MY_SMILED_PROFILES_STARTED,
	payload: values
});

export const getMySmiledProfilesSuccess = data => ({
	type: GET_MY_SMILED_PROFILES_SUCCEEDED,
	payload: data
});

export const getMySmiledProfilesError = error => ({
	type: GET_MY_SMILED_PROFILES_FAILED,
	payload: error
});

export const getMyLikedProfiles = values => ({
	type: GET_MY_LIKED_PROFILES_STARTED,
	payload: values
});

export const getMyLikedProfilesSuccess = data => ({
	type: GET_MY_LIKED_PROFILES_SUCCEEDED,
	payload: data
});

export const getMyLikedProfilesError = error => ({
	type: GET_MY_LIKED_PROFILES_FAILED,
	payload: error
});

export const getMyBlockedProfiles = values => ({
	type: GET_MY_BLOCKED_PROFILES_STARTED,
	payload: values
});

export const getMyBlockedProfilesSuccess = data => ({
	type: GET_MY_BLOCKED_PROFILES_SUCCEEDED,
	payload: data
});

export const getMyBlockedProfilesError = error => ({
	type: GET_MY_BLOCKED_PROFILES_FAILED,
	payload: error
});

export const getOnlineProfiles = values => ({
	type: GET_ONLINE_PROFILES_STARTED,
	payload: values
});

export const getOnlineProfilesSuccess = data => ({
	type: GET_ONLINE_PROFILES_SUCCEEDED,
	payload: data
});

export const getOnlineProfilesError = error => ({
	type: GET_ONLINE_PROFILES_FAILED,
	payload: error
});

export const userActivityLiked = values => ({
	type: USER_ACTIVITY_LIKED_STARTED,
	payload: values
});

export const userActivityLikedSuccess = data => ({
	type: USER_ACTIVITY_LIKED_SUCCEEDED,
	payload: data
});

export const userActivityLikedError = error => ({
	type: USER_ACTIVITY_LIKED_FAILED,
	payload: error
});

export const userActivityLikedReset = () => ({
	type: USER_ACTIVITY_LIKED_RESET
});

export const userActivityFavorite = values => ({
	type: USER_ACTIVITY_FAVORITE_STARTED,
	payload: values
});

export const userActivityFavoriteSuccess = data => ({
	type: USER_ACTIVITY_FAVORITE_SUCCEEDED,
	payload: data
});

export const userActivityFavoriteError = error => ({
	type: USER_ACTIVITY_FAVORITE_FAILED,
	payload: error
});

export const userActivityFavoriteReset = () => ({
	type: USER_ACTIVITY_FAVORITE_RESET
});

export const userActivitySmiled = values => ({
	type: USER_ACTIVITY_SMILED_STARTED,
	payload: values
});

export const userActivitySmiledSuccess = data => ({
	type: USER_ACTIVITY_SMILED_SUCCEEDED,
	payload: data
});

export const userActivitySmiledError = error => ({
	type: USER_ACTIVITY_SMILED_FAILED,
	payload: error
});

export const userActivitySmiledReset = () => ({
	type: USER_ACTIVITY_SMILED_RESET
});

export const userBlocked = values => ({
	type: USER_BLOCKED_STARTED,
	payload: values
});

export const userBlockedSuccess = data => ({
	type: USER_BLOCKED_SUCCEEDED,
	payload: data
});

export const userBlockedError = error => ({
	type: USER_BLOCKED_FAILED,
	payload: error
});

export const userBlockedReset = () => ({
	type: USER_BLOCKED_RESET,
});

export const userReports = values => ({
	type: USER_REPORTS_STARTED,
	payload: values
});

export const userReportsSuccess = data => ({
	type: USER_REPORTS_SUCCEEDED,
	payload: data
});

export const userReportsError = error => ({
	type: USER_REPORTS_FAILED,
	payload: error
});

export const userReportsReset = () => ({
	type: USER_REPORTS_RESET
});

export const userUpdateSpouseCandidate = values => ({
	type: USER_UPDATE_SPOUSE_CANDIDATE_STARTED,
	payload: values
});

export const userUpdateSpouseCandidateSuccess = data => ({
	type: USER_UPDATE_SPOUSE_CANDIDATE_SUCCEEDED,
	payload: data
});	

export const userUpdateSpouseCandidateError = error => ({
	type: USER_UPDATE_SPOUSE_CANDIDATE_FAILED,
	payload: error
});

export const userUpdateSpouseCandidateReset = () => ({
	type: USER_UPDATE_SPOUSE_CANIDATE_RESET
});

export const userUpdateCaracteristicFeature = values => ({
	type: USER_UPDATE_CARACTERISTIC_FEATURE_STARTED,
	payload: values
});

export const userUpdateCaracteristicFeatureSuccess = data => ({
	type: USER_UPDATE_CARACTERISTIC_FEATURE_SUCCEEDED,
	payload: data
});	

export const userUpdateCaracteristicFeatureError = error => ({
	type: USER_UPDATE_CARACTERISTIC_FEATURE_FAILED,
	payload: error
});

export const userUpdateCaracteristicFeatureReset = () => ({
	type: USER_UPDATE_CARACTERISTIC_FEATURE_RESET
});

export const getMyPosts = values => ({
	type: GET_MY_POSTS_STARTED,
	payload: values
});

export const getMyPostsSuccess = data => ({
	type: GET_MY_POSTS_SUCCEEDED,
	payload: data
});

export const getMyPostsError = error => ({
	type: GET_MY_POSTS_FAILED,
	payload: error
});