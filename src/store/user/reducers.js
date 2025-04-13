import {
	USER_LOGIN_STARTED,
	USER_LOGIN_SUCCEEDED,
	USER_LOGIN_FAILED,
	USER_RESET_ERROR,
	USER_REGISTER_STARTED,
	USER_REGISTER_SUCCEEDED,
	USER_REGISTER_FAILED
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
	error: null,
	info: {},
	isLoading: false
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
				token: payload.data.token,
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
				isLoading: true
			};
		case USER_REGISTER_SUCCEEDED:
			return {
				...state,
				isLoading: false,
			};
		case USER_REGISTER_FAILED:
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
