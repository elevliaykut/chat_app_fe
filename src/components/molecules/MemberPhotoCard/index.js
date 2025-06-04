import React, { useState } from 'react';
import styles from './Index.module.css';

const MemberPhotoCard = ({ 
    photos = [] 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  if (photos.length === 0) return;

  return (
    <>
      <div className={styles.galleryContainer}>
        <div className={styles.mainImageContainer}>
          <img
            src={photos[currentIndex].photo_path}
            alt={`Photo ${currentIndex + 1}`}
            className={styles.mainImage}
          />
        </div>

        <div className={styles.thumbnailContainer}>
          {photos.map((photo, index) => (
            <img
              key={photo.id}
              src={photo.photo_path}
              alt={`Thumb ${index + 1}`}
              className={`${styles.thumbnail} ${index === currentIndex ? styles.activeThumbnail : ''}`}
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MemberPhotoCard;
