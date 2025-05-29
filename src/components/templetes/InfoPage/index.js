import React from "react";
import { connect } from "react-redux";
import InfoPageOrganisms from '../../organisms/InfoPage';

import {
    getUserMe,
    userLogout,
    updateUserPersonalInfo,
    resetUpdateUserPersonalInfoComplete
} from '../../../store/user/actions';

import {
    getNotifications    
} from '../../../store/notifications/actions';

import {
    getCities,
    getDistricts
} from '../../../store/definitions/actions';

const mapStateToProps = state => ({
    isLoading: state?.user?.isLoading,
    error: state?.user?.error,
    pageLoading: state?.user?.pageLoading,
    pageLoading: state?.user?.pageLoading,
    userMe: state?.user?.userMe,
    userMeLoading: state?.user?.userMeLoading,
    isUserLoggedIn: state?.user?.isUserLoggedIn,
    notifications: state?.notifications?.notifications,
    notificationIsLoading: state?.notifications?.notificationIsLoading,
    cities: state?.definitions?.cities,
    districts: state?.definitions?.districts,
    definitionIsLoading: state?.definitions?.isLoading,
    updateUserPersonalInfoComplete: state?.user?.updateUserPersonalInfoComplete
});

const mapDispatchToProps = dispatch => ({
    getUserMe: () => dispatch(getUserMe()),
    userLogout: () => dispatch(userLogout()),
    getNotifications: payload => dispatch(getNotifications(payload)),
    getCities: () => dispatch(getCities()),
    getDistricts: payload => dispatch(getDistricts(payload)),
    updateUserPersonalInfo: payload => dispatch(updateUserPersonalInfo(payload)),
    resetUpdateUserPersonalInfoComplete: () => dispatch(resetUpdateUserPersonalInfoComplete())
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoPageOrganisms);