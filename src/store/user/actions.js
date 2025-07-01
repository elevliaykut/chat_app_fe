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
	GET_APPROVE_USERS_STARTED,
	GET_APPROVE_USERS_SUCCEEDED,
	GET_APPROVE_USERS_FAILED,
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
	GET_MY_POSTS_FAILED,
	CREATE_USER_PROFILE_VISIT_LOG_STARTED,
	CREATE_USER_PROFILE_VISIT_LOG_SUCCEEDED,
	CREATE_USER_PROFILE_VISIT_LOG_FAILED,
	GET_USER_PROFILE_VISIT_STARTED,
	GET_USER_PROFILE_VISIT_SUCCEEDED,
	GET_USER_PROFILE_VISIT_FAILED,
	GET_USER_MATCH_STARTED,
	GET_USER_MATCH_SUCCEEDED,
	GET_USER_MATCH_FAILED,
	RESET_USER_MATCH,
	GET_MATCH_PREVIUS_USER_STARTED,
	GET_MATCH_PREVIUS_USER_SUCCEEDED,
	GET_MATCH_PREVIUS_USER_FAILED,
	RESET_MATCH_PREVIUS_USER,
	USER_LOGOUT_STARTED,
	USER_LOGOUT_SUCCEEDED,
	USER_LOGOUT_FAILED,
	GET_STORY_STARTED,
	GET_STORY_SUCCEEDED,
	GET_STORY_FAILED,
	CREATE_STORY_STARTED,
	CREATE_STORY_SUCCEEDED,
	CREATE_STORY_FAILED,
	RESET_CREATE_STORY_COMPLETE,
	USER_UPLOAD_PHOTO_STARTED,
	USER_UPLOAD_PHOTO_SUCCEEDED,
	USER_UPLOAD_PHOTO_FAILED,
	GET_USER_PHOTO_STARTED,
	GET_USER_PHOTO_SUCCEEDED,
	GET_USER_PHOTO_FAILED,
	USER_FREEZE_ACCOUNT_STARTED,
	USER_FREEZE_ACCOUNT_SUCCEEDED,
	USER_FREEZE_ACCOUNT_FAILED,
	RESET_USER_FREEZE_ACCOUNT_COMPLETE,
	USER_DELETE_ACCOUNT_STARTED,
	USER_DELETE_ACCOUNT_SUCCEEDED,
	USER_DELETE_ACCOUNT_FAILED,
	RESET_USER_DELETE_ACCOUNT_COMPLETE,
	USER_CHANGE_EMAIL_STARTED,
	USER_CHANGE_EMAIL_SUCCEEDED,
	USER_CHANGE_EMAIL_FAILED,
	RESET_USER_CHANGE_EMAIL_COMPLETE,
	USER_CHANGE_PASSWORD_STARTED,
	USER_CHANGE_PASSWORD_SUCCEEDED,
	USER_CHANGE_PASSWORD_FAILED,
	RESET_USER_CHANGE_PASSWORD_COMPLETE,
	CREATE_PAYMENT_STARTED,
	CREATE_PAYMENT_SUCCEEDED,
	CREATE_PAYMENT_FAILED,
	RESET_CREATE_PAYMENT_COMPLETE,
	ADMIN_GET_USERS_STARTED,
	ADMIN_GET_USERS_SUCCEEDED,
	ADMIN_GET_USERS_FAILED,
	ADMIN_GET_USER_DETAILS_STARTED,
	ADMIN_GET_USER_DETAILS_SUCCEEDED,
	ADMIN_GET_USER_DETAILS_FAILED,
	ADMIN_DELETE_USER_STARTED,
	ADMIN_DELETE_USER_SUCCEEDED,
	ADMIN_DELETE_USER_FAILED,
	ADMIN_DELETE_USER_RESET,
	ADMIN_GET_STORIES_STARTED,
	ADMIN_GET_STORIES_SUCCEEDED,
	ADMIN_GET_STORIES_FAILED,
	ADMIN_APPROVE_STORY_STARTED,
	ADMIN_APPROVE_STORY_SUCCEEDED,
	ADMIN_APPROVE_STORY_FAILED,
	ADMIN_APPROVE_STORY_RESET
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

export const getApproveUsers = values => ({
	type: GET_APPROVE_USERS_STARTED,
	payload: values
});

export const getApproveUsersSuccess = data => ({
	type: GET_APPROVE_USERS_SUCCEEDED,
	payload: data
});

export const getApproveUsersError = error => ({
	type: GET_APPROVE_USERS_FAILED,
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

export const createUserProfileVisitLog = values => ({
	type: CREATE_USER_PROFILE_VISIT_LOG_STARTED,
	payload: values
});

export const createUserProfileVisitLogSuccess = data => ({
	type: CREATE_USER_PROFILE_VISIT_LOG_SUCCEEDED,
	payload: data
});

export const createUserProfileVisitLogError = error => ({
	type: CREATE_USER_PROFILE_VISIT_LOG_FAILED,
	payload: error
});

export const getUserProfileVisit = values => ({
	type: GET_USER_PROFILE_VISIT_STARTED,
	payload: values
});

export const getUserProfileVisitSuccess = data => ({
	type: GET_USER_PROFILE_VISIT_SUCCEEDED,
	payload: data
});

export const getUserProfileVisitError = error => ({
	type: GET_USER_PROFILE_VISIT_FAILED,
	payload: error
});

export const getUserMatch = values => ({
	type: GET_USER_MATCH_STARTED,
	payload: values
});

export const getUserMatchSuccess = data => ({
	type: GET_USER_MATCH_SUCCEEDED,
	payload: data
});

export const getUserMatchError = error => ({
	type: GET_USER_MATCH_FAILED,
	payload: error
});

export const resetUserMatch = () => ({
	type: RESET_USER_MATCH
});

export const getMatchPreviusUser = values => ({
	type: GET_MATCH_PREVIUS_USER_STARTED,
	payload: values
});

export const getMatchPreviusUserSuccess = data => ({
	type: GET_MATCH_PREVIUS_USER_SUCCEEDED,
	payload: data
});

export const getMatchPreviusUserError = error => ({
	type: GET_MATCH_PREVIUS_USER_FAILED,
	payload: error
});

export const resetMatchPreviusUser = () => ({
	type: RESET_MATCH_PREVIUS_USER
});

export const userLogout = values => ({
	type: USER_LOGOUT_STARTED,
	payload: values
});

export const userLogoutSuccess = data => ({
	type: USER_LOGOUT_SUCCEEDED,
	payload: data
});

export const userLogoutError = error => ({
	type: USER_LOGOUT_FAILED,
	payload: error
});

export const getStory = values => ({
	type: GET_STORY_STARTED,
	payload: values
});

export const getStorySuccess = data => ({
	type: GET_STORY_SUCCEEDED,
	payload: data
});

export const getStoryError = error => ({
	type: GET_STORY_FAILED,
	payload: error
});

export const createStory = values => ({
	type: CREATE_STORY_STARTED,
	payload: values
});

export const createStorySuccess = data => ({
	type: CREATE_STORY_SUCCEEDED,
	payload: data
});

export const createStoryError = error => ({
	type: CREATE_STORY_FAILED,
	payload: error
});

export const resetCreateStoryComplete = () => ({
	type: RESET_CREATE_STORY_COMPLETE
});

export const userUploadPhoto = values => ({
	type: USER_UPLOAD_PHOTO_STARTED,
	payload: values
});

export const userUploadPhotoSuccess = data => ({
	type: USER_UPLOAD_PHOTO_SUCCEEDED,
	payload: data
});	

export const userUploadPhotoError = error => ({
	type: USER_UPLOAD_PHOTO_FAILED,
	payload: error
});

export const getUserPhoto = values => ({
	type: GET_USER_PHOTO_STARTED,
	payload: values
});

export const getUserPhotoSuccess = data => ({
	type: GET_USER_PHOTO_SUCCEEDED,
	payload: data
});

export const getUserPhotoError = error => ({
	type: GET_USER_PHOTO_FAILED,
	payload: error
});

export const userFreezeAccount = values => ({
	type: USER_FREEZE_ACCOUNT_STARTED,
	payload: values
});

export const userFreezeAccountSuccess = data => ({
	type: USER_FREEZE_ACCOUNT_SUCCEEDED,
	payload: data
});

export const userFreezeAccountError = error => ({
	type: USER_FREEZE_ACCOUNT_FAILED,
	payload: error
});

export const resetUserFreezeAccountComplete = () => ({
	type: RESET_USER_FREEZE_ACCOUNT_COMPLETE
});

export const userDeleteAccount = values => ({
	type: USER_DELETE_ACCOUNT_STARTED,
	payload: values
});

export const userDeleteAccountSuccess = data => ({
	type: USER_DELETE_ACCOUNT_SUCCEEDED,
	payload: data
});	

export const userDeleteAccountError = error => ({
	type: USER_DELETE_ACCOUNT_FAILED,
	payload: error
});

export const resetUserDeleteAccountComplete = () => ({
	type: RESET_USER_DELETE_ACCOUNT_COMPLETE,
});

export const userChangeEmail = values => ({
	type: USER_CHANGE_EMAIL_STARTED,
	payload: values
});

export const userChangeEmailSuccess = data => ({
	type: USER_CHANGE_EMAIL_SUCCEEDED,
	payload: data
});

export const userChangeEmailError = error => ({
	type: USER_CHANGE_EMAIL_FAILED,
	payload: error
});

export const resetUserChangeEmailComplete = () => ({
	type: RESET_USER_CHANGE_EMAIL_COMPLETE
});

export const userChangePassword = values => ({
	type: USER_CHANGE_PASSWORD_STARTED,
	payload: values
});

export const userChangePasswordSuccess = data => ({
	type: USER_CHANGE_PASSWORD_SUCCEEDED,
	payload: data
});

export const userChangePasswordError = error => ({
	type: USER_CHANGE_PASSWORD_FAILED,
	payload: error
});

export const resetUserChangePasswordComplete = () => ({
	type: RESET_USER_CHANGE_PASSWORD_COMPLETE
});

export const createPayment = values => ({
	type: CREATE_PAYMENT_STARTED,
	payload: values
});

export const createPaymentSuccess = data => ({
	typr: CREATE_PAYMENT_SUCCEEDED,
	payload: data
});

export const createPaymentError = error => ({
	type: CREATE_PAYMENT_FAILED,
	payload: error
});

export const resetCreatePaymentComplete = () => ({
	type: RESET_CREATE_PAYMENT_COMPLETE
});

export const adminGetUsers = values => ({
	type: ADMIN_GET_USERS_STARTED,
	payload: values
});

export const adminGetUsersSuccess = data => ({
	type: ADMIN_GET_USERS_SUCCEEDED,
	payload: data
});

export const adminGetUsersError = error => ({
	type: ADMIN_GET_USERS_FAILED,
	payload: error
});

export const adminGetUserDetails = values => ({
	type: ADMIN_GET_USER_DETAILS_STARTED,
	payload: values
});

export const adminGetUserDetailsSuccess = data => ({
	type: ADMIN_GET_USER_DETAILS_SUCCEEDED,
	payload: data
});

export const adminGetUserDetailsError = error => ({
	type: ADMIN_GET_USER_DETAILS_FAILED,
	payload: error
});

export const adminDeleteUser = values => ({
	type: ADMIN_DELETE_USER_STARTED,
	payload: values
});

export const adminDeleteUserSuccess = data => ({
	type: ADMIN_DELETE_USER_SUCCEEDED,
	payload: data
});

export const adminDeleteUserError = error => ({
	type: ADMIN_DELETE_USER_FAILED,
	payload: error
});

export const adminDeleteUserReset = () => ({
	type: ADMIN_DELETE_USER_RESET
});

export const adminGetStories = values => ({
	type: ADMIN_GET_STORIES_STARTED,
	payload: values
});

export const adminGetStoriesSuccess = data => ({
	type: ADMIN_GET_STORIES_SUCCEEDED,
	payload: data
});

export const adminGetStoriesError = error => ({
	type: ADMIN_GET_STORIES_FAILED,
	payload: error
});

export const adminApproveStory = values => ({
	type: ADMIN_APPROVE_STORY_STARTED,
	payload: values
});

export const adminApproveStorySuccess = data => ({
	type: ADMIN_APPROVE_STORY_SUCCEEDED,
	payload: data
});

export const adminApproveStoryError = error => ({
	type: ADMIN_APPROVE_STORY_FAILED,
	payload: error
});

export const adminApproveStoryReset = () => ({
	type: ADMIN_APPROVE_STORY_RESET
});