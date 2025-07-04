import React from 'react';
import { Helmet } from 'react-helmet';
import ProfilePhotosPage from '../components/templetes/ProfilePhotosPage';
import { Provider } from 'react-redux';
import store, { persistor } from '../store/index';

const IndexPage = () => {
	return (
		<>
			<Helmet>
				<title>Profile Photos Page</title>
			</Helmet>
			<Provider store={store}>
				<ProfilePhotosPage />
			</Provider>
		</>
	);
};
export default IndexPage;
