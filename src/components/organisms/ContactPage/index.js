import React, { useEffect, useState } from 'react';

import styles from './Index.module.css';
import ProfileTextModal from '../../molecules/Modals/ProfileTextModal';
import BasicInfoModal from '../../molecules/Modals/BasicInfoModal';
import PersonalInfoModal from '../../molecules/Modals/PersonalInfoModal';
import SpouseCandidateModal from '../../molecules/Modals/SpouseCandidateModal';
import CaracteristicFeatureModal from '../../molecules/Modals/CaracteristicFeatureModal';
import TopBanner from '../../molecules/TopBanner';
import ProfileEpisode from '../../molecules/ProfileEpisode';
import ToastMessage from "../../molecules/TostMessage";
import StoryBanner from "../../molecules/StoryBanner";
import UserPhotoModal from "../../molecules/Modals/UserPhotoModal";
import FooterBanner from "../../molecules/FooterBanner";
import Footer from '../../molecules/Footer';

export default function Home({
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
  getStory = () => {},
  stories = [],
  createStory = () => {},
  resetCreateStoryComplete = () => {},
  createStoryComplete = false,
  userUploadPhoto = () => {},
  getUserPhoto = () => {},
  photos = []
}) {

  const [profileVisible, setProfileVisible]                           = useState(false);
  const [profileTextModalVisible, setProfileTextModalVisible]         = useState(false);
  const [basicInfoModalVisible, setBasicInfoModalVisible]             = useState(false);
  const [memberVisible, setMemberVisible] = useState(false);
  const [personalInfoModalVisible, setPersonalInfoModalVisible]       = useState(false);
  const [spouseCandidateModalVisible, setSpouseCandidateModalVisible] = useState(false);
  const [caracteristicFeatureModalVisible, setCaracteristicFeatureModalVisible] = useState(false);
  const [userMeVisible, setUserMeVisible] = useState(false);

  const [storyVisible, setStoryVisible] = useState();
  const [shareSelectNotif, setShareSelectNotif] = useState(false);
  const [photoModalVisible, setPhotoModalVisible] = useState(false);

  const userPhotoModalOnClose = () => {
    setPhotoModalVisible(false);
}

useEffect(() => {
    if(createStoryComplete) {
        resetCreateStoryComplete();
        setShareSelectNotif(true);
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

        <div className={styles?.frame}>
          {storyVisible && (
                    <>
                        <StoryBanner
                            users={stories}
                            userMe={userMe}
                            createStory={createStory}
                        />
                    </>
          )}
          <div className={styles?.content}>
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

              <div className={styles.container}>
                  <p className={styles.greeting}>Değerli Kullanıcılarımız,</p>
                  <p className={styles.intro}>
                    Artık <strong>Gönülden Sevenler</strong> ile ilgili tüm sorularınızı, önerilerinizi ve destek taleplerinizi WhatsApp müşteri hizmetlerimize iletebilirsiniz. 
                    Size daha hızlı ve etkili bir şekilde yardımcı olabilmek için buradayız!
                  </p>

                  <div className={styles.whatsappBox}>
                    <p className={styles.whatsapp}>
                      <strong>WhatsApp:</strong> 0507 675 28 56 <span className={styles.hours}>(09:00 - 24:00)</span>
                    </p>
                    <p className={styles.subtitle}>WhatsApp üzerinden destek alabileceğiniz konular:</p>
                    <ul className={styles.list}>
                      <li>Hesap sorunları</li>
                      <li>Üyelik bilgileri</li>
                      <li>Ödeme ve paket işlemleri</li>
                      <li>Geri bildirim ve öneriler</li>
                    </ul>
                  </div>

                  <p className={styles.mailTitle}><strong>Mail adresiniz : destek@bikalp.com & yardim@bikalp.com</strong></p>

                  <a href="/help" className={styles.link}>
                    Yardım sayfamız için TIKLAYINIZ
                  </a>
                </div>
          </div>
        </div>
        <FooterBanner/>
    </>
    
  );
}
