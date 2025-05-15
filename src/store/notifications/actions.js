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
    GET_ALL_NOTIFICATION_FAILED,
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

export const readNotification = values => ({
    type: READ_NOTIFICATION_STARTED,
    payload: values 
});

export const readNotificationSuccess = data => ({
    type: READ_NOTIFICATION_SUCCEEDED,
    payload: data
});

export const readNotificationError = error => ({
    type: READ_NOTIFICATION_FAILED,
    payload: error
});

export const readNotificationReset = () => ({
    type: READ_NOTIFICATION_RESET
});

export const getAllNotification = values => ({
    type: GET_ALL_NOTIFICATION_STARTED,
    payload: values
});

export const getAllNotificationSuccess = data => ({
    type: GET_ALL_NOTIFICATION_SUCCEEDED,
    payload: data
});

export const getAllNotificationError = error => ({
    type: GET_ALL_NOTIFICATION_FAILED,
    payload: error
});