import React from "react";
import styles from './Index.module.css';
import TopBanner from "../../molecules/TopBanner";

const MemberDetailsPage = ({
    isLoading = false,
    error = null,
    getMemberDetails = () => {},
    memberId = ''
}) => {
    return (
        <>
            <TopBanner/>
            {memberId}
        </>
    )
}
export default MemberDetailsPage;