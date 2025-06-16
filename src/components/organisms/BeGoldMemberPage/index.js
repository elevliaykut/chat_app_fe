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

    const [email, setEmail]  = useState();
    const [name, setName] = useState();
    const [surname, setSurname] = useState();
    const [senderBank, setSenderBank] = useState();
    const [buyerBank, setBuyerBank] = useState();
    const [paymentDate, setPaymentDate] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const [code, setCode] = useState();

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
        data.append('code', code);
        data.append('description', description);

        createPayment({
            formData: data
        });
    }

    const generateHavaleKodu = () => {
        const now = Date.now(); // Unix timestamp (ms)
        const random = Math.floor(Math.random() * 100000); // 5 basamaklı rastgele sayı
        return `HV${now}${random}`;
      };

    useEffect(() => {
        const code = generateHavaleKodu();
        setCode(code);
    },[]);

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
                        <div className={styles.formContainer}>
                            <div style={{ display: "flex"}}>
                                <label>Havale Kodunuz: </label>
                                <label style={{ color: 'red', marginLeft: '10px'}}> {code} </label>
                            </div>
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
                                <label>Açıklama</label>
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
                <h3 className={styles.recipient}>ALICI: Mint Bilgi Teknolojileri Tic. Ltd. Şti</h3>
                
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