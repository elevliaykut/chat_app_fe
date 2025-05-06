import React from 'react';
import { Helmet } from 'react-helmet';
import VisitProfilesPage from '../components/templetes/VisitProfilesPage';
import { Provider } from 'react-redux';
import store, { persistor } from '../../src/store/index';

const IndexPage = () => {
	return (
		<>
			<Helmet>
				<title>Profilini Gezdiklerin</title>
			</Helmet>
			<Provider store={store}>
				<VisitProfilesPage />
			</Provider>
		</>
	);
};
export default IndexPage;
