import React, { useEffect, useState } from "react";
import styles from './Index.module.css';
import TopBanner from "../../molecules/TopBanner";
import FooterBanner from "../../molecules/FooterBanner";

const HelpPage = ({
    getUserMe = () => {},
    userLogout = () => {},
    getNotifications = () => {},
    notifications = {},
    userMe = {},
    userMeLoading = false,
    notificationIsLoading = false
}) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [generalAccordionVisible, setGeneralAccordionVisible] = useState(false);
    const [paymentAccordionVisible, setPaymentAccordionVisible] = useState(true);
    const [memberShipAccordionVisible, setMemberShipAccordionVisible] = useState(false);
    const [photoAccordionVisible, setPhotoAccordionVisible] = useState(false);
    const [activeMenu, setActiveMenu] = useState("payment");
    const [userMeVisible, setUserMeVisible] = useState(false);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    
    useEffect(() => {
        if(!userMeLoading) {
            setUserMeVisible(true);
        }
    },[userMeLoading]);

    useEffect(() => {
        getUserMe();
        getNotifications({ read: false });
    },[]);

    const paymentData = [
        {
            question: 'Yurt dışında yaşıyorum nasıl ödeme yapabilirim?',
            answer: '- Yurt dışında yaşayan üyelerimiz masaüstü bir bilgisayardan profillerine giriş yaparak kredi kartıyla ödeme yapabilir veya TR’de yaşayan bir yakını Bikalp.com’ un banka hesaplarından birine havale ya da eft yapabilir.',
        },
        {
          question: 'Nasıl ödeme yapabilirim ?',
          answer: '- Ödemenizi banka havalesi veya kredi kartınız yapabilirsiniz.',
        },
        {
          question: 'Ödemeyi yaptıktan sonra altın üyeliğim ne zaman açılır ?',
          answer: '- Ödemeniz başarı ile gerçekleşmiş ise Altın üyeliğiniz mesai saatleri içerisinde en geç 2-3 saatlik bir zaman diliminde açılacaktır.',
        },
        {
          question: 'Havale kodu ne işe yarar?',
          answer: '- Havale kodu, üyelerimizden gelen ödemeleri birbirinden ayırmamızı sağlar. Ödemenin hangi kullanıcı tarafından yapıldığını belirler.Havale/eft/fast ödemelerinizde mutlaka Havale kodu açıklama bölümüne yazmanız gerekmektedir.',
        },
        {
          question: 'Kredi kartı ile ödeme yapacağım,ancak güvenemiyorum.',
          answer: '- Sitemizde online pos kullanılmaktadır. Üyelikler anında açılmaktadır. Üyelerin kredi kartı bilgileri kaydedilmektedir.Bununla birlikte SSL güvenlik sertifikamız mevcuttur.',
        },
        {
            question: 'Kredi kartı ile ödeme yaptığımda ,her ay otomatik çekim yapılırmı ?',
            answer: '- Sitemizde abonelikler için ödeme sonrasında otomatik çekim yapılmamaktadır.',
        },
        {
            question: 'Güvenlik Kodu nedir ?',
            answer: '- Güvenlik kodu kredi kartınızın arkasındaki numaraların son üç hanesidir.',
        },
        {
            question: 'ATM den ödeme yapabilir miyim ?',
            answer: '- Eğer bizim çalıştığımız bankalara ait bir bankamatik kartınız varsa ödemenizi bankamatiklerden 7/24 yapabilirsiniz. Havale kodu yazmanıza gerek yoktur. Ödeme yaptıktan sonra sayfanın en altında bulunan Ödeme bilgisi linkini kullanarak formu eksiksiz doldurup bize gönderin 2-3 saat içinde altın üyeliğiniz başlatılır.',
        },
    ];

    const photoData = [
        {
            question: 'Fotoğraflarım neden reddediliyor ?',
            answer: (
                <>
                    Eklediğiniz fotoğraflar editörlerimiz tarafından uygun bulunmamış olabilir. Bunun sebebi aşağıdakilerden biri/birileri olabilir
                    <br></br>
                    <ul>
                        <li>Yüzünüzün net olarak gözükmediği fotoğraflar ( uzak, çok yakın, bulanık, yarım)</li>
                        <li>Kendinize ait olmayan sahte fotoğraflar,* Olumsuz örnek oluşturabilecek fotoğraflar ( sigara, alkol, silah, bıçak vs.)</li>
                        <li>Güncellikten uzak eski fotoğraflar,* Dekolte içeren fotoğraflar (Erkeklerde bel üstü çıplaklığı , kadınlarda etek boyu, yaka dekoltesi)</li>
                        <li>Fotoğrafta iki kişiden fazlasının bulunması,</li>
                        <li>Cinsel çağrışımı olan tüm fotoğraflar,</li>
                        <li>Resmi kurum ve kuruluşlara ait üniformalı fotoğraflar,</li>
                        <li>Herhangi bir marka reklamı olabilecek fotoğraflar,</li>
                        <li>Siyasi içerikli fotoğraflar,</li>
                    </ul>
                </>
            )
        },
        {
            question: 'Fotoğrafımı nasıl ekleyebilirim kaldırabilirim ?',
            answer: `- Kişisel Ayarlarınız kısmında yer alan Fotoğraf Düzenle bölümünden ekleyebilir veya kaldırabilirsiniz.`,
        },
    ];

    const memberShipData = [
        {
            question: 'Hangi olumsuz durumlarda bir üyeyi şikayet etmeliyim ?',
            answer: (
                <>
                    Bikalp.com  ’da hoşunuza gitmeyen bir durumla karşılaştığınızda her zaman destek birimimiz ile iletişime geçebilirsiniz. Ancak özellikle aşağıdaki durumlarda mutlaka bize bilgi vermenizi rica ederiz:
                    <br></br>
                    <ul>
                        <li>Evli olduğunu düşündüğünüz üyeler,</li>
                        <li>Gönderdiği mesajın içeriği genel ahlak kuralları dışında olan üyeler,</li>
                        <li>Reklam içerikli mesaj gönderenler,</li>
                        <li>Sizden maddi talepte bulunan üyeler,</li>
                        <li>Profilinde kendine ait olmayan fotoğrafları kullananlar.</li>
                        <li>Bu tür üyelerle karşılaştığınızda öncelikle üyenin profil sayfasındaki Şikayet et düğmesini kullanıp bize detaylı olarak şikayetinizi iletebilirsiniz. Tüm şikayetler değerlendirilmektedir.</li>
                    </ul>
                </>
            )
        },
        {
            question: 'Gold üyelik nedir ?',
            answer: `Bikalp.com ’ a üye olmak ücretsizdir.
                    Profili onaylanan her üye standart üye haklarına sahip olur. Bu haklar; ücretsiz profil oluşturmak, profiline fotoğraf eklemek, karakter analiz testinden faydalanmak, diğer üyelerin
                    profillerini görüntülemek ve favori seçmekten oluşmaktadır.Eğer diğer üyelerle iletişim kurmak, mesaj ve göz kırpma göndermek, durum güncellemesi paylaşmak, sohbet uygulamasından
                    faydalanmak isterseniz Gold üye olmanız gerekir.`,
        },
        {
            question: 'Bir üyeyi nasıl engellerim  ?',
            answer: '- Sizinle iletişim kurmasını istemediğiniz üyenin profiline gelerek “Kullanıcıyı Engelle” seçeneğini işaretlemelisiniz. Bu durumda size mesaj ve gülümseme gönderemeyeceklerdir.Engellemiş olduğunuz kullanıcılar profilinizi görüntüleyebilirler ancak sizinle iletişime geçemezler.',
        },
        {
            question: 'Kimler tarafından engellendiğimi görebilir miyim ?',
            answer: '- Gizlilik nedeni ile sizi engelleyen üyeleri göremezsiniz. Bu bilgi tamamen saklı tutulmaktadır.',
        },
        {
            question: 'Kullanıcılar neden bloke ediliyor ?',
            answer: '- Sistemde bloke edilen kullanıcılar evlilik niyeti olmayan, sizlerin şikayetleriyle engellenen ya da uygunsuz mesaj gönderen kullanıcılar olmaktadır. Sistemden tarafımızca uzaklaştırılmaktadırlar.',
        },
        {
            question: 'Profiliniz engellenmiştir uyarısı aldığımda ne yapmalıyım ?',
            answer: '- Profiliniz bloke edildiğinde Müşteri Hizmetlerimiz ile irtibata geçmeniz gerekmektedir.',
        },
        {
            question: 'Üyeliğimi iptal etmek istiyorum; ne yapmalıyım ?',
            answer: `- Masa üstü kullanıyorsanız Hesap/Görünürlük alanından “Üyelik İptali” yapabilirsiniz.Unutmayın, üyelik silmenin geri dönüşü yoktur.
                Tüm mesajlarınız, göz kırpmalarınız, favorileriniz (yani size dair her şey) silineceği için yeni bir üyelik yaratsanız dahi hiçbirine tekrar ulaşmanız mümkün olmayacaktır.`,
        },
        {
            question: 'Üyeliğim silindiğinde fotoğraflarım görünür mü ?',
            answer: `- Üyelik silindiğinde profilinizdeki fotoğraflarınız da silinmektedir.`,
        },
        {
            question: 'Üyelik dondurma var mı ?',
            answer: `- Sistemde üyelik dondurmak mümkün olmamaktadır. Üyeliğiniz silindiğinde gold üyeliğiniz de sonlanmaktadır. Silinen üyeliklerin tekrar açılması mümkün olmamaktadır.`,
        },
        {
            question: 'Eski üyeliğimi aktif hale getirebilir miyim?',
            answer: `- Silinen üyelikler tekrar geri aktif edilememektedir.`,
        },
    ];

    const generalData = [
        {
          question: 'Kullanıcı adımı değiştirebilir miyim ?',
          answer: '- Sitemizde rumuz değişikliği yapılmamaktadır.',
        },
        {
          question: 'Yaş değişikliği yapamıyorum.',
          answer: '- Sitemizde yaş değişikliği yapılmamaktadır. Bir defaya mahsus olmak üzere müşteri hizmetlerine mail atarak talepte bulunabilirsiniz.',
        },
        {
          question: 'Profil yazım neden kabul edilmiyor ,siliniyor ?',
          answer: '- Profilinizde yayınlanmasını istediğiniz yazı editörlerimiz tarafından onaylandıktan sonra yayınlanmaktadır. Bu suretle editörlerimiz tarafından uygun bulunmayan veya iletişim bilgileri içeren yazılarınız kabul edilmemektedir.',
        },
        {
          question: 'Profilimi kimler görebiliyor?',
          answer: '- Profilinizi engellemediğiniz tüm üyeler görebilmektedir.',
        },
        {
            question: 'Gönderdiğim mesajlar karşı tarafa ne zaman iletiliyor ?',
            answer: '-Mesajınız karşı tarafa Gönder düğmesine tıkladığınız anda anında iletilir.',
        },
        {
            question: 'Mesajlaştığım bir üyenin mesajları duruyor ama profilini göremiyorum. Neden ?',
            answer: '- Bu durumda mesajlaştığınız üye Bikalp.com üyeliğini sonlandırmıştır.',
        },
        {
            question: 'Mesajlaştığım bir üyenin mesajları ve profili silinmiş. Neden ?',
            answer: '- Bu durum üyenin profilinin veya gönderdiği mesajların, Bikalp.com’ un kurallarına uygun bulunmadığı için üyeliğinin silinmiş olduğu anlamına gelebilmektedir.',
        },
        {
            question: 'Mesajlar nasıl silinir ?',
            answer: '- Silmek istediğiniz mesajı sağ üst köşesinde üç cizgiye tıklayıp açılan menüden silme işlemi yapabilirsiniz. Sistemde toplu mesaj silme işlemi yapılamamaktadır.',
        },
        {
            question: 'Profilimi favorisine alanlara müdahale edebilir miyim ?',
            answer: '- Favori listesi kişiye özel olup, kontrolü favori seçen kullanıcıya aittir.',
        },
    ];

    const paymentOnClick = () => {
        setActiveMenu("payment");
        setGeneralAccordionVisible(false);
        setPaymentAccordionVisible(true);
        setMemberShipAccordionVisible(false);
        setPhotoAccordionVisible(false);
    }

    const generalOnClick = () => {
        setActiveMenu("general");
        setGeneralAccordionVisible(true);
        setPaymentAccordionVisible(false);
        setMemberShipAccordionVisible(false);
        setPhotoAccordionVisible(false);
    }

    const memberOnClick = () => {
        setActiveMenu("member");
        setGeneralAccordionVisible(false);
        setPaymentAccordionVisible(false);
        setMemberShipAccordionVisible(true);
        setPhotoAccordionVisible(false);
    }

    const photoOnClick = () => {
        setActiveMenu("photo");
        setGeneralAccordionVisible(false);
        setPaymentAccordionVisible(false);
        setMemberShipAccordionVisible(false);
        setPhotoAccordionVisible(true);
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
                <div className={styles.headerTextEpisode}>
                    <h1>Yardım</h1>
                    <h2>Yardım almak istediğiniz konuyu arattırabilir ya da aşağıdaki konu başlıklarından ulaşabilirsiniz.</h2>
                </div>
                <div className={styles.wrapper}>
                    <aside className={styles.sidebar}>
                        <ul className={styles.menuList}>
                            <li className={`${styles.menuItem} ${activeMenu === "payment" ? styles.active : ""}`} onClick={paymentOnClick}>Ödemeler</li>
                            <li className={`${styles.menuItem} ${activeMenu === "general" ? styles.active : ""}`} onClick={generalOnClick}>Genel</li>
                            <li className={`${styles.menuItem} ${activeMenu === "member" ? styles.active : ""}`} onClick={memberOnClick}>Üyelik</li>
                            <li className={`${styles.menuItem} ${activeMenu === "photo" ? styles.active : ""}`} onClick={photoOnClick}>Fotoğraflar</li>
                        </ul>
                    </aside>

                        <main className={styles.content}>
                        
                            {generalAccordionVisible && (
                                <>
                                    <div className={styles.container}>
                                        <div className={styles.accordion}>
                                            {generalData.map((item, index) => (
                                                <div key={index} className={styles.item}>
                                                    <div className={styles.question} onClick={() => toggleAccordion(index)}>
                                                    {item.question}
                                                    <span className={styles.icon}>{activeIndex === index ? '-' : '+'}</span>
                                                    </div>
                                                    {activeIndex === index && (
                                                    <div className={styles.answer}>
                                                        {item.answer}
                                                    </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )}

                            {paymentAccordionVisible && (
                                <>
                                    <div className={styles.container}>
                                        <div className={styles.accordion}>
                                            {paymentData.map((item, index) => (
                                                <div key={index} className={styles.item}>
                                                    <div className={styles.question} onClick={() => toggleAccordion(index)}>
                                                    {item.question}
                                                    <span className={styles.icon}>{activeIndex === index ? '-' : '+'}</span>
                                                    </div>
                                                    {activeIndex === index && (
                                                    <div className={styles.answer}>
                                                        {item.answer}
                                                    </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )}

                            {memberShipAccordionVisible && (
                                <>
                                    <div className={styles.container}>
                                        <div className={styles.accordion}>
                                            {memberShipData.map((item, index) => (
                                                <div key={index} className={styles.item}>
                                                    <div className={styles.question} onClick={() => toggleAccordion(index)}>
                                                    {item.question}
                                                    <span className={styles.icon}>{activeIndex === index ? '-' : '+'}</span>
                                                    </div>
                                                    {activeIndex === index && (
                                                    <div className={styles.answer}>
                                                        {item.answer}
                                                    </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )}

                            {photoAccordionVisible && (
                                <>
                                    <div className={styles.container}>
                                        <div className={styles.accordion}>
                                            {photoData.map((item, index) => (
                                                <div key={index} className={styles.item}>
                                                    <div className={styles.question} onClick={() => toggleAccordion(index)}>
                                                    {item.question}
                                                    <span className={styles.icon}>{activeIndex === index ? '-' : '+'}</span>
                                                    </div>
                                                    {activeIndex === index && (
                                                    <div className={styles.answer}>
                                                        {item.answer}
                                                    </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )}
                            
                        </main>
                    </div>
                </div>
                <FooterBanner/>
        </>
    )
}
export default HelpPage;