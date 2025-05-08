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
    setApproveMemberToggleStatus = () => {}
}) => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.frame}>
                    <OnlineToggle setOnlineToggleIsStatus={setOnlineToggleIsStatus}/>
                    <NewMemberToggle setNewMemberIsStatus={setNewMemberIsStatus}/>
                    <NearMemberToggle setNearMemberToggleStatus={setNearMemberToggleStatus}/>
                    <ApproveMemberToggle setApproveMemberToggleStatus={setApproveMemberToggleStatus}/>
                    <WithPhotoToggle/>
                    <NonePhotoToggle/>
                </div>
            </div>
        </>
    )
}
export default FilterWithToggleEpisode;