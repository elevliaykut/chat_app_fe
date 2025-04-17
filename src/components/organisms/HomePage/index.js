import React, { useEffect,useState } from "react";
import styles from './Home.module.css';
import Image from 'next/image';
import ThemeConfig from "@/src/utils/ThemeConfig";
import TopBanner from '../../molecules/TopBanner';
import StorySlider from "../../molecules/StorySlider";
import ProfileEpisode from "../../molecules/ProfileEpisode";
import PostBox from "../../molecules/PostBox";
import ListPostBox from "../../molecules/ListPostBox";

const HomePage = ({
    posts = [],
    isLoading = false,
    error = null,
    userPostList = () => {},
    pageLoading = false
}) => {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        userPostList();
    },[]);

    useEffect(() => {
        if(!pageLoading) {
            setVisible(true);
        }
    },[pageLoading]);

    return (


        <>
            <TopBanner/>
            <StorySlider/>
            <div className={styles.frame}>
                <div className={styles.content}>
                    <ProfileEpisode/>
                    <div style={{ width: '100%'}}>
                        <PostBox/>
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