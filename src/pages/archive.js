import React from 'react';
import { Helmet } from 'react-helmet';
import ArchivePage from '../components/templetes/ArchivePage';
import { Provider } from 'react-redux';
import store, { persistor } from '../../src/store/index';
import { useRouter } from 'next/router';

const IndexPage = () => {

	return (
		<>
			<Helmet>
				<title>Arşivim</title>
			</Helmet>
			<Provider store={store}>
				<ArchivePage/>
			</Provider>
		</>
	);
};
export default IndexPage;
