import React from 'react';
import { Helmet } from 'react-helmet';
import BeGoldMemberPage from '../components/templetes/BeGoldMemberPage';
import { Provider } from 'react-redux';
import store, { persistor } from '../../src/store/index';

const IndexPage = () => {
	return (
		<>
			<Helmet>
				<title>Yardım Sayfası</title>
			</Helmet>
			<Provider store={store}>
				<BeGoldMemberPage />
			</Provider>
		</>
	);
};
export default IndexPage;
