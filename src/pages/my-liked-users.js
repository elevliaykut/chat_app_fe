import React from 'react';
import { Helmet } from 'react-helmet';
import GetMyLikedProfilesPage from '../components/templetes/GetMyLikedProfilesPage';
import { Provider } from 'react-redux';
import store, { persistor } from '../../src/store/index';

const IndexPage = () => {
	return (
		<>
			<Helmet>
				<title>Beğendiklerim</title>
			</Helmet>
			<Provider store={store}>
				<GetMyLikedProfilesPage />
			</Provider>
		</>
	);
};
export default IndexPage;
