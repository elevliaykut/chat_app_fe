import React from 'react';
import { Helmet } from 'react-helmet';
import PaymentPage from '../components/templetes/PaymentPage';
import { Provider } from 'react-redux';
import store, { persistor } from '../../src/store/index';

const IndexPage = () => {
	return (
		<>
			<Helmet>
				<title>Ödeme</title>
			</Helmet>
			<Provider store={store}>
				<PaymentPage />
			</Provider>
		</>
	);
};
export default IndexPage;
