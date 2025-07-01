import React, { useEffect, useState } from "react";
import styles from './Index.module.css';
import AdminTopBanner from "../../molecules/AdminTopBanner";
import AdminMenu from "../../molecules/AdminMenu";

const AdminUserDetailPage = ({
    userLogout = () => {},
    isLoading = false,
    error = null,
    userId = '',
    adminGetUserDetails = () => {},
    adminUserDetails = {},
    adminDeleteUser = () => {},
    adminDeleteUserReset = () => {},
    adminDeleteUserComplete = false,
}) => {
    const [userDetailVisible, setUserDetailVisible] = useState(false);

    useEffect(() => {
        adminGetUserDetails({ userId: userId });
    },[userId]);

    useEffect(() => {
        if(!isLoading) {
            setUserDetailVisible(true);
        }
    },[isLoading]);

    const deleteUserOnClick = () => {
        adminDeleteUser({ userId: userId });
        window.location = '/dashboard';
    }

    useEffect(() => {
        if(adminDeleteUserComplete) {
            adminDeleteUserReset();
        }
    },[adminDeleteUserComplete]);

    return(
        <>
            <AdminTopBanner
                userLogout={userLogout}
            />
            <div className={styles.frame}>
                <div className={styles.content}>
                    <AdminMenu/>
                    {userDetailVisible && (
                        <>
                            <div style={{ width: '100%'}}>
                                <div className={styles.container}>
                                    <h1 className={styles.title}>Kullanıcı Detayı</h1>

                                    <section className={styles.section}>
                                        <div style={{ display: 'flex'}}>
                                            <h2>Temel Bilgiler</h2>
                                            <button
                                                style={{
                                                    width: '100px',
                                                    backgroundColor: 'red',
                                                    marginLeft: 'auto'
                                                }}
                                                onClick={deleteUserOnClick}
                                            >
                                                Kullanıcı Sil
                                            </button>
                                        </div>
                                        <ul>
                                            <li><strong>ID:</strong> {adminUserDetails?.id}</li>
                                            <li><strong>İsim:</strong> {adminUserDetails?.name ? adminUserDetails?.name : '-'}</li>
                                            <li><strong>Soyisim:</strong> {adminUserDetails?.surname ? adminUserDetails?.surname : '-'}</li>
                                            <li><strong>Kullanıcı Adı:</strong> {adminUserDetails?.username ? adminUserDetails?.username : '-'}</li>
                                            <li><strong>Email:</strong> {adminUserDetails?.email ? adminUserDetails?.email : '-'}</li>
                                            <li><strong>Telefon:</strong> {adminUserDetails?.phone ? adminUserDetails?.phone : '-'}</li>
                                            <li><strong>Yaş:</strong> {adminUserDetails?.age ? adminUserDetails?.age : '-'}</li>
                                            <li><strong>Doğum Tarihi:</strong> {adminUserDetails?.birth_date ? adminUserDetails?.birth_date : '-'}</li>
                                        </ul>
                                    </section>
                                    
                                    <section className={styles.section}>
                                        <h2>Profil Detayı</h2>
                                        {adminUserDetails.detail ? (
                                            <ul>
                                                <li><strong>Profil Yazısı:</strong> {adminUserDetails?.detail?.profile_summary ? adminUserDetails?.detail?.profile_summary : '-' }</li>
                                                <li><strong>Burç:</strong> {adminUserDetails?.detail?.horoscope ? adminUserDetails?.detail?.horoscope : '-' }</li>
                                                <li><strong>Şehir:</strong> {adminUserDetails?.detail?.city?.name ? adminUserDetails?.detail?.city?.name : '-' }</li>
                                                <li><strong>İlçe:</strong> {adminUserDetails?.detail?.district?.name ? adminUserDetails?.detail?.district?.name : '-' }</li>
                                                <li><strong>Medeni Hal:</strong> {adminUserDetails?.detail?.marital_status_value ? adminUserDetails?.detail?.marital_status_value : '-' }</li>
                                                <li><strong>Tesettür:</strong> {adminUserDetails?.detail?.headscarf ? adminUserDetails?.detail?.headscarf : '-' }</li>
                                                <li><strong>Boy:</strong> {adminUserDetails?.detail?.tall ? adminUserDetails?.detail?.tall : '-' }</li>
                                                <li><strong>Kilo:</strong> {adminUserDetails?.detail?.weight ? adminUserDetails?.detail?.weight : '-' }</li>
                                                <li><strong>Göz Rengi:</strong> {adminUserDetails?.detail?.eye_color ? adminUserDetails?.detail?.eye_color : '-' }</li>
                                                <li><strong>Saç Rengi:</strong> {adminUserDetails?.detail?.hair_color ? adminUserDetails?.detail?.hair_color : '-' }</li>
                                                <li><strong>Ten Rengi:</strong> {adminUserDetails?.detail?.skin_color ? adminUserDetails?.detail?.skin_color : '-' }</li>
                                                <li><strong>Vücut Tipi:</strong> {adminUserDetails?.detail?.body_type ? adminUserDetails?.detail?.body_type : '-' }</li>
                                                <li><strong>Çocuk Varmı?:</strong> {adminUserDetails?.detail?.have_a_child ? adminUserDetails?.detail?.have_a_child : '-' }</li>
                                                <li><strong>Çocuk İstiyormu?:</strong> {adminUserDetails?.detail?.want_a_child ? adminUserDetails?.detail?.want_a_child : '-' }</li>
                                                <li><strong>Sigara İçiyormu?:</strong> {adminUserDetails?.detail?.use_cigarette ? adminUserDetails?.detail?.use_cigarette : '-' }</li>
                                                <li><strong>Alkol Kullanıyormu?:</strong> {adminUserDetails?.detail?.use_alcohol ? adminUserDetails?.detail?.use_alcohol : '-' }</li>
                                                <li><strong>Eğitim Durumu?:</strong> {adminUserDetails?.detail?.education_status ? adminUserDetails?.detail?.education_status : '-' }</li>
                                                <li><strong>Yabancı Dller?:</strong> {adminUserDetails?.detail?.foreign_language ? adminUserDetails?.detail?.foreign_language : '-' }</li>
                                                <li><strong>Meslek?:</strong> {adminUserDetails?.detail?.job ? adminUserDetails?.detail?.job : '-' }</li>
                                                <li><strong>Maaş?:</strong> {adminUserDetails?.detail?.salary ? adminUserDetails?.detail?.salary : '-' }</li>
                                                <li><strong>Çalışma Şekli?:</strong> {adminUserDetails?.detail?.work_status ? adminUserDetails?.detail?.work_status : '-' }</li>
                                                <li><strong>Kime Yaşıyor?:</strong> {adminUserDetails?.detail?.live_with ? adminUserDetails?.detail?.live_with : '-' }</li>
                                                <li><strong>Kıyafet Şekli?:</strong> {adminUserDetails?.detail?.clothing_style ? adminUserDetails?.detail?.clothing_style : '-' }</li>
                                                <li><strong>Taviz Vermeyecekleriniz?:</strong> {adminUserDetails?.detail?.not_compromise ? adminUserDetails?.detail?.not_compromise : '-' }</li>
                                                <li><strong>Cemaat:</strong> {adminUserDetails?.detail?.community ? adminUserDetails?.detail?.community : '-' }</li>
                                                <li><strong>Meshep:</strong> {adminUserDetails?.detail?.sect ? adminUserDetails?.detail?.sect : '-' }</li>
                                                <li><strong>Meshep:</strong> {adminUserDetails?.detail?.do_you_pray ? adminUserDetails?.detail?.do_you_pray : '-' }</li>
                                                <li><strong>Kuran Biliyormu?:</strong> {adminUserDetails?.detail?.do_you_know_quran ? adminUserDetails?.detail?.do_you_know_quran : '-' }</li>
                                                <li><strong>Oruç Tutuyormu?:</strong> {adminUserDetails?.detail?.are_you_fasting ? adminUserDetails?.detail?.are_you_fasting : '-' }</li>
                                                <li><strong>İslami Ve Ahlaki olarak öenmli gördükleri?:</strong> {adminUserDetails?.detail?.consider_important_in_islam ? adminUserDetails?.detail?.consider_important_in_islam : '-' }</li>
                                                <li><strong>Müzik Türleri:</strong> {adminUserDetails?.detail?.listening_music_types ? adminUserDetails?.detail?.listening_music_types : '-' }</li>
                                                <li><strong>Okuduğunuz Kitap Türleri:</strong> {adminUserDetails?.detail?.reading_book_types ? adminUserDetails?.detail?.reading_book_types : '-' }</li>
                                                <li><strong>Eş adayında aradığı uyum:</strong> {adminUserDetails?.detail?.looking_qualities ? adminUserDetails?.detail?.looking_qualities : '-' }</li>
                                                <li><strong>Hobileri:</strong> {adminUserDetails?.detail?.your_hobbies ? adminUserDetails?.detail?.your_hobbies : '-' }</li>
                                                <li><strong>Kişiliğiniz:</strong> {adminUserDetails?.detail?.your_personality ? adminUserDetails?.detail?.your_personality : '-' }</li>
                                                <li><strong>Fiziksel Engel:</strong> {adminUserDetails?.detail?.physical_disability ? adminUserDetails?.detail?.physical_disability : '-' }</li>
                                                
                                            </ul>
                                        ) : (
                                        <p>Detay bilgisi bulunamadı.</p>
                                        )}
                                    </section>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}
export default AdminUserDetailPage;