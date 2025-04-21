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
	GET_MY_FAVORITE_USERS_FAILED
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