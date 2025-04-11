import React from 'react';
import { Helmet } from 'react-helmet';
import LoginPage from '../components/templetes/LoginPage';

import { Provider } from 'react-redux';
import store, { persistor } from '../../src/store/index';

const IndexPage = () => {
	return (
		<>
			<Helmet>
				<title>Login Page</title>
			</Helmet>
			<Provider store={store}>
				<LoginPage />
			</Provider>
		</>
	);
};
export default IndexPage;
