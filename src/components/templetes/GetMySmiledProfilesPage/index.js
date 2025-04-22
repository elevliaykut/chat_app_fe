import React from "react";
import { connect } from "react-redux";
import GetMySmiledProfilesPageOrganisms from '../../organisms/GetMySmiledProfilesPage';

import {
    getUserMe,
    userUploadProfilePhoto,
    resetUploadProfilePhotoComplete,
    updateUserPersonalInfo,
    resetUpdateUserPersonalInfoComplete,
    getMySmiledProfiles
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
    uploadProfilePhotoIsLoading: state?.user?.uploadProfilePhotoIsLoading,
    userMeLoading: state?.user?.userMeLoading,
    updateUserPersonalInfoComplete: state?.user?.updateUserPersonalInfoComplete,
    smiledProfiles: state?.user?.smiledProfiles,
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
    getMySmiledProfiles: () => dispatch(getMySmiledProfiles())
});

export default connect(mapStateToProps, mapDispatchToProps)(GetMySmiledProfilesPageOrganisms);