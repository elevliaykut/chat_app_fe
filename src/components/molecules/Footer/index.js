import React from "react";
import styles from './Index.module.css';

const Footer  = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.frame}>
                    
                    <div className={styles.topMenu}>
                        <div className={styles.menu}>
                            <label>Anasayfa</label>
                        </div>
                        <div className={styles.menu}>
                            <label>Blog</label>
                        </div>
                        <div className={styles.menu}>
                            <label>Hakkımızda</label>
                        </div>
                        <div className={styles.menu}>
                            <label>Yardım</label>
                        </div>
                        <div className={styles.menu}>
                            <label>Gizlilik Politikası</label>
                        </div>
                        <div className={styles.menu}>
                            <label>Rehber</label>
                        </div>
                        <div className={styles.menu}>
                            <label>Kullanıcı Sözleşmesi</label>
                        </div>
                        <div className={styles.menu}>
                            <label>Açık Rıza Beyanı</label>
                        </div>
                        <div className={styles.menu}>
                            <label>İletişim</label>
                        </div>
                    </div>

                    <div className={styles.centerContainer}>
                        <div className={styles.item}>
                            <h1>Hakkımızda</h1>
                            <label>Gönülden Sevenler</label>
                        </div>
                        <div className={styles.item}>
                            <h1>Adres Bigileri</h1>
                            <label>Email: -</label>
                            <label>Email: -</label>
                        </div>
                        <div className={styles.follow}>
                            <h1>Bizi Takip Edin</h1>
                            <div className={styles.social}>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fff">
                                        <path d="M22.675 0h-21.35C.596 0 0 .595 0 1.326v21.348C0 23.405.596 24 1.325 
                                                24h11.495v-9.294H9.692V11.01h3.128V8.41c0-3.1 1.894-4.788 4.659-4.788 
                                                1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 
                                                1.763v2.31h3.59l-.467 3.696h-3.123V24h6.116C23.404 24 24 23.405 24 
                                                22.674V1.326C24 .595 23.404 0 22.675 0z"/>
                                    </svg>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fff">
                                        <path d="M22.675 0h-21.35C.596 0 0 .595 0 1.326v21.348C0 23.405.596 24 1.325 
                                                24h11.495v-9.294H9.692V11.01h3.128V8.41c0-3.1 1.894-4.788 4.659-4.788 
                                                1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 
                                                1.763v2.31h3.59l-.467 3.696h-3.123V24h6.116C23.404 24 24 23.405 24 
                                                22.674V1.326C24 .595 23.404 0 22.675 0z"/>
                                    </svg>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fff">
                                        <path d="M22.675 0h-21.35C.596 0 0 .595 0 1.326v21.348C0 23.405.596 24 1.325 
                                                24h11.495v-9.294H9.692V11.01h3.128V8.41c0-3.1 1.894-4.788 4.659-4.788 
                                                1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 
                                                1.763v2.31h3.59l-.467 3.696h-3.123V24h6.116C23.404 24 24 23.405 24 
                                                22.674V1.326C24 .595 23.404 0 22.675 0z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;