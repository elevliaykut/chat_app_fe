import React from 'react';
import { Helmet } from 'react-helmet';
import SearchLike from '../../components/templetes/SearchLikePage';
import { Provider } from 'react-redux';
import store, { persistor } from '../../../src/store/index';

const SearchLikePage = () => {
	return (
		<>
			<Helmet>
				<title>Detaylı Arama</title>
			</Helmet>
			<Provider store={store}>
				<SearchLike />
			</Provider>
		</>
	);
};
export default SearchLikePage;
