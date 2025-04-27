import React, { useEffect, useState } from "react";
import TopBanner from "../../molecules/TopBanner";
import SearchMenu from "../../molecules/SearchMenu";
import styles from './Index.module.css';
import SearchUserProfile from "../../molecules/SearchUserProfile";

const SearchNearPage = ({
    getUserMe = () => {},
    userMe = {},
    getUsers = () => {},
    members = [],
    userMeLoading = false,
    isLoading = false,
}) => {
    const [memberVisible, setMemberVisible] = useState(false);

    useEffect(() => {
        getUserMe();
    },[]);

    useEffect(() => {
        if(!userMeLoading) {
            getUsers({
                nearUsers: userMe?.detail?.district?.id
            });
        }
    },[userMeLoading]);

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
export default SearchNearPage;