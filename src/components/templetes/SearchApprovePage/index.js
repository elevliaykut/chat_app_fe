import React from "react";
import { connect } from "react-redux";
import SearchApproveOrganisms from "../../organisms/SearchApprovePage";

import {
    getUsers,
    userActivitySmiled,
    userActivitySmiledReset,
    userBlocked,
    userBlockedReset,
    userActivityFavorite,
    userActivityFavoriteReset,
    userActivityLiked,
    userActivityLikedReset,
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
    members: state?.user?.members,
    userActivitySmiledCompleted: state?.user?.userActivitySmiledCompleted,
    userBlockedComplete: state?.user?.userBlockedComplete,
    userActivityFavoriteCompleted: state?.user?.userActivityFavoriteCompleted,
    userActivityLikedCompleted: state?.user?.userActivityLikedCompleted,
    userMe: state?.user?.userMe,
    userMeLoading: state?.user?.userMeLoading,
    isUserLoggedIn: state?.user?.isUserLoggedIn,
    notifications: state?.notifications?.notifications,
    notificationIsLoading: state?.notifications?.notificationIsLoading
});

const mapDispatchToProps = dispatch => ({
    getUsers: (payload) => dispatch(getUsers(payload)),
    userActivitySmiled: payload => dispatch(userActivitySmiled(payload)),
    userActivitySmiledReset: () => dispatch(userActivitySmiledReset()),
    userBlocked: payload => dispatch(userBlocked(payload)),
    userBlockedReset: () => dispatch(userBlockedReset()),
    userActivityFavorite: payload => dispatch(userActivityFavorite(payload)),
    userActivityFavoriteReset: () => dispatch(userActivityFavoriteReset()),
    userActivityLiked: payload => dispatch(userActivityLiked(payload)),
    userActivityLikedReset: () => dispatch(userActivityLikedReset()),
    getUserMe: () => dispatch(getUserMe()),
    userLogout: () => dispatch(userLogout()),
    getNotifications: payload => dispatch(getNotifications(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchApproveOrganisms);
