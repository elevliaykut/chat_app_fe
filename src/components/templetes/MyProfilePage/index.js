import React from "react";
import { connect } from "react-redux";
import MyProfileOrganisms from "../../organisms/MyProfilePage";

import {
    getUserMe,
    userUploadProfilePhoto,
    resetUploadProfilePhotoComplete,
    updateUserPersonalInfo,
    resetUpdateUserPersonalInfoComplete,
    userUpdateSpouseCandidate,
    userUpdateSpouseCandidateReset,
    userUpdateCaracteristicFeature,
    userUpdateCaracteristicFeatureReset,
    getMyPosts,
    userLogout,
    userUploadPhoto,
    userUploadPhotoReset,
    getUserPhoto,
    userDeletePhoto,
    userDeletePhotoReset,
} from '../../../store/user/actions';

import {
    getNotifications    
} from '../../../store/notifications/actions';

import {
    getCities,
    getDistricts
} from '../../../store/definitions/actions';

import {
    postActivityLike,
    resetPostActivityLikeComplete,

    postActivityFavorite,
    resetPostActivityFavoriteComplete,

    postActivitySmiled,
    resetPostActivitySmiledComplete
} from '../../../store/post/actions';

const mapStateToProps = state => ({
    activityLikeComplete: state?.post?.activityLikeComplete,
    activityFavoriteComplete: state?.post?.activityFavoriteComplete,
    activitySmileComplete: state?.post?.activitySmileComplete,

    isLoading: state?.user?.isLoading,
    error: state?.user?.error,
    pageLoading: state?.user?.pageLoading,
    userMe: state?.user?.userMe,
    userMeLoading: state?.user?.userMeLoading,
    uploadProfilePhotoComplete: state?.user?.uploadProfilePhotoComplete,
    uploadProfilePhotoIsLoading: state?.user?.uploadProfilePhotoIsLoading,
    updateUserPersonalInfoComplete: state?.user?.updateUserPersonalInfoComplete,
    userUpdateSpouseCandidateInfoComplete: state?.user?.userUpdateSpouseCandidateInfoComplete,
    userUpdateCaracteristicFeatureComplete: state?.user?.userUpdateCaracteristicFeatureComplete,
    cities: state?.definitions?.cities,
    districts: state?.definitions?.districts,
    myPosts: state?.user?.myPosts,
    postIsLoading: state?.post?.isLoading,
    postError: state?.post?.error,
    isUserLoggedIn: state?.user?.isUserLoggedIn,
    notifications: state?.notifications?.notifications,
    notificationIsLoading: state?.notifications?.notificationIsLoading,
    photos: state?.user?.photos,
    userPhotoIsLoading: state?.user?.userPhotoIsLoading,
    userUploadPhotoComplete: state?.user?.userUploadPhotoComplete,
    userDeletePhotoComplete: state?.user?.userDeletePhotoComplete

});

const mapDispatchToProps = dispatch => ({
    getUserMe: () => dispatch(getUserMe()),
    userUploadProfilePhoto: payload => dispatch(userUploadProfilePhoto(payload)),
    resetUploadProfilePhotoComplete: (payload) => dispatch(resetUploadProfilePhotoComplete(payload)),
    updateUserPersonalInfo: payload => dispatch(updateUserPersonalInfo(payload)),
    resetUpdateUserPersonalInfoComplete: () => dispatch(resetUpdateUserPersonalInfoComplete()),
    getCities: () => dispatch(getCities()),
    getDistricts: payload => dispatch(getDistricts(payload)),
    postActivityLike: payload => dispatch(postActivityLike(payload)),
    postActivityFavorite: payload => dispatch(postActivityFavorite(payload)),
    postActivitySmiled: payload => dispatch(postActivitySmiled(payload)),
    userUpdateSpouseCandidate: payload => dispatch(userUpdateSpouseCandidate(payload)),
    userUpdateSpouseCandidateReset: () => dispatch(userUpdateSpouseCandidateReset()),
    userUpdateCaracteristicFeature: payload => dispatch(userUpdateCaracteristicFeature(payload)),
    userUpdateCaracteristicFeatureReset: () => dispatch(userUpdateCaracteristicFeatureReset()),
    getMyPosts: payload => dispatch(getMyPosts(payload)),
    userLogout: () => dispatch(userLogout()),
    getNotifications: payload => dispatch(getNotifications(payload)),
    userUploadPhoto: payload => dispatch(userUploadPhoto(payload)),
    getUserPhoto: payload => dispatch(getUserPhoto(payload)),
    resetPostActivityLikeComplete: () => dispatch(resetPostActivityLikeComplete()),
    resetPostActivityFavoriteComplete: () => dispatch(resetPostActivityFavoriteComplete()),
    resetPostActivitySmiledComplete: () => dispatch(resetPostActivitySmiledComplete()),
    userUploadPhotoReset: () => dispatch(userUploadPhotoReset()),
    userDeletePhoto: payload => dispatch(userDeletePhoto(payload)),
    userDeletePhotoReset: () => dispatch(userDeletePhotoReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyProfileOrganisms);