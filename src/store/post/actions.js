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

