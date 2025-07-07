import React, { useEffect, useState } from "react";
import styles from './Index.module.css';
import AdminTopBanner from "../../molecules/AdminTopBanner";
import AdminMenu from "../../molecules/AdminMenu";

const PostsPage = ({
    userLogout = () => {},
    adminGetPosts = () => {},
    isLoading = false,
    error = false,
    adminPosts = [],
    adminApprovePostComplete = false,
    adminApprovePost = () => {},
    adminApprovePostReset = () => {},
}) => {
    const [postVisible, setPostVisible] = useState(false);

    useEffect(() => {
        if(!isLoading) {
            setPostVisible(true);
        }
    },[]);
    
    useEffect(() => {
        adminGetPosts();
    },[]);

    const handleDetailClick = postId => {
        adminApprovePost({ postId: postId });
    };

    useEffect(() => {
        if(adminApprovePostComplete) {
            adminApprovePostReset();
            window.location = '/posts';
        }
    },[adminApprovePostComplete]);

    return (
        <>
            <AdminTopBanner 
                userLogout={userLogout}
            />
            <div className={styles.frame}>
                <div className={styles.content}>
                    <AdminMenu/>
                    <div style={{ width: '100%'}}>
                        
                        {postVisible && (
                            <>
                                <div className={styles.container}>
                                    <h1 className={styles.title}>Post Listesi</h1>
                                    <table className={styles.table}>
                                        <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>İsim</th>
                                            <th>Soyisim</th>
                                            <th>Fotoğraf</th>
                                            <th>İçerik</th>
                                            <th>Durum</th>
                                            <th>Tarih</th>
                                            <th>İşlemler</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {adminPosts.map(post => (
                                            <tr key={post.id}>
                                            <td>{post.id}</td>
                                            <td>{post?.creator_user?.name}</td>
                                            <td>{post?.creator_user?.surname}</td>
                                            <td>
                                                {post.photo[0] ? (
                                                    <img
                                                        src={post.photo[0]?.photo_path}
                                                        alt="story"
                                                        style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "8px" }}
                                                    />
                                                ) : (
                                                    <span>Yok</span>
                                                )}
                                            </td>
                                            <td>{post?.description}</td>
                                            <td>{post?.status === 0 ? 'Onay Bekliyor' : 'Onaylandı'}</td>
                                            <td>{post?.created_at}</td>
                                            <td>
                                                <button
                                                    className={styles.detailButton}
                                                    onClick={() => handleDetailClick(post?.id)}
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
export default PostsPage;