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
    userUpdateCaracteristicFeatureComplete = false
}) => {

    const [visible, setVisible]                                         = useState(false);
    const [profileVisible, setProfileVisible]                           = useState(false);
    const [profileTextModalVisible, setProfileTextModalVisible]         = useState(false);
    const [basicInfoModalVisible, setBasicInfoModalVisible]             = useState(false);
    const [personalInfoModalVisible, setPersonalInfoModalVisible]       = useState(false);
    const [spouseCandidateModalVisible, setSpouseCandidateModalVisible] = useState(false);
    const [caracteristicFeatureModalVisible, setCaracteristicFeatureModalVisible] = useState(false);


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
        getCities();
    },[]);

    useEffect(() => {
        getUserMe();
        resetCreatePostComplete();
        userPostList();
    },[]);

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

    return (
        <>
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
            
            <TopBanner/>
            <StorySlider/>
            <div className={styles.frame}>
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