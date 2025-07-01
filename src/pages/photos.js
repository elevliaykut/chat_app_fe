import React from 'react';
import { Helmet } from 'react-helmet';
import PhotosPage from '../components/templetes/PhotosPage';
import { Provider } from 'react-redux';
import store, { persistor } from '../../src/store/index';

const IndexPage = () => {
	return (
		<>
			<Helmet>
				<title>Photos Page</title>
			</Helmet>
			<Provider store={store}>
				<PhotosPage />
			</Provider>
		</>
	);
};
export default IndexPage;
