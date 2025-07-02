import React, { useEffect, useState } from "react";
import styles from './Index.module.css';
import TopBanner from "../../molecules/TopBanner";
import FooterBanner from "../../molecules/FooterBanner";
import ToastMessage from "../../molecules/TostMessage";

const PaymentFormPage = ({
    getUserMe = () => {},
    userLogout = () => {},
    getNotifications = () => {},
    notifications = {},
    userMe = {},
    userMeLoading = false,
    notificationIsLoading = false,
    isLoading = false,
    createPayment = () => {},
    resetCreatePaymentComplete = () => {},
    paymentComplete = false
}) => {
    const [userMeVisible, setUserMeVisible] = useState(false);
    const [successMessageVisible, setSuccessMessageVisible] = useState(false);

    const [email, setEmail]  = useState();
    const [name, setName] = useState();
    const [surname, setSurname] = useState();
    const [senderBank, setSenderBank] = useState();
    const [buyerBank, setBuyerBank] = useState();
    const [paymentDate, setPaymentDate] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();

    useEffect(() => {
        if(paymentComplete) {
            setSuccessMessageVisible(true);
        }
    },[paymentComplete]);

    useEffect(() => {
        if(!userMeLoading) {
            setUserMeVisible(true);
        }
    },[userMeLoading]);

    useEffect(() => {
        getUserMe();
        getNotifications({ read: false });
        resetCreatePaymentComplete();
    },[]);

    const submitOnClick = () => {
        if(!email) {
            alert('lütfen Email Girin!')
        }
        if(!name) {
            alert('lütfen İsim Girin!')
        }
        if(!surname) {
            alert('lütfen Soyisim Girin!')
        }
        if(!senderBank) {
            alert('lütfen Gönderici Banka Girin!')
        }
        if(!buyerBank) {
            alert('lütfen Alıcı Banka Girin!')
        }
        if(!paymentDate) {
            alert('lütfen Ödeme Tarihi Girin!')
        }
        if(!price) {
            alert('lütfen Fiyat Girin!')
        }

        const data = new FormData();
        data.append('email', email);
        data.append('name', name);
        data.append('surname', surname);
        data.append('sender_bank', senderBank);
        data.append('buyer_bank', buyerBank);
        data.append('payment_date', paymentDate);
        data.append('price', price);
        data.append('code', description);
        data.append('description', description);

        createPayment({
            formData: data
        });

        setSuccessMessageVisible(true);
        window.location = '/home';
    }

    return (
        <>
            {successMessageVisible && (
                <>
                    <ToastMessage message="Başarılı Bir Şekilde Gönderildi"/>
                </>
            )}
            <TopBanner
                onlineMemberCount={userMe?.online_member_count}
                messageCount={userMe?.message_count}
                profileVisible={userMeVisible}
                userLogout={userLogout}
                notifications={notifications}
                notificationIsLoading={notificationIsLoading}
            />
            <div className={styles?.frame}>
                <div className={styles.headerTextEpisode}>
                    <h1>Havale/Eft Ödeme</h1>
                </div>
                
                <div className={styles.codeHeader}>
                    <div style={{ display: 'block'}}>
                        <div className={styles.codeBox}>
                            <ul>
                            <li>Ödemenizi banka aracılığıyla yapacaksanız havale kodunuzu açıklama kısmına yazınız</li>
                            <li>
                                Havale açıklaması bölümüne havale kodunuzu belirtmeyi unutmayın. Profil sayfasının sağ alt köşesinden
                                ödeme formu linkine tıklayarak formu doldurup bize iletmeniz yeterli olacaktır.
                            </li>
                            <li>Ödemeniz hesabımıza ulaştığında satın aldığınız üyelikler aktif hale gelecektir.</li>
                            </ul>
                        </div>
                        <div className={styles.formContainer}>
                            <div className={styles.formGroup}>
                                <label>Email</label>
                                <input
                                    placeholder="Email"
                                    onChange={(e) => setEmail(e?.target?.value)}
                                    className={styles.input}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label>İsim</label>
                                <input
                                    placeholder="İsim"
                                    onChange={(e) => setName(e?.target?.value)}
                                    className={styles.input}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Soyisim</label>
                                <input
                                    placeholder="Soyisim"
                                    onChange={(e) => setSurname(e?.target?.value)}
                                    className={styles.input}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Gönderici Banka</label>
                                <input
                                    placeholder="Gönderici Banka"
                                    onChange={(e) => setSenderBank(e?.target?.value)}
                                    className={styles.input}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Alıcı Banka</label>
                                <input
                                    placeholder="Alıcı Banka"
                                    onChange={(e) => setBuyerBank(e?.target?.value)}
                                    className={styles.input}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Ödeme Tarihi</label>
                                <input
								    type="date"
								    id="paymentDate"
								    value={paymentDate}
								    onFocus={(e) => e.target.type = 'date'}
								    onBlur={(e) => !e.target.value && (e.target.type = 'text')}
								    onChange={(e) => setPaymentDate(e.target.value)}
								    placeholder="Ödeme Tarihi"
								/>
                            </div>
                            <div className={styles.formGroup}>
                                <label>Tutar</label>
                                <input
                                    placeholder="Tutar"
                                    onChange={(e) => setPrice(e?.target?.value)}
                                    className={styles.input}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Havale Kodu</label>
                                <input
                                    placeholder="Açıklama"
                                    onChange={(e) => setDescription(e?.target?.value)}
                                    className={styles.input}
                                />
                            </div>
                            <div className={styles.saveButton}>
                                    <button
                                        onClick={submitOnClick}
                                        disabled={isLoading}
                                        style={{
                                            width: '120px',
                                            height: '50px',
                                        }}
                                    >
                                        {isLoading ? 'Gönderiliyor' : 'Gönder'}
                                    </button>
                            </div>
                        </div>
                        
                    </div>
                    {
                        //<div className={styles.summaryBox}>
                        //    <h4>Hesap Özeti</h4>
                        //    <p>6 Aylık Altın Üyelik — 1194 TL</p>
                        //    <p><strong>Toplam:</strong> 1194 TL</p>
                        //    <button className={styles.confirmButton}>Ödemeyi Onayladım</button>
                        //</div>
                    }
                </div>
            </div>
            <FooterBanner/>
        </>
    )
}
export default PaymentFormPage;