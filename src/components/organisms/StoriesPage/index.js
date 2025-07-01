import React, { useEffect, useState } from "react";
import styles from './Index.module.css';
import AdminTopBanner from "../../molecules/AdminTopBanner";
import AdminMenu from "../../molecules/AdminMenu";

const StoriesPage = ({
    userLogout = () => {},
    adminGetStories = () => {},
    isLoading = false,
    error = false,
    adminStories = [],
    adminApproveStoryComplete = false,
    adminApproveStory = () => {},
    adminApproveStoryReset = () => {}
}) => {
    const [storiesVisible, setStoriesVisible] = useState(false);

    useEffect(() => {
        if(!isLoading) {
            setStoriesVisible(true);
        }
    },[]);
    
    useEffect(() => {
        adminGetStories();
    },[]);

    const handleDetailClick = (storyId) => {
        adminApproveStory({ storyId: storyId });
    };

    useEffect(() => {
        if(adminApproveStoryComplete) {
            adminApproveStoryReset();
            window.location = '/stories';
        }
    },[adminApproveStoryComplete]);

    return (
        <>
            <AdminTopBanner 
                userLogout={userLogout}
            />
            <div className={styles.frame}>
                <div className={styles.content}>
                    <AdminMenu/>
                    <div style={{ width: '100%'}}>
                        
                        {storiesVisible && (
                            <>
                                <div className={styles.container}>
                                    <h1 className={styles.title}>Story Listesi</h1>
                                    <table className={styles.table}>
                                        <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>İsim</th>
                                            <th>Soyisim</th>
                                            <th>Story</th>
                                            <th>Durum</th>
                                            <th>İşlemler</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {adminStories.map(story => (
                                            <tr key={story.id}>
                                            <td>{story.id}</td>
                                            <td>{story?.user?.name}</td>
                                            <td>{story?.user?.surname}</td>
                                            <td>
                                                {story.media ? (
                                                    <img
                                                        src={story.media}
                                                        alt="story"
                                                        style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "8px" }}
                                                    />
                                                ) : (
                                                    <span>Yok</span>
                                                )}
                                            </td>
                                            <td>{story?.status}</td>
                                            <td>
                                                <button
                                                    className={styles.detailButton}
                                                    onClick={() => handleDetailClick(story?.id)}
                                                >
                                                    Onayla
                                                </button>
                                            </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
export default StoriesPage;