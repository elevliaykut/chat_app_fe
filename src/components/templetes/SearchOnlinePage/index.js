import React from "react";
import { connect } from "react-redux";
import SearchOnlineOrganisms from '../../organisms/SearchOnlinePage';

import {
    getOnlineProfiles,
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
    getNotifications,
    getMessages,
    sendMessage,
    resetSendMessageCompleted    
} from '../../../store/notifications/actions';

const mapStateToProps = state => ({
    isLoading: state?.user?.isLoading,
    pageLoading: state?.user?.pageLoading,
    error: state?.user?.error,
    onlineProfiles: state?.user?.onlineProfiles,
    userActivitySmiledCompleted: state?.user?.userActivitySmiledCompleted,
    userBlockedComplete: state?.user?.userBlockedComplete,
    userActivityFavoriteCompleted: state?.user?.userActivityFavoriteCompleted,
    userActivityLikedCompleted: state?.user?.userActivityLikedCompleted,
    userMe: state?.user?.userMe,
    userMeLoading: state?.user?.userMeLoading,
    isUserLoggedIn: state?.user?.isUserLoggedIn,
    notifications: state?.notifications?.notifications,
    notificationIsLoading: state?.notifications?.notificationIsLoading,
    messageIsLoading: state?.notifications?.messageIsLoading,
    messages: state?.notifications?.messages,
    sendMessageCompleted: state?.notifications?.sendMessageCompleted,
    isThatActive: state?.user?.isThatActive
});

const mapDispatchToProps = dispatch => ({
    getOnlineProfiles: () => dispatch(getOnlineProfiles()),
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
    getNotifications: payload => dispatch(getNotifications(payload)),
    getMessages: payload => dispatch(getMessages(payload)),
    sendMessage: payload => dispatch(sendMessage(payload)),
    resetSendMessageCompleted: () => dispatch(resetSendMessageCompleted())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchOnlineOrganisms);