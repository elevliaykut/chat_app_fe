import React from 'react';
import { Helmet } from 'react-helmet';
import GizlilikSozlesmesiPage from '../components/templetes/GizlilikSozlesmesi';
import { Provider } from 'react-redux';
import store, { persistor } from '../../src/store/index';

const IndexPage = () => {
	return (
		<>
			<Helmet>
				<title>Home Page</title>
			</Helmet>
			<Provider store={store}>
				<GizlilikSozlesmesiPage />
			</Provider>
		</>
	);
};
export default IndexPage;
