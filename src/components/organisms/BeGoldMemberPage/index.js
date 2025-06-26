import React, { useEffect, useState } from "react";
import styles from './Index.module.css';
import TopBanner from "../../molecules/TopBanner";
import FooterBanner from "../../molecules/FooterBanner";
import ToastMessage from "../../molecules/TostMessage";

const BeGoldMemberPage = ({
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
    const [code, setCode] = useState();

    const generateHavaleKodu = () => {
        const now = Date.now(); // Unix timestamp (ms)
        const random = Math.floor(Math.random() * 100000); // 5 basamaklı rastgele sayı
        return `HV${now}${random}`;
      };

    useEffect(() => {
        const code = generateHavaleKodu();
        setCode(code);
    },[]);

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

    const bankData = [
        {
          name: 'Yapı Kredi Bankası',
          branch: '1009',
          account: '5698526588',
          iban: 'TR88 3255 0000 5885 1000 8698 10',
          logo: '/yapıkredi.png',
        },
        {
          name: 'Türkiye İş Bankası',
          branch: '1009',
          account: '5698526588',
          iban: 'TR88 3255 0000 5885 1000 8698 10',
          logo: '/is_bankasi.png',
        },
        {
          name: 'Ziraat Bankası',
          branch: '1009',
          account: '5698526588',
          iban: 'TR88 3255 0000 5885 1000 8698 10',
          logo: '/zirat.jpg',
        },
        {
            name: 'Ziraat Bankası',
            branch: '1009',
            account: '5698526588',
            iban: 'TR88 3255 0000 5885 1000 8698 10',
            logo: '/zirat.jpg',
        },
        {
            name: 'Ziraat Bankası',
            branch: '1009',
            account: '5698526588',
            iban: 'TR88 3255 0000 5885 1000 8698 10',
            logo: '/zirat.jpg',
        },
        // Daha fazla banka ekleyebilirsin
    ];

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
                <div style={{ display: "flex", marginBottom: '20px'}}>
                    <label>Havale Kodunuz: </label>
                    <label style={{ color: 'red', marginLeft: '10px'}}> {code} </label>
                </div>
                <h3 className={styles.recipient}>ALICI: Mint Bilgi Teknolojileri Tic. Ltd. Şti</h3>
                
                <div className={styles.cardContainer}>
                    <div className={styles.bankGrid}>
                        {bankData.map((bank, index) => (
                            <div key={index} className={styles.bankCard}>
                                <img src={bank.logo} alt={bank.name} className={styles.bankLogo} />
                                <p>{bank.name}</p>
                                <p><strong>Şube No:</strong> {bank.branch}</p>
                                <p><strong>Hesap No:</strong> {bank.account}</p>
                                <p><strong>IBAN:</strong> {bank.iban}</p>
                            </div>
                        ))}
                    </div>
                    <div className={styles.codeHeader}>
                        <div className={styles.summaryBox}>
                            <h4>Hesap Özeti</h4>
                            <p>6 Aylık Altın Üyelik — 1194 TL</p>
                            <p><strong>Toplam:</strong> 1194 TL</p>
                            <button className={styles.confirmButton} onClick={() => window.location = '/payment-form'}>Ödemeyi Onayladım</button>
                        </div>
                    </div>
                </div>

                <div className={styles.infoBox}>
                    <h4>Bilmeniz Gerekenler</h4>
                    <ul>
                        <li>Kredi kartı bilgileriniz kesinlikle kaydedilemez.</li>
                        <li>Üyeliğiniz asla yenilenmez ve geçiştiril bahanelerle tekrar tahsilat yapılmaz.</li>
                        <li>Tüm bankaların kredi kartları geçerlidir.</li>
                        <li>Altın üyeliğiniz ödemeniz yapıldığında anında açılır.</li>
                        <li>
                            Bu harcamanız kredi kartı ekstrenizde <em>"Mint Bilgi Teknolojileri Tic. Ltd. Şti."</em> olarak gözükür.
                        </li>
                        <li>Ödemeler tek çekim yapılır, taksit imkanı bulunmamaktadır.</li>
                        <li>Güvenlik kodu kartınızın arkasındaki 3 haneli numaradır.</li>
                    </ul>
                </div>
            </div>
            <FooterBanner/>
        </>
    )
}
export default BeGoldMemberPage;