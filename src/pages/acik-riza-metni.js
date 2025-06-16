import React from 'react';
import { Helmet } from 'react-helmet';
import AcikRizaMetniPage from '../components/templetes/AcikRizaMetni';
import { Provider } from 'react-redux';
import store, { persistor } from '../../src/store/index';

const IndexPage = () => {
	return (
		<>
			<Helmet>
				<title>Home Page</title>
			</Helmet>
			<Provider store={store}>
				<AcikRizaMetniPage />
			</Provider>
		</>
	);
};
export default IndexPage;
