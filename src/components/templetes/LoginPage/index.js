import React from 'react';
import { connect } from 'react-redux';
import LoginPageOrganisms from '../../organisms/LoginPage';

import { 
	loginUser, 
	userRegister,
	resetError 
} from '../../../store/user/actions';


const mapStateToProps = state => ({
	isUserLoggedIn: state?.user?.isUserLoggedIn,
	error: state?.user?.error,
	content: state?.content?.content?.data,
	token: state?.user?.token,
	isLoading: state?.user?.isLoading,
});

const mapDispatchToProps = dispatch => ({
	loginUser: payload => dispatch(loginUser(payload)),
	userRegister: payload => dispatch(userRegister(payload)),
	resetError: () => dispatch(resetError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPageOrganisms);
