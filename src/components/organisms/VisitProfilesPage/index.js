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

const VisitProfilesPage = ({
    isLoading = false,
    error = null,
    pageLoading = false,
    getUsers = () => {},
    members = [],
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
    getUserProfileVisit = () => {},
    visitProfiles = [],
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
    notificationIsLoading = false
}) => {

    const [profileVisible, setProfileVisible]                           = useState(false);
    const [profileTextModalVisible, setProfileTextModalVisible]         = useState(false);
    const [basicInfoModalVisible, setBasicInfoModalVisible]             = useState(false);
    const [memberVisible, setMemberVisible] = useState(false);
    const [personalInfoModalVisible, setPersonalInfoModalVisible]       = useState(false);
    const [spouseCandidateModalVisible, setSpouseCandidateModalVisible] = useState(false);
    const [caracteristicFeatureModalVisible, setCaracteristicFeatureModalVisible] = useState(false);
    const [userMeVisible, setUserMeVisible] = useState(false);

    useEffect(() => {
        getNotifications();
    },[]);

    useEffect(() => {
        if (!isUserLoggedIn) {
          window.location = '/';
        }
    }, [isUserLoggedIn]);

    useEffect(() => {
        getUserMe();
    },[]);

    useEffect(() => {
        if(!userMeLoading) {
            setUserMeVisible(true);
        }
    },[userMeLoading]);

    useEffect(() => {
        getCities();
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

    useEffect(() => {
        getUserProfileVisit();
    },[]);

    useEffect(() => {
        if(userActivitySmiledCompleted) {
            getUserProfileVisit();
            userActivitySmiledReset();
        }
    },[userActivitySmiledCompleted]);

    useEffect(() => {
        if(userBlockedComplete) {
            getUserProfileVisit();
            userBlockedReset();
        }
    },[userBlockedComplete]);

    useEffect(() => {
        if(userActivityFavoriteCompleted) {
            getUserProfileVisit();
            userActivityFavoriteReset();
        }
    },[userActivityFavoriteCompleted]);

    useEffect(() => {
        if(userActivityLikedCompleted) {
            getUserProfileVisit();
            userActivityLikedReset();
        }
    },[userActivityLikedCompleted]);

    useEffect(() => {
        userActivitySmiledReset();
        userBlockedReset();
        userActivityFavoriteReset();
        userActivityLikedReset();
    },[]);

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
                profileVisible={userMeVisible}
                userLogout={userLogout}
                notifications={notifications}
                notificationIsLoading={notificationIsLoading}
            />
            
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

                    <div className={styles.memberEpisode}>
                        
                        {memberVisible && (
                            <>
                                {visitProfiles?.map(item => (
                                    <>
                                        <SearchUserProfile 
                                            user={item?.user}
                                            userActivitySmiled={userActivitySmiled}
                                            userBlocked={userBlocked}
                                            userActivityFavorite={userActivityFavorite}
                                            userActivityLiked={userActivityLiked}
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
export default VisitProfilesPage;