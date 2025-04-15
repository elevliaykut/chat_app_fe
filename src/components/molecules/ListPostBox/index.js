import React from "react";
import styles from './Index.module.css';
import Image from "next/image";
import IM from '../../../utils/imgs/header-bg.jpg';
import ThemeConfig from "@/src/utils/ThemeConfig";

const ListPostBox = () => {
    return(
        <>
            <div className={styles.container}>
                
                <div className={styles.topEpisode}>
                    <div className={styles.leftEpisode}>
                        <div className={styles.profileEpisode}>
                            <Image src={IM} style={{ width: '60px',height: '60px',borderRadius: '100px'}}/>
                        </div>
                        <div className={styles.profileDetailEpisode}>
                            <div className={styles.usernameEpisode}>
                                <label>asya46</label>
                            </div>
                            <div className={styles.info}>
                                <label >26,Bekar,İstanbul</label>
                            </div>
                        </div>
                        <div className={styles.statusEpisode}>
                            <label>Durumunu Güncelledi</label>
                        </div>
                    </div>
                    <div className={styles.rightEpisode}>
                        <label>Bugün 16:43</label>
                    </div>
                </div>

                <div className={styles.content}>
                    <div className={styles.contentText}>
                        <label>Sadece İstanbul YakasıSadece İstanbul YakasıSadece İstanbul YakasıSadece İstanbul YakasıSadece İstanbul YakasıSadece İstanbul YakasıSadece İstanbul YakasıSadece İstanbul YakasıSadece İstanbul Yakası</label>
                    </div>
                    <div className={styles.contentImage}>
                        <Image src={IM} style={{ width: '100%', height: '100%'}}/>
                    </div>
                </div>
                
                <div className={styles.duzLine}/>
                <div className={styles.footer}>
                    
                    <div className={styles.footerLike}>
                        <div style={{ marginLeft: '20px',marginTop: '10px', marginBottom: '10px'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" stroke={ThemeConfig.black} viewBox="0 0 24 24">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                            </svg>
                        </div>
                        <div style={{ marginLeft: '4px', marginTop: '12px', marginRight: '15px'}}>
                            <label className={styles.footerText}>Beğen</label>
                        </div>
                        <div className={styles.line}></div>
                    </div>
                    <div className={styles.footerMessage}>
                        <div style={{ marginLeft: '20px',marginTop: '10px', marginBottom: '10px'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M22 2L11 13" />
                            <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                        </svg>

                        </div>
                        <div style={{ marginLeft: '4px', marginTop: '12px', marginRight: '15px'}}>
                            <label className={styles.footerText}>Mesaj Gönder</label>
                        </div>
                        <div className={styles.line}></div>
                    </div>
                    <div className={styles.footerFavorite}>
                        <div style={{ marginLeft: '20px',marginTop: '10px', marginBottom: '10px'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" stroke={ThemeConfig.black} viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                            </svg>
                        </div>
                        <div style={{ marginLeft: '4px', marginTop: '12px', marginRight: '15px'}}>
                            <label className={styles.footerText}>Favori Yap</label>
                        </div>
                        <div className={styles.line}></div>
                    </div>   
                    <div className={styles.footerSmile}>
                        <div style={{ marginLeft: '20px',marginTop: '10px', marginBottom: '10px'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" stroke={ThemeConfig.black} viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 
                                    10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 
                                    8-8 8 3.59 8 8-3.59 8-8 8zm-4-6c.67 1.33 2.03 2 4 2s3.33-.67 
                                    4-2h-8zm0-4h2v2H8v-2zm6 0h2v2h-2v-2z"/>
                            </svg>
                        </div>
                        <div style={{ marginLeft: '4px', marginTop: '12px', marginRight: '15px'}}>
                            <label className={styles.footerText}>Gülümse</label>
                        </div>
                        <div className={styles.line}></div>
                    </div>    
                </div>
            </div>
        </>
    )
}
export default ListPostBox;