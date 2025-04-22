import React from "react";
import styles from './Index.module.css';
import OnlineToggle from "../OnlineToggle";
import NewMemberToggle from "../NewMemberToggle";
import NearMemberToggle from "../NearMemberToggle";
import ApproveMemberToggle from "../ApproveMemberToggle";
import WithPhotoToggle from "../WithPhotoToggle";
import NonePhotoToggle from "../NonePhotoToggle";

const FilterWithToggleEpisode = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.frame}>
                    <OnlineToggle/>
                    <NewMemberToggle/>
                    <NearMemberToggle/>
                    <ApproveMemberToggle/>
                    <WithPhotoToggle/>
                    <NonePhotoToggle/>
                </div>
            </div>
        </>
    )
}
export default FilterWithToggleEpisode;