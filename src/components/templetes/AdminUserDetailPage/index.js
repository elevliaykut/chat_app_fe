import React from "react";
import { connect } from "react-redux";
import AdminUserDetailPageOrganisms from '../../organisms/AdminUserDetailPage';

import {
    userLogout,
    adminGetUserDetails,
    adminDeleteUser,
    adminDeleteUserReset
} from '../../../store/user/actions';

const mapStateToProps = state => ({
    isLoading: state?.user?.isLoading,
    error: state?.user?.error,
    adminUserDetails: state?.user?.adminUserDetails,
    adminDeleteUserComplete: state?.user?.adminDeleteUserComplete
});

const mapDispatchToProps = dispatch => ({
    userLogout: () => dispatch(userLogout()),
    adminGetUserDetails: payload => dispatch(adminGetUserDetails(payload)),
    adminDeleteUser: payload => dispatch(adminDeleteUser(payload)),
    adminDeleteUserReset: () => dispatch(adminDeleteUserReset())
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminUserDetailPageOrganisms);