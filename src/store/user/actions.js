import {
	USER_LOGIN_STARTED,
	USER_LOGIN_SUCCEEDED,
	USER_LOGIN_FAILED,
	USER_REGISTER_STARTED,
	USER_REGISTER_SUCCEEDED,
	USER_REGISTER_FAILED,
    USER_RESET_ERROR
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