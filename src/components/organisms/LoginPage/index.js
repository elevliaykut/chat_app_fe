import React, { useEffect, useState } from 'react';
import { Form, Input, Button } from 'antd';
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
	resetStatisticsError = () => {}
}) => {
	const onFinish = values => {
		resetError();
		var email = values.email;
		var password = values.password;
		loginUser({ email, password });
	};

	const onFinishFailed = errorInfo => {
		console.log('error: ', errorInfo);
		resetError();
	};

	useEffect(() => {
		resetError();
		resetStatisticsError();
	}, []);

	return (
		<>
			<Body>
				<LeftEpisode>
					<LogoEpisode>
						<Logo />
					</LogoEpisode>
					<PhoneMapIconEpisode>
						<LoginPhoneMaps />
					</PhoneMapIconEpisode>
				</LeftEpisode>
				<FormEpisode>
					<FormBody>
						<FormTitleEpisode>
							<H234PX
								color={ThemeConfig.primary}
								fontWeight={600}
							>
								{"Kamion'a"}
							</H234PX>
							<H234PX
								color={ThemeConfig.black}
								fontWeight={600}
								style={{ marginLeft: '8px' }}
							>
								Hoş Geldiniz!
							</H234PX>
						</FormTitleEpisode>
						<FormDescriptionEpisode>
							<P16PX
								color={ThemeConfig.blackFifth}
								fontWeight={400}
							>
								Kamion Yönetim Paneline Hoşgeldiniz. Lütfen
								aşağıdaki bilgileri doldurup oturum açın.
							</P16PX>
						</FormDescriptionEpisode>
						<FormInputsEpisode>
							<Form
								onFinish={onFinish}
								onFinishFailed={onFinishFailed}
							>
								<InputTitle>
									<P12PX
										fontWeight={500}
										color={ThemeConfig.black}
									>
										Email
									</P12PX>
								</InputTitle>
								<Form.Item
									name="email"
									rules={[
										{
											required: true,
											message:
												'Lütfen Email Alanını Girin',
										},
									]}
								>
									<Input
										style={{
											height: '44px',
											border: '1px solid #E3E6EE',
											borderRadius: '4px',
										}}
									/>
								</Form.Item>
								<InputTitle>
									<P12PX
										fontWeight={500}
										color={ThemeConfig.black}
									>
										Şifre
									</P12PX>
								</InputTitle>
								<Form.Item
									name="password"
									rules={[
										{
											required: true,
											message:
												'Lütfen Şifre Alanını Girin',
										},
									]}
								>
									<Input.Password
										style={{
											height: '44px',
											border: '1px solid #E3E6EE',
											borderRadius: '4px',
										}}
									/>
								</Form.Item>
								<Button
									type="primary"
									htmlType="submit"
									style={{
										width: '100%',
										height: '44px',
										borderRadius: '4px',
									}}
									loading={isLoading}
								>
									Login
								</Button>
							</Form>
						</FormInputsEpisode>
					</FormBody>
				</FormEpisode>
			</Body>
		</>
	);
};

export default LoginPage;
