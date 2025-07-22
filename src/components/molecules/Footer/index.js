import React from "react";
import styles from './Index.module.css';

const Footer  = () => {
    return (
        <>
            <div className={styles.container}>
                
                <div className={styles.frame}>
                    
                    <div className={styles.topMenu}>
                        <div className={styles.menu} onClick={() => window.location = '/'}>
                            <label>Anasayfa</label>
                        </div>
                        <div className={styles.menu} onClick={() => window.open('/help', '_blank')}>
                            <label>Yardım</label>
                        </div>
                        <div className={styles.menu} onClick={() => window.open('/gizlilik-sozlesmesi', '_blank')}>
                            <label>Gizlilik Politikası</label>
                        </div>
                        <div className={styles.menu} onClick={() => window.open('/kullanici-sozlesmesi', '_blank')}>
                            <label>Kullanıcı Sözleşmesi</label>
                        </div>
                        <div className={styles.menu} onClick={() => window.open('/acik-riza-metni', '_blank')}>
                            <label>Açık Rıza Beyanı</label>
                        </div>
                        <div className={styles.menu} onClick={() => window.open('/iletisim', '_blank')}>
                            <label>İletişim</label>
                        </div>
                    </div>

                    <div className={styles.centerContainer}>
                        <div className={styles.item}>
                            <h1 style={{cursor: 'pointer'}} onClick={() => window.open('/about', '_blank')}>Hakkımızda</h1>
                            <label>Gönülden Sevenler</label>
                        </div>
                        {
                            //<div className={styles.item}>
                            //    <h1>Adres Bigileri</h1>
                            //    <label>Email: -</label>
                            //    <label>Email: -</label>
                            //</div>
                        }
                        <div className={styles.follow}>
                            <h1>Bizi Takip Edin</h1>
                            <div className={styles.social}>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#fff">
                                        <path d="M22.675 0h-21.35C.596 0 0 .595 0 1.326v21.348C0 23.405.596 24 1.325 
                                                24h11.495v-9.294H9.692V11.01h3.128V8.41c0-3.1 1.894-4.788 4.659-4.788 
                                                1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 
                                                1.763v2.31h3.59l-.467 3.696h-3.123V24h6.116C23.404 24 24 23.405 24 
                                                22.674V1.326C24 .595 23.404 0 22.675 0z"/>
                                    </svg>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="20" height="20">
                                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0 1.88-2.36 8.59 8.59 0 0 1-2.71 1.03 4.24 4.24 0 0 0-7.22 3.86 12.01 12.01 0 0 1-8.73-4.43 4.22 4.22 0 0 0 1.31 5.65 4.18 4.18 0 0 1-1.92-.53v.05a4.25 4.25 0 0 0 3.4 4.17 4.27 4.27 0 0 1-1.91.07 4.25 4.25 0 0 0 3.96 2.94A8.5 8.5 0 0 1 2 19.54a12 12 0 0 0 6.49 1.9c7.79 0 12.06-6.46 12.06-12.06 0-.18 0-.35-.01-.53A8.6 8.6 0 0 0 24 5.11a8.34 8.34 0 0 1-2.54.7z"/>
                                    </svg>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="20" height="20">
                                        <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.4.4.6.2 1.1.5 1.5.9.4.4.7.9.9 1.5.2.5.3 1.2.4 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.4-.2.6-.5 1.1-.9 1.5-.4.4-.9.7-1.5.9-.5.2-1.2.3-2.4.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.4-.4-.6-.2-1.1-.5-1.5-.9-.4-.4-.7-.9-.9-1.5-.2-.5-.3-1.2-.4-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.4.2-.6.5-1.1.9-1.5.4-.4.9-.7 1.5-.9.5-.2 1.2-.3 2.4-.4C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 .1 5.7.1 4.8.3 4.1.5c-.9.3-1.7.7-2.4 1.4S.7 3.3.4 4.1C.2 4.8.1 5.7.1 7 0 8.3 0 8.7 0 12s0 3.7.1 5c.1 1.3.3 2.2.5 2.9.3.9.7 1.7 1.4 2.4.7.7 1.5 1.1 2.4 1.4.7.2 1.6.4 2.9.5 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.3-.1 2.2-.3 2.9-.5.9-.3 1.7-.7 2.4-1.4.7-.7 1.1-1.5 1.4-2.4.2-.7.4-1.6.5-2.9.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.3-.3-2.2-.5-2.9-.3-.9-.7-1.7-1.4-2.4C21.7.7 20.9.3 20 .1 19.3-.1 18.4-.2 17.1-.3 15.8-.4 15.4-.4 12-.4z"/>
                                        <path d="M12 5.8a6.2 6.2 0 1 0 0 12.4A6.2 6.2 0 0 0 12 5.8zm0 10.3a4.1 4.1 0 1 1 0-8.2 4.1 4.1 0 0 1 0 8.2z"/>
                                        <circle cx="18.4" cy="5.6" r="1.4"/>
                                    </svg>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="20" height="20">
                                        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.53-1 1.8-2.2 3.7-2.2 4 0 4.7 2.6 4.7 6v9h-4v-8c0-1.9-.03-4.3-2.6-4.3-2.6 0-3 2-3 4.2v8.1h-4V8z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.line}/>
                
                <div className={styles.frame}>
                    <div className={styles.copyrightEpisode }>
                        <label>© 2025 Tüm Hakları Saklıdır</label>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;