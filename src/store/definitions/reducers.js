import {
    GET_CITIES_STARTED,
    GET_CITIES_SUCCEEDED,
    GET_CITIES_FAILED,
    GET_DISTRICTS_STARTED,
    GET_DISTRICTS_SUCCEEDED,
    GET_DISTRICTS_FAILED
} from './types';

const initialState = {
	cities: [],
	districts: [],
	error: null,
	isLoading: false,
};

const definitions = (state = initialState, action) => {
	const { payload } = action;
	switch (action.type) {
		case GET_CITIES_STARTED:
			return {
				...state,
				isLoading: true,
			};
		case GET_CITIES_SUCCEEDED:
			return {
				...state,
				isLoading: false,
				cities: payload?.data,
			};
		case GET_CITIES_FAILED:
			return {
				...state,
				isLoading: false,
				error: payload,
			};
		case GET_DISTRICTS_STARTED:
			return {
				...state,
				isLoading: true,
			};
		case GET_DISTRICTS_SUCCEEDED:
			return {
				...state,
				isLoading: false,
				districts: payload?.data,
			};
		case GET_DISTRICTS_FAILED:
			return {
				...state,
				isLoading: false,
				error: payload,
			};
		default:
			return state;
	}
};

export default definitions;