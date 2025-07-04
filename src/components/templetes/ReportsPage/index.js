import React from "react";
import { connect } from "react-redux";
import ReportsPageOrganisms from '../../organisms/ReportsPage';

import {
    userLogout,
    getUserReports,
    adminApproveReport,
    adminApproveReportReset
} from '../../../store/user/actions';

const mapStateToProps = state => ({
    isLoading: state?.user?.isLoading,
    error: state?.user?.error,
    userReports: state?.user?.userReports,
    adminApproveReportComplete: state?.user?.adminApproveReportComplete
});

const mapDispatchToProps = dispatch => ({
    userLogout: () => dispatch(userLogout()),
    getUserReports: payload => dispatch(getUserReports(payload)),
    adminApproveReport: payload => dispatch(adminApproveReport(payload)),
    adminApproveReportReset: () => dispatch(adminApproveReportReset())
});

export default connect(mapStateToProps, mapDispatchToProps)(ReportsPageOrganisms);