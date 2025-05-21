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
    DELETE_NOTIFICATION_STARTED,
    DELETE_NOTIFICATION_SUCCEEDED,
    DELETE_NOTIFICATION_FAILED,
    RESET_DELETE_NOTIFICATION,
    GET_MESSAGE_LOGS_STARTED,
    GET_MESSAGE_LOGS_SUCCEEDED,
    GET_MESSAGE_LOGS_FAILED,
    GET_OUTGOING_MESSAGE_LOGS_STARTED,
    GET_OUTGOING_MESSAGE_LOGS_SUCCEEDED,
    GET_OUTGOING_MESSAGE_LOGS_FAILED,
    GET_MESSAGES_STARTED,
    GET_MESSAGES_SUCCEEDED,
    GET_MESSAGES_FAILED,
    SEND_MESSAGE_STARTED,
    SEND_MESSAGE_SUCCEEDED,
    SEND_MESSAGE_FAILED,
    RESET_SEND_MESSAGE_COMPLETED
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

export const deleteNotification = values => ({
    type: DELETE_NOTIFICATION_STARTED,
    payload: values
});

export const deleteNotificationSuccess = data => ({
    type: DELETE_NOTIFICATION_SUCCEEDED,
    payload: data
});

export const deleteNotificationError = error => ({
    type: DELETE_NOTIFICATION_FAILED,
    payload: error
});

export const resetDeleteNotification = () => ({
    type: RESET_DELETE_NOTIFICATION
});

export const getMessageLogs = values => ({
    type: GET_MESSAGE_LOGS_STARTED,
    payload: values
});

export const getMessageLogsSuccess = data => ({
    type: GET_MESSAGE_LOGS_SUCCEEDED,
    payload: data
});

export const getMessageLogsError = error => ({
    type: GET_MESSAGE_LOGS_FAILED,
    payload: error
});

export const getOutGoingMessageLogs = values => ({
    type: GET_OUTGOING_MESSAGE_LOGS_STARTED,
    payload: values
});

export const getOutGoingMessageLogsSuccess = data => ({
    type: GET_OUTGOING_MESSAGE_LOGS_SUCCEEDED,
    payload: data
});

export const getOutGoingMessageLogsError = error => ({
    type: GET_OUTGOING_MESSAGE_LOGS_FAILED,
    payload: error
});

export const getMessages = values => ({
    type: GET_MESSAGES_STARTED,
    payload: values
});

export const getMessagesSuccess = data => ({
    type: GET_MESSAGES_SUCCEEDED,
    payload: data
});

export const getMessagesError = error => ({
    type: GET_MESSAGES_FAILED,
    payload: error
});

export const sendMessage = values => ({
    type: SEND_MESSAGE_STARTED,
    payload: values
});

export const sendMessageSuccess = data => ({
    type: SEND_MESSAGE_SUCCEEDED,
    payload: data
});

export const sendMessageError = error => ({
    type: SEND_MESSAGE_FAILED,
    payload: error
});

export const resetSendMessageCompleted = () => ({
    type: RESET_SEND_MESSAGE_COMPLETED
});