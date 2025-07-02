import { useEffect, useRef, useState } from "react";
import styles from './Index.module.css';

const StoryBanner = ({
    users = [],
    myStories = [],
    createStory = () => {},
}) => {
    const [activeUserIndex, setActiveUserIndex] = useState(null); // null, 0, 1,... veya 'me'
    const [activeStoryIndex, setActiveStoryIndex] = useState(0);
    const progressBarRef = useRef(null);

    // openStory parametresi 'me' ise kendi storileri açılır
    const openStory = (userIndex) => {
        // Modal sadece story varsa açılsın
        if (userIndex === 'me') {
            if (!myStories[0]?.stories?.length) return;
        } else {
            if (!users[userIndex]?.stories?.length) return;
        }
        setActiveUserIndex(userIndex);
        setActiveStoryIndex(0);
    };

    const closeStory = () => {
        setActiveUserIndex(null);
        setActiveStoryIndex(0);
    };

    const nextStory = () => {
        let stories = [];
        if (activeUserIndex === 'me') {
            stories = myStories[0]?.stories || [];
        } else {
            stories = users[activeUserIndex]?.stories || [];
        }

        if (activeStoryIndex < stories.length - 1) {
            setActiveStoryIndex(activeStoryIndex + 1);
        } else {
            if (activeUserIndex === 'me' && users.length > 0) {
                setActiveUserIndex(0);
                setActiveStoryIndex(0);
            } else if (typeof activeUserIndex === 'number' && activeUserIndex < users.length - 1) {
                setActiveUserIndex(activeUserIndex + 1);
                setActiveStoryIndex(0);
            } else {
                closeStory();
            }
        }
    };

    useEffect(() => {
        if (activeUserIndex === null) return;

        const timer = setTimeout(nextStory, 5000);

        if (progressBarRef.current) {
            progressBarRef.current.style.animation = 'none';
            progressBarRef.current.offsetHeight; // reflow trigger
            progressBarRef.current.style.animation = `progressBarAnimation 5s linear forwards`;
        }

        return () => clearTimeout(timer);
    }, [activeUserIndex, activeStoryIndex]);

    // aktif kullanıcı ve storileri belirle
    const activeUser = activeUserIndex === 'me' ? myStories[0] : users[activeUserIndex];
    const activeStories = activeUserIndex === 'me' ? (myStories[0]?.stories || []) : (users[activeUserIndex]?.stories || []);

    const handleStorySelect = (e) => {
        const file = e.target.files[0];
        if (file) {
            const data = new FormData();
            data.append('media', file);
            createStory({ formData: data });
        }
    };

    // Kendi storileri olup olmadığını kontrol et
    const myHasStories = myStories[0]?.stories?.length > 0;

    return (
        <div className={styles.container}>
            <div className={styles.storyList}>
                {/* Kendi avatar */}
                <div className={styles.profileWrapper} onClick={() => openStory('me')}>
                    <div className={styles.avatarBox}>
                        {myStories[0]?.profile_photo_url ? (
                            <img
                                src={myStories[0].profile_photo_url}
                                alt={myStories[0].username}
                                className={styles.avatar}
                                style={{
                                    border: myHasStories ? "3px solid #ff0066" : "none",
                                }}
                            />
                        ) : (
                            <div
                                className={styles.avatar}
                                style={{
                                    border: myHasStories ? "3px solid #ff0066" : "none",
                                }}
                            >
                                {/* Placeholder SVG */}
                                <svg
                                    width="95"
                                    height="95"
                                    viewBox="0 0 24 24"
                                    fill="#ccc"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx="12" cy="12" r="10" fill="#E0E0E0" />
                                    <circle cx="12" cy="8" r="4" fill="#BDBDBD" />
                                    <path d="M12 14c-4 0-6 2-6 4v1h12v-1c0-2-2-4-6-4z" fill="#BDBDBD" />
                                </svg>
                            </div>
                        )}
                        <div
                            className={styles.plusButton}
                            onClick={(e) => {
                                e.stopPropagation();
                                document.getElementById("storyUploadInput").click();
                            }}
                        >
                            +
                        </div>
                    </div>
                    <p className={styles.username}>{myStories[0]?.username}</p>
                    <input
                        id="storyUploadInput"
                        type="file"
                        accept="image/*"
                        onChange={handleStorySelect}
                        style={{ display: "none" }}
                    />
                </div>

                {/* Diğer kullanıcılar */}
                {users.map((user, index) => {
                    const hasStories = user.stories && user.stories.length > 0;
                    return (
                        <div
                            key={user.user_id}
                            onClick={() => openStory(index)}
                            className={styles.avatarWrapper}
                        >
                            <div className={styles.avatarContainer}>
                                {user?.profile_photo_url ? (
                                    <img
                                        src={user.profile_photo_url}
                                        alt={user.username}
                                        className={styles.avatar}
                                        style={{
                                            border: hasStories ? "3px solid #ff0066" : "none",
                                        }}
                                    />
                                ) : (
                                    <div
                                        className={styles.avatar}
                                        style={{
                                            border: hasStories ? "3px solid #ff0066" : "none",
                                        }}
                                    >
                                        <svg
                                            width="95"
                                            height="95"
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
                                    </div>
                                )}
                            </div>
                            <p className={styles.name}>{user.username}</p>
                        </div>
                    );
                })}
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
                            src={activeStories[activeStoryIndex]?.media_url}
                            alt="story"
                            className={styles.storyMedia}
                        />
                        <button onClick={(e) => { e.stopPropagation(); closeStory(); }} className={styles.closeBtn}>
                            ×
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StoryBanner;
