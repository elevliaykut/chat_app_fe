import React from "react";
import { connect } from "react-redux";
import MessagesPageOrganisms from '../../organisms/MessagesPage';

import {
    getUserMe,
    userLogout
} from '../../../store/user/actions';

import {
    getNotifications,
    getMessageLogs,
    getOutGoingMessageLogs,
    getMessages    
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
    messages: state?.notifications?.messages
});

const mapDispatchToProps = dispatch => ({
    getUserMe: () => dispatch(getUserMe()),
    userLogout: () => dispatch(userLogout()),
    getNotifications: payload => dispatch(getNotifications(payload)),
    getMessageLogs: () => dispatch(getMessageLogs()),
    getOutGoingMessageLogs: () => dispatch(getOutGoingMessageLogs()),
    getMessages: payload => dispatch(getMessages(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MessagesPageOrganisms);