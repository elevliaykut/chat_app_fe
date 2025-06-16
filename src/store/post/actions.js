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

export const postActivityLike = values => ({
    type: POST_ACTIVITY_LIKE_STARTED,
    payload: values
});

export const postActivityLikeSuccess = data => ({
    type: POST_ACTIVITY_LIKE_SUCCEEDED,
    payload: data
});

export const postActivityLikeError = error => ({
    type: POST_ACTIVITY_LIKE_FAILED,
    payload: error 
});

export const resetPostActivityLikeComplete = () => ({
    type: RESET_POST_ACTIVITY_LIKE_COMPLETE
});

export const postActivityFavorite = values => ({
    type: POST_ACTIVITY_FAVORITE_STARTED,
    payload: values
});

export const postActivityFavoriteSuccess = data => ({
    type: POST_ACTIVITY_FAVORITE_SUCCEEDED,
    payload: data
});

export const postActivityFavoriteError = error => ({
    type: POST_ACTIVITY_FAVORITE_FAILED,
    payload: error
});

export const resetPostActivityFavoriteComplete = () => ({
    type: RESET_POST_ACTIVITY_FAVORITE_COMPLETE
});

export const postActivitySmiled = values => ({
    type: POST_ACTIVITY_SMILED_STARTED,
    payload: values
});

export const postActivitySmiledSuccess = data => ({
    type: POST_ACTIVITY_SMILED_SUCCEEDED,
    payload: data
});

export const postActivitySmiledError = error => ({
    type: POST_ACTIVITY_SMILED_FAILED,
    payload: error
});

export const resetPostActivitySmiledComplete = () => ({
    type: RESET_POST_ACTIVITY_SMILED_COMPLETE
});

