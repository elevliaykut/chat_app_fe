import {
    GET_MEMBER_DETAILS_STARTED,
    GET_MEMBER_DETAILS_SUCCEEDED,
    GET_MEMBER_DETAILS_FAILED,
    GET_MEMBER_POSTS_STARTED,
    GET_MEMBER_POSTS_SUCCEEDED,
    GET_MEMBER_POSTS_FAILED
} from './types';

export const getMemberDetails = values => ({
    type: GET_MEMBER_DETAILS_STARTED,
    payload: values
});

export const getMemberDetailsSuccess = data => ({
    type: GET_MEMBER_DETAILS_SUCCEEDED,
    payload: data
});

export const getMemberDetailsError = error => ({
    type: GET_MEMBER_DETAILS_FAILED,
    payload: error
});

export const getMemberPosts = values => ({
    type: GET_MEMBER_POSTS_STARTED,
    payload: values
});

export const getMemberPostsSuccess = data => ({
    type: GET_MEMBER_POSTS_SUCCEEDED,
    payload: data
});

export const getMemberPostsError = error => ({
    type: GET_MEMBER_POSTS_FAILED,
    payload: error
});