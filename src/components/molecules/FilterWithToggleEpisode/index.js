import React from "react";
import styles from './Index.module.css';
import OnlineToggle from "../OnlineToggle";
import NewMemberToggle from "../NewMemberToggle";
import NearMemberToggle from "../NearMemberToggle";
import ApproveMemberToggle from "../ApproveMemberToggle";
import WithPhotoToggle from "../WithPhotoToggle";
import NonePhotoToggle from "../NonePhotoToggle";

const FilterWithToggleEpisode = ({
    setOnlineToggleIsStatus = () => {},
    setNewMemberIsStatus = () => {},
    setNearMemberToggleStatus = () => {},
    setApproveMemberToggleStatus = () => {},
    setHasPhotoMemberToggleStatus = () => {},
    setHasNotPhotoMemberToggleStatus = () => {}
}) => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.frame}>
                    <OnlineToggle 
                        setOnlineToggleIsStatus={setOnlineToggleIsStatus}
                    />
                    <NewMemberToggle 
                        setNewMemberIsStatus={setNewMemberIsStatus}
                    />
                    <NearMemberToggle 
                        setNearMemberToggleStatus={setNearMemberToggleStatus}
                    />
                    <ApproveMemberToggle 
                        setApproveMemberToggleStatus={setApproveMemberToggleStatus}
                    />
                    <WithPhotoToggle 
                        setHasPhotoMemberToggleStatus={setHasPhotoMemberToggleStatus}
                    />
                    <NonePhotoToggle 
                        setHasNotPhotoMemberToggleStatus={setHasNotPhotoMemberToggleStatus}
                    />
                    <div className={styles.matchesEpisode}>
                        <div className={styles.listButton} onClick={() => window.location = '/search/detail'}>
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="black"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    >
                                    <line x1="8" y1="6" x2="21" y2="6" />
                                    <line x1="8" y1="12" x2="21" y2="12" />
                                    <line x1="8" y1="18" x2="21" y2="18" />
                                    <circle cx="3" cy="6" r="1" />
                                    <circle cx="3" cy="12" r="1" />
                                    <circle cx="3" cy="18" r="1" />
                                </svg>
                            </div>
                            <label>LİSTE</label>
                        </div>
                        <div className={styles.matchButton}>
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="black"
                                    >
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
                                            2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09 
                                            C13.09 3.81 14.76 3 16.5 3 
                                            19.58 3 22 5.42 22 8.5 
                                            c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                                </svg>
                            </div>
                            <label>EŞLEŞ</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FilterWithToggleEpisode;