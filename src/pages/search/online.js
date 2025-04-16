import React from 'react';
import { Helmet } from 'react-helmet';
import SearchOnline from '../../components/templetes/SearchOnlinePage';
import { Provider } from 'react-redux';
import store, { persistor } from '../../../src/store/index';

const SearchOnlinePage = () => {
	return (
		<>
			<Helmet>
				<title>Home Page</title>
			</Helmet>
			<Provider store={store}>
				<SearchOnline />
			</Provider>
		</>
	);
};
export default SearchOnlinePage;
