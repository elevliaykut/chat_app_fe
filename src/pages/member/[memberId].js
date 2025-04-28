import React from 'react';
import { Helmet } from 'react-helmet';
import MemberDetailsPage from '../../components/templetes/MemberDetailsPage';
import { Provider } from 'react-redux';
import store, { persistor } from '../../../src/store/index';
import { useRouter } from 'next/router';

const IndexPage = () => {

    const router = useRouter();
	const { memberId } = router.query;

	return (
		<>
			<Helmet>
				<title>Profil Detay</title>
			</Helmet>
			<Provider store={store}>
				<MemberDetailsPage 
                    memberId={memberId}
                />
			</Provider>
		</>
	);
};
export default IndexPage;
