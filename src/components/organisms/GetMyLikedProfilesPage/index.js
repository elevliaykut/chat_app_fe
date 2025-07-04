import React, { useEffect, useState } from "react";
import TopBanner from "../../molecules/TopBanner";
import StorySlider from "../../molecules/StorySlider";
import styles from './Index.module.css';
import ProfileEpisode from "../../molecules/ProfileEpisode";
import ProfileTextModal from "../../molecules/Modals/ProfileTextModal";
import BasicInfoModal from "../../molecules/Modals/BasicInfoModal";
import SearchUserProfile from "../../molecules/SearchUserProfile";
import PersonalInfoModal from "../../molecules/Modals/PersonalInfoModal";
import SpouseCandidateModal from "../../molecules/Modals/SpouseCandidateModal";
import CaracteristicFeatureModal from "../../molecules/Modals/CaracteristicFeatureModal";
import FooterBanner from "../../molecules/FooterBanner";
import MessageModal from "../../molecules/Modals/MessageModal";
import ToastMessage from "../../molecules/TostMessage";
import StoryBanner from "../../molecules/StoryBanner";
import UserPhotoModal from "../../molecules/Modals/UserPhotoModal";

const GetMyLikedProfilesPage = ({
    isLoading = false,
    error = null,
    pageLoading = false,
    getUserMe = () => {},
    userMe = {},
    userMeLoading = false,
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
    getMyLikedProfiles = () => {},
    likedProfiles = [],
    userUpdateSpouseCandidate = () => {},
    userUpdateSpouseCandidateReset = () => {},
    userUpdateCaracteristicFeature = () => {},
    userUpdateCaracteristicFeatureReset = () => {},
    userUpdateSpouseCandidateInfoComplete = false,
    userUpdateCaracteristicFeatureComplete = false,
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
    userActivityLikedCompleted = false,
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
    getStory = () => {},
    stories = [],
    createStory = () => {},
    resetCreateStoryComplete = () => {},
    createStoryComplete = false,
    userUploadPhoto = () => {},
    getUserPhoto = () => {},
    photos = [],
    getMyStory = () => {},
    myStories = [],
    userUploadPhotoComplete = false,
    userUploadPhotoReset = () => {}
}) => {

    const [profileVisible, setProfileVisible]                           = useState(false);
    const [profileTextModalVisible, setProfileTextModalVisible]         = useState(false);
    const [basicInfoModalVisible, setBasicInfoModalVisible]             = useState(false);
    const [memberVisible, setMemberVisible] = useState(false);
    const [personalInfoModalVisible, setPersonalInfoModalVisible]       = useState(false);
    const [spouseCandidateModalVisible, setSpouseCandidateModalVisible] = useState(false);
    const [caracteristicFeatureModalVisible, setCaracteristicFeatureModalVisible] = useState(false);
    const [userMeVisible, setUserMeVisible] = useState(false);

    const [messageModalVisible, setMessageModalVisible] = useState(false);
    const [selectedMessageUserId, setSelectedMessageUserId] = useState();
    const [selectedUsername, setSelectedUsername] = useState();
    const [selectedUserStatus, setSelectedUserStatus] = useState();

    const [storyVisible, setStoryVisible] = useState();
    const [shareSelectNotif, setShareSelectNotif] = useState(false);
    const [photoModalVisible, setPhotoModalVisible] = useState(false);

    const userPhotoModalOnClose = () => {
        setPhotoModalVisible(false);
    }

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
        getNotifications({ read: false });
        getStory();
    },[]);

    useEffect(() => {
        if(userMe?.id) {
            getUserPhoto({ userId: userMe?.id})
        }
    },[userMe?.id]);

    useEffect(() => {
        if (!isUserLoggedIn) {
          window.location = '/';
        }
    }, [isUserLoggedIn]);

    useEffect(() => {
        getUserMe();
        getMyLikedProfiles();
        getCities();
    },[]);

    useEffect(() => {
        if(!userMeLoading) {
            setUserMeVisible(true);
        }
    },[userMeLoading]);

    useEffect(() => {
        if(userActivitySmiledCompleted) {
            getMyLikedProfiles();
            userActivitySmiledReset();
        }
    },[userActivitySmiledCompleted]);

    useEffect(() => {
        if(userBlockedComplete) {
            getMyLikedProfiles();
            userBlockedReset();
        }
    },[userBlockedComplete]);

    useEffect(() => {
        if(userActivityFavoriteCompleted) {
            getMyLikedProfiles();
            userActivityFavoriteReset();
        }
    },[userActivityFavoriteCompleted]);

    useEffect(() => {
        if(userActivityLikedCompleted) {
            getMyLikedProfiles();
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

    useEffect(() => {
        if(!isLoading) {
            setMemberVisible(true);
        }
    },[isLoading]);

    const personalInfoModalOnClose = () => {
        setPersonalInfoModalVisible(false);
    }

    const spouseCandidateModalOnClose = () => {
        setSpouseCandidateModalVisible(false);
    } 

    const caracteristicFeatureModalOnClose = () => {
        setCaracteristicFeatureModalVisible(false);
    } 

    const messageModalOnClose = () => {
        setMessageModalVisible(false);
    }

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
                    />
                </>
            )}
            {profileTextModalVisible && (
                <>
                    <ProfileTextModal
                        onClose={profileTextModalOnClose}
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
                            <ProfileEpisode
                                uploadProfilePhotoComplete={uploadProfilePhotoComplete}
                                uploadProfilePhotoIsLoading={uploadProfilePhotoIsLoading}
                                userUploadProfilePhoto={userUploadProfilePhoto}
                                resetUploadProfilePhotoComplete={resetUploadProfilePhotoComplete}
                                userMe={userMe}
                                setProfileTextModalVisible={setProfileTextModalVisible}
                                setBasicInfoModalVisible={setBasicInfoModalVisible}
                                setPersonalInfoModalVisible={setPersonalInfoModalVisible}
                                setSpouseCandidateModalVisible={setSpouseCandidateModalVisible}
                                setCaracteristicFeatureModalVisible={setCaracteristicFeatureModalVisible}
                                setPhotoModalVisible={setPhotoModalVisible}
                            />
                        </>
                    )}

                    <div className={styles.memberEpisode}>
                        {memberVisible && (
                            <>
                                {likedProfiles?.map(item => (
                                    <>
                                        <SearchUserProfile
                                            user={item?.user}
                                            userActivitySmiled={userActivitySmiled}
                                            userBlocked={userBlocked}
                                            userActivityFavorite={userActivityFavorite}
                                            userActivityLiked={userActivityLiked}
                                            setMessageModalVisible={setMessageModalVisible}
                                            setSelectedMessageUserId={setSelectedMessageUserId}
                                            setSelectedUsername={setSelectedUsername}
                                            setSelectedUserStatus={setSelectedUserStatus}
                                        />
                                    </>
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </div>
           <FooterBanner/>             
        </>
    )
}
export default GetMyLikedProfilesPage;