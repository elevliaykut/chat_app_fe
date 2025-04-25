import React, { useEffect, useState } from "react";
import TopBanner from "../../molecules/TopBanner";
import SearchMenu from "../../molecules/SearchMenu";
import styles from "./Index.module.css";

import SearchUserProfile from "../../molecules/SearchUserProfile";
import IM from '../../../utils/imgs/header-bg.jpg';
import FilterWithToggleEpisode from "../../molecules/FilterWithToggleEpisode";

const SearchOnlinePage = ({
    onlineProfiles = [],
    getOnlineProfiles = () => {},
    isLoading = false,
    pageLoading = false,
    error = null
}) => {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        getOnlineProfiles()
    },[]);

    useEffect(() => {
        if(!pageLoading) {
            setVisible(true);
        }
    },[pageLoading]);

    return (
        <>
            <TopBanner/>
            <SearchMenu/>
            {
                //<FilterWithToggleEpisode/>
            }
            <div className={styles.container}>
                <div className={styles.frame}>
                    <div className={styles.content}>

                        {visible && (
                            <>
                                {onlineProfiles?.map(item => (
                                    <>
                                        <SearchUserProfile
                                            user={item}
                                        />
                                    </>
                                ))}
                            </>
                        )}

                        {!visible && (
                            <>
                                <div className={styles.loader}>
                                    <div className={styles.spinner}></div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
export default SearchOnlinePage;