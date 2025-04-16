import React from "react";
import TopBanner from "../../molecules/TopBanner";
import SearchMenu from "../../molecules/SearchMenu";
import styles from "./Index.module.css";

import SearchUserProfile from "../../molecules/SearchUserProfile";
import IM from '../../../utils/imgs/header-bg.jpg';

const SearchOnlinePage = () => {
    return (
        <>
            <TopBanner/>
            <SearchMenu/>
            <div className={styles.container}>
                <div className={styles.frame}>
                    <div className={styles.content}>
                        <SearchUserProfile
                            image={IM}
                            username={'Aykut'}
                            detail={'30, Evli, İstanbul'}
                            status={'Çevrimiçi'}
                        />
                        <SearchUserProfile
                            image={IM}
                            username={'Aykut'}
                            detail={'30, Evli, İstanbul'}
                            status={'Çevrimiçi'}
                        />
                        <SearchUserProfile
                            image={IM}
                            username={'Aykut'}
                            detail={'30, Evli, İstanbul'}
                            status={'Çevrimiçi'}
                        />
                        <SearchUserProfile
                            image={IM}
                            username={'Aykut'}
                            detail={'30, Evli, İstanbul'}
                            status={'Çevrimiçi'}
                        />
                        <SearchUserProfile
                            image={IM}
                            username={'Aykut'}
                            detail={'30, Evli, İstanbul'}
                            status={'Çevrimiçi'}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
export default SearchOnlinePage;