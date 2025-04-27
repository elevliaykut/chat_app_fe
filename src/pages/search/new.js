import React from 'react';
import { Helmet } from 'react-helmet';
import SearchNewMember from '../../components/templetes/SearchNewMemberPage';
import { Provider } from 'react-redux';
import store, { persistor } from '../../../src/store/index';

const SearchNewMemberPage = () => {
	return (
		<>
			<Helmet>
				<title>Yeni Üyeler</title>
			</Helmet>
			<Provider store={store}>
				<SearchNewMember />
			</Provider>
		</>
	);
};
export default SearchNewMemberPage;
