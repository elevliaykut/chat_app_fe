import {
    GET_NOTIFICATIONS_STARTED,
    GET_NOTIFICATIONS_SUCCEEDED,
    GET_NOTIFICATIONS_FAILED
} from './types';

const initialState = {
    isLoading: false,
    error: null,
    notifications: []
};

const notifications = (state = initialState, action) => {
    const { payload } = action;

    switch(action.type) {
        case GET_NOTIFICATIONS_STARTED:
            return {
                ...state,
                isLoading: true
            };
        case GET_NOTIFICATIONS_SUCCEEDED:
            return {
                ...state,
                isLoading: false,
                notifications: payload
            };
        case GET_NOTIFICATIONS_FAILED:
            return {
                ...state,
                isLoading: false,
                error: payload
            };
        default:
            return state;
    }
};
export default notifications;