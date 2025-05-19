import React from 'react';
import { Helmet } from 'react-helmet';
import HelpPage from '../components/templetes/HelpPage';
import { Provider } from 'react-redux';
import store, { persistor } from '../../src/store/index';

const IndexPage = () => {
	return (
		<>
			<Helmet>
				<title>Yardım Sayfası</title>
			</Helmet>
			<Provider store={store}>
				<HelpPage />
			</Provider>
		</>
	);
};
export default IndexPage;
