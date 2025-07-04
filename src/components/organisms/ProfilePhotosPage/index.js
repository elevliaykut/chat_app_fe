import React, { useEffect, useState } from "react";
import styles from './Index.module.css';
import AdminTopBanner from "../../molecules/AdminTopBanner";
import AdminMenu from "../../molecules/AdminMenu";

const ProfilePhotosPage = ({
    userLogout = () => {},
    adminGetProfilePhotos = () => {},
    isLoading = false,
    error = false,
    adminProfilePhotos = [],
    adminApproveProfilePhotoComplete = false,
    adminApproveProfilePhoto = () => {},
    adminApproveProfilePhotoReset = () => {},
}) => {
    const [profilePhotoVisible, setProfilePhotoVisible] = useState(false);

    useEffect(() => {
        if(!isLoading) {
            setProfilePhotoVisible(true);
        }
    },[]);
    
    useEffect(() => {
        adminGetProfilePhotos();
    },[]);

    const handleDetailClick = userId => {
        adminApproveProfilePhoto({ userId: userId });
    };

    useEffect(() => {
        if(adminApproveProfilePhotoComplete) {
            adminApproveProfilePhotoReset();
            window.location = '/profil-photos';
        }
    },[adminApproveProfilePhotoComplete]);

    return (
        <>
            <AdminTopBanner 
                userLogout={userLogout}
            />
            <div className={styles.frame}>
                <div className={styles.content}>
                    <AdminMenu/>
                    <div style={{ width: '80%'}}>
                        
                        {profilePhotoVisible && (
                            <>
                                <div className={styles.container}>
                                    <h1 className={styles.title}>Profil Resimleri</h1>
                                    <table className={styles.table}>
                                        <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>İsim</th>
                                            <th>Soyisim</th>
                                            <th>Resim</th>
                                            <th>Durum</th>
                                            <th>Tarih</th>
                                            <th>İşlemler</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {adminProfilePhotos.map(user => (
                                            <tr key={user.id}>
                                                <td>{user.id}</td>
                                                <td>{user?.name}</td>
                                                <td>{user?.surname}</td>
                                                <td>
                                                    {user.profile_photo_path ? (
                                                        <img
                                                            src={user.profile_photo_path}
                                                            alt="story"
                                                            style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "8px" }}
                                                        />
                                                    ) : (
                                                        <span>Yok</span>
                                                    )}
                                                </td>
                                                <td>{user?.photo_approve === 1 ? 'Onaylanmış' : 'Onay Bekliyor'}</td>
                                                <td>{user?.created_at}</td>
                                                <td>
                                                    <button
                                                        className={styles.detailButton}
                                                        onClick={() => handleDetailClick(user?.id)}
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
export default ProfilePhotosPage;