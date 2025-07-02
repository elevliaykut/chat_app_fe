import React from 'react';
import { Helmet } from 'react-helmet';
import ProfileTextsPage from '../components/templetes/ProfileTextsPage';
import { Provider } from 'react-redux';
import store, { persistor } from '../../src/store/index';

const IndexPage = () => {
	return (
		<>
			<Helmet>
				<title>Profile Texts Page</title>
			</Helmet>
			<Provider store={store}>
				<ProfileTextsPage />
			</Provider>
		</>
	);
};
export default IndexPage;
