import React from 'react';
import { Helmet } from 'react-helmet';
import KullaniciSozlesmesiPage from '../components/templetes/KullaniciSozlesmesi';
import { Provider } from 'react-redux';
import store, { persistor } from '../../src/store/index';

const IndexPage = () => {
	return (
		<>
			<Helmet>
				<title>Home Page</title>
			</Helmet>
			<Provider store={store}>
				<KullaniciSozlesmesiPage />
			</Provider>
		</>
	);
};
export default IndexPage;
