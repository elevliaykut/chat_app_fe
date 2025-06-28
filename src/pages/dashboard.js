import React from 'react';
import { Helmet } from 'react-helmet';
import DashboardPage from '../components/templetes/DashboardPage';
import { Provider } from 'react-redux';
import store, { persistor } from '../../src/store/index';

const IndexPage = () => {
	return (
		<>
			<Helmet>
				<title>Dashboard Page</title>
			</Helmet>
			<Provider store={store}>
				<DashboardPage />
			</Provider>
		</>
	);
};
export default IndexPage;
