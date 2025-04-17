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
	USER_POST_LIST_FAILED
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