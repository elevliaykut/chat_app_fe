import {
    GET_MEMBER_DETAILS_STARTED,
    GET_MEMBER_DETAILS_SUCCEEDED,
    GET_MEMBER_DETAILS_FAILED,
    GET_MEMBER_POSTS_STARTED,
    GET_MEMBER_POSTS_SUCCEEDED,
    GET_MEMBER_POSTS_FAILED
} from './types';

const initialState = {
    details: {},
    posts: [],
    isLoading: false,
    memberPostLoading: false,
    error: null
};

const member = (state = initialState, action) => {
    const { payload } = action;

    switch(action.type) {
        case GET_MEMBER_DETAILS_STARTED:
            return {
                ...state,
                isLoading: true
            };
        case GET_MEMBER_DETAILS_SUCCEEDED:
            return {
                ...state,
                isLoading: false,
                details: payload?.data
            };
        case GET_MEMBER_DETAILS_FAILED:
            return {
                ...state,
                isLoading: false,
                error: payload
            };
        case GET_MEMBER_POSTS_STARTED:
            return {
                ...state,
                isLoading: true,
                memberPostLoading: true
            };
        case GET_MEMBER_POSTS_SUCCEEDED:
            return {
                ...state,
                isLoading: false,
                memberPostLoading: false,
                posts: payload?.data
            };
        case GET_MEMBER_POSTS_FAILED:
            return {
                ...state,
                isLoading: false,
                memberPostLoading: false,
                error: payload
            }
        default:
            return state;
    }
};
export default member;