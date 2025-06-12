import React from 'react';
import { Helmet } from 'react-helmet';
import MySettingsPage from '../components/templetes/MySettingsPage';
import { Provider } from 'react-redux';
import store, { persistor } from '../../src/store/index';
import { useRouter } from 'next/router';

const IndexPage = () => {

	return (
		<>
			<Helmet>
				<title>Hesap Ayarlarım</title>
			</Helmet>
			<Provider store={store}>
				<MySettingsPage/>
			</Provider>
		</>
	);
};
export default IndexPage;
