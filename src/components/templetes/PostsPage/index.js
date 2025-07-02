import React from "react";
import { connect } from "react-redux";
import PostsPageOrganisms from '../../organisms/PostsPage';

import {
    adminGetPosts,
    adminApprovePost,
    adminApprovePostReset,
    userLogout
} from '../../../store/user/actions';

const mapStateToProps = state => ({
    isLoading: state?.user?.isLoading,
    error: state?.user?.error,
    adminPosts: state?.user?.adminPosts,
    adminApprovePostComplete: state?.user?.adminApprovePostComplete
});

const mapDispatchToProps = dispatch => ({
    userLogout: () => dispatch(userLogout()),
    adminGetPosts: payload => dispatch(adminGetPosts(payload)),
    adminApprovePost: payload => dispatch(adminApprovePost(payload)),
    adminApprovePostReset: () => dispatch(adminApprovePostReset())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsPageOrganisms);