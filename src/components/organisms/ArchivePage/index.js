import React, { useEffect, useState } from "react";
import styles from './Index.module.css';
import TopBanner from "../../molecules/TopBanner";
import MyProfileCard from "../../molecules/MyProfileCard";
import MemberProfileTextCard from "../../molecules/MemberProfileTextCard";
import MemberProfileFullDetailsEpisode from "../../molecules/MemberProfileFullDetailsEpisode";
import ListPostBox from "../../molecules/ListPostBox";
import UserReportModal from "../../molecules/Modals/UserReportModal";
import ToastMessage from "../../molecules/TostMessage";
import ProfileTextModal from "../../molecules/Modals/ProfileTextModal";
import BasicInfoModal from "../../molecules/Modals/BasicInfoModal";
import PersonalInfoModal from "../../molecules/Modals/PersonalInfoModal";
import SpouseCandidateModal from "../../molecules/Modals/SpouseCandidateModal";
import CaracteristicFeatureModal from "../../molecules/Modals/CaracteristicFeatureModal";
import FooterBanner from "../../molecules/FooterBanner";
import UserPhotoModal from "../../molecules/Modals/UserPhotoModal";
import StoryBanner from "../../molecules/StoryBanner";
import MessageModal from "../../molecules/Modals/MessageModal";

const ArchivePage = ({
    userMe = {},
    isLoading = false,
    error = null,
    pageLoading = false,
    getUserMe = () => {},
    userMeLoading = false,
    postActivityLike = () => {},
    postIsLoading = false,
    postError = false,
    postActivityFavorite = () => {},
    postActivitySmiled = () => {},
    uploadProfilePhotoComplete = false,
    uploadProfilePhotoIsLoading = false,
    userUploadProfilePhoto = () => {},
    resetUploadProfilePhotoComplete = () => {},
    updateUserPersonalInfoComplete = false,
    updateUserPersonalInfo = () => {},
    resetUpdateUserPersonalInfoComplete = () => {},
    getCities =  () => {},
    getDistricts = () => {},
    cities = [],
    districts = [],
    userUpdateSpouseCandidateInfoComplete = false,
    userUpdateSpouseCandidate = () => {},
    userUpdateSpouseCandidateReset = () => {},
    userUpdateCaracteristicFeatureComplete = false,
    userUpdateCaracteristicFeature = () => {},
    userUpdateCaracteristicFeatureReset = () => {},
    getMyPosts = () => {},
    myPosts = [],
    isUserLoggedIn = false,
    userLogout = () => {},
    getNotifications = () => {},
    notifications = [],
    notificationIsLoading = false,
    getStory = () => {},
    stories = [],
    createStory = () => {},
    resetCreateStoryComplete = () => {},
    createStoryComplete = false,
    userUploadPhoto = () => {},
    getUserPhoto = () => {},
    photos = [],
    getMessages = () => {},
    sendMessage = () => {},
    resetSendMessageCompleted = () => {},
    messageIsLoading = false,
    messages = [],
    sendMessageCompleted = false,
    userPhotoIsLoading = false,
    resetPostActivityLikeComplete = () => {},
    resetPostActivityFavoriteComplete = () => {},
    resetPostActivitySmiledComplete = () => {},
    activityLikeComplete = false,
    activityFavoriteComplete = false,
    activitySmileComplete = false,
    getMyStory = () => {},
    myStories = [],
    userUploadPhotoComplete = false,
    userUploadPhotoReset = () => {},
    userDeletePhoto = () => {},
    userDeletePhotoComplete = false,
    userDeletePhotoReset = () => {}
}) => {
    const [profileVisible, setProfileVisible] = useState(false);
    const [profileTextModalVisible, setProfileTextModalVisible]         = useState(false);
    const [basicInfoModalVisible, setBasicInfoModalVisible]             = useState(false);
    const [personalInfoModalVisible, setPersonalInfoModalVisible]       = useState(false);
    const [spouseCandidateModalVisible, setSpouseCandidateModalVisible] = useState(false);
    const [caracteristicFeatureModalVisible, setCaracteristicFeatureModalVisible] = useState(false);
    const [myPostEpisodeVisible, setMyPostEpisodeVisible] = useState(false);
    const [userMeVisible, setUserMeVisible] = useState(false);
    const [storyVisible, setStoryVisible] = useState();
    const [shareSelectNotif, setShareSelectNotif] = useState(false);
    const [photoModalVisible, setPhotoModalVisible] = useState(false);

    const [messageModalVisible, setMessageModalVisible] = useState(false);
    const [selectedMessageUserId, setSelectedMessageUserId] = useState();
    const [selectedUsername, setSelectedUsername] = useState();
    const [selectedUserStatus, setSelectedUserStatus] = useState();
    
    const messageModalOnClose = () => {
        setMessageModalVisible(false);
    }

    useEffect(() => {
        if(userDeletePhotoComplete) {
            userDeletePhotoReset();
            getUserPhoto({ userId: userMe?.id });
        }
    },[userDeletePhotoComplete]);

    useEffect(() => {
        if(userUploadPhotoComplete) {
            userUploadPhotoReset();
            getUserPhoto({ userId: userMe?.id });
        }
    },[userUploadPhotoComplete]);
    
    useEffect(() => {
        getMyStory();
    },[]);

    useEffect(() => {
        if(selectedMessageUserId) {
            getMessages({ userId: selectedMessageUserId });
        }
    },[selectedMessageUserId]);

    useEffect(() => {
        if(sendMessageCompleted) {
            getMessages({ userId: selectedMessageUserId });
        }
    },[sendMessageCompleted]);

    useEffect(() => {
        if(createStoryComplete) {
            resetCreateStoryComplete();
            setShareSelectNotif(true);
            window.location.reload();
        }
    },[createStoryComplete]);
    
    useEffect(() => {
        if(!isLoading) {
            setStoryVisible(true);
        }
    },[isLoading]);

    useEffect(() => {
        if(userMe?.id) {
            getUserPhoto({ userId: userMe?.id});
        }
    },[userMe?.id]);

    const userPhotoModalOnClose = () => {
        setPhotoModalVisible(false);
    }

    useEffect(() => {
        getNotifications({ read: false });
        getStory();
    },[]);

    useEffect(() => {
        if (!isUserLoggedIn) {
          window.location = '/';
        }
    }, [isUserLoggedIn]);

    useEffect(() => {
        getCities();
    },[]);

    useEffect(() => {
        if(!userMeLoading) {
            setUserMeVisible(true);
        }
    },[userMeLoading]);

    useEffect(() => {
        getUserMe();
        getMyPosts();
    },[]);
    
    useEffect(() => {
        if(activityLikeComplete) {
            resetPostActivityLikeComplete();
            getMyPosts();
        }
    },[activityLikeComplete]);

    useEffect(() => {
        if(activityFavoriteComplete) {
            resetPostActivityFavoriteComplete();
            getMyPosts();
        }
    },[activityFavoriteComplete]);

    useEffect(() => {
        if(activitySmileComplete) {
            resetPostActivitySmiledComplete();
            getMyPosts();
        }
    },[activitySmileComplete]);

    useEffect(() => {
        if(updateUserPersonalInfoComplete) {
            getUserMe();
        }
    },[updateUserPersonalInfoComplete]);

    useEffect(() => {
        if(userUpdateSpouseCandidateInfoComplete) {
            getUserMe();
        }
    },[userUpdateSpouseCandidateInfoComplete]);

    useEffect(() => {
        if(userUpdateCaracteristicFeatureComplete) {
            getUserMe();
        }
    },[userUpdateCaracteristicFeatureComplete]);

    useEffect(() => {
        if(!userMeLoading) {
            setProfileVisible(true);
        }
    },[userMeLoading]);

    const profileTextModalOnClose = () => {
        setProfileTextModalVisible(false);
    }

    const basicInfoModalOnClose = () => {
        setBasicInfoModalVisible(false);
    }

    const personalInfoModalOnClose = () => {
        setPersonalInfoModalVisible(false);
    }

    const spouseCandidateModalOnClose = () => {
        setSpouseCandidateModalVisible(false);
    } 

    const caracteristicFeatureModalOnClose = () => {
        setCaracteristicFeatureModalVisible(false);
    } 

    useEffect(() => {
        if(!isLoading) {
            setMyPostEpisodeVisible(true);
        }
    },[isLoading]);

    return (
        <>
            {shareSelectNotif && (
                <>
                    <ToastMessage message={"Hikayeniz başarılı bir şekilde yaplaşıldı ✅"}/>
                </>
            )}

            {photoModalVisible && (
                <>
                    <UserPhotoModal
                        onClose={userPhotoModalOnClose}
                        isLoading={isLoading}
                        error={error}
                        userUploadPhoto={userUploadPhoto}
                        photos={photos}
                        userDeletePhoto={userDeletePhoto}
                    />
                </>
            )}

            {profileTextModalVisible && (
                <>
                    <ProfileTextModal
                        onClose={profileTextModalOnClose}
                        isLoading={isLoading}
                        updateUserPersonalInfoComplete={updateUserPersonalInfoComplete}
                        updateUserPersonalInfo={updateUserPersonalInfo}
                        resetUpdateUserPersonalInfoComplete={resetUpdateUserPersonalInfoComplete}
                        userMe={userMe}
                    />
                </>
            )}

            {basicInfoModalVisible && (
                <>
                    <BasicInfoModal
                        onClose={basicInfoModalOnClose}
                        isLoading={isLoading}
                        updateUserPersonalInfoComplete={updateUserPersonalInfoComplete}
                        updateUserPersonalInfo={updateUserPersonalInfo}
                        resetUpdateUserPersonalInfoComplete={resetUpdateUserPersonalInfoComplete}
                        userMe={userMe}
                        cities={cities}
                        districts={districts}
                        getDistricts={getDistricts}
                    />
                </>
            )}

            {personalInfoModalVisible && (
                <>
                    <PersonalInfoModal
                        onClose={personalInfoModalOnClose}
                        isLoading={isLoading}
                        updateUserPersonalInfoComplete={updateUserPersonalInfoComplete}
                        updateUserPersonalInfo={updateUserPersonalInfo}
                        resetUpdateUserPersonalInfoComplete={resetUpdateUserPersonalInfoComplete}
                        userMe={userMe}
                        cities={cities}
                        districts={districts}
                        getDistricts={getDistricts}
                    />
                </>
            )}

            {spouseCandidateModalVisible && (
                <>
                    <SpouseCandidateModal
                        onClose={spouseCandidateModalOnClose}
                        isLoading={isLoading}
                        userUpdateSpouseCandidateInfoComplete={userUpdateSpouseCandidateInfoComplete}
                        userUpdateSpouseCandidate={userUpdateSpouseCandidate}
                        userUpdateSpouseCandidateReset={userUpdateSpouseCandidateReset}
                        userMe={userMe}
                        cities={cities}
                        districts={districts}
                        getDistricts={getDistricts}
                    />
                </>
            )}

            {caracteristicFeatureModalVisible && (
                <>
                    <CaracteristicFeatureModal
                        onClose={caracteristicFeatureModalOnClose}
                        isLoading={isLoading}
                        userUpdateCaracteristicFeatureComplete={userUpdateCaracteristicFeatureComplete}
                        userUpdateCaracteristicFeature={userUpdateCaracteristicFeature}
                        userUpdateCaracteristicFeatureReset={userUpdateCaracteristicFeatureReset}
                        userMe={userMe}
                    />
                </>
            )}
            
            <TopBanner
                onlineMemberCount={userMe?.online_member_count}
                messageCount={userMe?.message_count}
                profileVisible={userMeVisible}
                userLogout={userLogout}
                notifications={notifications}
                notificationIsLoading={notificationIsLoading}
            />
            
            <div className={styles.frame}>
                {storyVisible && (
                    <>
                        <StoryBanner
                            users={stories}
                            userMe={userMe}
                            createStory={createStory}
                            myStories={myStories}
                        />
                    </>
                )}
                <div className={styles.content}>
                    
                    {profileVisible && (
                        <>
                            <div className={styles.profileEpisode}>
                                <MyProfileCard
                                    uploadProfilePhotoComplete={uploadProfilePhotoComplete}
                                    uploadProfilePhotoIsLoading={uploadProfilePhotoIsLoading}
                                    userUploadProfilePhoto={userUploadProfilePhoto}
                                    resetUploadProfilePhotoComplete={resetUploadProfilePhotoComplete}
                                    details={userMe}
                                    setProfileTextModalVisible={setProfileTextModalVisible}
                                    setBasicInfoModalVisible={setBasicInfoModalVisible}
                                    setPersonalInfoModalVisible={setPersonalInfoModalVisible}
                                    setSpouseCandidateModalVisible={setSpouseCandidateModalVisible}
                                    setCaracteristicFeatureModalVisible={setCaracteristicFeatureModalVisible}
                                    setPhotoModalVisible={setPhotoModalVisible}
                                />
                            </div>
                        </>
                    )}

                    <div style={{ width: '100%', marginTop: '-25px' }}>
                        
                        {myPostEpisodeVisible && (
                            <>
                                <ListPostBox
                                    posts={myPosts}
                                    postActivityLike={postActivityLike}
                                    postIsLoading={postIsLoading}
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
export default ArchivePage;