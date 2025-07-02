import React from 'react';
import { Helmet } from 'react-helmet';
import PaymentsPage from '../components/templetes/PaymentsPage';
import { Provider } from 'react-redux';
import store, { persistor } from '../store/index';

const IndexPage = () => {
	return (
		<>
			<Helmet>
				<title>Payment Page</title>
			</Helmet>
			<Provider store={store}>
				<PaymentsPage />
			</Provider>
		</>
	);
};
export default IndexPage;
