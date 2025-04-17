import React from "react";
import { connect } from "react-redux";
import HomePageOrganisms from '../../organisms/HomePage';

import {
    userPostList
} from '../../../store/user/actions';

const mapStateToProps = state => ({
    posts: state?.user?.posts,
    isLoading: state?.user?.isLoading,
    error: state?.user?.error,
    pageLoading: state?.user?.pageLoading,
    token: state?.user?.token
});

const mapDispatchToProps = dispatch => ({
    userPostList: payload => dispatch(userPostList(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePageOrganisms);