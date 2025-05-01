import React, { useEffect, useState } from "react";
import styles from './Index.module.css';
import TopBanner from "../../molecules/TopBanner";
import MemberProfileCard from "../../molecules/MemberProfileCard";
import MemberProfileTextCard from "../../molecules/MemberProfileTextCard";
import MemberProfileFullDetailsEpisode from "../../molecules/MemberProfileFullDetailsEpisode";
import ListPostBox from "../../molecules/ListPostBox";

const MemberDetailsPage = ({
    isLoading = false,
    error = null,
    userMe = {},
    getMemberDetails = () => {},
    memberId = '',
    userMeLoading = false,
    details = {},
    posts = [],
    getMemberPosts = () => {},
    memberIsLoading = false,
    memberPostLoading = false,
    postActivityLike = () => {},
    postIsLoading = false,
    postError = null,
    postActivityFavorite = () => {},
    postActivitySmiled = () => {},
    userActivityLiked = () => {},
    userActivityFavorite = () => {},
    userActivitySmiled = () => {},
    userActivityLikedCompleted = false,
    userActivityFavoriteCompleted = false,
    userActivitySmiledCompleted = false,
    userActivityLikedReset = () => {},
    userActivityFavoriteReset = () => {},
    userActivitySmiledReset = () => {}
}) => {
    
    const [profileVisible, setProfileVisible]               = useState(false);
    const [memberDetailVisible, setMemberDetailVisible]     = useState(false);
    const [memberPostVisible, setMemberPostVisible]         = useState(false);

    useEffect(() => {
        if(!userMeLoading) {
            setProfileVisible(true);
        }
    },[userMeLoading]);

    useEffect(() => {
        if(!memberIsLoading) {
            setMemberDetailVisible(true);
        }
    },[memberIsLoading]);

    useEffect(() => {
        if(!memberPostLoading) {
            setMemberPostVisible(true);
        }
    },[memberPostLoading]);

    useEffect(() => {
        if(memberId) {
            getMemberDetails({ memberId: memberId });
            getMemberPosts({ memberId: memberId });
        }
    },[memberId]);

    useEffect(() => {
        userActivityLikedReset();
        userActivityFavoriteReset();
        userActivitySmiledReset();
    },[]);

    useEffect(() => {
        if(userActivityLikedCompleted) {
            getMemberDetails({ memberId: memberId });
            userActivityLikedReset();
        }
    },[userActivityLikedCompleted]);

    useEffect(() => {
        if(userActivityFavoriteCompleted) {
            getMemberDetails({ memberId: memberId });
            userActivityFavoriteReset();
        }
    },[userActivityFavoriteCompleted]);

    useEffect(() => {
        if(userActivitySmiledCompleted) {
            getMemberDetails({ memberId: memberId });
            userActivitySmiledReset();
        }
    },[userActivitySmiledCompleted]);

    return (
        <>
            <TopBanner/>
            <div className={styles.frame}>
                <div className={styles.content}>
                    
                    {profileVisible && (
                        <>
                            <div className={styles.profileEpisode}>
                                <MemberProfileCard
                                    details={details}
                                    userActivityLiked={userActivityLiked}
                                    userActivityFavorite={userActivityFavorite}
                                    userActivitySmiled={userActivitySmiled}
                                />
                            </div>
                        </>
                    )}

                    <div style={{ width: '100%' }}>
                        {memberDetailVisible && (
                            <>
                                    <MemberProfileTextCard
                                        details={details}
                                    />

                                    <MemberProfileFullDetailsEpisode
                                        details={details}
                                    />
                            </>
                        )}

                        {memberPostVisible && (
                            <>
                                <ListPostBox 
                                    posts={posts}
                                    postActivityLike={postActivityLike}
                                    postIsLoading={postIsLoading}
                                    postError={postError}
                                    postActivityFavorite={postActivityFavorite}
                                    postActivitySmiled={postActivitySmiled}
                                />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
export default MemberDetailsPage;