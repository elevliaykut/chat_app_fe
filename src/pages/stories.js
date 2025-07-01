import React from 'react';
import { Helmet } from 'react-helmet';
import StoriesPage from '../components/templetes/StoriesPage';
import { Provider } from 'react-redux';
import store, { persistor } from '../../src/store/index';

const IndexPage = () => {
	return (
		<>
			<Helmet>
				<title>Story Page</title>
			</Helmet>
			<Provider store={store}>
				<StoriesPage />
			</Provider>
		</>
	);
};
export default IndexPage;
