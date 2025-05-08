import React from 'react';
import { Helmet } from 'react-helmet';
import SearchApprove from '../../components/templetes/SearchApprovePage';
import { Provider } from 'react-redux';
import store, { persistor } from '../../../src/store/index';

const SearchNewMemberPage = () => {
	return (
		<>
			<Helmet>
				<title>Onaylı Üyeler</title>
			</Helmet>
			<Provider store={store}>
				<SearchApprove />
			</Provider>
		</>
	);
};
export default SearchNewMemberPage;
