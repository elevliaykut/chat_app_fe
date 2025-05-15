import React from 'react';
import { Helmet } from 'react-helmet';
import NotificationsPage from '../components/templetes/NotificationsPage';
import { Provider } from 'react-redux';
import store, { persistor } from '../../src/store/index';

const IndexPage = () => {
	return (
		<>
			<Helmet>
				<title>Bildirimler</title>
			</Helmet>
			<Provider store={store}>
				<NotificationsPage />
			</Provider>
		</>
	);
};
export default IndexPage;
