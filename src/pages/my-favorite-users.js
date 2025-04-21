import React from 'react';
import { Helmet } from 'react-helmet';
import GetMyFavoriteUsersPage from '../components/templetes/GetMyFavoriteUsersPage';
import { Provider } from 'react-redux';
import store, { persistor } from '../../src/store/index';

const IndexPage = () => {
	return (
		<>
			<Helmet>
				<title>Favorilerim</title>
			</Helmet>
			<Provider store={store}>
				<GetMyFavoriteUsersPage />
			</Provider>
		</>
	);
};
export default IndexPage;
