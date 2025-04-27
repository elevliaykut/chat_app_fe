import React from 'react';
import { Helmet } from 'react-helmet';
import SearchNear from '../../components/templetes/SearchNearPage';
import { Provider } from 'react-redux';
import store, { persistor } from '../../../src/store/index';

const SearchNearPage = () => {
	return (
		<>
			<Helmet>
				<title>Yakınımdaki Üyeler</title>
			</Helmet>
			<Provider store={store}>
				<SearchNear />
			</Provider>
		</>
	);
};
export default SearchNearPage;
