import {
    GET_NOTIFICATIONS_STARTED,
    GET_NOTIFICATIONS_SUCCEEDED,
    GET_NOTIFICATIONS_FAILED
} from './types';

export const getNotifications = values => ({
    type: GET_NOTIFICATIONS_STARTED,
    payload: values
});

export const getNotificationsSuccess = data => ({
    type: GET_NOTIFICATIONS_SUCCEEDED,
    payload: data
});

export const getNotificationsError = error => ({
    type: GET_NOTIFICATIONS_FAILED,
    payload: error
});