import React from 'react';
import { Helmet } from 'react-helmet';
import MessagesPage from '../components/templetes/MessagesPage';
import { Provider } from 'react-redux';
import store, { persistor } from '../../src/store/index';

const IndexPage = () => {
	return (
		<>
			<Helmet>
				<title>Bildirimler</title>
			</Helmet>
			<Provider store={store}>
				<MessagesPage />
			</Provider>
		</>
	);
};
export default IndexPage;
