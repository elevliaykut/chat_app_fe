import React from "react";
import { connect } from "react-redux";
import PaymentPageOrganisms from '../../organisms/PaymentPage';

import {
    getUserMe,
    userLogout
} from '../../../store/user/actions';

import {
    getNotifications    
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
    notificationIsLoading: state?.notifications?.notificationIsLoading
});

const mapDispatchToProps = dispatch => ({
    getUserMe: () => dispatch(getUserMe()),
    userLogout: () => dispatch(userLogout()),
    getNotifications: payload => dispatch(getNotifications(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(PaymentPageOrganisms);