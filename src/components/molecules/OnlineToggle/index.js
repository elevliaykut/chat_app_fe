import React, { useEffect, useState } from "react";
import styles from './Index.module.css';

const OnlineToggle = ({
  setOnlineToggleIsStatus = () => {},
}) => {
  
  const [isOnline, setIsOnline] = useState(false);

  const toggleOnline = () => {
    setIsOnline(prev => !prev);
    setOnlineToggleIsStatus(prev => !prev);
  };

  return (
    <div className={styles.ToggleContainer}>
      <label className={styles.ToggleLabel}>Çevrimiçi</label>
      <div
        className={`${styles.ToggleSwitch} ${isOnline ? styles.Active : ""}`}
        onClick={toggleOnline}
      >
        <div className={styles.ToggleKnob}></div>
      </div>
    </div>
  );
};

export default OnlineToggle;
