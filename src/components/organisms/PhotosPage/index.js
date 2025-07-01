import React, { useEffect, useState } from "react";
import styles from './Index.module.css';
import AdminTopBanner from "../../molecules/AdminTopBanner";
import AdminMenu from "../../molecules/AdminMenu";

const PhotosPage = ({
    userLogout = () => {},
    adminGetPhotos = () => {},
    isLoading = false,
    error = false,
    adminPhotos = [],
    adminApprovePhotoComplete = false,
    adminApprovePhoto = () => {},
    adminApprovePhotoReset = () => {}
}) => {
    const [photosVisible, setPhotosVisible] = useState(false);

    useEffect(() => {
        if(!isLoading) {
            setPhotosVisible(true);
        }
    },[]);
    
    useEffect(() => {
        adminGetPhotos();
    },[]);

    const handleDetailClick = (storyId) => {
        adminApprovePhoto({ storyId: storyId });
    };

    useEffect(() => {
        if(adminApprovePhotoComplete) {
            adminApprovePhotoReset();
            window.location = '/photos';
        }
    },[adminApprovePhotoComplete]);

    return (
        <>
            <AdminTopBanner 
                userLogout={userLogout}
            />
            <div className={styles.frame}>
                <div className={styles.content}>
                    <AdminMenu/>
                    <div style={{ width: '100%'}}>
                        
                        {photosVisible && (
                            <>
                                <div className={styles.container}>
                                    <h1 className={styles.title}>Fotoğraf Listesi</h1>
                                    <table className={styles.table}>
                                        <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>İsim</th>
                                            <th>Soyisim</th>
                                            <th>Fotoğraf</th>
                                            <th>Durum</th>
                                            <th>İşlemler</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {adminPhotos.map(photo => (
                                            <tr key={photo.id}>
                                            <td>{photo.id}</td>
                                            <td>{photo?.user?.name}</td>
                                            <td>{photo?.user?.surname}</td>
                                            <td>
                                                {photo.photo_path ? (
                                                    <img
                                                        src={photo.photo_path}
                                                        alt="story"
                                                        style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "8px" }}
                                                    />
                                                ) : (
                                                    <span>Yok</span>
                                                )}
                                            </td>
                                            <td>{photo?.status === 0 ? 'Onay Bekliyor' : 'Onaylandı'}</td>
                                            <td>
                                                <button
                                                    className={styles.detailButton}
                                                    onClick={() => handleDetailClick(story?.id)}
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
export default PhotosPage;