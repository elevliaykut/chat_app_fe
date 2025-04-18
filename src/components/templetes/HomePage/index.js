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
    resetUpdateUserPersonalInfoComplete
} from '../../../store/user/actions';

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
    userMeLoading: state?.user?.userMeLoading,
    updateUserPersonalInfoComplete: state?.user?.updateUserPersonalInfoComplete
});

const mapDispatchToProps = dispatch => ({
    userPostList: payload => dispatch(userPostList(payload)),
    userCreatePost: payload => dispatch(userCreatePost(payload)),
    resetCreatePostComplete: () => dispatch(resetCreatePostComplete()),
    userUploadProfilePhoto: payload => dispatch(userUploadProfilePhoto(payload)),
    resetUploadProfilePhotoComplete: (payload) => dispatch(resetUploadProfilePhotoComplete(payload)),
    getUserMe: () => dispatch(getUserMe()),
    updateUserPersonalInfo: payload => dispatch(updateUserPersonalInfo(payload)),
    resetUpdateUserPersonalInfoComplete: () => dispatch(resetUpdateUserPersonalInfoComplete())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePageOrganisms);