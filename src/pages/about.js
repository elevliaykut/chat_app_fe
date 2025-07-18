import React from 'react';
import { Helmet } from 'react-helmet';
import AboutPage from '../components/organisms/AboutPage';
import { Provider } from 'react-redux';
import store, { persistor } from '../../src/store/index';

const IndexPage = () => {
	return (
		<>
			<Helmet>
				<title>About Page</title>
			</Helmet>
			<Provider store={store}>
				<AboutPage />
			</Provider>
		</>
	);
};
export default IndexPage;
