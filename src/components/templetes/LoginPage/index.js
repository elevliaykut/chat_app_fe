import React from 'react';
import { connect } from 'react-redux';
import LoginPageOrganisms from '../../organisms/LoginPage';

import { 
	loginUser, 
	userRegister,
	resetError,
	userRegisterCompletedReset 
} from '../../../store/user/actions';


const mapStateToProps = state => ({
	isUserLoggedIn: state?.user?.isUserLoggedIn,
	error: state?.user?.error,
	token: state?.user?.token,
	isLoading: state?.user?.isLoading,
	registerCompleted: state?.user?.registerCompleted
});

const mapDispatchToProps = dispatch => ({
	loginUser: payload => dispatch(loginUser(payload)),
	userRegister: payload => dispatch(userRegister(payload)),
	userRegisterCompletedReset: () => dispatch(userRegisterCompletedReset()),
	resetError: () => dispatch(resetError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPageOrganisms);
