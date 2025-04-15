import React, { useState } from "react";
import styles from './Index.module.css'; // Stil dosyasını import ediyoruz
import IM from '../../../utils/imgs/header-bg.jpg';
import Image from "next/image";

const PostBox = () => {
  const [content, setContent] = useState();
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Gönderilen içerik:", content);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // İlk dosyayı alıyoruz
    if (file) {
      setImage(file); // Resmi state'e set ediyoruz
    }
  };

  return (
    <>
        <div className={styles.container}>
            
            <div className={styles.header}>
              <div className={styles.profileEpisode}>
                <Image src={IM} style={{ width: '100px', height: '100px', borderRadius: '100px'}}/>
              </div>
              <div className={styles.textInputEpisode}>
                <input
                  type="text"
                  placeholder="Ne düşünüyorsun?"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  maxLength={180}
                  className={styles.textInput}
                />
              </div>
            </div>
            
            <div className={styles.footer}>
              <div className={styles.footerLeft}>
                <div 
                  style={{ paddingTop: '15px',paddingLeft: '15px', cursor: 'pointer'}}
                  onClick={() => document.getElementById('fileInput').click()} // Kamera ikonuna tıklanınca input tetikleniyor
                  >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-9 1c0-1.1.9-2 2-2h2.1l1.83-2.44A2 2 0 0 1 10.53 5h2.94c.64 0 1.24.3 1.63.81L17.9 8H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8Zm9 9a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
                  </svg>
                </div>
                <input
                  id="fileInput" // Bu inputu gizli yapıyoruz
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={handleImageChange} // Resim seçildiğinde handleImageChange çağrılıyor
                />
              </div>
              <div className={styles.footerRight}>
                <span className={styles.cracter}>180 Karakter</span>
                <button className={styles.submitButton}>Gönder</button>
              </div>
            </div>
        </div>
    </>
  );
};

export default PostBox;
