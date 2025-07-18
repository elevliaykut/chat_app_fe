import React, { useEffect, useState } from "react";
import styles from './Index.module.css';
import TopBanner from "../../molecules/TopBanner";
import Footer from "../../molecules/Footer";

const AboutPage = () => {
    return (
        <>
            {
                //<TopBanner
                //    onlineMemberCount={userMe?.online_member_count}
                //    messageCount={userMe?.message_count}
                //    profileVisible={userMeVisible}
                //    userLogout={userLogout}
                //    notifications={notifications}
                //    notificationIsLoading={notificationIsLoading}
                ///>
            }
            <div className={styles.frame}>
                <label className={styles.title}>Hoş Geldiniz!</label>
                <label className={styles.title}>Bikalp , Evlilik Yolunda Adım Adım...</label>
                <label className={styles.title}>Bikalp olarak,  uygun ve sağlam ilişkiler kurmanızı sağlamak için tasarlanmış bir online platformdur. Bikalp 'de hayatınızın aşkını bulabilir ve evlilik yolunda ciddi adımlar atabilirsiniz.</label>
                <label className={styles.title}>Hadi, durmayın, siz de aramıza katılın ve hayallerinizi süsleyen o kişiyi bulun!</label>
                <label className={styles.title}>Biz Kimiz?</label>
                <label className={styles.description}>Bikalp ekibi, evlilik yolculuğunuzda sizinle birlikte ilerleyen tutkulu bir grubuz. Her geçen gün onlarca yeni üye ile daha da büyüyoruz. Tutkulu, deneyimli ve evliliğe inanan bir ekibiz.</label>
                <label className={styles.title}>Misyonumuz ve Vizyonumuz</label>
                <label className={styles.description}>Misyonumuz, kullanıcılarımıza İslami değerlere uygun, sağlam ve tatmin edici bir evlilik deneyimi sunmaktır. Değerlerimizi temel alarak, kullanıcılarımızın mutluluğunu desteklemek en önemli hedefimizdir. Vizyonumuz ise, her insanın mutlu ve huzurlu bir evlilik hayatına sahip olabilmesini sağlamaktır.</label>
                <label className={styles.title}>Değerlerimiz</label>
                <label className={styles.description}>Değerlerimiz, platformumuzun temelini oluşturur ve her kararımızı şekillendirir. Allah'a inanç, dürüstlük, saygı, empati ve aile değerleri gibi çekirdek değerleridir. Bu değerler doğrultusunda hareket ederek, kullanıcılarımıza güvenilir ve sağlam bir platform sunmaya çalışırız.</label>
                <label className={styles.title}>Tarihçemiz</label>
                <label className={styles.description}>Bikalp, Kendi evlilik deneyimlerimizden yola çıkarak, daha fazla İnsanın değerlerine uygun eşleşmeler bulabilmesi için bir platform oluşturma fikri doğdu.</label>
                <label className={styles.title}>Kullanıcı Odaklı Yaklaşımımız</label>
                <label className={styles.description}>Kullanıcılarımız bizim için her zaman önceliktir. İslami temel alarak, onların ihtiyaçlarını anlamak ve onlara en iyi hizmeti sunmak için çaba gösteririz. Geri bildirimleri dikkatle değerlendirir, platformumuzu sürekli olarak iyileştirmek için çalışırız. Kullanıcılarımızın mutluluğu ve güveni, bizim için en değerli varlıktır.</label>
                <label className={styles.title}>Ekip Arkadaşlarımız</label>
                <label className={styles.description}>Bikalp ekibi, inançlı, deneyimli ve işine adanmış bir gruptan oluşur. Her birimiz kullanıcılarımızın mutluluğunu göz önünde bulundurarak çalışırız.</label>
                <label className={styles.title}>İletişim ve Destek</label>
                <label className={styles.description}>Bikalp.com ekibiyle iletişime geçmek için birçok farklı kanal kullanabilirsiniz. Sorularınızı, önerilerinizi veya geri bildirimlerinizi memnuniyetle karşılarız.</label>
                <label className={styles.description}> - E-posta: bilgi@Bikalp.com</label>
                <label className={styles.description}> - Whatsapp hattımız : 0507 675 28 56  - 09:00 – 01:00 arasında müşteri hizmetleri yetkililerimizle iletişime geçebilirsiniz.</label>
                <label className={styles.description}> - Facebook : @Bikalp</label>
                <label className={styles.description}> - İnstagram : @Bikalpcom</label>
                <label className={styles.title}>Bilgilerimiz</label>
                <label className={styles.description}>SGD BİLİŞİM HİZMETLERİ VE ELEKTRONİK TİCARET LİMİTED ŞİRKETİ</label>
                <label className={styles.description}>İçerenköy Mahallesi Tepelik SK. NO: 23/4 Ataşehir/İstanbul 34396</label>
                <label className={styles.description}>SGD Bilişim Mersis No: 0769175860500001</label>
                <label className={styles.description}>Kozyatağı Vergi Dairesi - Vergi No: 7691758605</label>
                <label className={styles.description}>Ticaret Sicil No: 245009-5</label>
                <label className={styles.title}>Evlilik Sitesi</label>
                <label className={styles.description}>Evlilik insan yaşamında en büyük değişimlerden biridir. Yeni bir hayat, yeni bir düzen... Kimi zaman hepimizi korkutur kimi zaman da vazgeçilmezimiz olur. Günümüzde her birimiz ev işleri, çalışma hayatındaki zorluklar ve stres sayesinde kendimize vakit ayırmakta zorlanıyoruz. Bu zorluklara yalnız başına katlanmak da bir çoğumuz için tam bir eziyet... Bunun için de kendine uygun bir eş adayı bulmak herkesin yegane isteği. İşten eve, evden işe giderken bunun en kadar zor olduğunu da tahmin etmek zor değil.. Bu yüzden yoğun saatler çalışan biri için internet eş aramalarına yardımcı olan tek mecra haline geldi.</label>
                <label className={styles.title}>Güvenilir Evlilik Sitesi</label>
                <label className={styles.description}>İnternetten eş bulmak günümüzde oldukça yaygınlaştı. Stres ve güvensizlik olmadan internet aracılığı ile eş bulmak evlilik sitelerinde artık mümkün... Bikalp.com evlilik sitesi de bu amaca hizmet eden bir internet sitesidir... 
                    İnsanlar kendilerini evliliğe psikolojik olarak da hazırladıklarında artık evlilikten ne istediklerini bilir ve buna göre bir hayat arkadaşı seçerler. Yaşadığımız deneyimlerin verdiği olgunlukla da bu isteklerimiz şekillenir ve hayatımızı kuracağımız eş adayını sabırla ve kendi süzgecimizden geçirerek bulabiliriz. Bunun için önce kendini tanımak, sonra da ne istediğin bilmek en önemli kriterlerden biridir. 
                </label>
                <label className={styles.title}>Türkiye' de arkadaş bulmak Bikalp.com ile daha güvenli</label>
                <label className={styles.description}>Bulunduğunuz şehirde arkadaşlık için kendinize uygun kriterlerinizi belirleyerek Bikalp.com ' a üye olun. Uygun olan arkadaş adayları ile tanışarak hayat arkadaşınızı bulmanız için kolaylık sağlarız. Bikalp.com ' da ciddi arkadaşlık niyeti olan kişilerle tanışmak için elinizde. Seviyeli arkadaşlıklar için sadece üye olun.</label>
                <label className={styles.title}>Bikalp</label>
                <label className={styles.description}>Bikalp; kendini ifade etmek, yeni insanlarla tanışmak ve sohbet etmek için en ciddi yoldur. Hemen üye olup bu dev platforma sen de katıl.</label>
                <label className={styles.title}>Hayallerinize Attığınız İlk Adım</label>
                <label className={styles.description}>Evlenme sitesi ücretsiz bir şekilde size hayallerinize ulaşma şansı tanıyor. Tüm özelliklerinizi kolayca anlatabileceğiniz ve aradığınız eş adaylarında aradığınız net özellikleri belirleyebileceğiniz profil sayfanız ile isteklerinize ulaşmak için doğru bir yoldan ilerleyebiliyorsunuz.</label>
                <label className={styles.description}>Her gün yüzbinlerce eş adayı bu internet sitelerinde aradığı mutluluğu bulmaya çalışıyor. Evlenme sitesi ücretsiz bir şekilde hayallerinizi gerçeğe dönüştürmek için sizin bir adım atmanızı bekliyor. Bugün tahmin ettiğinizden çok sayıda kişi sanal evlilik merkezi ile mutlu bir yuvaya sahip oluyor. Neden onlardan biri de siz olmayasınız?</label>    
                <label className={styles.title}>Şimdi Bir Başlangıç Yapın</label>
                <label className={styles.description}> Üye olun ve hayallerinize bir adım daha yaklaşın. Nerede oturuyorsunuz eş adayınızın hangi ilde olmasını istiyorsunuz? Hangi özellikler sizin için olmazsa olmaz. Herkes beklentilerinizi bilerek size gelsin istemez misiniz? Kimse sizi değiştirmeye çalışmadan daha ilk başta olduğunuz gibi kabul etsin.</label>
                <label className={styles.description}>  Hayallerinize ulaşmak için yalnızca bir adım kaldı. Hemen şimdi sizin gibi aynı hayale sahip olan adaylardan kaderinizi keşfedin. Belki de o bizim evlilik sayfamızda sizi bekliyor.</label>

            </div>
            {
                //<FooterBanner/>
            }
            <Footer/>
        </>
    )
}
export default AboutPage;