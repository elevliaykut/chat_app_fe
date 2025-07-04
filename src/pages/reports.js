import React from 'react';
import { Helmet } from 'react-helmet';
import ReportsPage from '../components/templetes/ReportsPage';
import { Provider } from 'react-redux';
import store, { persistor } from '../store/index';

const IndexPage = () => {
	return (
		<>
			<Helmet>
				<title>Reports Page</title>
			</Helmet>
			<Provider store={store}>
				<ReportsPage />
			</Provider>
		</>
	);
};
export default IndexPage;
