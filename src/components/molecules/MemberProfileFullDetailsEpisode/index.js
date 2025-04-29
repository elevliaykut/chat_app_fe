import React, { useState } from "react";
import styles from './Index.module.css';

const menuItems = [
    "Kişisel Bilgiler",
    "Eş Adayı Özellikleri",
    "Karakter Analizi"
];

const MemberProfileFullDetailsEpisode = () => {

    const [visibleSection, setVisibleSection] = useState(0);  // Keep track of which section is visible

    // Menü öğesine tıklanıldığında ilgili section'ı gösterme
    const toggleSection = (index) => {
        console.log("index:", index);
        setVisibleSection(index);
    };

    return (
        <>
            <div className={styles.container}>
                {menuItems.map((item, index) => (
                    <div key={index} className={styles.menu} onClick={() => toggleSection(index)}>
                        <div className={styles.cubuk}></div>
                        <label>{item}</label>
                        <div className={styles.cubuk}></div>
                    </div>
                ))}
            </div>
            
            {visibleSection === 0 && (
                <>
                    <div className={styles.descriptionContainer} style={{ marginTop: '10px'}}>
                
                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Tesettür</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>---</span>
                            </div>
                        </div>
                        
                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Boy</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>---</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Kilo</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>---</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Yaşadığı Şehir</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>---</span>
                            </div>
                        </div>
                        
                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Yaşadığı İlçe</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>---</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Medeni Hal</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>---</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Göz Rengi</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>---</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Saç Rengi</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>---</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Ten Rengi</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>---</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Vücut Tipi</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>---</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Çocugunuz Varmı</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>---</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Çocuk İstiyormusunuz</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>---</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Sigara</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>---</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Alkol</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>---</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Eğitim Durumu</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>---</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Yabancı Dilleriniz</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>---</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Mesleğiniz</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>---</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Geliriniz</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>---</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Çalışma Şekliniz</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>---</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Kiminle Yaşıyorsunuz</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>---</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Giyim Tarzınız</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>---</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Taviz Vermeyecekleriniz</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>---</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Cemaat</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>---</span>
                            </div>
                        </div>


                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Meshebiniz</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>---</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Namaz Kılıyormusunuz</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>---</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Kuran'ı Kerim Biliyor ve Okuyormusunuz</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>---</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Oruç Tutuyormusunuz</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>---</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>İslami ve Ahlaki Olarak Önemli Gördükleriniz</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>---</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Dinlediğiniz Müzik Türleri</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>---</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Okuduğunuz Kitap Türleri</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>---</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Eş Adayında Aradığınız Özellikler</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>---</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Hobileriniz</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>---</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Kişiliğiniz</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>---</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Fiziksel Engel</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>---</span>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {visibleSection === 1 && (
                <>
                    <div className={styles.descriptionContainer} style={{ marginTop: '10px'}}>
                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Yaş Aralığı</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>---</span>
                            </div>
                        </div>
                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Çocuğu Olsun mu</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>---</span>
                            </div>
                        </div>
                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Alkol</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>---</span>
                            </div>
                        </div>
                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Eğitimi</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>---</span>
                            </div>
                        </div>
                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Cemaat</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>---</span>
                            </div>
                        </div>
                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Fiziksel Engel</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>---</span>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default MemberProfileFullDetailsEpisode;
