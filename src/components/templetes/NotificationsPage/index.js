import React from "react";
import { connect } from "react-redux";
import NotificationPageOrganisms from '../../organisms/NotificationsPage';

import {
    getUserMe,
    userLogout
} from '../../../store/user/actions';

import {
    getNotifications
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
});

const mapDispatchToProps = dispatch => ({
    getUserMe: () => dispatch(getUserMe()),
    userLogout: () => dispatch(userLogout()),
    getNotifications: () => dispatch(getNotifications())
});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationPageOrganisms);