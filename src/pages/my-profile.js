import React from 'react';
import { Helmet } from 'react-helmet';
import MyProfilePage from '../components/templetes/MyProfilePage';
import { Provider } from 'react-redux';
import store, { persistor } from '../../src/store/index';
import { useRouter } from 'next/router';

const IndexPage = () => {

	return (
		<>
			<Helmet>
				<title>Profilim Detay</title>
			</Helmet>
			<Provider store={store}>
				<MyProfilePage/>
			</Provider>
		</>
	);
};
export default IndexPage;
