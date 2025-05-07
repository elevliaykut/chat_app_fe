import React, { useEffect, useState } from "react";
import TopBanner from "../../molecules/TopBanner";
import SearchMenu from "../../molecules/SearchMenu";
import styles from './Index.module.css';
import SearchUserProfile from "../../molecules/SearchUserProfile";

const SearchNewMemberPage = ({
    getUsers = () => {},
    members = [],
    isLoading = false,
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

    const [memberVisible, setMemberVisible] = useState(false);

    useEffect(() => {
        const now = new Date();
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(now.getDate() - 7);
    
        const formatDate = (date) => date.toISOString().split('T')[0];
    
        console.log("nowDate: ", formatDate(now));
        console.log("oneWeekAgo: ", formatDate(oneWeekAgo));

        const merge = formatDate(oneWeekAgo) + ',' + formatDate(now);

        getUsers({
            startsBetween: merge
        });
    }, []);


    useEffect(() => {
        if(userActivitySmiledCompleted) {
                const now = new Date();
                const oneWeekAgo = new Date();
                oneWeekAgo.setDate(now.getDate() - 7);
            
                const formatDate = (date) => date.toISOString().split('T')[0];
            
                console.log("nowDate: ", formatDate(now));
                console.log("oneWeekAgo: ", formatDate(oneWeekAgo));

                const merge = formatDate(oneWeekAgo) + ',' + formatDate(now);

                getUsers({
                    startsBetween: merge
                });

                userActivitySmiledReset();
        }
    }, [userActivitySmiledCompleted]);

    useEffect(() => {
        if(userBlockedComplete) {
                const now = new Date();
                const oneWeekAgo = new Date();
                oneWeekAgo.setDate(now.getDate() - 7);
            
                const formatDate = (date) => date.toISOString().split('T')[0];
            
                console.log("nowDate: ", formatDate(now));
                console.log("oneWeekAgo: ", formatDate(oneWeekAgo));

                const merge = formatDate(oneWeekAgo) + ',' + formatDate(now);

                getUsers({
                    startsBetween: merge
                });

                userBlockedReset();
        }
    }, [userBlockedComplete]);

    useEffect(() => {
        if(userActivityFavoriteCompleted) {
                const now = new Date();
                const oneWeekAgo = new Date();
                oneWeekAgo.setDate(now.getDate() - 7);
            
                const formatDate = (date) => date.toISOString().split('T')[0];
            
                console.log("nowDate: ", formatDate(now));
                console.log("oneWeekAgo: ", formatDate(oneWeekAgo));

                const merge = formatDate(oneWeekAgo) + ',' + formatDate(now);

                getUsers({
                    startsBetween: merge
                });

                userActivityFavoriteReset();
        }
    }, [userActivityFavoriteCompleted]);

    useEffect(() => {
        if(userActivityLikedCompleted) {
                const now = new Date();
                const oneWeekAgo = new Date();
                oneWeekAgo.setDate(now.getDate() - 7);
            
                const formatDate = (date) => date.toISOString().split('T')[0];
            
                console.log("nowDate: ", formatDate(now));
                console.log("oneWeekAgo: ", formatDate(oneWeekAgo));

                const merge = formatDate(oneWeekAgo) + ',' + formatDate(now);

                getUsers({
                    startsBetween: merge
                });

                userActivityLikedReset();
        }
    }, [userActivityLikedCompleted]);

    useEffect(() => {
        userActivitySmiledReset();
        userBlockedReset();
        userActivityFavoriteReset();
        userActivityLikedReset();
    },[]);

    useEffect(() => {
        if(!isLoading) {
            setMemberVisible(true);
        }
    },[isLoading]);
    
    return (
        <>
            <TopBanner/>
            <SearchMenu/>

            <div className={styles.container}>
                <div className={styles.frame}>
                    <div className={styles.content}>
                        {memberVisible && (
                            <>
                                {members?.map(item => (
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
                    </div>
                </div>
            </div>
        </>
    )
}
export default SearchNewMemberPage;