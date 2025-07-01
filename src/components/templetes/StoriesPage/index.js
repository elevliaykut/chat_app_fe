import React from "react";
import { connect } from "react-redux";
import StoriesPageOrganisms from '../../organisms/StoriesPage';

import {
    adminGetStories,
    adminApproveStory,
    adminApproveStoryReset,
    userLogout
} from '../../../store/user/actions';

const mapStateToProps = state => ({
    isLoading: state?.user?.isLoading,
    error: state?.user?.error,
    adminStories: state?.user?.adminStories,
    adminApproveStoryComplete: state?.user?.adminApproveStoryComplete
});

const mapDispatchToProps = dispatch => ({
    adminGetStories: payload => dispatch(adminGetStories(payload)),
    adminApproveStory: payload => dispatch(adminApproveStory(payload)),
    adminApproveStoryReset: payload => dispatch(adminApproveStoryReset(payload)),
    userLogout: () => dispatch(userLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(StoriesPageOrganisms);