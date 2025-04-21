import React from 'react';
import { Helmet } from 'react-helmet';
import BornTodayPage from '../components/templetes/BornTodayPage';
import { Provider } from 'react-redux';
import store, { persistor } from '../../src/store/index';

const IndexPage = () => {
	return (
		<>
			<Helmet>
				<title>Bugün Doğan Üyeler</title>
			</Helmet>
			<Provider store={store}>
				<BornTodayPage />
			</Provider>
		</>
	);
};
export default IndexPage;
