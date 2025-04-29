import React from "react";
import { connect } from "react-redux";
import MemberDetailsOrganisms from "../../organisms/MemberDetailsPage";

import {
    getMemberDetails,
    getMemberPosts
} from '../../../store/member/actions';

import {
    postActivityLike,
    postActivityFavorite,
    postActivitySmiled
} from '../../../store/post/actions';

import {
    getUserMe,
} from '../../../store/user/actions';

const mapStateToProps = state => ({
    isLoading: state?.user?.isLoading,
    error: state?.user?.error,
    userMe: state?.user?.userMe,
    userMeLoading: state?.user?.userMeLoading,
    pageLoading: state?.user?.pageLoading,
    details: state?.member?.details,
    posts: state?.member?.posts,
    memberIsLoading: state?.member?.isLoading,
    memberPostLoading: state?.member?.memberPostLoading,
    postIsLoading: state?.post?.isLoading,
    postError: state?.post?.error
});

const mapDispatchToProps = dispatch => ({
    getUserMe: () => dispatch(getUserMe()),
    getMemberDetails: payload => dispatch(getMemberDetails(payload)),
    getMemberPosts: payload => dispatch(getMemberPosts(payload)),
    postActivityLike: payload => dispatch(postActivityLike(payload)),
    postActivityFavorite: payload => dispatch(postActivityFavorite(payload)),
    postActivitySmiled: payload => dispatch(postActivitySmiled(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(MemberDetailsOrganisms);