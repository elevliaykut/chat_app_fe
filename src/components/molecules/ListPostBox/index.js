import React, { useState } from "react";
import styles from './Index.module.css';
import Image from "next/image";
import IM from '../../../utils/imgs/header-bg.jpg';
import ThemeConfig from "@/src/utils/ThemeConfig";

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
    setSelectedUserStatus = () => {}
}) => {
    const [likedPosts, setLikedPosts] = useState({});
    const [favoritedPosts, setFavoritedPosts] = useState({});
    const [smiledPosts, setSmiledPosts] = useState({});

    const handleLikeClick = (postId) => {
        setLikedPosts(prev => ({
            ...prev,
            [postId]: !prev[postId] // Toggle
        }));

        postActivityLike({ postId: postId });
    };

    const handleFavoritedClick = (postId) => {
        setFavoritedPosts(prev => ({
            ...prev,
            [postId]: !prev[postId] // Toggle
        }));

        postActivityFavorite({ postId: postId });
    };

    const handleSmiledClick = (postId) => {
        setSmiledPosts(prev => ({
            ...prev,
            [postId]: !prev[postId] // Toggle
        }));

        postActivitySmiled({ postId: postId });
    };
    
    const selectedOnClick = (user) => {
        setMessageModalVisible(true);
        setSelectedMessageUserId(user?.id);
        setSelectedUsername(user?.username);
        setSelectedUserStatus(user?.is_online)
    }

    return(
        <>
            {posts?.map(item => {
                const isLiked = likedPosts[item?.id] !== undefined
                    ? likedPosts[item?.id]
                    : item?.liked_by_me;

                const isFavorited = favoritedPosts[item?.id] !== undefined
                    ? favoritedPosts[item?.id]
                    : item?.favorited_by_me;

                const isSmiled = smiledPosts[item?.id] !== undefined
                    ? smiledPosts[item?.id]
                    : item?.smiled_by_me;

                    return (
                        <>
                            <div className={styles.container}>
                                <div className={styles.topEpisode}>
                                    
                                    <div className={styles.leftEpisode}>
                                        <div className={styles.profileEpisode} onClick={() => window.location = '/member/' + item?.creator_user?.id}>
                                            <Image src={IM} style={{ width: '60px',height: '60px',borderRadius: '100px'}}/>
                                        </div>
                                        
                                        <div className={styles.profileDetailEpisode}>
                                            <div className={styles.usernameEpisode} onClick={() => window.location = '/member/' + item?.creator_user?.id}>
                                                {item?.creator_user?.username}
                                            </div>
                                            <div className={styles.info}>
                                                <label>{item?.creator_user?.age},{item?.creator_user?.detail?.marital_status_value},{item?.creator_user?.detail?.city?.name}</label>
                                            </div>
                                        </div>
                                        <div className={styles.statusEpisode}>
                                            <label>Durumunu Güncelledi</label>
                                        </div>
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
                                    
                                    <div className={styles.footerLike} onClick={() => handleLikeClick(item?.id)}>
                                        <div className={styles.menuIconEpisode}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={isLiked ? ThemeConfig.success : 'white'} stroke={ThemeConfig.black} viewBox="0 0 24 24">
                                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                                            </svg>
                                        </div>
                                        <div className={styles.menuTextEpisode}>
                                            <label className={styles.footerText}>Beğen</label>
                                        </div>
                                        <div className={styles.line}></div>
                                    </div>

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

                                    <div className={styles.footerFavorite} onClick={() => handleFavoritedClick(item?.id)}>
                                        <div className={styles.menuIconEpisode}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={isFavorited ? ThemeConfig.success : 'white'} stroke={ThemeConfig.black} viewBox="0 0 24 24">
                                                <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                                            </svg>
                                        </div>
                                        <div className={styles.menuTextEpisode}>
                                            <label className={styles.footerText}>Favori Yap</label>
                                        </div>
                                        <div className={styles.line}></div>
                                    </div>   

                                    <div className={styles.footerSmile} onClick={() => handleSmiledClick(item?.id)}>
                                        <div className={styles.menuIconEpisode}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={isSmiled ? ThemeConfig.success : 'white'} stroke={ThemeConfig.black} viewBox="0 0 24 24">
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
                                </div>
                            </div>
                        
                        </>
                    )
            })}
        </>
    )
}
export default ListPostBox;