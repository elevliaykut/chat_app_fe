import React from "react";
import { connect } from "react-redux";
import GetMyBlockedProfilesPageOrganisms from '../../organisms/GetMyBlockedProfilesPage';

import {
    getUserMe,
    userUploadProfilePhoto,
    resetUploadProfilePhotoComplete,
    updateUserPersonalInfo,
    resetUpdateUserPersonalInfoComplete,
    getMyBlockedProfiles,
    userUpdateSpouseCandidate,
    userUpdateSpouseCandidateReset,
    userUpdateCaracteristicFeature,
    userUpdateCaracteristicFeatureReset
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
    blockedProfiles: state?.user?.blockedProfiles,
    cities: state?.definitions?.cities,
    districts: state?.definitions?.districts,
});

const mapDispatchToProps = dispatch => ({
    getUserMe: () => dispatch(getUserMe()),
    userUploadProfilePhoto: payload => dispatch(userUploadProfilePhoto(payload)),
    resetUploadProfilePhotoComplete: (payload) => dispatch(resetUploadProfilePhotoComplete(payload)),
    updateUserPersonalInfo: payload => dispatch(updateUserPersonalInfo(payload)),
    resetUpdateUserPersonalInfoComplete: () => dispatch(resetUpdateUserPersonalInfoComplete()),
    getCities: () => dispatch(getCities()),
    getDistricts: payload => dispatch(getDistricts(payload)),
    getMyBlockedProfiles: () => dispatch(getMyBlockedProfiles()),
    userUpdateSpouseCandidate: payload => dispatch(userUpdateSpouseCandidate(payload)),
    userUpdateSpouseCandidateReset: payload => dispatch(userUpdateSpouseCandidateReset(payload)),
    userUpdateCaracteristicFeature: payload => dispatch(userUpdateCaracteristicFeature(payload)),
    userUpdateCaracteristicFeatureReset: () => dispatch(userUpdateCaracteristicFeatureReset())
});

export default connect(mapStateToProps, mapDispatchToProps)(GetMyBlockedProfilesPageOrganisms);