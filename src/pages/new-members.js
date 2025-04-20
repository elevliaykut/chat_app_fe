import React from 'react';
import { Helmet } from 'react-helmet';
import NewMembersPage from '../components/templetes/NewMembersPage';
import { Provider } from 'react-redux';
import store, { persistor } from '../../src/store/index';

const IndexPage = () => {
	return (
		<>
			<Helmet>
				<title>Yeni Üyeler</title>
			</Helmet>
			<Provider store={store}>
				<NewMembersPage />
			</Provider>
		</>
	);
};
export default IndexPage;
