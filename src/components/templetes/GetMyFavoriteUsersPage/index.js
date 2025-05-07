import React from "react";
import { connect } from "react-redux";
import GetMyFavoriteUsersPageOrganisms from '../../organisms/GetMyFavoriteUsersPage';

import {
    getUserMe,
    userUploadProfilePhoto,
    resetUploadProfilePhotoComplete,
    updateUserPersonalInfo,
    resetUpdateUserPersonalInfoComplete,
    getMyFavoriteUsers,
    userUpdateSpouseCandidate,
    userUpdateSpouseCandidateReset,
    userUpdateCaracteristicFeature,
    userUpdateCaracteristicFeatureReset,
    userActivitySmiled,
    userActivitySmiledReset,
    userBlocked,
    userBlockedReset,
    userActivityFavorite,
    userActivityFavoriteReset,
    userActivityLiked,
    userActivityLikedReset
} from '../../../store/user/actions';

import {
    getCities,
    getDistricts
} from '../../../store/definitions/actions';

const mapStateToProps = state => ({
    isLoading: state?.user?.isLoading,
    error: state?.user?.error,
    pageLoading: state?.user?.pageLoading,
    userMe: state?.user?.userMe,
    uploadProfilePhotoComplete: state?.user?.uploadProfilePhotoComplete,
    userUpdateSpouseCandidateInfoComplete: state?.user?.userUpdateSpouseCandidateInfoComplete,
    userUpdateCaracteristicFeatureComplete: state?.user?.userUpdateCaracteristicFeatureComplete,
    uploadProfilePhotoIsLoading: state?.user?.uploadProfilePhotoIsLoading,
    userMeLoading: state?.user?.userMeLoading,
    updateUserPersonalInfoComplete: state?.user?.updateUserPersonalInfoComplete,
    favoriteUsers: state?.user?.favoriteUsers,
    cities: state?.definitions?.cities,
    districts: state?.definitions?.districts,
    userActivitySmiledCompleted: state?.user?.userActivitySmiledCompleted,
    userBlockedComplete: state?.user?.userBlockedComplete,
    userActivityFavoriteCompleted: state?.user?.userActivityFavoriteCompleted,
    userActivityLikedCompleted: state?.user?.userActivityLikedCompleted
});

const mapDispatchToProps = dispatch => ({
    getUserMe: () => dispatch(getUserMe()),
    userUploadProfilePhoto: payload => dispatch(userUploadProfilePhoto(payload)),
    resetUploadProfilePhotoComplete: (payload) => dispatch(resetUploadProfilePhotoComplete(payload)),
    updateUserPersonalInfo: payload => dispatch(updateUserPersonalInfo(payload)),
    resetUpdateUserPersonalInfoComplete: () => dispatch(resetUpdateUserPersonalInfoComplete()),
    getCities: () => dispatch(getCities()),
    getDistricts: payload => dispatch(getDistricts(payload)),
    getMyFavoriteUsers: () => dispatch(getMyFavoriteUsers()),
    userUpdateSpouseCandidate: payload => dispatch(userUpdateSpouseCandidate(payload)),
    userUpdateSpouseCandidateReset: payload => dispatch(userUpdateSpouseCandidateReset(payload)),
    userUpdateCaracteristicFeature: payload => dispatch(userUpdateCaracteristicFeature(payload)),
    userUpdateCaracteristicFeatureReset: () => dispatch(userUpdateCaracteristicFeatureReset()),
    userActivitySmiled: payload => dispatch(userActivitySmiled(payload)),
    userActivitySmiledReset: () => dispatch(userActivitySmiledReset()),
    userBlocked: payload => dispatch(userBlocked(payload)),
    userBlockedReset: () => dispatch(userBlockedReset()),
    userActivityFavorite: payload => dispatch(userActivityFavorite(payload)),
    userActivityFavoriteReset: () => dispatch(userActivityFavoriteReset()),
    userActivityLiked: payload => dispatch(userActivityLiked(payload)),
    userActivityLikedReset: () => dispatch(userActivityLikedReset())
});

export default connect(mapStateToProps, mapDispatchToProps)(GetMyFavoriteUsersPageOrganisms);