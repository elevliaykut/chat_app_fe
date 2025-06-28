import React, { useEffect, useState } from "react";
import styles from './Index.module.css';
import AdminTopBanner from "../../molecules/AdminTopBanner";
import AdminMenu from "../../molecules/AdminMenu";

const AdminUserDetailPage = ({
    userLogout = () => {},
    isLoading = false,
    error = null,
    userId = '',
    user = {}
}) => {
    const [userDetailVisible, setUserDetailVisible] = useState(false);

    useEffect(() => {
        if(!isLoading) {
            setUserDetailVisible(true);
        }
    },[]);

    return(
        <>
            <AdminTopBanner
                userLogout={userLogout}
            />
            <div className={styles.frame}>
                <div className={styles.content}>
                    <AdminMenu/>
                    <div style={{ width: '100%'}}>
                        <div className={styles.container}>
                            <h1 className={styles.title}>Kullanıcı Detayı</h1>

                            <section className={styles.section}>
                                <h2>Temel Bilgiler</h2>
                                <ul>
                                <li><strong>ID:</strong> {user.id}</li>
                                <li><strong>Ad:</strong> {user.name || '-'}</li>
                                <li><strong>Soyad:</strong> {user.surname || '-'}</li>
                                <li><strong>Kullanıcı Adı:</strong> {user.username}</li>
                                <li><strong>Email:</strong> {user.email}</li>
                                <li><strong>Telefon:</strong> {user.phone || '-'}</li>
                                <li><strong>Cinsiyet:</strong> {user.gender === 1 ? 'Erkek' : user.gender === 2 ? 'Kadın' : '-'}</li>
                                <li><strong>Durum:</strong> {user.status === 1 ? 'Aktif' : 'Pasif'}</li>
                                <li><strong>Doğum Tarihi:</strong> {user.birth_date?.split('T')[0] || '-'}</li>
                                </ul>
                            </section>

                            <section className={styles.section}>
                                <h2>Profil Detayı</h2>
                                {user.detail ? (
                                    <ul>
                                        <li><strong>Özet:</strong> {user.detail.profile_summary || '-'}</li>
                                        <li><strong>Biografi:</strong> {user.detail.biography || '-'}</li>
                                        <li><strong>Burç:</strong> {user.detail.horoscope || '-'}</li>
                                        <li><strong>Şehir:</strong> {user.detail.city || '-'}</li>
                                        <li><strong>İlçe:</strong> {user.detail.district || '-'}</li>
                                        <li><strong>Medeni Hali:</strong> {user.detail.marital_status_value || '-'}</li>
                                        <li><strong>Boy:</strong> {user.detail.tall || '-'}</li>
                                        <li><strong>Kilo:</strong> {user.detail.weight || '-'}</li>
                                        <li><strong>Göz Rengi:</strong> {user.detail.eye_color || '-'}</li>
                                        <li><strong>Saç Rengi:</strong> {user.detail.hair_color || '-'}</li>
                                        <li><strong>Cilt Rengi:</strong> {user.detail.skin_color || '-'}</li>
                                        <li><strong>Vücut Tipi:</strong> {user.detail.body_type || '-'}</li>
                                        <li><strong>Sigara Kullanımı:</strong> {user.detail.use_cigarette || '-'}</li>
                                        <li><strong>Alkol Kullanımı:</strong> {user.detail.use_alcohol || '-'}</li>
                                        <li><strong>Eğitim:</strong> {user.detail.education_status || '-'}</li>
                                        <li><strong>İş:</strong> {user.detail.job || '-'}</li>
                                    </ul>
                                ) : (
                                <p>Detay bilgisi bulunamadı.</p>
                                )}
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AdminUserDetailPage;