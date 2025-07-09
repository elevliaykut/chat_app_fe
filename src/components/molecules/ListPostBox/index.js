import React, { useState } from "react";
import styles from './Index.module.css';
import Image from "next/image";
import IM from '../../../utils/imgs/header-bg.jpg';
import ThemeConfig from "@/src/utils/ThemeConfig";
import { usePathname } from 'next/navigation';

const ListPostBox = ({
    posts = [],
    postActivityLike = () => {},
    postIsLoading = false,
    postError = null,
    postActivityFavorite = () => {},
    postActivitySmiled = () => {},
    setMessageModalVisible = () => {},
    setSelectedMessageUserId = () => {},
    setSelectedUsername = () => {},
    setSelectedUserStatus = () => {},
    setPostReportModalVisible = () => {},
    setUserId = () => {},
    setPostId = () => {},
}) => {
    const pathname = usePathname();
    const isArchivePage = pathname === '/archive' || pathname === '/my-profile';

    const handleLikeClick = (postId, likedByMe) => {
        if(likedByMe) {
            postActivityLike({ 
                postId: postId,
                status: 0
            });
        }
        if(!likedByMe) {
            postActivityLike({ 
                postId: postId,
                status: 1
            });
        }
    };

    const handleFavoritedClick = (postId, favoriteByMe) => {
        if(favoriteByMe) {
            postActivityFavorite({ 
                postId: postId,
                status: 0 
            });
        }
        if(!favoriteByMe) {
            postActivityFavorite({ 
                postId: postId,
                status: 1 
            });
        }
    };

    const handleSmiledClick = (postId, smiledByMe) => {
        if(smiledByMe) {
            postActivitySmiled({ 
                postId: postId,
                status: 0 
            });
        }
        if(!smiledByMe) {
            postActivitySmiled({ 
                postId: postId,
                status: 1 
            });
        }
    };
    
    const selectedOnClick = (user) => {
        setMessageModalVisible(true);
        setSelectedMessageUserId(user?.id);
        setSelectedUsername(user?.username);
        setSelectedUserStatus(user?.is_online)
    }

    const reportModalOnClick = (postId, userId) => {
        setPostReportModalVisible(true);
        setUserId(userId);
        setPostId(postId)
    }       

    return(
        <>
            {posts?.map(item => {
                    return (
                        <>
                            <div className={styles.container}>
                                <div className={styles.topEpisode}>
                                    
                                    <div className={styles.leftEpisode}>
                                        <div className={styles.profileEpisode} onClick={() => window.location = '/member/' + item?.creator_user?.id}>
                                            {item?.creator_user?.profile_photo_path ? (
                                                <>
                                                    <Image 
                                                        src={item?.creator_user?.profile_photo_path} 
                                                        width={100}
                                                        height={100}
                                                        style={{ width: '60px',height: '60px',borderRadius: '100px'}}
                                                    />
                                                </>
                                            ) : (
                                                <>
                                                    <svg
                                                        width="60"
                                                        height="60"
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
                                        
                                        <div className={styles.profileDetailEpisode}>
                                            <div className={styles.usernameEpisode} onClick={() => window.location = '/member/' + item?.creator_user?.id}>
                                                {item?.creator_user?.username}
                                            </div>
                                            <div className={styles.info}>
                                                <label>{item?.creator_user?.age},{item?.creator_user?.detail?.marital_status_value},{item?.creator_user?.detail?.city?.name}</label>
                                            </div>
                                        </div>
                                        {isArchivePage && (
                                            <>
                                                <div className={styles.statusEpisode}>
                                                    <label 
                                                        style={{ 
                                                                color: item?.status === 1 ? ThemeConfig.success : ThemeConfig.error,
                                                                fontWeight: "bold"
                                                        }}>
                                                            {item?.status === 1  ? 'Onaylandı' : 'Onay Bekliyor'}
                                                    </label>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                    <div className={styles.rightEpisode}>
                                        <label>
                                            {item?.created_at}
                                        </label>
                                    </div>
                                </div>

                                <div className={styles.content}>
                                    <div className={styles.contentText}>
                                        <label>{item?.description}</label>
                                    </div>

                                    {item.photo[0] && (
                                        <>
                                            <div className={styles.contentImage}>
                                                <Image 
                                                    src={item?.photo[0]?.photo_path}
                                                    width={500}
                                                    height={400}
                                                />
                                            </div>
                                        </>
                                    )}
                                    
                                </div>
                                
                                <div className={styles.duzLine}/>
                                
                                <div className={styles.footer}>
                                    
                                    <div className={styles.footerLike} onClick={() => handleLikeClick(item?.id, item?.liked_by_me)}>
                                        <div className={styles.menuIconEpisode}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={item?.liked_by_me ? ThemeConfig.success : 'white'} stroke={ThemeConfig.black} viewBox="0 0 24 24">
                                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                                            </svg>
                                        </div>
                                        <div className={styles.menuTextEpisode}>
                                            <label className={styles.footerText}>Beğen</label>
                                        </div>
                                        <div className={styles.line}></div>
                                    </div>

                                    {!isArchivePage && (
                                        <>
                                            <div className={styles.footerMessage} onClick={() => selectedOnClick(item?.creator_user)}>
                                                <div className={styles.menuIconEpisode}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                        <path d="M22 2L11 13" />
                                                        <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                                                    </svg>
                                                </div>
                                                <div className={styles.menuTextEpisode}>
                                                    <label className={styles.footerText}>Mesaj Gönder</label>
                                                </div>
                                                <div className={styles.line}></div>
                                            </div>
                                        </>
                                    )}

                                    <div className={styles.footerFavorite} onClick={() => handleFavoritedClick(item?.id, item?.favorited_by_me)}>
                                        <div className={styles.menuIconEpisode}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={item?.favorited_by_me ? ThemeConfig.success : 'white'} stroke={ThemeConfig.black} viewBox="0 0 24 24">
                                                <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                                            </svg>
                                        </div>
                                        <div className={styles.menuTextEpisode}>
                                            <label className={styles.footerText}>Favori Yap</label>
                                        </div>
                                        <div className={styles.line}></div>
                                    </div>   

                                    <div className={styles.footerSmile} onClick={() => handleSmiledClick(item?.id, item?.smiled_by_me)}>
                                        <div className={styles.menuIconEpisode}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={item?.smiled_by_me ? ThemeConfig.success : 'white'} stroke={ThemeConfig.black} viewBox="0 0 24 24">
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 
                                                    10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 
                                                    8-8 8 3.59 8 8-3.59 8-8 8zm-4-6c.67 1.33 2.03 2 4 2s3.33-.67 
                                                    4-2h-8zm0-4h2v2H8v-2zm6 0h2v2h-2v-2z"/>
                                            </svg>
                                        </div>
                                        <div className={styles.menuTextEpisode}>
                                            <label className={styles.footerText}>Gülümse</label>
                                        </div>
                                        <div className={styles.line}></div>
                                    </div>    
                                    {!isArchivePage && (
                                        <>
                                            <div className={styles.footerSmile} onClick={() => reportModalOnClick(item?.id, item?.creator_user?.id)}>
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
                                                    <label className={styles.footerText}>Şikayet Et</label>
                                                </div>
                                                <div className={styles.line}></div>
                                            </div>  
                                        </>
                                    )}  
                                </div>
                            </div>
                        
                        </>
                    )
            })}
        </>
    )
}
export default ListPostBox;