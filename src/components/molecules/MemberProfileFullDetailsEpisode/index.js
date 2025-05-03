import React, { useState } from "react";
import styles from './Index.module.css';

const menuItems = [
    "Kişisel Bilgiler",
    "Eş Adayı Özellikleri",
    "Karakter Analizi"
];

const MemberProfileFullDetailsEpisode = ({
    details = {}
}) => {

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
                    <div key={index} className={`${styles.menu} ${visibleSection === index ? styles.activeMenu : ''}`} onClick={() => toggleSection(index)}>
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
                                <label>Burç</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.detail?.horoscope ? details?.detail?.horoscope : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Yaşadığı Şehir</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.detail?.city?.name ? details?.detail?.city?.name : 'Belirtilmemiş'}</span>
                            </div>
                        </div>
                        
                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Yaşadığı İlçe</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.detail?.district?.name ? details?.detail?.district?.name : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Medeni Hal</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.detail?.marital_status_value ? details?.detail?.marital_status_value : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Tesettür</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.detail?.headscarf ? details?.detail?.headscarf : 'Belirtilmemiş'}</span>
                            </div>
                        </div>
                        
                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Boy</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.detail?.tall ? details?.detail?.tall : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Kilo</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.detail?.weight ? details?.detail?.weight : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Göz Rengi</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.detail?.eye_color ? details?.detail?.eye_color : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Saç Rengi</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.detail?.hair_color ? details?.detail?.hair_color : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Ten Rengi</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.detail?.skin_color ? details?.detail?.skin_color : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Vücut Tipi</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.detail?.body_type ? details?.detail?.body_type : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Çocugunuz Varmı</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.detail?.have_a_child ? details?.detail?.have_a_child : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Çocuk İstiyormusunuz</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.detail?.want_a_child ? details?.detail?.want_a_child : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Sigara</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.detail?.use_cigarette ? details?.detail?.use_cigarette : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Alkol</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.detail?.use_alcohol ? details?.detail?.use_alcohol : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Eğitim Durumu</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.detail?.education_status ? details?.detail?.education_status : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Yabancı Dilleriniz</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.detail?.foreign_language ? details?.detail?.foreign_language : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Mesleğiniz</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.detail?.job ? details?.detail?.job : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Geliriniz</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.detail?.salary ? details?.detail?.salary : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Çalışma Şekliniz</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.detail?.work_status ? details?.detail?.work_status : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Kiminle Yaşıyorsunuz</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.detail?.live_with ? details?.detail?.live_with : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Giyim Tarzınız</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.detail?.clothing_style ? details?.detail?.clothing_style : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Taviz Vermeyecekleriniz</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.detail?.not_compromise ? details?.detail?.not_compromise : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Cemaat</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.detail?.community ? details?.detail?.community : 'Belirtilmemiş'}</span>
                            </div>
                        </div>


                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Meshebiniz</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.detail?.sect ? details?.detail?.sect : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Namaz Kılıyormusunuz</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.detail?.do_you_pray ? details?.detail?.do_you_pray : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Kuran'ı Kerim Biliyor ve Okuyormusunuz</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.detail?.do_you_know_quran ? details?.detail?.do_you_know_quran : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Oruç Tutuyormusunuz</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.detail?.are_you_fasting ? details?.detail?.are_you_fasting : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>İslami ve Ahlaki Olarak Önemli Gördükleriniz</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.detail?.consider_important_in_islam ? details?.detail?.consider_important_in_islam : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Dinlediğiniz Müzik Türleri</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.detail?.listening_music_types ? details?.detail?.listening_music_types : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Okuduğunuz Kitap Türleri</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.detail?.reading_book_types ? details?.detail?.reading_book_types : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Eş Adayında Aradığınız Özellikler</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.detail?.looking_qualities ? details?.detail?.looking_qualities : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Hobileriniz</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.detail?.your_hobbies ? details?.detail?.your_hobbies : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Kişiliğiniz</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.detail?.your_personality ? details?.detail?.your_personality : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Fiziksel Engel</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.detail?.physical_disability ? details?.detail?.physical_disability : 'Belirtilmemiş'}</span>
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
                                <label>Hakkında</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.spouse_candidate?.about ? details?.spouse_candidate?.about : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Boy</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.spouse_candidate?.tall ? details?.spouse_candidate?.tall : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Kilo</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.spouse_candidate?.weight ? details?.spouse_candidate?.weight : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Göz Rengi</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.spouse_candidate?.eye_color ? details?.spouse_candidate?.eye_color : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Saç Rengi</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.spouse_candidate?.hair_color ? details?.spouse_candidate?.hair_color : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Ten Rengi</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.spouse_candidate?.skin_color ? details?.spouse_candidate?.skin_color : 'Belirtilmemiş'}</span>
                            </div>
                        </div>
                        
                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Vucut Tipi</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.spouse_candidate?.body_type ? details?.spouse_candidate?.body_type : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Çocuk İstesinmi</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.spouse_candidate?.want_a_child ? details?.spouse_candidate?.want_a_child : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Aradığınız Özellikler</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.spouse_candidate?.looking_qualities ? details?.spouse_candidate?.looking_qualities : 'Belirtilmemiş'}</span>
                            </div>
                        </div>


                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Yaş Aralığı</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.spouse_candidate?.age_range ? details?.spouse_candidate?.age_range : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Medeni Hali</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.spouse_candidate?.marital_status ? details?.spouse_candidate?.marital_status : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Çocuğu Olsun mu</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.spouse_candidate?.have_a_child ? details?.spouse_candidate?.have_a_child : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Sigara</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.spouse_candidate?.use_cigarette ? details?.spouse_candidate?.use_cigarette : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Alkol</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.spouse_candidate?.use_alcohol ? details?.spouse_candidate?.use_alcohol : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Eğitimi</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.spouse_candidate?.education_status ? details?.spouse_candidate?.education_status : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Geliri</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.spouse_candidate?.salary ? details?.spouse_candidate?.salary : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Taviz Vermeyecekleri</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.spouse_candidate?.not_compromise ? details?.spouse_candidate?.not_compromise : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Cemaat</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.spouse_candidate?.community ? details?.spouse_candidate?.community : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Mezhep</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.spouse_candidate?.sect ? details?.spouse_candidate?.sect  : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Namaz Kılsınmı</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.spouse_candidate?.do_you_pray ? details?.spouse_candidate?.do_you_pray : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Fiziksel Engel</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.spouse_candidate?.physical_disability ? details?.spouse_candidate?.physical_disability : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                    </div>
                </>
            )}

            {visibleSection === 2 && (
                <>
                    <div className={styles.descriptionContainer} style={{ marginTop: '10px'}}>
                        
                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Tanışmak istediğiniz kişide aradığınız 3 özellik</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.caracterisric_feature?.question_one ? details?.caracterisric_feature?.question_one : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Tanışmak istediğiniz kişide istemediğiniz 3 özellik</label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.caracterisric_feature?.question_two ? details?.caracterisric_feature?.question_two : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Yanından ayırmadığı 3 şey
                                </label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.caracterisric_feature?.question_three ? details?.caracterisric_feature?.question_three : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Kitap tercihiz
                                </label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.caracterisric_feature?.question_four ? details?.caracterisric_feature?.question_four : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Hayvanları seviyor musunuz?
                                </label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.caracterisric_feature?.question_five ? details?.caracterisric_feature?.question_five : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Müzik zevkiniz
                                </label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.caracterisric_feature?.question_six ? details?.caracterisric_feature?.question_six : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Spora ilginiz
                                </label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.caracterisric_feature?.question_seven ? details?.caracterisric_feature?.question_seven : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Tatil tercihiz
                                </label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.caracterisric_feature?.question_eight ? details?.caracterisric_feature?.question_eight : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Damak zevkiz
                                </label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.caracterisric_feature?.question_nine ? details?.caracterisric_feature?.question_nine : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Oyun zevkiniz
                                </label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.caracterisric_feature?.question_ten ? details?.caracterisric_feature?.question_ten : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                        <div className={styles.descriptionEpisode}>
                            <div className={styles.descriptionContainerTitle}>
                                <label>Favori çizgi filmleriniz
                                </label>
                                <label style={{ marginLeft: 'auto'}}>:</label>
                            </div>
                            <div className={styles.descriptionContainerContent}>
                                <span>{details?.caracterisric_feature?.question_eleven ? details?.caracterisric_feature?.question_eleven : 'Belirtilmemiş'}</span>
                            </div>
                        </div>

                    </div>
                </>
            )}

            <div className={styles.postListEpisode}>

            </div>
        </>
    );
};

export default MemberProfileFullDetailsEpisode;
