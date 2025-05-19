import React from 'react';
import { Helmet } from 'react-helmet';
import ContactPage from '../components/templetes/ContactPage';
import { Provider } from 'react-redux';
import store, { persistor } from '../../src/store/index';

const IndexPage = () => {
	return (
		<>
			<Helmet>
				<title>İletişim Sayfası</title>
			</Helmet>
			<Provider store={store}>
				<ContactPage />
			</Provider>
		</>
	);
};
export default IndexPage;
