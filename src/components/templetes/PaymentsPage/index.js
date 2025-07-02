import React from "react";
import { connect } from "react-redux";
import PaymentsPageOrganisms from '../../organisms/PaymentsPage';

import {
    userLogout,
    adminGetPayments,
    adminApprovePayment,
    adminApprovePaymentReset
} from '../../../store/user/actions';

const mapStateToProps = state => ({
    isLoading: state?.user?.isLoading,
    error: state?.user?.error,
    adminPayments: state?.user?.adminPayments,
    adminApprovePaymentComplete: state?.user?.adminApprovePaymentComplete
});

const mapDispatchToProps = dispatch => ({
    userLogout: () => dispatch(userLogout()),
    adminGetPayments: payload => dispatch(adminGetPayments(payload)),
    adminApprovePayment: payload => dispatch(adminApprovePayment(payload)),
    adminApprovePaymentReset: () => dispatch(adminApprovePaymentReset())
});

export default connect(mapStateToProps, mapDispatchToProps)(PaymentsPageOrganisms);