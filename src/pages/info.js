import React from 'react';
import { Helmet } from 'react-helmet';
import InfoPage from '../components/templetes/InfoPage';
import { Provider } from 'react-redux';
import store, { persistor } from '../../src/store/index';

const IndexPage = () => {
	return (
		<>
			<Helmet>
				<title>Bilgiler</title>
			</Helmet>
			<Provider store={store}>
				<InfoPage />
			</Provider>
		</>
	);
};
export default IndexPage;
