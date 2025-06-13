import React, { useEffect, useState } from "react";
import styles from './Index.module.css';
import Image from "next/image";
import ThemeConfig from "@/src/utils/ThemeConfig";

const MemberProfileCard = ({
    details = {},
    userActivityLiked = () => {},
    userActivityFavorite = () => {},
    userActivitySmiled = () => {},
    userBlocked = () => {},
    setReportModalVisible = () => {},
    setMessageModalVisible = () => {},
    setSelectedMessageUserId = () => {},
    setSelectedUsername = () => {},
    setSelectedUserStatus = () => {}
}) => {

    const likedOnClick = () => {
        userActivityLiked({
            userId: details?.id
        })
    }

    const favoriteOnClick = () => {
        userActivityFavorite({
            userId: details?.id
        });
    }

    const smiledOnClick = () => {
        userActivitySmiled({
            userId: details?.id
        });
    };

    const userBlockedOnClick = () => {
        userBlocked({
            userId: details?.id
        });
    }

    const selectedOnClick = () => {
        setSelectedMessageUserId(details?.id);
        setSelectedUsername(details?.username);
        setSelectedUserStatus(details?.is_online);
        setMessageModalVisible(true);
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.frame}>
                    <div className={styles.profilePhoto}> 
                        {details?.profile_photo_path ? (
                            <>
                                <Image 
                                    width={100}
                                    height={100}
                                    src={details?.profile_photo_path}
                                />
                            </>
                        ) : (
                            <>
                                <svg
                                            width="100"
                                            height="100"
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
                            </>
                        )}
                    </div>
                    
                    <div className={styles.username}>
                        <label style={{ fontSize: '15px', color: ThemeConfig.black}}>{details?.username}</label>
                    </div>
                    <div className={styles.defination}>
                        <label style={{ fontSize: '15px', color: ThemeConfig.black}}>{details?.age}, {details?.detail?.marital_status_value}, {details?.detail?.city?.name}</label>
                    </div>
                    <div className={styles.burc}>
                        <label style={{ fontSize: '15px', color: ThemeConfig.black}}>{details?.detail?.horoscope}</label>
                    </div>
                    <div className={styles.line}/>
                    <div className={styles.menu}>
                        <div className={styles.menuIconEpisode}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M22 2L11 13" />
                                <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                            </svg>
                        </div>
                        <div className={styles.menuTextEpisode} onClick={selectedOnClick}>
                            <label style={{ fontSize: '15px', color: ThemeConfig.black}}>Mesaj Gönder</label>
                        </div>
                    </div>
                    <div className={styles.line}/>
                    <div className={styles.menu} onClick={likedOnClick}>
                        <div className={styles.menuIconEpisode}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={details?.liked_by_me ? ThemeConfig.success : 'white'} stroke={ThemeConfig.black} viewBox="0 0 24 24">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                            </svg>
                        </div>
                        <div className={styles.menuTextEpisode}>
                            <label style={{ fontSize: '15px', color: ThemeConfig.black}}>Beğen</label>
                        </div>
                    </div>
                    <div className={styles.line}/>
                    <div className={styles.menu}>
                        <div className={styles.menuIconEpisode}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={details?.smiled_by_me ? ThemeConfig.success : 'white'} stroke={ThemeConfig.black} viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 
                                    10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 
                                    8-8 8 3.59 8 8-3.59 8-8 8zm-4-6c.67 1.33 2.03 2 4 2s3.33-.67 
                                    4-2h-8zm0-4h2v2H8v-2zm6 0h2v2h-2v-2z"/>
                            </svg>
                        </div>
                        <div className={styles.menuTextEpisode} onClick={smiledOnClick}>
                            <label style={{ fontSize: '15px', color: ThemeConfig.black}}>Gülücük Yolla</label>
                        </div>
                    </div>
                    <div className={styles.line}/>
                    <div className={styles.menu} onClick={favoriteOnClick}>
                        <div className={styles.menuIconEpisode}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={details?.favorited_by_me ? ThemeConfig.success : 'white'} stroke={ThemeConfig.black} viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                            </svg>     
                        </div>
                        <div className={styles.menuTextEpisode}>
                            <label style={{ fontSize: '15px', color: ThemeConfig.black}}>Favori Ekle</label>
                        </div>
                    </div>
                    <div className={styles.line}/>
                    <div className={styles.menu}>
                        <div className={styles.menuIconEpisode}>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="1"
                            >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M20 12v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8m16 0H4m16 0l-1.528-5.472a2 2 0 00-1.923-1.528H7.451a2 2 0 00-1.923 1.528L4 12m4-6a2 2 0 114 0 2 2 0 014 0" />
                        </svg>
                        </div>
                        <div className={styles.menuTextEpisode}>
                            <label style={{ fontSize: '15px', color: ThemeConfig.black}}>Hediye Gönder</label>
                        </div>
                    </div>
                    <div className={styles.line}/>
                    <div className={styles.menu} onClick={userBlockedOnClick}>
                        <div className={styles.menuIconEpisode}>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill={details?.blocked_by_me ? ThemeConfig.success : 'none'}
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="1"
                            >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 5.636a9 9 0 11-12.728 12.728 9 9 0 0112.728-12.728zM6.343 6.343l11.314 11.314" />
                        </svg>
                        </div>
                        <div className={styles.menuTextEpisode}>
                            <label style={{ fontSize: '15px', color: ThemeConfig.black}}>Engelle</label>
                        </div>
                    </div>
                    <div className={styles.line}/>
                    
                    <div className={styles.menu} onClick={() => setReportModalVisible(true)}>
                        <div className={styles.menuIconEpisode}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A7 7 0 1117 9m-5 11v-2m0-4h.01" />
                        </svg>
                        </div>
                        <div className={styles.menuTextEpisode}>
                            <label style={{ fontSize: '15px', color: ThemeConfig.black}}>Şikayet Et</label>
                        </div>
                    </div>
                    <div className={styles.line}/>
                </div>
            </div>
        </>
    )
}
export default MemberProfileCard;