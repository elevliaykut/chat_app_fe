import React from "react";
import { connect } from "react-redux";
import MySettingsOrganisms from "../../organisms/MySettingsPage";

import {
    getUserMe,
    userLogout,
    updateUserPersonalInfo,
    resetUpdateUserPersonalInfoComplete,
    userFreezeAccount,
    resetUserFreezeAccountComplete,
    userDeleteAccount,
    resetUserDeleteAccountComplete,
    userChangeEmail,
    resetUserChangeEmailComplete,
    userChangePassword,
    resetUserChangePasswordComplete
} from '../../../store/user/actions';

import {
    getNotifications    
} from '../../../store/notifications/actions';

const mapStateToProps = state => ({
    isLoading: state?.user?.isLoading,
    error: state?.user?.error,
    pageLoading: state?.user?.pageLoading,
    userMe: state?.user?.userMe,
    userMeLoading: state?.user?.userMeLoading,
    isUserLoggedIn: state?.user?.isUserLoggedIn,
    notifications: state?.notifications?.notifications,
    notificationIsLoading: state?.notifications?.notificationIsLoading,
    updateUserPersonalInfoComplete: state?.user?.updateUserPersonalInfoComplete,
    freezeAccountComplete: state?.user?.freezeAccountComplete,
    deleteAccountComplete: state?.user?.deleteAccountComplete,
    changeEmailComplete: state?.user?.changeEmailComplete,
    changePasswordComplete: state?.user?.changePasswordComplete,
});

const mapDispatchToProps = dispatch => ({
    getUserMe: () => dispatch(getUserMe()),
    userLogout: () => dispatch(userLogout()),
    updateUserPersonalInfo: payload => dispatch(updateUserPersonalInfo(payload)),
    resetUpdateUserPersonalInfoComplete: () => dispatch(resetUpdateUserPersonalInfoComplete()),
    getNotifications: payload => dispatch(getNotifications(payload)),
    userFreezeAccount: payload => dispatch(userFreezeAccount(payload)),
    resetUserFreezeAccountComplete: () => dispatch(resetUserFreezeAccountComplete()),
    userDeleteAccount: () => dispatch(userDeleteAccount()),
    resetUserDeleteAccountComplete: () => dispatch(resetUserDeleteAccountComplete()),
    userChangeEmail: payload => dispatch(userChangeEmail(payload)),
    resetUserChangeEmailComplete: () => dispatch(resetUserChangeEmailComplete()),
    userChangePassword: payload => dispatch(userChangePassword(payload)),
    resetUserChangePasswordComplete: () => dispatch(resetUserChangePasswordComplete())
});

export default connect(mapStateToProps, mapDispatchToProps)(MySettingsOrganisms);