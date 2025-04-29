import React, { useEffect, useState } from "react";
import styles from './Index.module.css';
import TopBanner from "../../molecules/TopBanner";
import MemberProfileCard from "../../molecules/MemberProfileCard";
import MemberProfileTextCard from "../../molecules/MemberProfileTextCard";
import MemberProfileFullDetailsEpisode from "../../molecules/MemberProfileFullDetailsEpisode";

const MemberDetailsPage = ({
    isLoading = false,
    error = null,
    userMe = {},
    getMemberDetails = () => {},
    memberId = '',
    userMeLoading = false,
}) => {
    
    const [profileVisible, setProfileVisible]   = useState(false);

    useEffect(() => {
        if(!userMeLoading) {
            setProfileVisible(true);
        }
    },[userMeLoading]);

    return (
        <>
            <TopBanner/>
            
            <div className={styles.frame}>
                <div className={styles.content}>
                    {profileVisible && (
                        <>
                            <MemberProfileCard
                                userMe={userMe}
                            />
                        </>
                    )}

                    <div style={{ width: '100%'}}>
                        <div>
                            <MemberProfileTextCard/>
                        </div>
                        <div style={{ marginTop: '20px'}}>
                            <MemberProfileFullDetailsEpisode/>
                        </div>
                    </div>
                </div>
            </div>
            {memberId}
        </>
    )
}
export default MemberDetailsPage;