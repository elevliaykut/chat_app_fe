import React, { useEffect, useState } from "react";
import styles from './Index.module.css';
import AdminTopBanner from "../../molecules/AdminTopBanner";
import AdminMenu from "../../molecules/AdminMenu";

const ReportsPage = ({
    userLogout = () => {},
    getUserReports = () => {},
    isLoading = false,
    error = false,
    userReports = [],
    adminApproveReportComplete = false,
    adminApproveReport = () => {},
    adminApproveReportReset = () => {},
}) => {
    const [reportVisible, setReportVisible] = useState(false);

    useEffect(() => {
        if(!isLoading) {
            setReportVisible(true);
        }
    },[]);
    
    useEffect(() => {
        getUserReports();
    },[]);

    const handleDetailClick = reportId => {
        adminApproveReport({ reportId: reportId });
    };

    useEffect(() => {
        if(adminApproveReportComplete) {
            adminApproveReportReset();
            window.location = '/reports';
        }
    },[adminApproveReportComplete]);

    return (
        <>
            <AdminTopBanner 
                userLogout={userLogout}
            />
            <div className={styles.frame}>
                <div className={styles.content}>
                    <AdminMenu/>
                    <div style={{ width: '80%'}}>
                        
                        {reportVisible && (
                            <>
                                <div className={styles.container}>
                                    <h1 className={styles.title}>Şikayet Formları</h1>
                                    <table className={styles.table}>
                                        <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>İsim</th>
                                            <th>Soyisim</th>
                                            <th>Şikayet Edilen Kişi İsim</th>
                                            <th>Şikayet Edilen Kişi Soyisim</th>
                                            <th>Açıklama</th>
                                            <th>Tarih</th>
                                            <th>İşlemler</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {userReports.map(report => (
                                            <tr key={report.id}>
                                                <td>{report.id}</td>
                                                <td>{report?.creator_user?.name}</td>
                                                <td>{report?.creator_user?.surname}</td>
                                                <td>{report?.user?.name}</td>
                                                <td>{report?.user?.surname}</td>
                                                <td>{report?.description}</td>
                                                <td>{report?.created_at}</td>
                                                <td>
                                                    <button
                                                        className={styles.detailButton}
                                                        onClick={() => handleDetailClick(report?.id)}
                                                    >
                                                        Sil
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
export default ReportsPage;