import React from 'react';
import { Helmet } from 'react-helmet';
import PostsPage from '../components/templetes/PostsPage';
import { Provider } from 'react-redux';
import store, { persistor } from '../../src/store/index';

const IndexPage = () => {
	return (
		<>
			<Helmet>
				<title>Posts Page</title>
			</Helmet>
			<Provider store={store}>
				<PostsPage />
			</Provider>
		</>
	);
};
export default IndexPage;
