import React from 'react';
import { Helmet } from 'react-helmet';
import SearchDetail from '../../components/templetes/SearchDetailPage';
import { Provider } from 'react-redux';
import store, { persistor } from '../../../src/store/index';

const SearchDetailPage = () => {
	return (
		<>
			<Helmet>
				<title>Detaylı Arama</title>
			</Helmet>
			<Provider store={store}>
				<SearchDetail />
			</Provider>
		</>
	);
};
export default SearchDetailPage;
