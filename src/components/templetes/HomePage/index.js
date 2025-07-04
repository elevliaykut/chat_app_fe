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
    userUploadPhotoReset,
    getUserPhoto,
    
    userReports,
    userReportsReset,

    getMyStory,
} from '../../../store/user/actions';

import {
    getNotifications,
    getMessages,
    sendMessage,
    resetSendMessageCompleted
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
    userReportsComplete: state?.user?.userReportsComplete,

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
    notificationIsLoading: state?.notifications?.isLoading,
    messageIsLoading: state?.notifications?.messageIsLoading,
    messages: state?.notifications?.messages,
    sendMessageCompleted: state?.notifications?.sendMessageCompleted,
    myStories: state?.user?.myStories,
    userUploadPhotoComplete: state?.user?.userUploadPhotoComplete
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
    getUserPhoto: payload => dispatch(getUserPhoto(payload)),
    getMessages: payload => dispatch(getMessages(payload)),
    sendMessage: payload => dispatch(sendMessage(payload)),
    resetSendMessageCompleted: () => dispatch(resetSendMessageCompleted()),
    resetPostActivityLikeComplete: () => dispatch(resetPostActivityLikeComplete()),
    resetPostActivityFavoriteComplete: () => dispatch(resetPostActivityFavoriteComplete()),
    resetPostActivitySmiledComplete: () => dispatch(resetPostActivitySmiledComplete()),
    userReports: payload => dispatch(userReports(payload)),
    userReportsReset: () => dispatch(userReportsReset()),
    getMyStory: payload => dispatch(getMyStory(payload)),

    userUploadPhotoReset: () => dispatch(userUploadPhotoReset()),

});

export default connect(mapStateToProps, mapDispatchToProps)(HomePageOrganisms);