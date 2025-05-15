import React from "react";
import { connect } from "react-redux";
import NotificationPageOrganisms from '../../organisms/NotificationsPage';

import {
    getUserMe,
    userLogout
} from '../../../store/user/actions';

import {
    getNotifications,
    readNotification,
    readNotificationReset,
    getAllNotification,
    deleteNotification,
    resetDeleteNotification
} from '../../../store/notifications/actions';

const mapStateToProps = state => ({
    isLoading: state?.user?.isLoading,
    pageLoading: state?.user?.pageLoading,
    error: state?.user?.error,
    userMe: state?.user?.userMe,
    userMeLoading: state?.user?.userMeLoading,
    isUserLoggedIn: state?.user?.isUserLoggedIn,
    notifications: state?.notifications?.notifications,
    notificationIsLoading: state?.notifications?.isLoading,
    readNotificationComplete: state?.notifications?.readNotificationComplete,
    allNotifications: state?.notifications?.allNotifications,
    deleteNotificationComplete: state?.notifications?.deleteNotificationComplete
});

const mapDispatchToProps = dispatch => ({
    getUserMe: () => dispatch(getUserMe()),
    userLogout: () => dispatch(userLogout()),
    getNotifications: (payload) => dispatch(getNotifications(payload)),
    readNotification: () => dispatch(readNotification()),
    readNotificationReset:() => dispatch(readNotificationReset()),
    getAllNotification: () => dispatch(getAllNotification()),
    deleteNotification: payload => dispatch(deleteNotification(payload)),
    resetDeleteNotification: () => dispatch(resetDeleteNotification())
});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationPageOrganisms);