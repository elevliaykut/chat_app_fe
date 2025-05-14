import React, { useEffect, useState } from "react";
import styles from './Index.module.css';
import TopBanner from "../../molecules/TopBanner";
import MemberProfileCard from "../../molecules/MemberProfileCard";
import MemberProfileTextCard from "../../molecules/MemberProfileTextCard";
import MemberProfileFullDetailsEpisode from "../../molecules/MemberProfileFullDetailsEpisode";
import ListPostBox from "../../molecules/ListPostBox";
import UserReportModal from "../../molecules/Modals/UserReportModal";
import ToastMessage from "../../molecules/TostMessage";
import FooterBanner from "../../molecules/FooterBanner";

const MemberDetailsPage = ({
    isLoading = false,
    error = null,
    userMe = {},
    getUserMe = () => {},
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
    userActivitySmiledReset = () => {},
    userReports = () => {},
    userReportsReset = () => {},
    userReportsComplete = false,
    userBlocked = () => {},
    userBlockedReset = () => {},
    userBlockedComplete = false,
    createUserProfileVisitLog = () => {}
}) => {
    
    const [profileVisible, setProfileVisible]                           = useState(false);
    const [memberDetailVisible, setMemberDetailVisible]                 = useState(false);
    const [memberPostVisible, setMemberPostVisible]                     = useState(false);
    const [reportModalVisible, setReportModalVisible]                   = useState(false);
    const [reportToastMessageVisible, setReportToastMessageVisible]     = useState(false);

    useEffect(() => {
        if(memberId) {
            createUserProfileVisitLog({
                userId: memberId
            });
        }
    },[memberId]);

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
        userBlockedReset();
        userReportsReset();
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

    useEffect(() => {
        if(userBlockedComplete) {
            getMemberDetails({ memberId: memberId });
            userBlockedReset();
        }
    },[userBlockedComplete]);

    const reportModalOnClick = () => {
        setReportModalVisible(false);
    }

    useEffect(() => {
        if(userReportsComplete) {
            userReportsReset();
            setReportToastMessageVisible(true);
            setReportModalVisible(false);
        }
    },[userReportsComplete]);

    return (
        <>
            {reportToastMessageVisible && (
                <>
                    <ToastMessage message="Şikayet kaydınız başarılı bir şekilde oluşturuldu."/>
                </>
            )}

            {reportModalVisible && (
                <>
                    <UserReportModal
                        onClose={reportModalOnClick}
                        isLoading={isLoading}
                        userReports={userReports}
                        userId={details?.id}
                    />
                </>
            )}

            <TopBanner
                onlineMemberCount={userMe?.online_member_count}
                profileVisible={profileVisible}
            />
            
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
                                    userBlocked={userBlocked}
                                    setReportModalVisible={setReportModalVisible}
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
            <FooterBanner/>
        </>
    )
}
export default MemberDetailsPage;