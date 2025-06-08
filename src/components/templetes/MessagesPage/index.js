import React from "react";
import { connect } from "react-redux";
import MessagesPageOrganisms from '../../organisms/MessagesPage';

import {
    getUserMe,
    userLogout,
    userBlocked,
    userBlockedReset,
    userReports,
    userReportsReset,
} from '../../../store/user/actions';

import {
    getNotifications,
    getMessageLogs,
    getOutGoingMessageLogs,
    getMessages,
    sendMessage,
    resetSendMessageCompleted,
    incomingMessageDelete,
    resetIncomingMessageDeleteComplete,
    outgoingMessageDelete,
    resetOutgoingMessageDeleteComplete,
    readIncomingMessage,
    resetReadIncomingMessageComplete    
} from '../../../store/notifications/actions';

const mapStateToProps = state => ({
    isLoading: state?.user?.isLoading,
    error: state?.user?.error,
    pageLoading: state?.user?.pageLoading,
    pageLoading: state?.user?.pageLoading,
    userMe: state?.user?.userMe,
    userMeLoading: state?.user?.userMeLoading,
    isUserLoggedIn: state?.user?.isUserLoggedIn,
    notifications: state?.notifications?.notifications,
    notificationIsLoading: state?.notifications?.isLoading,
    messageLogs: state?.notifications?.messageLogs,
    outGoingMessageLogs: state?.notifications?.outGoingMessageLogs,
    
    messageIsLoading: state?.notifications?.messageIsLoading,
    messages: state?.notifications?.messages,
    sendMessageCompleted: state?.notifications?.sendMessageCompleted,
    incomingMessageDeleteComplete: state?.notifications?.incomingMessageDeleteComplete,
    outgoingMessageDeleteComplete: state?.notifications?.outgoingMessageDeleteComplete,
    readIncomingMessageComplete: state?.notifications?.readIncomingMessageComplete,
    userBlockedComplete: state?.user?.userBlockedComplete,
    userReportsComplete: state?.user?.userReportsComplete,
});

const mapDispatchToProps = dispatch => ({
    getUserMe: () => dispatch(getUserMe()),
    userLogout: () => dispatch(userLogout()),
    getNotifications: payload => dispatch(getNotifications(payload)),
    getMessageLogs: () => dispatch(getMessageLogs()),
    getOutGoingMessageLogs: () => dispatch(getOutGoingMessageLogs()),
    
    getMessages: payload => dispatch(getMessages(payload)),
    sendMessage: payload => dispatch(sendMessage(payload)),
    resetSendMessageCompleted: () => dispatch(resetSendMessageCompleted()),

    incomingMessageDelete: payload => dispatch(incomingMessageDelete(payload)),
    resetIncomingMessageDeleteComplete: () => dispatch(resetIncomingMessageDeleteComplete()),

    outgoingMessageDelete: payload => dispatch(outgoingMessageDelete(payload)),
    resetOutgoingMessageDeleteComplete: () => dispatch(resetOutgoingMessageDeleteComplete()),
    readIncomingMessage: payload => dispatch(readIncomingMessage(payload)),
    resetReadIncomingMessageComplete: () => dispatch(resetReadIncomingMessageComplete()),
    userBlocked: payload => dispatch(userBlocked(payload)),
    userBlockedReset: () => dispatch(userBlockedReset()),
    userReports: payload => dispatch(userReports(payload)),
    userReportsReset: () => dispatch(userReportsReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MessagesPageOrganisms);