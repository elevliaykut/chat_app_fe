import React from 'react';
import { Helmet } from 'react-helmet';
import AdminUserDetailPage from '../../../components/templetes/AdminUserDetailPage';
import { Provider } from 'react-redux';
import store, { persistor } from '../../../../src/store/index';
import { useRouter } from 'next/router';

const IndexPage = () => {

    const router = useRouter();
	const { userId } = router.query;

	return (
		<>
			<Helmet>
				<title>Kullanıcı Detay</title>
			</Helmet>
			<Provider store={store}>
				<AdminUserDetailPage 
                    userId={userId}
                />
			</Provider>
		</>
	);
};
export default IndexPage;
