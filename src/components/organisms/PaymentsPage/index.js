import React, { useEffect, useState } from "react";
import styles from './Index.module.css';
import AdminTopBanner from "../../molecules/AdminTopBanner";
import AdminMenu from "../../molecules/AdminMenu";

const PaymentsPage = ({
    userLogout = () => {},
    adminGetPayments = () => {},
    isLoading = false,
    error = false,
    adminPayments = [],
    adminApprovePaymentComplete = false,
    adminApprovePayment = () => {},
    adminApprovePaymentReset = () => {},
}) => {
    const [paymentVisible, setPaymentVisible] = useState(false);

    useEffect(() => {
        if(!isLoading) {
            setPaymentVisible(true);
        }
    },[]);
    
    useEffect(() => {
        adminGetPayments();
    },[]);

    const handleDetailClick = paymentId => {
        adminApprovePayment({ paymentId: paymentId });
    };

    useEffect(() => {
        if(adminApprovePaymentComplete) {
            adminApprovePaymentReset();
            window.location = '/payments';
        }
    },[adminApprovePaymentComplete]);

    return (
        <>
            <AdminTopBanner 
                userLogout={userLogout}
            />
            <div className={styles.frame}>
                <div className={styles.content}>
                    <AdminMenu/>
                    <div style={{ width: '80%'}}>
                        
                        {paymentVisible && (
                            <>
                                <div className={styles.container}>
                                    <h1 className={styles.title}>Ödeme Formları</h1>
                                    <table className={styles.table}>
                                        <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Email</th>
                                            <th>İsim</th>
                                            <th>Soyisim</th>
                                            <th>Gönderici Banka</th>
                                            <th>Alıcı Banka</th>
                                            <th>Ödeme Tarihi</th>
                                            <th>Fiyat</th>
                                            <th>Açıklama</th>
                                            <th>Kod</th>
                                            <th>Ödeme Durumu</th>
                                            <th>Tarih</th>
                                            <th>İşlemler</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {adminPayments.map(payment => (
                                            <tr key={payment.id}>
                                                <td>{payment.id}</td>
                                                <td>{payment?.email}</td>
                                                <td>{payment?.name}</td>
                                                <td>{payment?.surname}</td>
                                                <td>{payment?.sender_bank}</td>
                                                <td>{payment?.buyer_bank}</td>
                                                <td>{payment?.payment_date}</td>
                                                <td>{payment?.price}</td>
                                                <td>{payment?.description}</td>
                                                <td>{payment?.code}</td>
                                                <td>{payment?.completed ? 'Onaylanmış' : 'Onay Bekliyor'}</td>
                                                <td>{payment?.created_at}</td>
                                                <td>
                                                    <button
                                                        className={styles.detailButton}
                                                        onClick={() => handleDetailClick(payment?.id)}
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
export default PaymentsPage;