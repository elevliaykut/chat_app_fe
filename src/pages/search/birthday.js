import React from 'react';
import { Helmet } from 'react-helmet';
import SearchBirthday from '../../components/templetes/SearchBirthdayPage';
import { Provider } from 'react-redux';
import store, { persistor } from '../../../src/store/index';

const SearchBirthdayPage = () => {
	return (
		<>
			<Helmet>
				<title>Bugün Doğanlar</title>
			</Helmet>
			<Provider store={store}>
				<SearchBirthday />
			</Provider>
		</>
	);
};
export default SearchBirthdayPage;
