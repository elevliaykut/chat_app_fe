import React from "react";
import { connect } from "react-redux";
import SearchLikeOrganisms from '../../organisms/SearchLikePage';

import {
    userActivityLiked,
    userActivityLikedReset,
    getUserMe,
    getUserMatch,
    resetUserMatch,
    getMatchPreviusUser,
    resetMatchPreviusUser,
    userLogout
} from '../../../store/user/actions';

import {
    getCities
} from '../../../store/definitions/actions';

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
    userActivityLikedCompleted: state?.user?.userActivityLikedCompleted,
    cities: state?.definitions?.cities,
    userMeLoading: state?.user?.userMeLoading,
    userMe: state?.user?.userMe,
    isLoadingDefinition: state?.definitions?.isLoading,
    matchUser: state?.user?.matchUser,
    matchUserComplete: state?.user?.matchUserComplete,
    matchPreviusUserComplete: state?.user?.matchPreviusUserComplete,
    isUserLoggedIn: state?.user?.isUserLoggedIn,
    notifications: state?.notifications?.notifications,
    notificationIsLoading: state?.notifications?.notificationIsLoading,
    messageIsLoading: state?.notifications?.messageIsLoading,
    messages: state?.notifications?.messages,
    sendMessageCompleted: state?.notifications?.sendMessageCompleted,
    isThatActive: state?.user?.isThatActive
});

const mapDispatchToProps = dispatch => ({
    userActivityLiked: payload => dispatch(userActivityLiked(payload)),
    userActivityLikedReset: () => dispatch(userActivityLikedReset()),
    getCities: () => dispatch(getCities()),
    getUserMe: () => dispatch(getUserMe()),
    getUserMatch: payload => dispatch(getUserMatch(payload)),
    resetUserMatch: () => dispatch(resetUserMatch()),
    getMatchPreviusUser: () => dispatch(getMatchPreviusUser()),
    resetMatchPreviusUser: () => dispatch(resetMatchPreviusUser()),
    userLogout: () => dispatch(userLogout()),
    getNotifications: payload => dispatch(getNotifications(payload)),
    getMessages: payload => dispatch(getMessages(payload)),
    sendMessage: payload => dispatch(sendMessage(payload)),
    resetSendMessageCompleted: () => dispatch(resetSendMessageCompleted())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchLikeOrganisms);