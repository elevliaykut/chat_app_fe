import React, { useEffect, useState } from "react";
import TopBanner from "../../molecules/TopBanner";
import SearchMenu from "../../molecules/SearchMenu";
import styles from "./Index.module.css";
import SearchUserProfile from "../../molecules/SearchUserProfile";
import FooterBanner from "../../molecules/FooterBanner";

const SearchOnlinePage = ({
    onlineProfiles = [],
    getOnlineProfiles = () => {},
    isLoading = false,
    pageLoading = false,
    error = null,
    userActivitySmiled = () => {},
    userActivitySmiledReset = () => {},
    userActivitySmiledCompleted = false,
    userBlocked = () => {},
    userBlockedReset = () => {},
    userBlockedComplete = false,
    userActivityFavorite = () => {},
    userActivityFavoriteReset = () => {},
    userActivityFavoriteCompleted = false,
    userActivityLiked = () => {},
    userActivityLikedReset = () => {},
    userActivityLikedCompleted = false
}) => {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        getOnlineProfiles();
    },[]);

    useEffect(() => {
        if(userActivitySmiledCompleted) {
            getOnlineProfiles();
            userActivitySmiledReset();
        }
    },[userActivitySmiledCompleted]);

    useEffect(() => {
        if(userBlockedComplete) {
            getOnlineProfiles();
            userBlockedReset();
        }
    },[userBlockedComplete]);

    useEffect(() => {
        if(userActivityFavoriteCompleted) {
            getOnlineProfiles();
            userActivityFavoriteReset();
        }
    },[userActivityFavoriteCompleted]);

    useEffect(() => {
        if(userActivityLikedCompleted) {
            getOnlineProfiles();
            userActivityLikedReset();
        }
    },[userActivityLikedCompleted]);

    useEffect(() => {
        userActivitySmiledReset();
        userBlockedReset();
        userActivityFavoriteReset();
        userActivityLikedReset();
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
                                            userActivitySmiled={userActivitySmiled}
                                            userBlocked={userBlocked}
                                            userActivityFavorite={userActivityFavorite}
                                            userActivityLiked={userActivityLiked}
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
            <FooterBanner/>
        </>
    )
}
export default SearchOnlinePage;