import React from "react";
import { connect } from "react-redux";
import MemberDetailsOrganisms from "../../organisms/MemberDetailsPage";

import {
    getMemberDetails,
    getMemberPosts
} from '../../../store/member/actions';

import {
    getNotifications,
    getMessages,
    sendMessage,
    resetSendMessageCompleted    
} from '../../../store/notifications/actions';

import {
    postActivityLike,
    resetPostActivityLikeComplete,

    postActivityFavorite,
    resetPostActivityFavoriteComplete,

    postActivitySmiled,
    resetPostActivitySmiledComplete
} from '../../../store/post/actions';

import {
    getUserMe,
    userActivityLiked,
    userActivityFavorite,
    userActivitySmiled,
    userActivityLikedReset,
    userActivityFavoriteReset,
    userActivitySmiledReset,
    userReports,
    userReportsReset,
    userBlocked,
    userBlockedReset,
    createUserProfileVisitLog,
    userLogout,
    getUserPhoto
} from '../../../store/user/actions';

const mapStateToProps = state => ({
    activityLikeComplete: state?.post?.activityLikeComplete,
    activityFavoriteComplete: state?.post?.activityFavoriteComplete,
    activitySmileComplete: state?.post?.activitySmileComplete,

    isLoading: state?.user?.isLoading,
    error: state?.user?.error,
    userMe: state?.user?.userMe,
    userMeLoading: state?.user?.userMeLoading,
    pageLoading: state?.user?.pageLoading,
    details: state?.member?.details,
    posts: state?.member?.posts,
    memberIsLoading: state?.member?.isLoading,
    memberPostLoading: state?.member?.memberPostLoading,
    postIsLoading: state?.post?.isLoading,
    postError: state?.post?.error,
    userActivityLikedCompleted: state?.user?.userActivityLikedCompleted,
    userActivityFavoriteCompleted: state?.user?.userActivityFavoriteCompleted,
    userActivitySmiledCompleted: state?.user?.userActivitySmiledCompleted,
    userReportsComplete: state?.user?.userReportsComplete,
    userBlockedComplete: state?.user?.userBlockedComplete,
    isUserLoggedIn: state?.user?.isUserLoggedIn,
    notifications: state?.notifications?.notifications,
    notificationIsLoading: state?.notifications?.notificationIsLoading,
    messageIsLoading: state?.notifications?.messageIsLoading,
    messages: state?.notifications?.messages,
    sendMessageCompleted: state?.notifications?.sendMessageCompleted,
    photos: state?.user?.photos,
    userPhotoIsLoading: state?.user?.userPhotoIsLoading
});

const mapDispatchToProps = dispatch => ({
    getUserMe: () => dispatch(getUserMe()),
    getMemberDetails: payload => dispatch(getMemberDetails(payload)),
    getMemberPosts: payload => dispatch(getMemberPosts(payload)),
    postActivityLike: payload => dispatch(postActivityLike(payload)),
    postActivityFavorite: payload => dispatch(postActivityFavorite(payload)),
    postActivitySmiled: payload => dispatch(postActivitySmiled(payload)),
    userActivityLiked: payload => dispatch(userActivityLiked(payload)),
    userActivityFavorite: payload => dispatch(userActivityFavorite(payload)),
    userActivitySmiled: payload => dispatch(userActivitySmiled(payload)),
    userActivityLikedReset: () => dispatch(userActivityLikedReset()),
    userActivityFavoriteReset: () => dispatch(userActivityFavoriteReset()),
    userActivitySmiledReset: () => dispatch(userActivitySmiledReset()),
    userReports: payload => dispatch(userReports(payload)),
    userReportsReset: () => dispatch(userReportsReset()),
    userBlocked: payload => dispatch(userBlocked(payload)),
    userBlockedReset: () => dispatch(userBlockedReset()),
    createUserProfileVisitLog: payload => dispatch(createUserProfileVisitLog(payload)),
    userLogout: () => dispatch(userLogout()),
    getNotifications: payload => dispatch(getNotifications(payload)),
    getMessages: payload => dispatch(getMessages(payload)),
    sendMessage: payload => dispatch(sendMessage(payload)),
    resetSendMessageCompleted: () => dispatch(resetSendMessageCompleted()),

    resetPostActivityLikeComplete: () => dispatch(resetPostActivityLikeComplete()),
    resetPostActivityFavoriteComplete: () => dispatch(resetPostActivityFavoriteComplete()),
    resetPostActivitySmiledComplete: () => dispatch(resetPostActivitySmiledComplete()),

    getUserPhoto: payload => dispatch(getUserPhoto(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MemberDetailsOrganisms);