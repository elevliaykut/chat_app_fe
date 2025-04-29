import React from "react";
import { connect } from "react-redux";
import MemberDetailsOrganisms from "../../organisms/MemberDetailsPage";

import {
    getUserMe
} from '../../../store/user/actions';

const mapStateToProps = state => ({
    isLoading: state?.user?.isLoading,
    error: state?.user?.error,
    userMe: state?.user?.userMe,
    userMeLoading: state?.user?.userMeLoading,
    pageLoaing: state?.user?.pageLoaing
});

const mapDispatchToProps = dispatch => ({
    getUserMe: () => dispatch(getUserMe())
});

export default connect(mapStateToProps, mapDispatchToProps)(MemberDetailsOrganisms);