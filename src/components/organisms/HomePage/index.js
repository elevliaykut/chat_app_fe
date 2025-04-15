import React, { useEffect,useState } from "react";
import styles from './Home.module.css';
import Image from 'next/image';
import ThemeConfig from "@/src/utils/ThemeConfig";
import TopBanner from '../../molecules/TopBanner';
import StorySlider from "../../molecules/StorySlider";
import ProfileEpisode from "../../molecules/ProfileEpisode";

const HomePage = () => {
    return (
        <>
            <TopBanner/>
            <StorySlider/>
            <div className={styles.frame}>
                <div className={styles.content}>
                    <ProfileEpisode/>
                    
                </div>
            </div>
        </>
    )
}
export default HomePage;