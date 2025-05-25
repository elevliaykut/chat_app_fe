import React, { useEffect } from 'react';
import styles from './Index.module.css';

const MatchUserCard = ({
    user = {},
    getUserMatch  = () => {},
    userActivityLiked = () => {},
    userActivityLikedReset = () => {},
    getMatchPreviusUser = () => {},
    setMessageModalVisible = () => {},
    setSelectedMessageUserId = () => {},
    setSelectedUsername = () => {},
    setSelectedUserStatus = () => {}
}) => {

    const matchButtonOnClick  = () => {
        userActivityLiked({
            userId: user?.id
        });
        userActivityLikedReset();
        getUserMatch();
    }

    const closeButtonOnClick = () => {
        getUserMatch();
    }

    const previusUserOnClick = () => {
        getMatchPreviusUser();
    }

    const selectedOnClick = () => {
        setSelectedMessageUserId(user?.id);
        setSelectedUsername(user?.username);
        setSelectedUserStatus(user?.is_online);
        setMessageModalVisible(true);
    }
    
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {user?.profile_photo_path && (
            <>
                <img src={user?.profile_photo_path} alt="User" className={styles.image} />
            </>
        )}
        {user?.is_online && (
            <>
                <div className={styles.statusDot}></div>
            </>
        )}
        <div className={styles.checkIcon}>✔</div>
        <div className={styles.sendIcon} onClick={selectedOnClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" fill="none" stroke="#d63384" strokeWidth="3" viewBox="0 0 24 24">
                <path d="M22 2L11 13" />
                <path d="M22 2L15 22L11 13L2 9L22 2Z" />
            </svg>
        </div>
      </div>
      <div className={styles.info}>
        <h3 className={styles.username}>{user?.username}</h3>
        <p className={styles.details}>{user?.age}, {user?.detail?.marital_status_value}, {user?.detail?.city?.name}</p>
        {user?.is_online && (
            <>
                <p className={styles.online}>Çevrimiçi</p>
            </>
        )}
        <div className={styles.actions}>
            <button onClick={previusUserOnClick}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="black"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    >
                    <path d="M12 5V1L6 7l6 6V9c3.31 0 6 2.69 6 6 0 .34-.03.67-.08.99.71.45 1.29 1.07 1.72 1.77A7.972 7.972 0 0 0 20 15c0-4.42-3.58-8-8-8z"/>
                </svg>
            </button>
            <button onClick={closeButtonOnClick}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="black"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    >
                    <path d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7a1 1 0 1 0-1.41 1.41L10.59 12l-4.89 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z" />
                </svg>
            </button>
            <button onClick={matchButtonOnClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={"#d63384"} stroke={"#d63384"} viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
            </button>
        </div>
      </div>
    </div>
  );
};

export default MatchUserCard;
