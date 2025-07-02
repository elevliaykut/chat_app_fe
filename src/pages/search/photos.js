import React from 'react';
import { Helmet } from 'react-helmet';
import SearchPhotos from '../../components/templetes/SearchPhotosPage';
import { Provider } from 'react-redux';
import store, { persistor } from '../../../src/store/index';

const SearchPhotosPage = () => {
	return (
		<>
			<Helmet>
				<title>Fotoğraflar</title>
			</Helmet>
			<Provider store={store}>
				<SearchPhotos />
			</Provider>
		</>
	);
};
export default SearchPhotosPage;
