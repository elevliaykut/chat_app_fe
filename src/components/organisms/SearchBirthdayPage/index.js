import React, { useEffect, useState } from "react";
import TopBanner from "../../molecules/TopBanner";
import SearchMenu from "../../molecules/SearchMenu";
import styles from './Index.module.css';
import SearchUserProfile from "../../molecules/SearchUserProfile";


const SearchBirthdayPage = ({
    getUsers = () => {},
    members = [],
    isLoading = false
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