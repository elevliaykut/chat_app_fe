import React, { useEffect,useState } from "react";
import styles from './Home.module.css';
import Image from 'next/image';
import ThemeConfig from "@/src/utils/ThemeConfig";
import TopBanner from '../../molecules/TopBanner';
import StorySlider from "../../molecules/StorySlider";

const HomePage = () => {
    return (
        <>
            <TopBanner/>
            <StorySlider/>
        </>
    )
}
export default HomePage;