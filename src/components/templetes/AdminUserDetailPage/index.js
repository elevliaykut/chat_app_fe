import React from "react";
import { connect } from "react-redux";
import AdminUserDetailPageOrganisms from '../../organisms/AdminUserDetailPage';

import {
    userLogout
} from '../../../store/user/actions';

const mapStateToProps = state => ({
    isLoading: state?.user?.isLoading,
    error: state?.user?.error,
});

const mapDispatchToProps = dispatch => ({
    userLogout: () => dispatch(userLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminUserDetailPageOrganisms);