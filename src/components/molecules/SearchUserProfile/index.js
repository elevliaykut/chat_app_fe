import React, { use } from "react";
import styles from './Index.module.css';
import Image from "next/image";
import ThemeConfig from "@/src/utils/ThemeConfig";

/**
 * 
 * @param {*} param0 
 * @returns 
 */
const SearchUserProfile = ({
    user = {}
}) => {
    return(
        <>
            <div className={styles.container}>
                <div>
                    {user?.profile_photo_path ? (
                            <>
                                <Image 
                                    width={100}
                                    height={100}
                                    src={user?.profile_photo_path}
                                    className={styles.profilePhoto}
                                />
                            </>
                        ) : (
                            <>
                                <div style={{ textAlign: 'center', cursor: 'pointer'}}>
                                    <svg
                                            width="240"
                                            height="240"
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
                            </>
                        )}
                </div>
                <div className={styles.profileUsername} onClick={() => window.location = '/member/' + user?.id}>
                    <label>{user?.username}</label>
                </div>
                <div className={styles.profileDetail}>
                    <label>{user?.age}, {user?.detail?.marital_status_value}, {user?.detail?.city?.name}</label>
                </div>
                <div className={styles.status}>
                    <label>{user?.is_online ? 'Çevrimiçi' : 'Çevrimdışı'}</label>
                </div>
                <div className={styles.buttons}>
                    <div className={styles.buttonItem}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M22 2L11 13" />
                            <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                        </svg>
                    </div>
                    <div className={styles.buttonItem}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" stroke={ThemeConfig.black} viewBox="0 0 24 24">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                    </div>
                    <div className={styles.buttonItem}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" stroke={ThemeConfig.black} viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                    </div>
                    <div className={styles.buttonItem}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" stroke={ThemeConfig.black} viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 
                                    10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 
                                    8-8 8 3.59 8 8-3.59 8-8 8zm-4-6c.67 1.33 2.03 2 4 2s3.33-.67 
                                    4-2h-8zm0-4h2v2H8v-2zm6 0h2v2h-2v-2z"/>
                        </svg>
                    </div>
                    <div className={styles.buttonItem}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm0 2a8 8 0 0 1 6.32 12.9L5.1 5.68A7.962 7.962 0 0 1 12 4Zm0 16a8 8 0 0 1-6.32-12.9L18.9 18.32A7.962 7.962 0 0 1 12 20Z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SearchUserProfile;