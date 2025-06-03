import { useEffect, useRef, useState } from "react";
import styles from './Index.module.css';

const StoryBanner = ({
    users = [],
    userMe = {},
    getStory = () => {}
}) => {
    const [activeUserIndex, setActiveUserIndex] = useState(null);
    const [activeStoryIndex, setActiveStoryIndex] = useState(0);
    const activeUser = users[activeUserIndex];
    const [storyImage, setStoryImage] = useState();
    const progressBarRef = useRef(null); 
    const [isUserMeActive, setIsUserMeActive] = useState(false);
    

    const openStory = (userIndex) => {
        setActiveUserIndex(userIndex);
        setActiveStoryIndex(0);
    };

    const closeStory = () => {
        setActiveUserIndex(null);
        setActiveStoryIndex(0);
    };
    
    const nextStory = () => {
        const user = users[activeUserIndex];
        if (activeStoryIndex < user?.stories.length - 1) {
          setActiveStoryIndex(activeStoryIndex + 1);
        } else {
          // Kullanıcının hikayeleri bitti, bir sonraki kullanıcıya geç
            if (activeUserIndex < users.length - 1) {
                setActiveUserIndex(activeUserIndex + 1);
                setActiveStoryIndex(0);
            } else {
                // Son kullanıcıysa hikayeleri kapat
                closeStory();
            }
        }
    };

    useEffect(() => {
        if (activeUserIndex === null) return;
    
        const timer = setTimeout(() => {
          nextStory();
        }, 5000);

        if (progressBarRef.current) {
            progressBarRef.current.style.animation = 'none';
            progressBarRef.current.offsetHeight; // trigger reflow
            progressBarRef.current.style.animation = `progressBarAnimation 5s linear forwards`;
        }
    
        return () => clearTimeout(timer);
      }, [activeUserIndex, activeStoryIndex]);

      const handleStorySelect = (e) => {
        const file = e.target.files[0];
        if (file) {
          const imageUrl = URL.createObjectURL(file); // geçici önizleme URL'si
          setStoryImage(imageUrl);
        }
      };

    const currentAvatarOnClick = () => {
        getStory({ me: true });
        openStory(0);
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.storyList}>
                <div className={styles.profileWrapper}>
                        <div className={styles.avatarBox}
                            onClick={currentAvatarOnClick}
                        >
                            <img
                                src={storyImage ? storyImage : userMe?.profile_photo_path} // kullanıcının profil fotoğrafı
                                alt="Profil"
                                className={styles.avatarProfile}
                            />
                            <div
                                className={styles.plusButton}
                                onClick={() => document.getElementById("storyUploadInput").click()}
                            >
                                +
                            </div>
                        </div>
                        <p className={styles.username}>{userMe?.username}</p>
                        <input
                            id="storyUploadInput"
                            type="file"
                            accept="image/*"
                            onChange={handleStorySelect}
                            style={{ display: "none" }}
                        />
                </div>
                
                {users.map((user, index) => (
                    <div key={user.user_id} onClick={() => openStory(index)} className={styles.avatarWrapper}>
                        <div className={styles.avatarContainer}>
                            <img src={user.profile_photo_url} alt={user.name} className={styles.avatar} />
                        </div>
                        <p className={styles.name}>{user.username}</p>
                    </div>
                ))}
                </div>

                    {activeUserIndex !== null && (
                        <div className={styles.storyModal} onClick={nextStory}>
                            <div className={styles.storyContent}>
                                <div className={styles.progressBarContainer}>
                                    <div ref={progressBarRef} className={styles.progressBar}></div>
                                </div>
                                <div className={styles.storyUserInfo}>
                                    <img
                                    src={activeUser?.profile_photo_url}
                                    alt={activeUser?.username}
                                    className={styles.storyUserAvatar}
                                    />
                                    <span className={styles.storyUsername}>{activeUser?.username}</span>
                                </div>
                        
                                <img
                                    src={activeUser?.stories[activeStoryIndex].media_url}
                                    alt="story"
                                    className={styles.storyMedia}
                                />
                                <button onClick={closeStory} className={styles.closeBtn}>×</button>
                            </div>
                        </div>
                    )}
                </div>
        </>
    )
}
export default StoryBanner;
