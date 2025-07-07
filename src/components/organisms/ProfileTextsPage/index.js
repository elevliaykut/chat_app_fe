import React, { useEffect, useState } from "react";
import styles from './Index.module.css';
import AdminTopBanner from "../../molecules/AdminTopBanner";
import AdminMenu from "../../molecules/AdminMenu";

const ProfileTextsPage = ({
    userLogout = () => {},
    adminGetProfileTexts = () => {},
    isLoading = false,
    error = false,
    adminProfileTexts = [],
    adminApproveProfileTextComplete = false,
    adminApproveProfileText = () => {},
    adminApproveProfileTextReset = () => {},
}) => {
    const [profileTextVisible, setProfileTextVisible] = useState(false);

    useEffect(() => {
        if(!isLoading) {
            setProfileTextVisible(true);
        }
    },[]);
    
    useEffect(() => {
        adminGetProfileTexts();
    },[]);

    const handleDetailClick = detailId => {
        adminApproveProfileText({ detailId: detailId });
    };

    useEffect(() => {
        if(adminApproveProfileTextComplete) {
            adminApproveProfileTextReset();
            window.location = '/profile-texts';
        }
    },[adminApproveProfileTextComplete]);

    return (
        <>
            <AdminTopBanner 
                userLogout={userLogout}
            />
            <div className={styles.frame}>
                <div className={styles.content}>
                    <AdminMenu/>
                    <div style={{ width: '100%'}}>
                        
                        {profileTextVisible && (
                            <>
                                <div className={styles.container}>
                                    <h1 className={styles.title}>Profil Yazıları</h1>
                                    <table className={styles.table}>
                                        <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>İsim</th>
                                            <th>Soyisim</th>
                                            <th>Profil Yazısı</th>
                                            <th>Durum</th>
                                            <th>Tarih</th>
                                            <th>İşlemler</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {adminProfileTexts.map(text => (
                                            <tr key={text.id}>
                                            <td>{text.id}</td>
                                            <td>{text?.user_name}</td>
                                            <td>{text?.user_surname}</td>
                                            <td>{text?.profile_summary}</td>
                                            <td>{text?.profile_text_status === 0 ? 'Onay Bekliyor' : 'Onaylandı'}</td>
                                            <td>{text?.created_at}</td>
                                            <td>
                                                <button
                                                    className={styles.detailButton}
                                                    onClick={() => handleDetailClick(text?.id)}
                                                >
                                                    Onayla
                                                </button>
                                            </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProfileTextsPage;