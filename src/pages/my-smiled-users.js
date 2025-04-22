import React from 'react';
import { Helmet } from 'react-helmet';
import GetMySmiledProfilesPage from '../components/templetes/GetMySmiledProfilesPage';
import { Provider } from 'react-redux';
import store, { persistor } from '../../src/store/index';

const IndexPage = () => {
	return (
		<>
			<Helmet>
				<title>Favorilerim</title>
			</Helmet>
			<Provider store={store}>
				<GetMySmiledProfilesPage />
			</Provider>
		</>
	);
};
export default IndexPage;
