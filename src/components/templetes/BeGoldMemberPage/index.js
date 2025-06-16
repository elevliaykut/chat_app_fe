import React from "react";
import { connect } from "react-redux";
import BeGoldMemberPageOrganisms from '../../organisms/BeGoldMemberPage';

import {
    getUserMe,
    userLogout,
    createPayment,
    resetCreatePaymentComplete
} from '../../../store/user/actions';

import {
    getNotifications    
} from '../../../store/notifications/actions';

const mapStateToProps = state => ({
    isLoading: state?.user?.isLoading,
    paymentComplete: state?.user?.paymentComplete,
    error: state?.user?.error,
    pageLoading: state?.user?.pageLoading,
    pageLoading: state?.user?.pageLoading,
    userMe: state?.user?.userMe,
    userMeLoading: state?.user?.userMeLoading,
    isUserLoggedIn: state?.user?.isUserLoggedIn,
    notifications: state?.notifications?.notifications,
    notificationIsLoading: state?.notifications?.notificationIsLoading,
    paymentComplete: state?.user?.paymentComplete,
});

const mapDispatchToProps = dispatch => ({
    getUserMe: () => dispatch(getUserMe()),
    userLogout: () => dispatch(userLogout()),
    getNotifications: payload => dispatch(getNotifications(payload)),
    createPayment: payload => dispatch(createPayment(payload)),
    resetCreatePaymentComplete: () => dispatch(resetCreatePaymentComplete()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BeGoldMemberPageOrganisms);