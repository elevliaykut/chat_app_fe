import React from "react";
import { connect } from "react-redux";
import SearchDetailOrganisms from '../../organisms/SearchDetailPage';

import {
    userActivitySmiled,
    userActivitySmiledReset,
    userBlocked,
    userBlockedReset,
    userActivityFavorite,
    userActivityFavoriteReset,
    userActivityLiked,
    userActivityLikedReset,
    getUserMe,
    getUsers,
    getOnlineProfiles,
    userLogout
} from '../../../store/user/actions';

import {
    getCities
} from '../../../store/definitions/actions';

const mapStateToProps = state => ({
    isLoading: state?.user?.isLoading,
    pageLoading: state?.user?.pageLoading,
    error: state?.user?.error,
    userActivitySmiledCompleted: state?.user?.userActivitySmiledCompleted,
    userBlockedComplete: state?.user?.userBlockedComplete,
    userActivityFavoriteCompleted: state?.user?.userActivityFavoriteCompleted,
    userActivityLikedCompleted: state?.user?.userActivityLikedCompleted,
    cities: state?.definitions?.cities,
    isLoadingDefinition: state?.definitions?.isLoading,
    userMe: state?.user?.userMe,
    members: state?.user?.members,
    memberIsLoading: state?.user?.memberIsLoading,
    userMeLoading: state?.user?.userMeLoading,
    filterUserIsLoading: state?.user?.filterUserIsLoading,
    isUserLoggedIn: state?.user?.isUserLoggedIn
});

const mapDispatchToProps = dispatch => ({
    userActivitySmiled: payload => dispatch(userActivitySmiled(payload)),
    userActivitySmiledReset: () => dispatch(userActivitySmiledReset()),
    userBlocked: payload => dispatch(userBlocked(payload)),
    userBlockedReset: () => dispatch(userBlockedReset()),
    userActivityFavorite: payload => dispatch(userActivityFavorite(payload)),
    getUsers: (payload) => dispatch(getUsers(payload)),
    userActivityFavoriteReset: () => dispatch(userActivityFavoriteReset()),
    userActivityLiked: payload => dispatch(userActivityLiked(payload)),
    userActivityLikedReset: () => dispatch(userActivityLikedReset()),
    getCities: () => dispatch(getCities()),
    getUserMe: () => dispatch(getUserMe()),
    getOnlineProfiles: () => dispatch(getOnlineProfiles()),
    userLogout: () => dispatch(userLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchDetailOrganisms);