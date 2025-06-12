import React from "react";
import styles from "./Index.module.css";

const ConfirmModal = ({ 
    desc = "", 
    onClose = () => {}, 
    onConfirm = () => {} 
}) => {

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <p>{desc}</p>
                <div className={styles.buttonGroup}>
                    <button className={styles.cancelButton} onClick={onClose}>Hayır</button>
                    <button className={styles.confirmButton} onClick={onConfirm}>Evet</button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;
