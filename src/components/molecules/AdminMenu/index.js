import React, { useEffect, useState } from "react";
import styles from './Index.module.css';
import IMG from '../../../utils/imgs/header-bg.jpg';
import Image from "next/image";
import ThemeConfig from "@/src/utils/ThemeConfig";
import ToastMessage from "../TostMessage";

const AdminMenu = (
    userLogout = () => {}
) => {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.frame}>
                    
                    <div className={styles.menu} onClick={() => window.location = '/dashboard'}>
                        <div style={{ marginTop: '3px'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path fill="#000" d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-3.33 0-10 1.67-10 5v1a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-1c0-3.33-6.67-5-10-5Z"/>
                            </svg>
                        </div>
                        <div style={{ marginLeft: '15px',marginTop: '8px'}}>
                            <label className={styles.menuLabel}>Kullanıcılar</label>
                        </div>
                    </div>
                    <div className={styles.line}/>

                    <div className={styles.menu} onClick={() => window.location = '/stories'}>
                        <div style={{ marginTop: '3px'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path fill="#000" d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-3.33 0-10 1.67-10 5v1a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-1c0-3.33-6.67-5-10-5Z"/>
                            </svg>
                        </div>
                        <div style={{ marginLeft: '15px',marginTop: '8px'}}>
                            <label className={styles.menuLabel}>Storiler</label>
                        </div>
                    </div>

                    <div className={styles.line}/>
                    <div className={styles.menu}>
                        <div style={{ marginTop: '3px'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path fill="#505050" d="M20 5h-3.172l-1.414-1.414A2 2 0 0 0 13.172 3H10.83a2 2 0 0 0-1.414.586L8 5H4a2 2 0 0 0-2 2v11a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a2 2 0 0 0-2-2Zm0 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1.586l3.293-3.293a1 1 0 0 1 1.414 0l2.086 2.086a1 1 0 0 0 1.414 0L17 11l3 3v4ZM8.5 10.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"/>
                            </svg>
                        </div>
                        <div style={{ marginLeft: '15px',marginTop: '8px'}} onClick={() => window.location = '/photos'}>
                            <label className={styles.menuLabel}>Fotoğraflar</label>
                        </div>
                    </div>

                    <div className={styles.line}/>
                    <div className={styles.menu}>
                        <div style={{ marginTop: '3px'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path fill="#505050" d="M20 5h-3.172l-1.414-1.414A2 2 0 0 0 13.172 3H10.83a2 2 0 0 0-1.414.586L8 5H4a2 2 0 0 0-2 2v11a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a2 2 0 0 0-2-2Zm0 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1.586l3.293-3.293a1 1 0 0 1 1.414 0l2.086 2.086a1 1 0 0 0 1.414 0L17 11l3 3v4ZM8.5 10.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"/>
                            </svg>
                        </div>
                        <div style={{ marginLeft: '15px',marginTop: '8px'}} onClick={() => window.location = '/posts'}>
                            <label className={styles.menuLabel}>Paylaşımlar</label>
                        </div>
                    </div>

                    <div className={styles.line}/>
                    <div className={styles.menu}>
                        <div style={{ marginTop: '3px'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000" viewBox="0 0 24 24">
                                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25ZM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83Z"/>
                            </svg>
                        </div>
                        <div style={{ marginLeft: '15px',marginTop: '8px'}} onClick={() => window.location = '/profile-texts'}>
                            <label className={styles.menuLabel}>Profil Yazıları</label>
                        </div>
                    </div>
                    <div className={styles.line}/>
                    <div className={styles.menu}>
                        <div style={{ marginTop: '3px'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000" viewBox="0 0 24 24">
                                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25ZM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83Z"/>
                            </svg>
                        </div>
                        <div style={{ marginLeft: '15px',marginTop: '8px'}} onClick={() => window.location = '/payments'}>
                            <label className={styles.menuLabel}>Ödeme Formları</label>
                        </div>
                    </div>
                    <div className={styles.line}/>
                    <div className={styles.menu}>
                        <div style={{ marginTop: '3px'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000" viewBox="0 0 24 24">
                                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25ZM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83Z"/>
                            </svg>
                        </div>
                        <div style={{ marginLeft: '15px',marginTop: '8px'}} onClick={() => window.location = '/reports'}>
                            <label className={styles.menuLabel}>Şikayetler</label>
                        </div>
                    </div>
                    <div className={styles.line}/>
                    <div className={styles.noneIconmenu} onClick={userLogout}>
                        <div style={{ marginLeft: '0px',marginTop: '8px'}}>
                            <label className={styles.menuLabel}>ÇIKIŞ</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AdminMenu;