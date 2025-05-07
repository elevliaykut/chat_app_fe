import React, { useEffect, useState } from "react";
import TopBanner from "../../molecules/TopBanner";
import SearchMenu from "../../molecules/SearchMenu";
import styles from './Index.module.css';
import SearchUserProfile from "../../molecules/SearchUserProfile";


const SearchBirthdayPage = ({
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
        const formattedDate = now.toISOString().split('T')[0]; // "yyyy-mm-dd"
        
        getUsers({
            bornTodayDate: formattedDate
        });
        
    },[]);

    useEffect(() => {
       if(userActivitySmiledCompleted) {
            const now = new Date();
            const formattedDate = now.toISOString().split('T')[0]; // "yyyy-mm-dd"
            
            getUsers({
                bornTodayDate: formattedDate
            });

            userActivitySmiledReset();
       }
    },[userActivitySmiledCompleted]);

    useEffect(() => {
        if(userBlockedComplete) {
             const now = new Date();
             const formattedDate = now.toISOString().split('T')[0]; // "yyyy-mm-dd"
             
             getUsers({
                 bornTodayDate: formattedDate
             });

             userBlockedReset();
        }
     },[userBlockedComplete]);

     useEffect(() => {
        if(userActivityFavoriteCompleted) {
             const now = new Date();
             const formattedDate = now.toISOString().split('T')[0]; // "yyyy-mm-dd"
             
             getUsers({
                 bornTodayDate: formattedDate
             });

             userActivityFavoriteReset();
        }
     },[userActivityFavoriteCompleted]);

     useEffect(() => {
        if(userActivityLikedCompleted) {
             const now = new Date();
             const formattedDate = now.toISOString().split('T')[0]; // "yyyy-mm-dd"
             
             getUsers({
                 bornTodayDate: formattedDate
             });

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
export default SearchBirthdayPage;