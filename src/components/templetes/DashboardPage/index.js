import React from "react";
import { connect } from "react-redux";
import DashboardPageOrganisms from '../../organisms/DashboardPage';

import {
    adminGetUsers,
    userLogout
} from '../../../store/user/actions';

const mapStateToProps = state => ({
    isLoading: state?.user?.isLoading,
    error: state?.user?.error,
    adminUsers: state?.user?.adminUsers
});

const mapDispatchToProps = dispatch => ({
    adminGetUsers: payload => dispatch(adminGetUsers(payload)),
    userLogout: () => dispatch(userLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPageOrganisms);