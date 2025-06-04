import React, { useEffect, useRef, useState } from "react";
import styles from './Index.module.css';
import ThemeConfig from "@/src/utils/ThemeConfig";
import ToastMessage from "../../TostMessage";

const UserPhotoModal = ({
    onClose = () => {},
    isLoading = false,
    error = null,
    userUploadPhoto = () => {},
    photos = []
}) => {      

    const [selectedPhotos, setSelectedPhotos] = useState([]);

    useEffect(() => {
        if (photos && photos.length > 0) {
            const photoUrls = photos.map((p) => p.photo_path);
            setSelectedPhotos(photoUrls);
        }
    }, [photos]);

    const handlePhotoSelect = (e) => {
        const files = e.target.files;
        if (!files) return;

        const data = new FormData();
        data.append('photo', e.target.files[0]);
        userUploadPhoto({ formData: data });

        const fileList = Array.from(files);
        // Maksimum 7 foto kontrolü
        if (selectedPhotos.length + fileList.length > 7) {
        alert('En fazla 7 fotoğraf yükleyebilirsiniz.');
        return;
        }

        setSelectedPhotos((prev) => [...prev, ...fileList]);
    };

    return(
        <>
            <div className={styles.overlay}>
                <div className={styles.modal}>
                    <div className={styles.modalHeader}>
                        <div>
                            <label>FOTOĞRAFLAR</label>
                        </div>
                        <div className={styles.closeButton} style={{ marginLeft: 'auto', cursor: 'pointer'}} onClick={onClose}>
                            X
                        </div>
                    </div>
                    
                    <div className={styles.photoContainer}>
                    {selectedPhotos.map((item, index) => {
                        const src = typeof item === 'string' ? item : URL.createObjectURL(item);
                        return (
                            <img
                                key={index}
                                src={src}
                                alt={`preview-${index}`}
                                className={styles.photoThumb}
                            />
                        );
                    })}

                        {selectedPhotos.length < 7 && (
                        <label className={styles.addPhotoBox}>
                            +
                            <input
                            type="file"
                            accept="image/*"
                            onChange={handlePhotoSelect}
                            style={{ display: 'none' }}
                            />
                        </label>
                        )}
                    </div>
         
                </div>
            </div>
        </>
    )
}
export default UserPhotoModal;