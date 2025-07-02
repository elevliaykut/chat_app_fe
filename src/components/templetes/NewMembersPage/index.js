import React from "react";
import { connect } from "react-redux";
import NewMembersPageOrganisms from '../../organisms/NewMembersPage';

import {
    getUsers,
    getUserMe,
    userUploadProfilePhoto,
    resetUploadProfilePhotoComplete,
    updateUserPersonalInfo,
    resetUpdateUserPersonalInfoComplete,
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
    userActivityLikedReset,
    userLogout,
    
    getStory,
    createStory,
    resetCreateStoryComplete,
    userUploadPhoto,
    getUserPhoto,
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

const mapStateToProps = state => ({
    isLoading: state?.user?.isLoading,
    error: state?.user?.error,
    pageLoading: state?.user?.pageLoading,
    members: state?.user?.members,
    pageLoading: state?.user?.pageLoading,
    userMe: state?.user?.userMe,
    uploadProfilePhotoComplete: state?.user?.uploadProfilePhotoComplete,
    userUpdateSpouseCandidateInfoComplete: state?.user?.userUpdateSpouseCandidateInfoComplete,
    userUpdateCaracteristicFeatureComplete: state?.user?.userUpdateCaracteristicFeatureComplete,
    uploadProfilePhotoIsLoading: state?.user?.uploadProfilePhotoIsLoading,
    userMeLoading: state?.user?.userMeLoading,
    updateUserPersonalInfoComplete: state?.user?.updateUserPersonalInfoComplete,
    cities: state?.definitions?.cities,
    districts: state?.definitions?.districts,
    userActivitySmiledCompleted: state?.user?.userActivitySmiledCompleted,
    userBlockedComplete: state?.user?.userBlockedComplete,
    userActivityFavoriteCompleted: state?.user?.userActivityFavoriteCompleted,
    userActivityLikedCompleted: state?.user?.userActivityLikedCompleted,
    isUserLoggedIn: state?.user?.isUserLoggedIn,
    notifications: state?.notifications?.notifications,
    notificationIsLoading: state?.notifications?.notificationIsLoading,

    messageIsLoading: state?.notifications?.messageIsLoading,
    messages: state?.notifications?.messages,
    sendMessageCompleted: state?.notifications?.sendMessageCompleted,

    photos: state?.user?.photos,
    stories: state?.user?.stories,
    createStoryComplete: state?.user?.createStoryComplete,
    myStories: state?.user?.myStories

});

const mapDispatchToProps = dispatch => ({
    getUsers: payload => dispatch(getUsers(payload)),
    getUserMe: () => dispatch(getUserMe()),
    userUploadProfilePhoto: payload => dispatch(userUploadProfilePhoto(payload)),
    resetUploadProfilePhotoComplete: (payload) => dispatch(resetUploadProfilePhotoComplete(payload)),
    updateUserPersonalInfo: payload => dispatch(updateUserPersonalInfo(payload)),
    resetUpdateUserPersonalInfoComplete: () => dispatch(resetUpdateUserPersonalInfoComplete()),
    getCities: () => dispatch(getCities()),
    getDistricts: payload => dispatch(getDistricts(payload)),
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
    userActivityLikedReset: () => dispatch(userActivityLikedReset()),
    userLogout: () => dispatch(userLogout()),
    getNotifications: payload => dispatch(getNotifications(payload)),

    getMessages: payload => dispatch(getMessages(payload)),
    sendMessage: payload => dispatch(sendMessage(payload)),
    resetSendMessageCompleted: () => dispatch(resetSendMessageCompleted()),

    getStory: payload => dispatch(getStory(payload)),
    createStory: payload => dispatch(createStory(payload)),
    resetCreateStoryComplete: () => dispatch(resetCreateStoryComplete()),
    userUploadPhoto: payload => dispatch(userUploadPhoto(payload)),
    getUserPhoto: payload => dispatch(getUserPhoto(payload)),
    getMyStory: payload => dispatch(getMyStory(payload))

});

export default connect(mapStateToProps, mapDispatchToProps)(NewMembersPageOrganisms);