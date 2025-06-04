import React from "react";
import { connect } from "react-redux";
import HomePageOrganisms from '../../organisms/HomePage';

import {
    userPostList,
    userCreatePost,
    resetCreatePostComplete,
    userUploadProfilePhoto,
    resetUploadProfilePhotoComplete,
    getUserMe,
    updateUserPersonalInfo,
    resetUpdateUserPersonalInfoComplete,
    userUpdateSpouseCandidate,
    userUpdateSpouseCandidateReset,
    userUpdateCaracteristicFeature,
    userUpdateCaracteristicFeatureReset,
    userLogout,
    getStory,
    createStory,
    resetCreateStoryComplete,
    userUploadPhoto,
    getUserPhoto
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
    postActivityFavorite,
    postActivitySmiled
} from '../../../store/post/actions';

const mapStateToProps = state => ({
    posts: state?.user?.posts,
    isLoading: state?.user?.isLoading,
    error: state?.user?.error,
    pageLoading: state?.user?.pageLoading,
    token: state?.user?.token,
    createPostLoading: state?.user?.createPostLoading,
    createPostComplete: state?.user?.createPostComplete,
    uploadProfilePhotoComplete: state?.user?.uploadProfilePhotoComplete,
    uploadProfilePhotoIsLoading: state?.user?.uploadProfilePhotoIsLoading,
    userMe: state?.user?.userMe,
    photos: state?.user?.photos,
    stories: state?.user?.stories,
    createStoryComplete: state?.user?.createStoryComplete,
    userMeLoading: state?.user?.userMeLoading,
    updateUserPersonalInfoComplete: state?.user?.updateUserPersonalInfoComplete,
    userUpdateSpouseCandidateInfoComplete: state?.user?.userUpdateSpouseCandidateInfoComplete,
    userUpdateCaracteristicFeatureComplete: state?.user?.userUpdateCaracteristicFeatureComplete,
    cities: state?.definitions?.cities,
    districts: state?.definitions?.districts,
    postIsLoading: state?.post?.isLoading,
    postError: state?.post?.error,
    isUserLoggedIn: state?.user?.isUserLoggedIn,
    notifications: state?.notifications?.notifications,
    notificationIsLoading: state?.notifications?.isLoading
});

const mapDispatchToProps = dispatch => ({
    userPostList: payload => dispatch(userPostList(payload)),
    userCreatePost: payload => dispatch(userCreatePost(payload)),
    resetCreatePostComplete: () => dispatch(resetCreatePostComplete()),
    userUploadProfilePhoto: payload => dispatch(userUploadProfilePhoto(payload)),
    resetUploadProfilePhotoComplete: (payload) => dispatch(resetUploadProfilePhotoComplete(payload)),
    getUserMe: () => dispatch(getUserMe()),
    updateUserPersonalInfo: payload => dispatch(updateUserPersonalInfo(payload)),
    resetUpdateUserPersonalInfoComplete: () => dispatch(resetUpdateUserPersonalInfoComplete()),
    getCities: () => dispatch(getCities()),
    getDistricts: payload => dispatch(getDistricts(payload)),
    postActivityLike: payload => dispatch(postActivityLike(payload)),
    postActivityFavorite: payload => dispatch(postActivityFavorite(payload)),
    postActivitySmiled: payload => dispatch(postActivitySmiled(payload)),
    userUpdateSpouseCandidate: payload => dispatch(userUpdateSpouseCandidate(payload)),
    userUpdateSpouseCandidateReset: payload => dispatch(userUpdateSpouseCandidateReset(payload)),
    userUpdateCaracteristicFeature: payload => dispatch(userUpdateCaracteristicFeature(payload)),
    userUpdateCaracteristicFeatureReset: () => dispatch(userUpdateCaracteristicFeatureReset()),
    userLogout: () => dispatch(userLogout()),
    getNotifications: (payload) => dispatch(getNotifications(payload)),
    getStory: payload => dispatch(getStory(payload)),
    createStory: payload => dispatch(createStory(payload)),
    resetCreateStoryComplete: () => dispatch(resetCreateStoryComplete()),
    userUploadPhoto: payload => dispatch(userUploadPhoto(payload)),
    getUserPhoto: payload => dispatch(getUserPhoto(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePageOrganisms);