import React from 'react';
import { Helmet } from 'react-helmet';
import HomePage from '../components/templetes/HomePage';
import { Provider } from 'react-redux';
import store, { persistor } from '../../src/store/index';

const IndexPage = () => {
	return (
		<>
			<Helmet>
				<title>Home Page</title>
			</Helmet>
			<Provider store={store}>
				<HomePage />
			</Provider>
		</>
	);
};
export default IndexPage;
