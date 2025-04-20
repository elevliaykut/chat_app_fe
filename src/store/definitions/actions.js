import {
    GET_CITIES_STARTED,
    GET_CITIES_SUCCEEDED,
    GET_CITIES_FAILED,
    GET_DISTRICTS_STARTED,
    GET_DISTRICTS_SUCCEEDED,
    GET_DISTRICTS_FAILED
} from './types';

export const getCities = values => ({
	type: GET_CITIES_STARTED,
	payload: values,
});

export const getCitiesSuccess = data => ({
	type: GET_CITIES_SUCCEEDED,
	payload: data,
});

export const getCitiesError = error => ({
	type: GET_CITIES_FAILED,
	payload: error,
});

export const getDistricts = values => ({
	type: GET_DISTRICTS_STARTED,
	payload: values,
});

export const getDistrictsSuccess = data => ({
	type: GET_DISTRICTS_SUCCEEDED,
	payload: data,
});

export const getDistrictsError = error => ({
	type: GET_DISTRICTS_FAILED,
	payload: error,
});