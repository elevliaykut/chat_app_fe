import {
    POST_ACTIVITY_LIKE_STARTED,
    POST_ACTIVITY_LIKE_SUCCEEDED,
    POST_ACTIVITY_LIKE_FAILED,
    POST_ACTIVITY_FAVORITE_STARTED,
    POST_ACTIVITY_FAVORITE_SUCCEEDED,
    POST_ACTIVITY_FAVORITE_FAILED,
    POST_ACTIVITY_SMILED_STARTED,
    POST_ACTIVITY_SMILED_SUCCEEDED,
    POST_ACTIVITY_SMILED_FAILED
} from './types';

const initialState = {
    isLoading: false,
    error: null
};

const post = (state = initialState, action) => {
    const { payload } = action;

    switch(action.type) {
        case POST_ACTIVITY_LIKE_STARTED:
            return {
                ...state,
                isLoading: true,
            };
        case POST_ACTIVITY_LIKE_SUCCEEDED:
            return {
                ...state,
                isLoading: false
            };
        case POST_ACTIVITY_LIKE_FAILED:
            return {
                ...state,
                isLoading: false,
                error: payload
            };
        case POST_ACTIVITY_FAVORITE_STARTED:
            return {
                ...state,
                isLoading: true
            };
        case POST_ACTIVITY_FAVORITE_SUCCEEDED:
            return {
                ...state,
                isLoading: false
            };
        case POST_ACTIVITY_FAVORITE_FAILED:
            return {
                ...state,
                isLoading: false,
                error: payload
            };
        case POST_ACTIVITY_SMILED_STARTED:
            return {
                ...state,
                isLoading: true
            };
        case POST_ACTIVITY_SMILED_SUCCEEDED:
            return {
                ...state,
                isLoading: false
            };
        case POST_ACTIVITY_SMILED_FAILED:
            return {
                ...state,
                isLoading: false,
                error: payload
            };
        default:
            return state;
    }
};
export default post;