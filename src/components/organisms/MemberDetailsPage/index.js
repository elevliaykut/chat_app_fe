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
import MessageModal from "../../molecules/Modals/MessageModal";
import MemberPhotoCard from "../../molecules/MemberPhotoCard";
import PostReportModal from "../../molecules/Modals/PostReportModal";

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
    createUserProfileVisitLog = () => {},
    isUserLoggedIn = false,
    userLogout = () => {},
    getNotifications = () => {},
    notifications = [],
    notificationIsLoading = false,
    getMessages = () => {},
    sendMessage = () => {},
    resetSendMessageCompleted = () => {},
    messageIsLoading = false,
    messages = [],
    sendMessageCompleted = false,
    getUserPhoto = () => {},
    photos = [],
    userPhotoIsLoading = false,
    resetPostActivityLikeComplete = () => {},
    resetPostActivityFavoriteComplete = () => {},
    resetPostActivitySmiledComplete = () => {},
    activityLikeComplete = false,
    activityFavoriteComplete = false,
    activitySmileComplete = false,
    isThatActive = false
}) => {
    
    const [profileVisible, setProfileVisible]                           = useState(false);
    const [memberDetailVisible, setMemberDetailVisible]                 = useState(false);
    const [memberPostVisible, setMemberPostVisible]                     = useState(false);
    const [reportModalVisible, setReportModalVisible]                   = useState(false);
    const [reportToastMessageVisible, setReportToastMessageVisible]     = useState(false);
    const [messageModalVisible, setMessageModalVisible] = useState(false);
    const [selectedMessageUserId, setSelectedMessageUserId] = useState();
    const [selectedUsername, setSelectedUsername] = useState();
    const [selectedUserStatus, setSelectedUserStatus] = useState();
    const [photoGalleryVisible, setPhotoGalleryVisible] = useState(false);
    const [postReportModalVisible, setPostReportModalVisible] = useState(false);
    const [userId, setUserId] = useState();
    const [postId, setPostId] = useState();

    useEffect(() => {
        if(activityLikeComplete) {
            resetPostActivityLikeComplete();
            getMemberPosts({ memberId: memberId });
        }
    },[activityLikeComplete]);

    useEffect(() => {
        if(activityFavoriteComplete) {
            resetPostActivityFavoriteComplete();
            getMemberPosts({ memberId: memberId });
        }
    },[activityFavoriteComplete]);

    useEffect(() => {
        if(activitySmileComplete) {
            resetPostActivitySmiledComplete();
            getMemberPosts({ memberId: memberId });
        }
    },[activitySmileComplete]);

    useEffect(() => {
        userReportsReset();
    },[]);

    useEffect(() => {
        if(userPhotoIsLoading) {
            setPhotoGalleryVisible(true);
        }
    },[userPhotoIsLoading]);

    useEffect(() => {
        if(memberId) {
            getUserPhoto({ userId: memberId});
        }
    },[memberId]);

    useEffect(() => {
        getNotifications({ read: false });
    },[]);

    useEffect(() => {
        if (!isUserLoggedIn) {
          window.location = '/';
        }
    }, [isUserLoggedIn]);

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

    const messageModalOnClose = () => {
        setMessageModalVisible(false);
    }

    useEffect(() => {
        if(memberId) {
            getMessages({ userId: memberId });
        }
    },[memberId]);

    useEffect(() => {
        if(sendMessageCompleted) {
            getMessages({ userId: memberId });
        }
    },[sendMessageCompleted]);

    return (
        <>
            {postReportModalVisible && (
                <>
                    <PostReportModal
                        onClose={() => setPostReportModalVisible(false)}
                        isLoading={isLoading}
                        userReports={userReports}
                        userId={userId}
                        postId={postId}
                        setPostReportModalVisible={setPostReportModalVisible}
                    />
                </>
            )}
            {messageModalVisible && (
                <>
                    <MessageModal
                        onClose={messageModalOnClose}
                        isLoading={notificationIsLoading}
                        messages={messages}
                        messageIsLoading={messageIsLoading}
                        sendMessage={sendMessage}
                        resetSendMessageCompleted={resetSendMessageCompleted}
                        userMe={userMe}
                        selectedMessageUserId={selectedMessageUserId}
                        selectedUsername={selectedUsername}
                        selectedUserStatus={selectedUserStatus}
                        isThatActive={isThatActive}
                    />
                </>
            )}
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
                messageCount={userMe?.message_count}
                profileVisible={profileVisible}
                userLogout={userLogout}
                notifications={notifications}
                notificationIsLoading={notificationIsLoading}
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
                                    setMessageModalVisible={setMessageModalVisible}
                                    setSelectedMessageUserId={setSelectedMessageUserId}
                                    setSelectedUsername={setSelectedUsername}
                                    setSelectedUserStatus={setSelectedUserStatus}
                                />
                            </div>
                        </>
                    )}

                    <div className={styles.contentContainer}>

                        {photoGalleryVisible && (
                            <>
                                <MemberPhotoCard
                                    photos={photos}
                                />
                            </>
                        )}

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
                                    postActivityFavorite={postActivityFavorite}
                                    postActivitySmiled={postActivitySmiled}
                                    setMessageModalVisible={setMessageModalVisible}
                                    setSelectedMessageUserId={setSelectedMessageUserId}
                                    setSelectedUsername={setSelectedUsername}
                                    setSelectedUserStatus={setSelectedUserStatus}
                                    
                                    setPostReportModalVisible={setPostReportModalVisible}
                                    setUserId={setUserId}
                                    setPostId={setPostId}
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