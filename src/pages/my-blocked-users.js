import React from 'react';
import { Helmet } from 'react-helmet';
import GetMyBlockedProfilesPage from '../components/templetes/GetMyBlockedProfilesPage';
import { Provider } from 'react-redux';
import store, { persistor } from '../../src/store/index';

const IndexPage = () => {
	return (
		<>
			<Helmet>
				<title>Engellediklerim</title>
			</Helmet>
			<Provider store={store}>
				<GetMyBlockedProfilesPage />
			</Provider>
		</>
	);
};
export default IndexPage;
