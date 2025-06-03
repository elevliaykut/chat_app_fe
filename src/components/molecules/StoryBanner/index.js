import { useEffect, useState } from "react";
import styles from './Index.module.css';

const StoryBanner = ({
    users = []
}) => {
    const [activeUserIndex, setActiveUserIndex] = useState(null);
    const [activeStoryIndex, setActiveStoryIndex] = useState(0);
    const activeUser = users[activeUserIndex];

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
        if (activeStoryIndex < user.stories.length - 1) {
          setActiveStoryIndex(activeStoryIndex + 1);
        } else {
          closeStory();
        }
    };

    useEffect(() => {
        if (activeUserIndex === null) return;
    
        const timer = setTimeout(() => {
          nextStory();
        }, 5000);
    
        return () => clearTimeout(timer);
      }, [activeUserIndex, activeStoryIndex]);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.storyList}>
                    {users.map((user, index) => (
                        <div key={user.user_id} onClick={() => openStory(index)} className={styles.avatarWrapper}>
                            <img src={user.profile_photo_url} alt={user.name} className={styles.avatar} />
                            <p className={styles.name}>{user.username}</p>
                        </div>
                    ))}
                </div>

                    {activeUserIndex !== null && (
                        <div className={styles.storyModal} onClick={nextStory}>
                            <div className={styles.storyContent}>
                                <div className={styles.storyUserInfo}>
                                    <img
                                    src={activeUser.profile_photo_url}
                                    alt={activeUser.username}
                                    className={styles.storyUserAvatar}
                                    />
                                    <span className={styles.storyUsername}>{activeUser.username}</span>
                                </div>
                        
                                <img
                                    src={activeUser.stories[activeStoryIndex].media_url}
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
