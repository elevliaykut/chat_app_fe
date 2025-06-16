import {
    POST_ACTIVITY_LIKE_STARTED,
    POST_ACTIVITY_LIKE_SUCCEEDED,
    POST_ACTIVITY_LIKE_FAILED,
    RESET_POST_ACTIVITY_LIKE_COMPLETE,

    POST_ACTIVITY_FAVORITE_STARTED,
    POST_ACTIVITY_FAVORITE_SUCCEEDED,
    POST_ACTIVITY_FAVORITE_FAILED,
    RESET_POST_ACTIVITY_FAVORITE_COMPLETE,

    POST_ACTIVITY_SMILED_STARTED,
    POST_ACTIVITY_SMILED_SUCCEEDED,
    POST_ACTIVITY_SMILED_FAILED,
    RESET_POST_ACTIVITY_SMILED_COMPLETE
} from './types';

const initialState = {
    isLoading: false,
    error: null,
    activityLikeComplete: false,
    activityFavoriteComplete: false,
    activitySmileComplete: false,
};

const post = (state = initialState, action) => {
    const { payload } = action;

    switch(action.type) {
        case POST_ACTIVITY_LIKE_STARTED:
            return {
                ...state,
                isLoading: true,
                activityLikeComplete: false
            };
        case POST_ACTIVITY_LIKE_SUCCEEDED:
            return {
                ...state,
                isLoading: false,
                activityLikeComplete: true
            };
        case POST_ACTIVITY_LIKE_FAILED:
            return {
                ...state,
                isLoading: false,
                activityLikeComplete: false,
                error: payload
            };
        case RESET_POST_ACTIVITY_LIKE_COMPLETE:
            return {
                ...state,
                activityLikeComplete: false,
            };
        case POST_ACTIVITY_FAVORITE_STARTED:
            return {
                ...state,
                isLoading: true,
                activityFavoriteComplete: false,
            };
        case POST_ACTIVITY_FAVORITE_SUCCEEDED:
            return {
                ...state,
                isLoading: false,
                activityFavoriteComplete: true
            };
        case POST_ACTIVITY_FAVORITE_FAILED:
            return {
                ...state,
                isLoading: false,
                activityFavoriteComplete: false,
                error: payload
            };
        case RESET_POST_ACTIVITY_FAVORITE_COMPLETE:
            return {
                ...state,
                activityFavoriteComplete: false,
            };
        case POST_ACTIVITY_SMILED_STARTED:
            return {
                ...state,
                isLoading: true,
                activitySmileComplete: false,
            };
        case POST_ACTIVITY_SMILED_SUCCEEDED:
            return {
                ...state,
                isLoading: false,
                activitySmileComplete: true
            };
        case POST_ACTIVITY_SMILED_FAILED:
            return {
                ...state,
                isLoading: false,
                activitySmileComplete: false,
                error: payload
            };
        case RESET_POST_ACTIVITY_SMILED_COMPLETE:
                return {
                    ...state,
                    activitySmileComplete: false,
                };
        default:
            return state;
    }
};
export default post;