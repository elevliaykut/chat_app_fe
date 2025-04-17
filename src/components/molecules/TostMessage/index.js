import React from "react";
import styles from './Index.module.css';

const ToastMessage = ({
    message = ""
}) => {
    return (
        <>
            <div className={styles.toastMessage}>
                {message}
            </div>
        </>
    )
}

export default ToastMessage;