import React from "react";
import styles from "./Index.module.css";
import IMG from '../../../utils/imgs/header-bg.jpg';
import Image from "next/image";
const StorySlider = () => {
  return (
    <div className={styles.storySliderContainer}>
      <div className={styles.frame}>
        <div className={styles.storySlider}>
            <div className={styles.storyItem}>
                <Image src={IMG} alt="story1" />
            </div>
            <div className={styles.storyItem}>
                <Image src={IMG} alt="story2" />
            </div>
            <div className={styles.storyItem}>
                <Image src={IMG} alt="story3"/>
            </div>
            <div className={styles.storyItem}>
                <Image src={IMG} alt="story4"/>
            </div>
            <div className={styles.storyItem}>
                <Image src={IMG} alt="story5"/>
            </div>
            <div className={styles.storyItem}>
                <Image src={IMG} alt="story1" />
            </div>
            <div className={styles.storyItem}>
                <Image src={IMG} alt="story2" />
            </div>
            <div className={styles.storyItem}>
                <Image src={IMG} alt="story3"/>
            </div>
            <div className={styles.storyItem}>
                <Image src={IMG} alt="story3"/>
            </div>
            <div className={styles.storyItem}>
                <Image src={IMG} alt="story3"/>
            </div>
            <div className={styles.storyItem}>
                <Image src={IMG} alt="story3"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default StorySlider;
