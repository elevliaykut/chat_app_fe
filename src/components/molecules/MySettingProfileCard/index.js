import React, { useEffect, useState } from "react";
import styles from './Index.module.css';
import Image from "next/image";
import ThemeConfig from "@/src/utils/ThemeConfig";

const MySettingProfileCard = ({
    details = {},
    setFilterEpisodeVisible = () => {},
    setFreezeAccountEpisodeVisible = () => {},
    setDeleteAccountEpisodeVisible = () => {},
    setChangeEmailEpisodeVisible = () => {},
    setChangePasswordEpisodeVisible = () => {}
}) => {

    const filterButtonOnClick = () => {
        setFilterEpisodeVisible(true);
        setFreezeAccountEpisodeVisible(false);
        setDeleteAccountEpisodeVisible(false);
        setChangeEmailEpisodeVisible(false);
        setChangePasswordEpisodeVisible(false);
    }

    const freezeAccountOnClick = () => {
        setFilterEpisodeVisible(false);
        setFreezeAccountEpisodeVisible(true);
        setDeleteAccountEpisodeVisible(false);
        setChangeEmailEpisodeVisible(false);
        setChangePasswordEpisodeVisible(false);
    }

    const deleteAccountOnClick = () => {
        setFilterEpisodeVisible(false);
        setFreezeAccountEpisodeVisible(false);
        setDeleteAccountEpisodeVisible(true);
        setChangeEmailEpisodeVisible(false);
        setChangePasswordEpisodeVisible(false);
    }

    const changeEmailOnClick = () => {
        setFilterEpisodeVisible(false);
        setFreezeAccountEpisodeVisible(false);
        setDeleteAccountEpisodeVisible(false);
        setChangeEmailEpisodeVisible(true);
        setChangePasswordEpisodeVisible(false);
    }

    const changePasswordOnClick = () => {
        setFilterEpisodeVisible(false);
        setFreezeAccountEpisodeVisible(false);
        setDeleteAccountEpisodeVisible(false);
        setChangeEmailEpisodeVisible(false);
        setChangePasswordEpisodeVisible(true);
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
                    <div className={styles.menu} onClick={filterButtonOnClick}>
                        <div style={{ marginTop: '3px'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 13.414V19a1 1 0 01-1.447.894l-4-2A1 1 0 019 17v-3.586L3.293 6.707A1 1 0 013 6V4z" />
                            </svg>
                        </div>
                        <div style={{ marginLeft: '15px',marginTop: '8px'}}>
                            <label style={{ fontSize: '15px', color: ThemeConfig.black}}>Filtre Ayarları</label>
                        </div>
                    </div>
                    <div className={styles.line}/>
                    <div className={styles.menu} onClick={freezeAccountOnClick}>
                        <div style={{ marginTop: '3px'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M10 9v6m4-6v6M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
                        </svg>
                        </div>
                        <div style={{ marginLeft: '15px',marginTop: '8px'}}>
                            <label style={{ fontSize: '15px', color: ThemeConfig.black}}>Hesabımı Dondur</label>
                        </div>
                    </div>
                    <div className={styles.line}/>
                    <div className={styles.menu} onClick={deleteAccountOnClick}>
                        <div style={{ marginTop: '3px'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7h6m2 0a2 2 0 00-2-2H9a2 2 0 00-2 2m12 0H5" />
                            </svg>
                        </div>
                        <div style={{ marginLeft: '15px',marginTop: '8px'}}>
                            <label style={{ fontSize: '15px', color: ThemeConfig.black}}>Hesabımı Sil</label>
                        </div>
                    </div>
                    <div className={styles.line}/>
                    <div className={styles.menu} onClick={changeEmailOnClick}>
                        <div style={{ marginTop: '3px'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m0 8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h14a2 2 0 012 2v8z" />
                            </svg>
                        </div>
                        <div style={{ marginLeft: '15px',marginTop: '8px'}}>
                            <label style={{ fontSize: '15px', color: ThemeConfig.black}}>E-posta Değiştir</label>
                        </div>
                    </div>
                    <div className={styles.line}/>
                    <div className={styles.menu} onClick={changePasswordOnClick}>
                        <div style={{ marginTop: '3px'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M12 17a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm6-7V9a6 6 0 10-12 0v1m12 0a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6a2 2 0 012-2m12 0H6" />
                            </svg>
                        </div>
                        <div style={{ marginLeft: '15px',marginTop: '8px', cursor: 'pointer'}}>
                            <label style={{ fontSize: '15px', color: ThemeConfig.black}}>Şifre Değiştir</label>
                        </div>
                    </div>
                    <div className={styles.line}/>
                    <div className={styles.menu}>
                        <div style={{ marginTop: '3px'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M8 16h8M8 12h8m-6 8h6a2 2 0 002-2V6a2 2 0 00-2-2H8a2 2 0 00-2 2v12a2 2 0 002 2zm0 0v-4" />
                            </svg>
                        </div>
                        <div style={{ marginLeft: '15px',marginTop: '8px'}}>
                            <label style={{ fontSize: '15px', color: ThemeConfig.black}}>Sözleşme</label>
                        </div>
                    </div>
                    <div className={styles.line}/>
                    <div className={styles.menu} onClick={() => window.location = '/contact'}>
                        <div style={{ marginTop: '3px'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4.69-1.06L3 20l1.38-3.65A7.964 7.964 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                        </div>
                        <div style={{ marginLeft: '15px',marginTop: '8px'}}>
                            <label style={{ fontSize: '15px', color: ThemeConfig.black}}>İletişim</label>
                        </div>
                    </div>
                    {details?.gender === 1 && (
                        <>
                            <div className={styles.line}/>
                                <div className={styles.menu}>
                                    <div style={{ marginTop: '14px'}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FFD700" viewBox="0 0 24 24">
                                            <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.4 8.168L12 18.896l-7.334 3.864 1.4-8.168L.132 9.21l8.2-1.192z"/>
                                        </svg>
                                    </div>
                                    <div style={{ marginLeft: '15px',marginTop: '8px'}} onClick={() => window.location = '/payment'}>
                                        <label className={styles.menuLabel}>ALTIN ÜYE OL</label>
                                        <label className={styles.menuLabel} style={{ paddingTop: '5px'}}>Tüm Kısıtlamaları Kaldır</label>
                                    </div>
                                </div>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}
export default MySettingProfileCard;