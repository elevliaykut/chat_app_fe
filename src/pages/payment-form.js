import React from 'react';
import { Helmet } from 'react-helmet';
import PaymentFormPage from '../components/templetes/PaymentFormPage';
import { Provider } from 'react-redux';
import store, { persistor } from '../../src/store/index';

const IndexPage = () => {
	return (
		<>
			<Helmet>
				<title>Ödeme Sayfası</title>
			</Helmet>
			<Provider store={store}>
				<PaymentFormPage />
			</Provider>
		</>
	);
};
export default IndexPage;
