import React, { useEffect, useState } from "react";
import TopBanner from "../../molecules/TopBanner";
import { userLogout } from "@/src/store/user/actions";
import styles from './Index.module.css';

const NotificationsPage = ({
    isLoading = false,
    pageLoading = false,
    error = null,
    userMe = {},
    userMeLoading = false,
    isUserLoggedIn = false,
    getNotifications = () => {},
    notifications = [],
    notificationIsLoading = false,
    getUserMe = () => {},
    readNotificationComplete = false,
    readNotification = () => {},
    readNotificationReset = () => {},
    getAllNotification = () => {},
    allNotifications = [],
    deleteNotification = () => {},
    resetDeleteNotification = () => {},
    deleteNotificationComplete = () => {}
}) => {
    const [notifVisible, setNotifVisible] = useState(false);
    const [userMeVisible, setUserMeVisible] = useState(false);

    useEffect(() => {
        if(deleteNotificationComplete) {
            getAllNotification();
            resetDeleteNotification();
        }
    },[deleteNotificationComplete]);

    useEffect(() => {
        getUserMe();
        readNotification();
    },[]);

    useEffect(() => {
        if(!userMeLoading) {
            setUserMeVisible(true);
        }
    },[userMeLoading]);

    useEffect(() => {
        if(!notificationIsLoading) {
            setNotifVisible(true);
        }
    },[notificationIsLoading]);

    useEffect(() => {
        getNotifications({ read: false });
        getAllNotification();
    },[]);

    return (
        <>
            <TopBanner
                onlineMemberCount={userMe?.online_member_count}
                profileVisible={userMeVisible}
                userLogout={userLogout}
                notifications={notifications}
                notificationIsLoading={notificationIsLoading}
            />

            {notifVisible ? (
                <>
                    <div className={styles.container}>
                        <h1 className={styles.title}>Tüm Bildirimler</h1>
                        <ul className={styles.list}>
                            {allNotifications?.data?.length === 0 ? (
                                <p className={styles.empty}>Henüz bildirim yok.</p>
                            ) : (
                                <>
                                    {allNotifications?.map(item => (
                                        <>
                                            <li key={item.id} className={styles.item}>
                                                <div className={styles.info}>
                                                    {item.user?.profile_photo_path ? (
                                                        <img
                                                            src={item.user.profile_photo_path}
                                                            alt="avatar"
                                                            className={styles.avatar}
                                                        />
                                                    ) : (
                                                        <div className={styles.avatar}>
                                                            <svg
                                                                width="35"
                                                                height="35"
                                                                viewBox="0 0 24 24"
                                                                fill="#ccc"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                <circle cx="12" cy="12" r="10" fill="#E0E0E0" />
                                                                <circle cx="12" cy="8" r="4" fill="#BDBDBD" />
                                                                <path
                                                                    d="M12 14c-4 0-6 2-6 4v1h12v-1c0-2-2-4-6-4z"
                                                                    fill="#BDBDBD"
                                                            />
                                                            </svg>
                                                        </div>
                                                    )}
                                                    <div className={styles.text}>
                                                        <span className={styles.username}>{item.user?.username}</span>
                                                        <span className={styles.message}>{item.message}</span>
                                                    </div>
                                                </div>
                                                <button className={styles.deleteButton} onClick={() => deleteNotification({ id: item?.id})}>
                                                    🗑️
                                                </button>
                                            </li>
                                        </>
                                    ))}
                                </>
                            )}
                        </ul>
                    </div>
                </>
            ) : (
                <>
                    <label>Yükleniyor...</label>
                </>
            )}
        </>
    )
}
export default NotificationsPage;