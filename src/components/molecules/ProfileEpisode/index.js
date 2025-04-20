import React, { useEffect, useState } from "react";
import styles from './Index.module.css';
import IMG from '../../../utils/imgs/header-bg.jpg';
import Image from "next/image";
import ThemeConfig from "@/src/utils/ThemeConfig";
import ToastMessage from "../TostMessage";

const ProfileEpisode = ({
    uploadProfilePhotoComplete = false,
    uploadProfilePhotoIsLoading = false,
    userUploadProfilePhoto = () => {},
    resetUploadProfilePhotoComplete = () => {},
    userMe = {},
    setProfileTextModalVisible = () => {},
    setBasicInfoModalVisible = () => {}
}) => {

    const [showSelectedFileSuccess, setShowSelectedFileSuccess] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleImageChange = (e) => {
        setShowSelectedFileSuccess(true);
        const file = e.target.files[0]; // İlk dosyayı alıyoruz
        if (file) {
          const data = new FormData();
          data.append('photo', file);
          userUploadProfilePhoto({
            formData: data
          })
        }
      };

      useEffect(() => {
        if (uploadProfilePhotoComplete) {
          resetUploadProfilePhotoComplete();
          //userPostList();
          setShowSuccess(true);
      
          const timeout = setTimeout(() => {
            setShowSuccess(false);
          }, 3000); // 3 saniye sonra mesajı kaldır
      
          return () => clearTimeout(timeout);
        }
      }, [uploadProfilePhotoComplete]);

    return (
        <>
            {showSelectedFileSuccess && (
                <ToastMessage message={"Dosya başarılı bir şekile alındı ✅"}/>
            )}

            {showSuccess && (
                <ToastMessage message={"Profil Fotoğrafınız başarılı bir şekilde güncellendi. ✅"}/>
            )}
            <div className={styles.container}>
                <div className={styles.frame}>
                    <div className={styles.profilePhoto} onClick={() => document.getElementById('fileInput').click()}> 
                        {userMe?.profile_photo_path ? (
                            <>
                                <Image 
                                    width={100}
                                    height={100}
                                    src={userMe?.profile_photo_path}
                                />
                            </>
                        ) : (
                            <>
                                <svg
                                            width="100"
                                            height="100"
                                            viewBox="0 0 24 24"
                                            fill="#ccc"
                                            xmlns="http://www.w3.org/2000/svg"
                                            >
                                            <circle cx="12" cy="12" r="10" fill="#E0E0E0" />
                                            <circle cx="12" cy="8" r="4" fill="#BDBDBD" />
                                            <path
                                                d="M12 14c-4 0-6 2-6 4v1h12v-1c0-2-2-4-6-4z"
                                                fill="#BDBDBD"
                                        />
                                    </svg>
                            </>
                        )}
                    </div>

                    <input
                        id="fileInput" // Bu inputu gizli yapıyoruz
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={handleImageChange} // Resim seçildiğinde handleImageChange çağrılıyor
                    />

                    <div className={styles.defination}>
                        <label style={{ fontSize: '15px', color: ThemeConfig.black}}>{userMe?.age}, {userMe?.detail?.marital_status_value}, {userMe?.detail?.city?.name}</label>
                    </div>
                    <div className={styles.burc}>
                        <label style={{ fontSize: '15px', color: ThemeConfig.black}}>{userMe?.detail?.horoscope}</label>
                    </div>
                    <div className={styles.line}/>
                    <div className={styles.menu}>
                        <div style={{ marginTop: '3px'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path fill="#505050" d="M20 5h-3.172l-1.414-1.414A2 2 0 0 0 13.172 3H10.83a2 2 0 0 0-1.414.586L8 5H4a2 2 0 0 0-2 2v11a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a2 2 0 0 0-2-2Zm0 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1.586l3.293-3.293a1 1 0 0 1 1.414 0l2.086 2.086a1 1 0 0 0 1.414 0L17 11l3 3v4ZM8.5 10.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"/>
                            </svg>
                        </div>
                        <div style={{ marginLeft: '15px',marginTop: '8px'}}>
                            <label style={{ fontSize: '15px', color: ThemeConfig.black}}>Fotoğraflar</label>
                        </div>
                    </div>
                    <div className={styles.line}/>
                    <div className={styles.menu}>
                        <div style={{ marginTop: '3px'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000" viewBox="0 0 24 24">
                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25ZM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83Z"/>
                        </svg>
                        </div>
                        <div style={{ marginLeft: '15px',marginTop: '8px'}} onClick={() => setProfileTextModalVisible(true)}>
                            <label style={{ fontSize: '15px', color: ThemeConfig.black}}>Profil Yazısı</label>
                        </div>
                    </div>
                    <div className={styles.line}/>
                    <div className={styles.menu}>
                        <div style={{ marginTop: '3px'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path fill="#000" d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-3.33 0-10 1.67-10 5v1a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-1c0-3.33-6.67-5-10-5Z"/>
                            </svg>
                        </div>
                        <div style={{ marginLeft: '15px',marginTop: '8px'}} onClick={() => setBasicInfoModalVisible(true)}>
                            <label style={{ fontSize: '15px', color: ThemeConfig.black}}>Temel Bilgiler</label>
                        </div>
                    </div>
                    <div className={styles.line}/>
                    <div className={styles.menu}>
                        <div style={{ marginTop: '3px'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#000" viewBox="0 0 24 24">
                                <circle cx="7" cy="7" r="2.5"/>
                                <circle cx="17" cy="7" r="2.5"/>
                                <path d="M4 20v-1a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4v1"/>
                                <path d="M12 20v-1a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4v1"/>
                                <path d="M12 9.5l1.2-1.2a2.5 2.5 0 0 1 3.5 3.5L12 17l-4.7-5.2a2.5 2.5 0 1 1 3.5-3.5L12 9.5Z"/>
                            </svg>      
                        </div>
                        <div style={{ marginLeft: '15px',marginTop: '8px', cursor: 'pointer'}}>
                            <label style={{ fontSize: '15px', color: ThemeConfig.black}}>Eş Adayı Özellikleri</label>
                        </div>
                    </div>
                    <div className={styles.line}/>
                    <div className={styles.menu}>
                        <div style={{ marginTop: '3px'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#4A4A4A" viewBox="0 0 24 24">
                                <path d="M12 2a9 9 0 0 1 9 9v2a5 5 0 0 1-5 5h-1l-1 4h-4l-1-4H8a5 5 0 0 1-5-5v-2a9 9 0 0 1 9-9Z"/>
                            </svg>
                        </div>
                        <div style={{ marginLeft: '15px',marginTop: '8px'}}>
                            <label style={{ fontSize: '15px', color: ThemeConfig.black}}>Karakter Analizi</label>
                        </div>
                    </div>
                    <div className={styles.line}/>
                    <div className={styles.menu}>
                        <div style={{ marginTop: '3px'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#4A4A4A" viewBox="0 0 24 24">
                            <rect x="3" y="3" width="18" height="4" rx="1" />
                            <path d="M4 7v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7" />
                            <path d="M10 12h4" />
                        </svg>
                        </div>
                        <div style={{ marginLeft: '15px',marginTop: '8px'}}>
                            <label style={{ fontSize: '15px', color: ThemeConfig.black}}>Arşivim</label>
                        </div>
                    </div>
                    <div className={styles.line}/>
                    <div className={styles.menu} onClick={() => window.location = '/new-members'}>
                        <div style={{ marginLeft: '0px',marginTop: '8px'}}>
                            <label style={{ fontSize: '15px', color: ThemeConfig.black}}>YENİ ÜYELER</label>
                        </div>
                    </div>
                    <div className={styles.line}/>
                    <div className={styles.menu} onClick={() => window.location = '/near-locations'}>
                        <div style={{ marginLeft: '0px',marginTop: '8px'}}>
                            <label style={{ fontSize: '15px', color: ThemeConfig.black}}>YAKIN KONUMDA</label>
                        </div>
                    </div>
                    <div className={styles.line}/>
                    <div className={styles.menu} onClick={() => window.location = '/born-today'}>
                        <div style={{ marginLeft: '0px',marginTop: '8px'}}>
                            <label style={{ fontSize: '15px', color: ThemeConfig.black}}>BUGÜN DOĞANLAR</label>
                        </div>
                    </div>
                    <div className={styles.line}/>
                    <div className={styles.menu}>
                        <div style={{ marginLeft: '0px',marginTop: '8px'}}>
                            <label style={{ fontSize: '15px', color: ThemeConfig.black}}>PROFİLİNİ GEZDİKLERİN</label>
                        </div>
                    </div>
                    <div className={styles.line}/>
                    <div className={styles.menu}>
                        <div style={{ marginLeft: '0px',marginTop: '8px'}}>
                            <label style={{ fontSize: '15px', color: ThemeConfig.black}}>FAVORİLERİN</label>
                        </div>
                    </div>
                    <div className={styles.line}/>
                    <div className={styles.menu}>
                        <div style={{ marginLeft: '0px',marginTop: '8px'}}>
                            <label style={{ fontSize: '15px', color: ThemeConfig.black}}>GÜLÜMSEDİKLERİN</label>
                        </div>
                    </div>
                    <div className={styles.line}/>
                    <div className={styles.menu}>
                        <div style={{ marginLeft: '0px',marginTop: '8px'}}>
                            <label style={{ fontSize: '15px', color: ThemeConfig.black}}>BEĞENDİKLERİN</label>
                        </div>
                    </div>
                    <div className={styles.line}/>
                    <div className={styles.menu}>
                        <div style={{ marginLeft: '0px',marginTop: '8px'}}>
                            <label style={{ fontSize: '15px', color: ThemeConfig.black}}>ENGELLENEN ÜYE</label>
                        </div>
                    </div>
                    <div className={styles.line}/>
                    <div className={styles.menu}>
                        <div style={{ marginLeft: '0px',marginTop: '8px'}}>
                            <label style={{ fontSize: '15px', color: ThemeConfig.black}}>ÖDEME FORMU</label>
                        </div>
                    </div>
                    <div className={styles.line}/>
                    <div className={styles.menu}>
                        <div style={{ marginLeft: '0px',marginTop: '8px'}}>
                            <label style={{ fontSize: '15px', color: ThemeConfig.black}}>İLETİŞİM</label>
                        </div>
                    </div>
                    <div className={styles.line}/>
                    <div className={styles.menu}>
                        <div style={{ marginLeft: '0px',marginTop: '8px'}}>
                            <label style={{ fontSize: '15px', color: ThemeConfig.black}}>YARDIM</label>
                        </div>
                    </div>
                    <div className={styles.line}/>
                    <div className={styles.menu}>
                        <div style={{ marginLeft: '0px',marginTop: '8px'}}>
                            <label style={{ fontSize: '15px', color: ThemeConfig.black}}>AYARLAR</label>
                        </div>
                    </div>
                    <div className={styles.line}/>
                    <div className={styles.menu}>
                        <div style={{ marginLeft: '0px',marginTop: '8px'}}>
                            <label style={{ fontSize: '15px', color: ThemeConfig.black}}>ÇIKIŞ</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProfileEpisode;