import {
    GET_NOTIFICATIONS_STARTED,
    GET_NOTIFICATIONS_SUCCEEDED,
    GET_NOTIFICATIONS_FAILED,
    READ_NOTIFICATION_STARTED,
    READ_NOTIFICATION_SUCCEEDED,
    READ_NOTIFICATION_FAILED,
    READ_NOTIFICATION_RESET,
    GET_ALL_NOTIFICATION_STARTED,
    GET_ALL_NOTIFICATION_SUCCEEDED,
    GET_ALL_NOTIFICATION_FAILED
} from './types';

const initialState = {
    isLoading: false,
    error: null,
    notifications: [],
    allNotifications: [],
    readNotificationComplete: false
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
        case READ_NOTIFICATION_STARTED:
            return {
                ...state,
                isLoading: true,
                readNotificationComplete: false
            };
        case READ_NOTIFICATION_SUCCEEDED:
            return {
                ...state,
                isLoading: false,
                readNotificationComplete: true
            };
        case READ_NOTIFICATION_FAILED:
            return {
                ...state,
                isLoading: false,
                readNotificationComplete: false,
                error: payload
            };
        case READ_NOTIFICATION_RESET:
            return {
                ...state,
                readNotificationComplete: false
            };
        case GET_ALL_NOTIFICATION_STARTED:
            return {
                ...state,
                isLoading: true
            };
        case GET_ALL_NOTIFICATION_SUCCEEDED:
            return {
                ...state,
                isLoading: false,
                allNotifications: payload?.data
            };
        case GET_ALL_NOTIFICATION_FAILED:
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