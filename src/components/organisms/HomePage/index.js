import React, { useEffect,useState } from "react";
import styles from './Home.module.css';
import Image from 'next/image';
import ThemeConfig from "@/src/utils/ThemeConfig";
import TopBanner from '../../molecules/TopBanner';
import StorySlider from "../../molecules/StorySlider";
import ProfileEpisode from "../../molecules/ProfileEpisode";
import PostBox from "../../molecules/PostBox";
import ListPostBox from "../../molecules/ListPostBox";
import ProfileTextModal from "../../molecules/Modals/ProfileTextModal";

const HomePage = ({
    posts = [],
    isLoading = false,
    error = null,
    userPostList = () => {},
    pageLoading = false,
    createPostLoading = false,
    createPostComplete = false,
    userCreatePost = () => {},
    resetCreatePostComplete = () => {},
    uploadProfilePhotoComplete = false,
    uploadProfilePhotoIsLoading = false,
    userUploadProfilePhoto = () => {},
    resetUploadProfilePhotoComplete = () => {},
    getUserMe = () => {},
    userMe = {},
    userMeLoading = false
}) => {

    const [visible, setVisible]                                         = useState(false);
    const [profileVisible, setProfileVisible]                           = useState(false);
    const [profileTextModalVisible, setProfileTextModalVisible]       = useState(false);

    useEffect(() => {
        getUserMe();
        resetCreatePostComplete();
        userPostList();
    },[]);

    useEffect(() => {
        if(!pageLoading) {
            setVisible(true);
        }
    },[pageLoading]);

    useEffect(() => {
        if(!userMeLoading) {
            setProfileVisible(true);
        }
    },[userMeLoading]);

    const profileTextModalOnClose = () => {
        setProfileTextModalVisible(false);
    }

    return (
        <>
            {profileTextModalVisible && (
                <>
                    <ProfileTextModal
                        onClose={profileTextModalOnClose}
                    />
                </>
            )}
            <TopBanner/>
            <StorySlider/>
            <div className={styles.frame}>
                <div className={styles.content}>
                    
                    {profileVisible && (
                        <>
                            <ProfileEpisode
                                uploadProfilePhotoComplete={uploadProfilePhotoComplete}
                                uploadProfilePhotoIsLoading={uploadProfilePhotoIsLoading}
                                userUploadProfilePhoto={userUploadProfilePhoto}
                                resetUploadProfilePhotoComplete={resetUploadProfilePhotoComplete}
                                userMe={userMe}
                                setProfileTextModalVisible={setProfileTextModalVisible}
                            />
                        </>
                    )}

                    {!profileVisible && (
                            <>
                                <div className={styles.profileLoader}>
                                    <div className={styles.spinner}></div>
                                </div>
                            </>
                        )}
                    
                    <div style={{ width: '100%'}}>
                        
                        {profileVisible && (
                            <>
                                <PostBox
                                    createPostComplete={createPostComplete}
                                    createPostLoading={createPostLoading}
                                    userCreatePost={userCreatePost}
                                    userPostList={userPostList}
                                    userMe={userMe}
                                />
                            </>
                        )}

                        {!profileVisible && (
                            <>
                                <div className={styles.profileLoader}>
                                    <div className={styles.spinner}></div>
                                </div>
                            </>
                        )}
                        
                        {visible && (
                            <>
                                <ListPostBox
                                    posts={posts}
                                />
                            </>
                        )}

                        {!visible && (
                            <>
                                <div className={styles.loader}>
                                    <div className={styles.spinner}></div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomePage;