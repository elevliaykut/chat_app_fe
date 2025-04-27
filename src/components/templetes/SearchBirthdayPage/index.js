import React from "react";
import { connect } from "react-redux";
import SearchBirthdayOrganisms from "../../organisms/SearchBirthdayPage";

import {
    getUsers
} from '../../../store/user/actions';

const mapStateToProps = state => ({
    isLoading: state?.user?.isLoading,
    pageLoading: state?.user?.pageLoading,
    error: state?.user?.error,
    members: state?.user?.members,
});

const mapDispatchToProps = dispatch => ({
    getUsers: (payload) => dispatch(getUsers(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBirthdayOrganisms);
