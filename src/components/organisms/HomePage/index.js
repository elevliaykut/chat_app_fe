import React, { useEffect,useState } from "react";
import styles from './Home.module.css';
import TopBanner from '../../molecules/TopBanner';
import StorySlider from "../../molecules/StorySlider";
import ProfileEpisode from "../../molecules/ProfileEpisode";
import PostBox from "../../molecules/PostBox";
import ListPostBox from "../../molecules/ListPostBox";
import ProfileTextModal from "../../molecules/Modals/ProfileTextModal";
import BasicInfoModal from "../../molecules/Modals/BasicInfoModal";
import PersonalInfoModal from "../../molecules/Modals/PersonalInfoModal";
import SpouseCandidateModal from "../../molecules/Modals/SpouseCandidateModal";
import CaracteristicFeatureModal from "../../molecules/Modals/CaracteristicFeatureModal";
import FooterBanner from "../../molecules/FooterBanner";
import StoryBanner from "../../molecules/StoryBanner";
import ToastMessage from "../../molecules/TostMessage";
import UserPhotoModal from "../../molecules/Modals/UserPhotoModal";
import MessageModal from "../../molecules/Modals/MessageModal";
import PostReportModal from "../../molecules/Modals/PostReportModal";

const HomePage = ({
    posts = [],
    isLoading = false,
    error = null,
    userPostList = () => {},
    pageLoading = false,
    createPostLoading = false,
    createPostComplete = false,
    userCreatePost = () => {},
    resetCreatePostComplete = () => {},
    uploadProfilePhotoComplete = false,
    uploadProfilePhotoIsLoading = false,
    userUploadProfilePhoto = () => {},
    resetUploadProfilePhotoComplete = () => {},
    getUserMe = () => {},
    userMe = {},
    userMeLoading = false,
    updateUserPersonalInfoComplete = false,
    updateUserPersonalInfo = () => {},
    resetUpdateUserPersonalInfoComplete = () => {},
    getCities =  () => {},
    getDistricts = () => {},
    cities = [],
    districts = [],
    postActivityLike = () => {},
    postIsLoading = false,
    postError = null,
    postActivityFavorite = () => {},
    postActivitySmiled = () => {},
    userUpdateSpouseCandidate = () => {},
    userUpdateSpouseCandidateReset = () => {},
    userUpdateCaracteristicFeature = () => {},
    userUpdateCaracteristicFeatureReset = () => {},
    userUpdateSpouseCandidateInfoComplete = false,
    userUpdateCaracteristicFeatureComplete = false,
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
    resetPostActivityLikeComplete = () => {},
    resetPostActivityFavoriteComplete = () => {},
    resetPostActivitySmiledComplete = () => {},
    activityLikeComplete = false,
    activityFavoriteComplete = false,
    activitySmileComplete = false,
    userReportsComplete = false,
    userReports = () => {},
    userReportsReset = () => {},
    getMyStory = () => {},
    myStories = [],
    userUploadPhotoComplete = false,
    userUploadPhotoReset = () => {},
    
    userDeletePhoto = () => {},
    userDeletePhotoComplete = false,
    userDeletePhotoReset = () => {},
    isThatActive = false
}) => {

    const [visible, setVisible]                                         = useState(false);
    const [profileVisible, setProfileVisible]                           = useState(false);
    const [profileTextModalVisible, setProfileTextModalVisible]         = useState(false);
    const [basicInfoModalVisible, setBasicInfoModalVisible]             = useState(false);
    const [personalInfoModalVisible, setPersonalInfoModalVisible]       = useState(false);
    const [spouseCandidateModalVisible, setSpouseCandidateModalVisible] = useState(false);
    const [caracteristicFeatureModalVisible, setCaracteristicFeatureModalVisible] = useState(false);
    const [storyVisible, setStoryVisible] = useState();
    const [shareSelectNotif, setShareSelectNotif] = useState(false);
    const [photoModalVisible, setPhotoModalVisible] = useState(false);

    const [messageModalVisible, setMessageModalVisible] = useState(false);
    const [selectedMessageUserId, setSelectedMessageUserId] = useState();
    const [selectedUsername, setSelectedUsername] = useState();
    const [selectedUserStatus, setSelectedUserStatus] = useState();
    const [postReportModalVisible, setPostReportModalVisible] = useState(false);
    const [userId, setUserId] = useState();
    const [postId, setPostId] = useState();

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
        if(!userMe?.personal_info_complete) {
            window.location = '/info';
        }
    },[userMe]);

    useEffect(() => {
        userReportsReset();
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
        getNotifications({ read: false });
        getStory();
    },[]);

    useEffect(() => {
        if(userMe?.id) {
            getUserPhoto({ userId: userMe?.id });
        }
    },[userMe?.id]);

    useEffect(() => {
        getUserPhoto({ userId: userMe?.id});
    },[]);

    useEffect(() => {
        if (!isUserLoggedIn) {
          window.location = '/';
        }
      }, [isUserLoggedIn]);
    
    useEffect(() => {
        if(updateUserPersonalInfoComplete) {
            getUserMe();
        }
    },[updateUserPersonalInfoComplete]);

    useEffect(() => {
        if(uploadProfilePhotoComplete) {
            resetUploadProfilePhotoComplete();
            getUserMe();
        }
    },[uploadProfilePhotoComplete]);

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
        getCities();
    },[]);

    useEffect(() => {
        getUserMe();
        resetCreatePostComplete();
        userPostList();
    },[]);

    useEffect(() => {
        if(activityLikeComplete) {
            resetPostActivityLikeComplete();
            userPostList();
        }
    },[activityLikeComplete]);

    useEffect(() => {
        if(activityFavoriteComplete) {
            resetPostActivityFavoriteComplete();
            userPostList();
        }
    },[activityFavoriteComplete]);

    useEffect(() => {
        if(activitySmileComplete) {
            resetPostActivitySmiledComplete();
            userPostList();
        }
    },[activitySmileComplete]);

    useEffect(() => {
        if(!pageLoading) {
            setVisible(true);
        }
    },[pageLoading]);

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

    const userPhotoModalOnClose = () => {
        setPhotoModalVisible(false);
    }

    return (
        <>
            {shareSelectNotif && (
                <>
                    <ToastMessage message={"Hikayeniz başarılı bir şekilde yaplaşıldı ✅"}/>
                </>
            )}

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
                profileVisible={profileVisible}
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
                                userLogout={userLogout}
                                isThatActive={isThatActive}
                            />
                        </>
                    )}
                    
                    <div style={{ width: '100%'}}>
                        
                        {profileVisible && (
                            <>
                                <PostBox
                                    createPostComplete={createPostComplete}
                                    createPostLoading={createPostLoading}
                                    userCreatePost={userCreatePost}
                                    userPostList={userPostList}
                                    userMe={userMe}
                                />
                            </>
                        )}
                        
                        {visible && (
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

                        {!visible && (
                            <>
                                <div className={styles.loader}>
                                    <div className={styles.spinner}></div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <FooterBanner/>
        </>
    )
}
export default HomePage;