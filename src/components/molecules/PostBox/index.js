import React, { useEffect, useState } from "react";
import styles from './Index.module.css'; // Stil dosyasını import ediyoruz
import IM from '../../../utils/imgs/header-bg.jpg';
import Image from "next/image";
import ToastMessage from "../TostMessage";
import { resetCreatePostComplete } from "@/src/store/user/actions";

const PostBox = ({
  createPostComplete = false,
  createPostLoading = false,
  userCreatePost = () => {},
  userPostList = () => {},
  userMe = {}
}) => {
  const [content, setContent] = useState();
  const [image, setImage] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showSelectedFileSuccess, setShowSelectedFileSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
      if(content) {
        data.append('description', content);
      }
      if(image) {
        data.append('photo', image);
      }
    userCreatePost({
      formData: data
    });
  };

  const handleImageChange = (e) => {
    setShowSelectedFileSuccess(true);
    const file = e.target.files[0]; // İlk dosyayı alıyoruz
    if (file) {
      setImage(file); // Resmi state'e set ediyoruz
    }
  };

  useEffect(() => {
    if (createPostComplete) {
      resetCreatePostComplete();
      userPostList();
      setShowSuccess(true);
      setContent('');
      setImage(null);
  
      const timeout = setTimeout(() => {
        setShowSuccess(false);
      }, 3000); // 3 saniye sonra mesajı kaldır
  
      return () => clearTimeout(timeout);
    }
  }, [createPostComplete]);

  return (
    <>
      {showSelectedFileSuccess && (
           <ToastMessage message={"Dosya başarılı bir şekile alındı ✅"}/>
      )}

      {showSuccess && (
        <ToastMessage message={"Paylaşımınız başarılı bir şekilde yapıldı. ✅"}/>
      )}

        <div className={styles.container}>
            
            <div className={styles.header}>
              <div className={styles.profileEpisode}>
                {userMe?.profile_photo_path ? (
                            <>
                                <Image 
                                    width={100}
                                    height={100}
                                    style={{ borderRadius: '120px'}}
                                    src={userMe?.profile_photo_path}
                                />
                            </>
                        ) : (
                            <>
                                <svg
                                            width="100"
                                            height="100"
                                            viewBox="0 0 24 24"
                                            fill="#ccc"
                                            xmlns="http://www.w3.org/2000/svg"
                                            >
                                            <circle cx="12" cy="12" r="10" fill="#E0E0E0" />
                                            <circle cx="12" cy="8" r="4" fill="#BDBDBD" />
                                            <path
                                                d="M12 14c-4 0-6 2-6 4v1h12v-1c0-2-2-4-6-4z"
                                                fill="#BDBDBD"
                                        />
                                    </svg>
                            </>
                  )}
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
                  style={{ paddingTop: '15px',paddingLeft: '15px', cursor: 'pointer'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" onClick={() => document.getElementById('postFileInput').click()} >
                    <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-9 1c0-1.1.9-2 2-2h2.1l1.83-2.44A2 2 0 0 1 10.53 5h2.94c.64 0 1.24.3 1.63.81L17.9 8H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8Zm9 9a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
                  </svg>
                </div>
                <input
                  id="postFileInput" // Bu inputu gizli yapıyoruz
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={handleImageChange} // Resim seçildiğinde handleImageChange çağrılıyor
                />
              </div>
              <div className={styles.footerRight}>
                <span className={styles.cracter}>180 Karakter</span>
                <button 
                  onClick={handleSubmit}
                  disabled={createPostLoading}
                  className={styles.submitButton}
                  >
                    {createPostLoading ? 'Gönderiliyor...' : 'Gönder'}
                </button>
              </div>
            </div>
        </div>
    </>
  );
};

export default PostBox;
