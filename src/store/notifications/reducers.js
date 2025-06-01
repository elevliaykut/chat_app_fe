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
    RESET_SEND_MESSAGE_COMPLETED,
    INCOMING_MESSAGE_DELETE_STARTED,
    INCOMING_MESSAGE_DELETE_SUCCEEDED,
    INCOMING_MESSAGE_DELETE_FAILED,
    RESET_INCOMING_MESSAGE_DELETE_COMPLETE,
    OUTGOING_MESSAGE_DELETE_STARTED,
    OUTGOING_MESSAGE_DELETE_SUCCEEDED,
    OUTGOING_MESSAGE_DELETE_FAILED,
    RESET_OUTGOING_MESSAGE_DELETE_COMPLETE
} from './types';

const initialState = {
    isLoading: false,
    error: null,
    notifications: [],
    allNotifications: [],
    readNotificationComplete: false,
    deleteNotificationComplete: false,
    messageLogs: [],
    outGoingMessageLogs: [],
    messageIsLoading: false,
    messages: [],
    sendMessageCompleted: false,
    incomingMessageDeleteComplete: false,
    outgoingMessageDeleteComplete: false
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
        case DELETE_NOTIFICATION_STARTED:
            return {
                ...state,
                isLoading: true,
                deleteNotificationComplete: false
            };
        case DELETE_NOTIFICATION_SUCCEEDED:
            return {
                ...state,
                isLoading: false,
                deleteNotificationComplete: true
            };
        case DELETE_NOTIFICATION_FAILED:
            return {
                ...state,
                isLoading: false,
                deleteNotificationComplete: false 
            };
        case RESET_DELETE_NOTIFICATION:
            return {
                ...state,
                deleteNotificationComplete: false
            };
        case GET_MESSAGE_LOGS_STARTED:
            return {
                ...state,
                isLoading: true,
            };
        case GET_MESSAGE_LOGS_SUCCEEDED:
            return {
                ...state,
                isLoading: false,
                messageLogs: payload?.data
            };
        case GET_MESSAGE_LOGS_FAILED:
            return {
                ...state,
                isLoading: false,
                error: payload
            };
        case GET_OUTGOING_MESSAGE_LOGS_STARTED:
            return {
                ...state,
                isLoading: true
            };
        case GET_OUTGOING_MESSAGE_LOGS_SUCCEEDED:
            return {
                ...state,
                isLoading: false,
                outGoingMessageLogs: payload?.data
            };
        case GET_OUTGOING_MESSAGE_LOGS_FAILED:
            return {
                ...state,
                isLoading: false,
                error: payload
            };
        case GET_MESSAGES_STARTED:
            return {
                ...state,
                isLoading: true,
                messageIsLoading: true
            };
        case GET_MESSAGES_SUCCEEDED:
            return {
                ...state,
                isLoading: false,
                messageIsLoading: false,
                messages: payload?.data
            };
        case GET_MESSAGES_FAILED:
            return {
                ...state,
                isLoading: false,
                messageIsLoading: false,
                error: payload
            };
        case SEND_MESSAGE_STARTED:
            return {
                ...state,
                isLoading: true,
                sendMessageCompleted: false
            };
        case SEND_MESSAGE_SUCCEEDED:
            return {
                ...state,
                isLoading: false,
                sendMessageCompleted: true,
            };
        case SEND_MESSAGE_FAILED:
            return {
                ...state,
                isLoading: false,
                sendMessageCompleted: false,
                error: payload
            };
        case RESET_SEND_MESSAGE_COMPLETED:
            return {
                ...state,
                isLoading: false,
                sendMessageCompleted: false,
            };
        case INCOMING_MESSAGE_DELETE_STARTED:
            return {
                ...state,
                isLoading: true,
                incomingMessageDeleteComplete: false
            };
        case INCOMING_MESSAGE_DELETE_SUCCEEDED:
            return {
                ...state,
                isLoading: false,
                incomingMessageDeleteComplete: true
            };
        case INCOMING_MESSAGE_DELETE_FAILED:
            return {
                ...state,
                isLoading: false,
                incomingMessageDeleteComplete: false,
                error: payload
            };
        case RESET_INCOMING_MESSAGE_DELETE_COMPLETE:
            return {
                ...state,
                incomingMessageDeleteComplete: false,
            };
        case OUTGOING_MESSAGE_DELETE_STARTED:
            return {
                ...state,
                isLoading: true,
                outgoingMessageDeleteComplete: false
            };
        case OUTGOING_MESSAGE_DELETE_SUCCEEDED:
            return {
                ...state,
                isLoading: false,
                outgoingMessageDeleteComplete: true
            };
        case OUTGOING_MESSAGE_DELETE_FAILED:
            return {
                ...state,
                isLoading: false,
                outgoingMessageDeleteComplete: false,
                error: payload
            };
        case RESET_OUTGOING_MESSAGE_DELETE_COMPLETE:
            return {
                ...state,
                outgoingMessageDeleteComplete: false
            };
        default:
            return state;
    }
};
export default notifications;