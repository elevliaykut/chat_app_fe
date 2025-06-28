import React, { useEffect, useState } from "react";
import styles from './Index.module.css';
import Image from 'next/image';
import LOGO from '../../../utils/imgs/logo.png';

const AdminTopBanner = ({
    userLogout = () => {},
}) => {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.frame}>
                    <div className={styles.logoEpisode} onClick={() => window.location = '/dashboard'}>
                        <Image
                            src={LOGO}
                        />
                    </div>
                    <div className={styles.content}>
                        <div style={{ paddingTop: '10px',paddingLeft: '10px', paddingRight: '10px', cursor: 'pointer'}} onClick={() => userLogout()}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="white"
                                >
                                <path d="M10 17l5-5h-4V4h-2v8H5l5 5zM20 3h-6v2h6v14h-6v2h6c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AdminTopBanner;