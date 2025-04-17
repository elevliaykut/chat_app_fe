import React from "react";
import { connect } from "react-redux";
import HomePageOrganisms from '../../organisms/HomePage';

import {
    userPostList,
    userCreatePost,
    resetCreatePostComplete
} from '../../../store/user/actions';

const mapStateToProps = state => ({
    posts: state?.user?.posts,
    isLoading: state?.user?.isLoading,
    error: state?.user?.error,
    pageLoading: state?.user?.pageLoading,
    token: state?.user?.token,
    createPostLoading: state?.user?.createPostLoading,
    createPostComplete: state?.user?.createPostComplete,
});

const mapDispatchToProps = dispatch => ({
    userPostList: payload => dispatch(userPostList(payload)),
    userCreatePost: payload => dispatch(userCreatePost(payload)),
    resetCreatePostComplete: () => dispatch(resetCreatePostComplete()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePageOrganisms);