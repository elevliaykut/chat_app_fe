import React from "react";
import { connect } from "react-redux";
import ProfileTextsPageOrganisms from '../../organisms/ProfileTextsPage';

import {
    adminGetProfileTexts,
    adminApproveProfileText,
    adminApproveProfileTextReset,
    userLogout
} from '../../../store/user/actions';

const mapStateToProps = state => ({
    isLoading: state?.user?.isLoading,
    error: state?.user?.error,
    adminProfileTexts: state?.user?.adminProfileTexts,
    adminApproveProfileTextComplete: state?.user?.adminApproveProfileTextComplete
});

const mapDispatchToProps = dispatch => ({
    userLogout: () => dispatch(userLogout()),
    adminGetProfileTexts: payload => dispatch(adminGetProfileTexts(payload)),
    adminApproveProfileText: payload => dispatch(adminApproveProfileText(payload)),
    adminApproveProfileTextReset: () => dispatch(adminApproveProfileTextReset())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileTextsPageOrganisms);