import React, { useEffect, useState } from "react";
import styles from './Index.module.css';
import ThemeConfig from "@/src/utils/ThemeConfig";
import ToastMessage from "../../TostMessage";

const UserPhotoModal = ({
    onClose = () => {},
    isLoading = false,
    error = null,
    userUploadPhoto = () => {},
    photos = [],
    userDeletePhoto = () => {}
}) => {
    const [selectedPhotos, setSelectedPhotos] = useState([]);

    useEffect(() => {
        if (photos && photos.length > 0) {
            const formattedPhotos = photos.map(p => ({
                id: p.id,
                url: p.photo_path,
                file: null
            }));
            setSelectedPhotos(formattedPhotos);
        }
    }, [photos]);

    const handlePhotoSelect = (e) => {
        const files = e.target.files;
        if (!files) return;

        const fileList = Array.from(files);

        if (selectedPhotos.length + fileList.length > 7) {
            alert('En fazla 7 fotoğraf yükleyebilirsiniz.');
            return;
        }

        const newPhotos = fileList.map(f => ({
            id: null,
            url: null,
            file: f
        }));

        setSelectedPhotos(prev => [...prev, ...newPhotos]);

        // Yüklemeden sadece ilk dosyayı upload fonksiyonuna gönder
        const data = new FormData();
        data.append('photo', fileList[0]);
        userUploadPhoto({ formData: data });
    };

    const handleRemovePhoto = (photo) => {
        userDeletePhoto({ photoId: photo?.id });
        setSelectedPhotos(prev => prev.filter(p => p !== photo));
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.modalHeader}>
                    <div><label>FOTOĞRAFLAR</label></div>
                    <div className={styles.closeButton} onClick={onClose}>X</div>
                </div>

                <div className={styles.photoContainer}>
                    {selectedPhotos.map((photo, index) => {
                        const src = photo.url || (photo.file ? URL.createObjectURL(photo.file) : '');
                        return (
                            <div key={index} className={styles.photoWrapper}>
                                <img
                                    src={src}
                                    alt={`preview-${index}`}
                                    className={styles.photoThumb}
                                />
                                <button
                                    type="button"
                                    className={styles.deleteButton}
                                    onClick={() => handleRemovePhoto(photo)}
                                >
                                    Sil
                                </button>
                            </div>
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
    );
};

export default UserPhotoModal;
