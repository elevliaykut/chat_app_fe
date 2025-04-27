import React from "react";
import { connect } from "react-redux";
import SearchNearOrganisms from "../../organisms/SearchNearPage";

import {
    getUsers,
    getUserMe
} from '../../../store/user/actions';

const mapStateToProps = state => ({
    isLoading: state?.user?.isLoading,
    pageLoading: state?.user?.pageLoading,
    error: state?.user?.error,
    members: state?.user?.members,
    userMe: state?.user?.userMe,
    userMeLoading: state?.user?.userMeLoading
});

const mapDispatchToProps = dispatch => ({
    getUsers: (payload) => dispatch(getUsers(payload)),
    getUserMe: () => dispatch(getUserMe())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchNearOrganisms);
