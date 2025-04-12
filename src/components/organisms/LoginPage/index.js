import React, { useEffect, useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import {
	Body,
	LeftEpisode,
	LogoEpisode,
	PhoneMapIconEpisode,
	FormEpisode,
	FormTitleEpisode,
	FormDescriptionEpisode,
	FormInputsEpisode,
	InputTitle,
	FormBody,
} from './styles';

const LoginPage = ({
	loginUser = () => {},
	error,
	isLoading,
	resetError = () => {},
}) => {
	// Formun başarıyla tamamlanması
	const onFinish = (values) => {
		resetError();
		var email = values.email;
		var password = values.password;
	};

	// Formun başarısız olması durumunda
	const onFinishFailed = (errorInfo) => {
		console.log('error: ', errorInfo);
		resetError();
	};

	return (
		<Body>
			<Form>
				asd
			</Form>
		</Body>
	);
};

export default LoginPage;
