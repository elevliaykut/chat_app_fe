import React, { useState } from 'react';
import styles from './Index.module.css';
import { usePathname } from 'next/navigation';
import ThemeConfig from '@/src/utils/ThemeConfig';

const MemberPhotoCard = ({ 
    photos = [] 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const pathname = usePathname();
  const isMyProfile = pathname === '/my-profile';

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
            <>
              <div style={{ display: 'block'}}>
                <img
                  key={photo.id}
                  src={photo.photo_path}
                  alt={`Thumb ${index + 1}`}
                  className={`${styles.thumbnail} ${index === currentIndex ? styles.activeThumbnail : ''}`}
                  onClick={() => handleThumbnailClick(index)}
                />
                {isMyProfile && (
                  <>
                    <label style={{
                        color: photo?.status === 1 ? ThemeConfig.success : ThemeConfig.error,
                        fontSize: '11px',
                        fontWeight: 'bold'
                      }}>
                        {photo?.status === 1 ? 'Onaylandı' : 'Onay Bekliyor'}
                    </label>
                  </>
                )}
              </div>
            </>
            
          ))}
        </div>
      </div>
    </>
  );
};

export default MemberPhotoCard;
