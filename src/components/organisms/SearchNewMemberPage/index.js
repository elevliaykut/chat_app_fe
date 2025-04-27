import React, { useEffect, useState } from "react";
import TopBanner from "../../molecules/TopBanner";
import SearchMenu from "../../molecules/SearchMenu";
import styles from './Index.module.css';
import SearchUserProfile from "../../molecules/SearchUserProfile";

const SearchNewMemberPage = ({
    getUsers = () => {},
    members = [],
    isLoading = false
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
export default SearchNewMemberPage;