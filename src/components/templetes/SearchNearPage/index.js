import React from "react";
import { connect } from "react-redux";
import SearchNearOrganisms from "../../organisms/SearchNearPage";

import {
    getUsers,
    getUserMe,
    userActivitySmiled,
    userActivitySmiledReset,
    userBlocked,
    userBlockedReset,
    userActivityFavorite,
    userActivityFavoriteReset,
    userActivityLiked,
    userActivityLikedReset
} from '../../../store/user/actions';

const mapStateToProps = state => ({
    isLoading: state?.user?.isLoading,
    pageLoading: state?.user?.pageLoading,
    error: state?.user?.error,
    members: state?.user?.members,
    userMe: state?.user?.userMe,
    userMeLoading: state?.user?.userMeLoading,
    userActivitySmiledCompleted: state?.user?.userActivitySmiledCompleted,
    userBlockedComplete: state?.user?.userBlockedComplete,
    userActivityFavoriteCompleted: state?.user?.userActivityFavoriteCompleted,
    userActivityLikedCompleted: state?.user?.userActivityLikedCompleted
});

const mapDispatchToProps = dispatch => ({
    getUsers: (payload) => dispatch(getUsers(payload)),
    getUserMe: () => dispatch(getUserMe()),
    userActivitySmiled: payload => dispatch(userActivitySmiled(payload)),
    userActivitySmiledReset: () => dispatch(userActivitySmiledReset()),
    userBlocked: payload => dispatch(userBlocked(payload)),
    userBlockedReset: () => dispatch(userBlockedReset()),
    userActivityFavorite: payload => dispatch(userActivityFavorite(payload)),
    userActivityFavoriteReset: () => dispatch(userActivityFavoriteReset()),
    userActivityLiked: payload => dispatch(userActivityLiked(payload)),
    userActivityLikedReset: () => dispatch(userActivityLikedReset())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchNearOrganisms);
