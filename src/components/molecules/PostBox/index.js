import React, { useState } from "react";
import styles from './Index.module.css'; // Stil dosyasını import ediyoruz

const PostBox = () => {
  const [content, setContent] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Gönderilen içerik:", content);
  };

  return (
    <>
        <div className={styles.postBox}>
            <div>
                <form className={styles.postHeader} onSubmit={handleSubmit}>
                    <img
                    className="avatar"
                    src="/user-icon.svg"
                    alt="User"
                    />
                    <input
                    type="text"
                    placeholder="Ne düşünüyorsun?"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    maxLength={180}
                    />
                </form>
            </div>
            <div className={styles.postFooter}>
                <span className="emoji">😄</span>
                <div className={styles.footerRight}>
                    <span className={styles.charCount}>180</span>
                    <button className="submit-btn">GÖNDER</button>
                </div>
            </div>
        </div>
    </>
  );
};

export default PostBox;
