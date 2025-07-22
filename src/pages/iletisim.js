import React from 'react';
import { Helmet } from 'react-helmet';
import ContactPageTwo from '../components/templetes/ContactPageTwo';
import { Provider } from 'react-redux';
import store, { persistor } from '../../src/store/index';

const IndexPage = () => {
	return (
		<>
			<Helmet>
				<title>İletişim Sayfası</title>
			</Helmet>
			<Provider store={store}>
				<ContactPageTwo />
			</Provider>
		</>
	);
};
export default IndexPage;
