import React, { useEffect,useState } from "react";
import styles from './Index.module.css';
import Image from 'next/image';
import LOGO from '../../../utils/imgs/logo.png';
import ThemeConfig from "@/src/utils/ThemeConfig";

const TopBanner = ({
    onlineMemberCount = "",
    messageCount = "",
    profileVisible = false,
    userLogout = () => {},
    notifications = [],
    notificationIsLoading = false
}) => {

    const [notificationVisible, setNotificationVisible] = useState(false);
    const [notifFirstVisible, setNotifFirstVisible] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    
    // Toggle menü
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    
    useEffect(() => {
        if(!notificationIsLoading) {
            setNotifFirstVisible(true);
        }
    },[notificationIsLoading]);

    const notificationVisibleOnClick = () => {
        if(notifications?.meta?.total > 0) {
            setNotificationVisible(!notificationVisible);
        } else {
            window.location = '/notifications';
        }
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.frame}>
                <button className={styles.menuToggle} onClick={toggleMenu}>
                    ☰
                </button>
                
                {menuOpen && (
                    <div className={`${styles.mobileMenu} ${styles.mobileVisible}`}>
                        {profileVisible && (
                            <div className={styles.navItem}>ONLINE ÜYE: {onlineMemberCount}</div>
                        )}
                        <div className={styles.navItem} onClick={() => window.location = '/search/detail'}>
                            <div>
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill={ThemeConfig.white}
                                >
                                <path d="M15.5 14h-.79l-.28-.27a6.471 6.471 0 001.48-5.34A6.5 6.5 0 009.5 3a6.5 6.5 0 000 13 6.471 6.471 0 005.34-1.48l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C8.01 14 6 11.99 6 9.5S8.01 5 10.5 5 15 7.01 15 9.5 12.99 14 10.5 14z"/>
                                </svg>
                            </div>
                            <div>
                                <label>EŞ ADAYI ARA</label>
                            </div>
                        </div>
                        <div className={styles.navItem} onClick={() => window.location = '/messages'}>
                        <div className={styles.iconWrapper}>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="white"
                            >
                            <path d="M20 2H4C2.9 2 2 2.9 2 4v14l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                            </svg>
                            {messageCount !== 0 && (
                            <span className={styles.messageCount}>{messageCount}</span>
                            )}
                        </div>
                        <div>
                            <label>MESAJLAR</label>
                        </div>
                        </div>
                        <div className={styles.navItem} onClick={notificationVisibleOnClick}>
                            <div>
                                <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="white"
                                            >
                                            <path d="M12 22c1.1 0 1.99-.9 1.99-2h-4a2 2 0 002.01 2zM18 16v-5c0-3.07-1.63-5.64-4.5-6.32V4a1.5 1.5 0 00-3 0v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
                                        </svg>
                            </div>
                            <div>
                                <label>BİLDİRİMLER</label>
                            </div>
                        {notifications?.data?.length > 0 && <span className={styles.notificationCount}>{notifications?.meta?.total}</span>}
                        </div>
                        <div className={styles.navItem} onClick={() => window.location = '/my-settings'}>
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="white"
                                    >
                                    <path d="M19.14 12.94c.04-.31.06-.63.06-.94s-.02-.63-.06-.94l2.03-1.58a.5.5 0 00.12-.65l-1.91-3.32a.5.5 0 00-.61-.22l-2.39.96a7.007 7.007 0 00-1.62-.94L14.5 2.5a.5.5 0 00-.5-.5h-4a.5.5 0 00-.5.5l-.38 2.71a7.007 7.007 0 00-1.62.94l-2.39-.96a.5.5 0 00-.61.22L2.71 8.83a.5.5 0 00.12.65l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58a.5.5 0 00-.12.65l1.91 3.32c.14.24.43.34.68.22l2.39-.96c.5.38 1.05.7 1.62.94l.38 2.71c.04.26.26.44.5.44h4c.24 0 .46-.18.5-.44l.38-2.71a7.007 7.007 0 001.62-.94l2.39.96c.25.12.54.02.68-.22l1.91-3.32a.5.5 0 00-.12-.65l-2.03-1.58zM12 15.5A3.5 3.5 0 1115.5 12 3.5 3.5 0 0112 15.5z"/>
                                </svg>
                            </div>
                            <div>
                                <label>AYARLAR</label>
                            </div>
                        </div>
                        <div className={styles.navItem} onClick={() => window.location = '/my-profile'}>
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="white"
                                    >
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v4h-2zm0 6h2v4h-2z" />
                                </svg>
                            </div>
                            <div>
                                <label>PROFİL</label>
                            </div>
                        </div>
                        <div className={styles.navItem} onClick={userLogout}>
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="white"
                                    >
                                    <path d="M10 17l5-5h-4V4h-2v8H5l5 5zM20 3h-6v2h6v14h-6v2h6c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                                </svg>
                            </div>
                            <div>
                                <label>ÇIKIŞ</label>
                            </div>
                        </div>
                    </div>
                )}

                    <div className={styles.logoEpisode} onClick={() => window.location = '/home'}>
                        <Image
                            src={LOGO}
                        />
                    </div>
                    
                    <div className={styles.content}>
                        <div className={styles.cubuk}/>
                        {profileVisible && (
                            <>
                                <div>
                                    <label style={{ color: ThemeConfig.white, fontSize: '15px', cursor: 'pointer'}}>ONLINE ÜYE: {onlineMemberCount}</label>
                                </div>
                            </>
                        )}
                        <div className={styles.cubuk}/>
                        <div style={{ display: 'flex'}} onClick={() => window.location = '/search/detail'}>
                            {/* Search Icon */}
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill={ThemeConfig.white}
                                >
                                <path d="M15.5 14h-.79l-.28-.27a6.471 6.471 0 001.48-5.34A6.5 6.5 0 009.5 3a6.5 6.5 0 000 13 6.471 6.471 0 005.34-1.48l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C8.01 14 6 11.99 6 9.5S8.01 5 10.5 5 15 7.01 15 9.5 12.99 14 10.5 14z"/>
                                </svg>
                            {/* Label */}
                            <label style={{ color: ThemeConfig.white, fontSize: '15px', cursor: 'pointer' }}>
                                EŞ ADAYI ARA
                            </label>
                        </div>
                        
                        {profileVisible && (
                            <>
                                <div style={{ paddingTop: '10px', paddingLeft: '20px', paddingRight: '10px', cursor: 'pointer'}} onClick={() => window.location = '/messages'}>
                                    <div style={{ position: 'relative'}}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="white"
                                        >
                                            <path d="M20 2H4C2.9 2 2 2.9 2 4v14l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                                        </svg>
                                        {messageCount !== 0 && (
                                            <>
                                                <span className={styles.messageCount}>
                                                    {messageCount}
                                                </span>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </>
                        )}

                        {notifFirstVisible && (
                            <>
                                <div style={{ paddingTop: '10px',paddingLeft: '10px', paddingRight: '10px', cursor: 'pointer'}} onClick={notificationVisibleOnClick}>
                                    <div style={{ position: 'relative'}}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="white"
                                            >
                                            <path d="M12 22c1.1 0 1.99-.9 1.99-2h-4a2 2 0 002.01 2zM18 16v-5c0-3.07-1.63-5.64-4.5-6.32V4a1.5 1.5 0 00-3 0v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
                                        </svg>
                                        {notifications?.data?.length > 0 && (
                                            <span className={styles.notificationCount}>
                                                {notifications?.meta?.total}
                                            </span>
                                        )}
                                    </div>
                                    {notificationVisible && (
                                        <>
                                            <div className={styles.dropdown}>
                                                <div className={styles.header}>Bildirimler</div>
                                                    <ul className={styles.list}>
                                                        {notifications?.data.slice(0, 3).map(item => (
                                                            <>
                                                                <li key={item.id} className={styles.item}>
                                                                    {item?.user?.profile_photo_path ? (
                                                                        <>
                                                                            <img src={item?.user?.profile_photo_path} alt="avatar" className={styles.avatar} />
                                                                        </>
                                                                    ) : (
                                                                        <>
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
                                                                        </>
                                                                    )}
                                                                    <div className={styles.text}>
                                                                        <span className={styles.username} onClick={() => window.location = '/member/' + item?.user?.id}>{item?.user?.username}</span>{' '}
                                                                        <span className={styles.message}>{item.message}</span>
                                                                    </div>
                                                                </li>
                                                            </>
                                                        ))}
                                                    </ul>
                                                    <div className={styles.footer} onClick={() => window.location = '/notifications'}>Tümünü Gör</div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </>
                        )}
                        <div style={{ paddingTop: '10px',paddingLeft: '10px', paddingRight: '10px', cursor: 'pointer'}} onClick={() => window.location = '/my-settings'}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="white"
                                >
                                <path d="M19.14 12.94c.04-.31.06-.63.06-.94s-.02-.63-.06-.94l2.03-1.58a.5.5 0 00.12-.65l-1.91-3.32a.5.5 0 00-.61-.22l-2.39.96a7.007 7.007 0 00-1.62-.94L14.5 2.5a.5.5 0 00-.5-.5h-4a.5.5 0 00-.5.5l-.38 2.71a7.007 7.007 0 00-1.62.94l-2.39-.96a.5.5 0 00-.61.22L2.71 8.83a.5.5 0 00.12.65l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58a.5.5 0 00-.12.65l1.91 3.32c.14.24.43.34.68.22l2.39-.96c.5.38 1.05.7 1.62.94l.38 2.71c.04.26.26.44.5.44h4c.24 0 .46-.18.5-.44l.38-2.71a7.007 7.007 0 001.62-.94l2.39.96c.25.12.54.02.68-.22l1.91-3.32a.5.5 0 00-.12-.65l-2.03-1.58zM12 15.5A3.5 3.5 0 1115.5 12 3.5 3.5 0 0112 15.5z"/>
                            </svg>
                        </div>
                        <div style={{ paddingTop: '10px',paddingLeft: '10px', paddingRight: '10px', cursor: 'pointer'}} onClick={() => window.location = '/my-profile'}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="white"
                                >
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v4h-2zm0 6h2v4h-2z" />
                            </svg>
                        </div>
                        <div style={{ paddingTop: '10px',paddingLeft: '10px', paddingRight: '10px', cursor: 'pointer'}} onClick={() => userLogout()}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="white"
                                >
                                <path d="M10 17l5-5h-4V4h-2v8H5l5 5zM20 3h-6v2h6v14h-6v2h6c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TopBanner;