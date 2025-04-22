import React, { useEffect, useState } from "react";
import TopBanner from "../../molecules/TopBanner";
import StorySlider from "../../molecules/StorySlider";
import styles from './Index.module.css';
import ProfileEpisode from "../../molecules/ProfileEpisode";
import ProfileTextModal from "../../molecules/Modals/ProfileTextModal";
import BasicInfoModal from "../../molecules/Modals/BasicInfoModal";
import SearchUserProfile from "../../molecules/SearchUserProfile";

const NewMembersPage = ({
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
    districts = []
}) => {

    const [profileVisible, setProfileVisible]                           = useState(false);
    const [profileTextModalVisible, setProfileTextModalVisible]         = useState(false);
    const [basicInfoModalVisible, setBasicInfoModalVisible]             = useState(false);
    const [memberVisible, setMemberVisible] = useState(false);

    useEffect(() => {
        const now = new Date();
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(now.getDate() - 7);
    
        const formatDate = (date) => date.toISOString().split('T')[0];
    
        console.log("nowDate: ", formatDate(now));
        console.log("oneWeekAgo: ", formatDate(oneWeekAgo));

        const merge = formatDate(oneWeekAgo) + ',' + formatDate(now);

        getUsers({
            startsBetween: merge
        });
    }, []);

    useEffect(() => {
        getUserMe();
    },[]);

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
                            />
                        </>
                    )}

                    <div className={styles.memberEpisode}>
                        {memberVisible && (
                            <>
                                {members?.map(item => (
                                    <>
                                        <SearchUserProfile
                                            user={item}
                                        />
                                    </>
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </div>

        </>
    )
}
export default NewMembersPage;