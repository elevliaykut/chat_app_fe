import React, { useEffect, useState } from "react";
import TopBanner from "../../molecules/TopBanner";
import styles from './Index.module.css';
import FooterBanner from "../../molecules/FooterBanner";

const PaymentPage = ({
    getUserMe = () => {},
    userLogout = () => {},
    getNotifications = () => {},
    notifications = {},
    userMe = {},
    userMeLoading = false,
    notificationIsLoading = false
}) => {

    const [userMeVisible, setUserMeVisible]             = useState(false);
    const [creditCardVisible, setCreditCardVisible]     = useState(true);
    const [fastVisible, setFastVisible]                 = useState(false);

    useEffect(() => {
        if(!userMeLoading) {
            setUserMeVisible(true);
        }
    },[userMeLoading]);

    useEffect(() => {
        getUserMe();
        getNotifications({ read: false });
    },[]);

    const packagesForCreditCard = [
        {
          icon: '🚀',
          title: '1 AYLIK',
          price: '749',
          monthly: '/Ay',
          total: 'Toplam 749₺',
          features: ['7/24 Sınırsız Mesajlaşma', 'Üyelerle Sınırsız Etkileşim'],
        },
        {
          icon: '🎗',
          title: '6 AYLIK',
          price: '2194',
          monthly: '/Ay',
          total: 'Toplam ~2794₺~ Yerine 2194₺',
          features: ['7/24 Sınırsız Mesajlaşma', 'Üyelerle Sınırsız Etkileşim'],
          highlight: true,
        },
        {
          icon: '💎',
          title: '3 AYLIK',
          price: '1897',
          monthly: '/Ay',
          total: 'Toplam 1897₺',
          features: ['7/24 Sınırsız Mesajlaşma', 'Üyelerle Sınırsız Etkileşim'],
        },
    ];

    const packagesForFast = [
        {
          icon: '🚀',
          title: '1 AYLIK',
          price: '549',
          monthly: '/Ay',
          total: 'Toplam 549₺',
          features: ['7/24 Sınırsız Mesajlaşma', 'Üyelerle Sınırsız Etkileşim'],
        },
        {
          icon: '🎗',
          title: '6 AYLIK',
          price: '199',
          monthly: '/Ay',
          total: 'Toplam ~1794₺ ~ Yerine 199₺',
          features: ['7/24 Sınırsız Mesajlaşma', 'Üyelerle Sınırsız Etkileşim'],
          highlight: true,
        },
        {
          icon: '💎',
          title: '3 AYLIK',
          price: '299',
          monthly: '/Ay',
          total: 'Toplam 299₺',
          features: ['7/24 Sınırsız Mesajlaşma', 'Üyelerle Sınırsız Etkileşim'],
        },
    ];

    const creditButtonOnClick = () => {
        setFastVisible(false);
        setCreditCardVisible(true);
    }

    const fastButtonOnClick = () => {
        setFastVisible(true);
        setCreditCardVisible(false);
    }

    return (
        <>
            <TopBanner
                onlineMemberCount={userMe?.online_member_count}
                messageCount={userMe?.message_count}
                profileVisible={userMeVisible}
                userLogout={userLogout}
                notifications={notifications}
                notificationIsLoading={notificationIsLoading}
            />

            <div className={styles?.frame}>
                <div className={styles.container}>
                    <h2 className={styles.title}>Altın Üyelik Satın Al</h2>
                    <p className={styles.subtitle}>Ödeme yönteminizi ve paketlerinizi seçerek ödeme yapabilirsiniz.</p>

                    <div className={styles.tabs}>
                        <div className={styles.tab} onClick={creditButtonOnClick}>Kredi Kartı</div>
                        <div className={styles.tab} onClick={fastButtonOnClick}>Banka Transferi</div>
                        <div className={styles.tab}>Cep Telefonu</div>
                    </div>

                    {creditCardVisible && (
                        <>
                            <div className={styles.cards}>
                                {packagesForCreditCard.map((pkg, idx) => (
                                    <div
                                        key={idx}
                                        className={`${styles.card} ${pkg.highlight ? styles.highlight : ''}`}
                                    >
                                        <div className={styles.icon}>{pkg?.icon}</div>
                                        <h3>{pkg.title}</h3>
                                        <div className={styles.price}>
                                            {pkg.price}₺
                                            <span>{pkg.monthly}</span>
                                        </div>
                                        <p className={styles.total}>{pkg.total}</p>
                                        <ul className={styles.features}>
                                            {pkg.features.map((feat, i) => (
                                                <li key={i}>{feat}</li>
                                            ))}
                                        </ul>
                                        <button className={styles.button}>Paketi Seç</button>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}

                    {fastVisible && (
                        <>
                            <div className={styles.cards}>
                                {packagesForFast.map((pkg, idx) => (
                                    <div
                                        key={idx}
                                        className={`${styles.card} ${pkg.highlight ? styles.highlight : ''}`}
                                    >
                                        <div className={styles.icon}>{pkg?.icon}</div>
                                        <h3>{pkg.title}</h3>
                                        <div className={styles.price}>
                                            {pkg.price}₺
                                            <span>{pkg.monthly}</span>
                                        </div>
                                        <p className={styles.total}>{pkg.total}</p>
                                        <ul className={styles.features}>
                                            {pkg.features.map((feat, i) => (
                                                <li key={i}>{feat}</li>
                                            ))}
                                        </ul>
                                        <button className={styles.button} 
                                            onClick={() => window.location = '/be-gold-member?price=' + pkg?.price + '&packageName=' + pkg?.title}>
                                                Paketi Seç
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}

                    <p className={styles.footerNote}>
                        Kredi kartı bilgileriniz kesinlikle kayıt edilmemektedir ve sizin adınıza otomatik ödeme gerçekleştirilmemektedir. 
                        Satın alma işleminiz 256 bit şifreleme ile korunacaktır.
                    </p>

                    <div className={styles.cardsRow}>
                        <img src="/visa.png" alt="VISA" />
                        <img src="/mastercard.png" alt="MasterCard" />
                        <img src="/verified-by-visa.jpg" alt="Verified by Visa" />
                        <img src="/mastercard-securecod.jpg" alt="MasterCard SecureCode" />
                        <img src="/secure.png" alt="3D Secure" />
                    </div>
                    </div>
                </div>
                <FooterBanner/>
        </>
    )
}
export default PaymentPage;