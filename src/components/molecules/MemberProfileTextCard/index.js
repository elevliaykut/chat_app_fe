import React from "react";
import styles from './Index.module.css';
import ThemeConfig from "@/src/utils/ThemeConfig";
import { useRouter } from "next/router";

const MemberProfileTextCard = ({
    details = {}
}) => {
    const router = useRouter();
    const isMyProfilePage = router.pathname === "/my-profile";

    return (
        <>
            <div className={styles.container}>
                <div className={styles.title}>
                     <div className={styles.titleIconEpisode}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 3.487a2.1 2.1 0 112.97 2.97l-9.66 9.66-4.243 1.273 1.273-4.243 9.66-9.66z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 13v6a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h6" />
                        </svg>
                     </div>
                     <div className={styles.titleTextEpisode}>
                        <div style={{ display: 'flex'}}>
                            <label>Profil Yazısı</label>
                            {isMyProfilePage && (
                                <>
                                    <label 
                                        style={{ 
                                            marginLeft: '20px', 
                                            fontWeight: 'bold', 
                                            color: details?.detail?.profile_text_status === 1 ? ThemeConfig.success : ThemeConfig.error
                                        }}>
                                            {details?.detail?.profile_summary && (
                                                <>
                                                    {details?.detail?.profile_text_status === 1 ? 'Onaylandı' : 'Onay Bekliyor'}
                                                </>
                                            )}
                                    </label>
                                </>
                            )}
                        </div>
                     </div>
                </div>
                <div className={styles.contentText}>
                    <label>
                        {details?.detail?.profile_summary ? details?.detail?.profile_summary  : 'Profil Yazısı Bulunmamaktadır!'}
                    </label>
                </div>
            </div>
        </>
    )
}
export default MemberProfileTextCard;