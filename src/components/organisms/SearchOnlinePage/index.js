import React from "react";
import TopBanner from "../../molecules/TopBanner";
import SearchMenu from "../../molecules/SearchMenu";
import SearchUserProfile from "../../molecules/SearchUserProfile";
import IM from '../../../utils/imgs/header-bg.jpg';

const SearchOnlinePage = () => {
    return (
        <>
            <TopBanner/>
            <SearchMenu/>
            <SearchUserProfile
                image={IM}
                username={'Aykut'}
                detail={'30, Evli, İstanbul'}
                status={'Çevrimiçi'}
            />
        </>
    )
}
export default SearchOnlinePage;