import React from "react";
import styles from './Index.module.css';
import AdminTopBanner from "../../molecules/AdminTopBanner";
import AdminMenu from "../../molecules/AdminMenu";

const DashboardPage = ({
    userLogout = () => {}
}) => {
    return (
        <>
            <AdminTopBanner 
                userLogout={userLogout}
            />
            <div className={styles.frame}>
                <div className={styles.content}>
                    <AdminMenu/>
                    <div style={{ width: '100%'}}>
                        content here...
                    </div>
                </div>
            </div>
        </>
    )
}
export default DashboardPage;