import React, { useEffect, useState } from "react";
import TopBanner from "../../molecules/TopBanner";
import SearchMenu from "../../molecules/SearchMenu";
import styles from './Index.module.css';
import FooterBanner from "../../molecules/FooterBanner";

const SearchPhotosPage = ({
    members = [],
    isLoading = false,
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
    userMe = {},
    userMeLoading = false,
    getUserMe = () => {},
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
    getApproveUsers = () => {},
    getUserPhotos = () => {},
    userPhotos = []
}) => {
    const [userMeVisible, setUserMeVisible] = useState(false);
    const [contentVisible, setContentVisible] = useState(false);

    useEffect(() => {
        if(!isLoading) {
            setContentVisible(true)
        }
    },[isLoading]);

    useEffect(() => {
        getNotifications({ read: false });
    },[]);

    useEffect(() => {
        getUserPhotos();
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

    return (
        <>
            <TopBanner
                onlineMemberCount={userMe?.online_member_count}
                messageCount={userMe?.message_count}
                profileVisible={userMeVisible}
                userLogout={userLogout}
                notifications={notifications}
                notificationIsLoading={notificationIsLoading}
            />
            <SearchMenu/>
            <div className={styles.frame}>
                <div className={styles.matchesEpisode}>
                        <div className={styles.listButton} onClick={() => window.location = '/search/detail'}>
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#ff4081"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    >
                                    <line x1="8" y1="6" x2="21" y2="6" />
                                    <line x1="8" y1="12" x2="21" y2="12" />
                                    <line x1="8" y1="18" x2="21" y2="18" />
                                    <circle cx="3" cy="6" r="1" />
                                    <circle cx="3" cy="12" r="1" />
                                    <circle cx="3" cy="18" r="1" />
                                </svg>
                            </div>
                            <label>LİSTE</label>
                        </div>
                        <div className={styles.matchButton} onClick={() => window.location = '/search/like'}>
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="black"
                                    >
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
                                            2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09 
                                            C13.09 3.81 14.76 3 16.5 3 
                                            19.58 3 22 5.42 22 8.5 
                                            c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                                </svg>
                            </div>
                            <label>EŞLEŞ</label>
                        </div>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.frame}>
                
                {contentVisible && (
                    <>
                        <div className={styles.content}>
                            {userPhotos.length === 0 ? (
                                <p>Hiç fotoğraf bulunamadı.</p>
                            ) : (
                                <>
                                    {userPhotos.map((item) => (
                                        <div key={item.id} className={styles.photoCard} onClick={() => window.open('/member/' + item?.user?.id)}>
                                        <img
                                            src={item.photo_path}
                                            alt={`${item.user.name} ${item.user.surname}`}
                                            className={styles.photo}
                                        />
                                        <p className={styles.name}>
                                            {item.user.username}, {item?.user?.age}, {item?.user?.detail?.marital_status_value}, {item?.user?.detail?.city?.name}
                                        </p>
                                        </div>
                                ))}
                                </>
                            )}
                        </div>
                    </>
                )}

                </div>
            </div>
            <FooterBanner/>
        </>
    )
}
export default SearchPhotosPage;