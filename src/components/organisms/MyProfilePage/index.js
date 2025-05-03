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

const MyProfilePage = ({
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
    userUpdateSpouseCandidateReset = () => {}
}) => {
    const [profileVisible, setProfileVisible] = useState(false);
    const [memberPostVisible, setMemberPostVisible] = useState(false);
    const [profileTextModalVisible, setProfileTextModalVisible]         = useState(false);
    const [basicInfoModalVisible, setBasicInfoModalVisible]             = useState(false);
    const [personalInfoModalVisible, setPersonalInfoModalVisible]       = useState(false);
    const [spouseCandidateModalVisible, setSpouseCandidateModalVisible] = useState(false);

    useEffect(() => {
        getCities();
    },[]);

    useEffect(() => {
        getUserMe();
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

    const personalInfoModalOnClose = () => {
        setPersonalInfoModalVisible(false);
    }

    const spouseCandidateModalOnClose = () => {
        setSpouseCandidateModalVisible(false);
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
            <TopBanner/>
            
            <div className={styles.frame}>
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
                                />
                            </div>
                        </>
                    )}

                    <div style={{ width: '100%' }}>
                        {profileVisible && (
                            <>
                                    <MemberProfileTextCard
                                        details={userMe}
                                    />

                                    <MemberProfileFullDetailsEpisode
                                        details={userMe}
                                    />
                            </>
                        )}

                        {
                            //List post box here...
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default MyProfilePage;