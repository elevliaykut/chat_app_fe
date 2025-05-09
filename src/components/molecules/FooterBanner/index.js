import React from "react";
import styles from './Index.module.css';

const FooterBanner = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.menu} onClick={() => window.location = '/home'}>
                    <label>Anasayfa</label>
                    <div className={styles.cızgı}/>
                </div>
                <div className={styles.menu}>
                    <label>Blog</label>
                    <div className={styles.cızgı}/>

                </div>
                <div className={styles.menu}>
                    <label>Hakkımızda</label>
                    <div className={styles.cızgı}/>
                </div>
                <div className={styles.menu}>
                    <label>Yardım</label>
                    <div className={styles.cızgı}/>
                </div>
                <div className={styles.menu}>
                    <label>Gizlilik Politikası</label>
                    <div className={styles.cızgı}/>
                </div>
                <div className={styles.menu}>
                    <label>Rehber</label>
                    <div className={styles.cızgı}/>
                </div>
                <div className={styles.menu}>
                    <label>Kullanıcı Sözleşmesi</label>
                    <div className={styles.cızgı}/>
                </div>
                <div className={styles.menu}>
                    <label>Açık Rıza Metni</label>
                    <div className={styles.cızgı}/>
                </div>
                <div className={styles.menu}>
                    <label>İletişim</label>
                </div>
            </div>
            <div className={styles.socialContainer}>
                <div style={{ cursor: 'pointer'}}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="45"
                        height="45"
                        viewBox="0 0 24 24"
                        >
                        <rect width="24" height="24" fill="white" rx="4" />
                        <path
                            d="M15.117 8.667h-1.05c-.824 0-.983.392-.983.966v1.267h2.025l-.264 2h-1.761V20H10.8v-7.1H9v-2h1.8v-1.5c0-1.494.956-2.4 2.35-2.4h1.967v2.667z"
                            fill="black"
                        />
                    </svg>
                </div>
                <div style={{ marginTop: '7px', cursor: 'pointer'}}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        >
                        <rect width="24" height="24" fill="white" rx="4" />
                        <path
                            d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.9a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2z"
                            fill="black"
                        />
                    </svg>
                </div>
                <div style={{ marginTop: '7px', marginLeft: '10px', cursor: 'pointer'}}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        >
                        <rect width="24" height="24" fill="white" rx="4" />
                        <path
                            d="M23 3a10.12 10.12 0 01-2.829.775A4.931 4.931 0 0022.4 1.082a9.868 9.868 0 01-3.125 1.19A4.931 4.931 0 0016.616.75a4.93 4.93 0 00-4.866 6.069A14.003 14.003 0 011.671 2.898a4.93 4.93 0 001.523 6.573A4.917 4.917 0 01.894 8.234v.062a4.93 4.93 0 003.946 4.829 4.922 4.922 0 01-2.224.085A4.933 4.933 0 007 17.252a9.867 9.867 0 01-6.1 2.102 9.902 9.902 0 01-1.172-.062A13.951 13.951 0 008.2 21c8.49 0 13.14-7.02 13.14-13.138 0-.2 0-.39-.015-.578A9.929 9.929 0 0023 3z"
                            fill="black"
                        />
                    </svg>
                </div>
            </div>
        </>
    )
}
export default FooterBanner;