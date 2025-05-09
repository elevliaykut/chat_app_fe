import React, { useState } from "react";
import styles from './Index.module.css';

const WithPhotoToggle = ({
  setHasPhotoMemberToggleStatus = () => {}
}) => {
  const [isOnline, setIsOnline] = useState(false);

  const toggleOnline = () => {
    setIsOnline(prev => !prev);
    setHasPhotoMemberToggleStatus(prev => !prev);
  };

  return (
    <div className={styles.ToggleContainer}>
      <label className={styles.ToggleLabel}>Fotoğraflı</label>
      <div
        className={`${styles.ToggleSwitch} ${isOnline ? styles.Active : ""}`}
        onClick={toggleOnline}
      >
        <div className={styles.ToggleKnob}></div>
      </div>
    </div>
  );
};

export default WithPhotoToggle;
