import React, { useEffect, useState } from "react";
import styles from './Index.module.css';

const NewMemberToggle = ({
  setNewMemberIsStatus = () => {}
}) => {
  const [isOnline, setIsOnline] = useState(false);

  const toggleOnline = () => {
    setIsOnline(prev => !prev);
    setNewMemberIsStatus(prev => !prev);
  };

  return (
    <div className={styles.ToggleContainer}>
      <label className={styles.ToggleLabel}>Yeni Üye</label>
      <div
        className={`${styles.ToggleSwitch} ${isOnline ? styles.Active : ""}`}
        onClick={toggleOnline}
      >
        <div className={styles.ToggleKnob}></div>
      </div>
    </div>
  );
};

export default NewMemberToggle;
