import React from 'react';
import { Helmet } from 'react-helmet';
import NearLocationsPage from '../components/templetes/NearLocationsPage';
import { Provider } from 'react-redux';
import store, { persistor } from '../../src/store/index';

const IndexPage = () => {
	return (
		<>
			<Helmet>
				<title>Yakın Konumdaki Üyeler</title>
			</Helmet>
			<Provider store={store}>
				<NearLocationsPage />
			</Provider>
		</>
	);
};
export default IndexPage;
