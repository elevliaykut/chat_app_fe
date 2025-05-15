import React from "react";
import { connect } from "react-redux";
import MemberDetailsOrganisms from "../../organisms/MemberDetailsPage";

import {
    getMemberDetails,
    getMemberPosts
} from '../../../store/member/actions';

import {
    postActivityLike,
    postActivityFavorite,
    postActivitySmiled
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
    userLogout
} from '../../../store/user/actions';

const mapStateToProps = state => ({
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
    isUserLoggedIn: state?.user?.isUserLoggedIn
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
    userLogout: () => dispatch(userLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(MemberDetailsOrganisms);