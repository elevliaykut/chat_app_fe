import React, { useEffect, useState } from "react";
import styles from './Index.module.css';
import TopBanner from "../../molecules/TopBanner";
import FooterBanner from "../../molecules/FooterBanner";
import Footer from "../../molecules/Footer";

const KullaniciSözlesmesi = ({
    getUserMe = () => {},
    userLogout = () => {},
    getNotifications = () => {},
    notifications = {},
    userMe = {},
    userMeLoading = false,
    notificationIsLoading = false,
    isLoading = false,
}) => {
    //const [userMeVisible, setUserMeVisible] = useState(false);
    
    //useEffect(() => {
    //    if(!userMeLoading) {
    //        setUserMeVisible(true);
    //    }
    //},[userMeLoading]);

    //useEffect(() => {
    //    getUserMe();
    //    getNotifications({ read: false });
    //},[]);

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
                <label className={styles.description}>
                Değerli Ziyaretçimiz,<br/>

                Aşağıdaki, Bikalp.com ile Bikalp.com üyesi arasındaki üyelik sözleşmesinin metnidir. Bikalp.com'a üye olmadan önce lütfen bu sözleşmeyi dikkatle okuyunuz ve sözleşmenin içerdiği tüm maddeleri onaylamadan siteye üyeliğinizi tamamlamayınız. Yeni üyelik esnasında, bu metni okuduğunuzu söyleyen bir kutucukla karşılaşacaksınız; bu kutucuğu işaretlemeniz, aşağıdaki maddelerin tamamını kabul ettiğiniz anlamına gelecektir.

                </label>
                <label className={styles.title}>BİKALP.COM İNTERNET SİTESİ KULLANICI ÜYELİK SÖZLEŞMESİ</label>

                <label className={styles.description}>
                    1. Taraflar <br/>

                    İşbu sözleşme, sitenin sahibi ve işletmecisi olan Bikalp.com ile üye olan kişi arasında düzenlenmiş, elektronik ortamda üye tarafından onaylanması anında akdedilmiş ve karşılıklı olarak yürürlülüğe girmiştir.<br/>

                    2. Tanımlar<br/>

                    Site : www.Bikalp.com adresinde yayın yapan internet sitesini.<br/>

                    Üye : www.Bikalp.com adresinde yer alan formu doldurmuş, "Üyelik Sözleşmesi'ni okudum. Orada yazılanları aynen kabul ediyorum." ifadesinin başındaki kutucuğu işaretlemiş ve ‘’ Ileri veya Kaydet ve Devam et veya Kaydet ve Çık veya Gönder veya Devam vb.” butonuna basarak üye olma sürecini tamamlamış kişi.<br/>

                    Üye profili : www.Bikalp.com adresinde uyenin kendisinin verdiği bilgilerle oluşturulan, Üyelik Bilgileri, Temel bilgiler, Yaşam tarzı, Kendi kelimeleriyle başlıklarından ve üyenin kendisi tarafından eklenen fotoğraftan oluşan, diğer üyeler tarafından görüntülenebilen Üyeye özel tanıtım sayfası.<br/>

                    İnteraktif alan : www.Bikalp.com adresinde anasayfa akışı ,mesajlar , üye profillerindeki ilgili alanlar .<br/>
                </label>

                <label className={styles.title}>3. Sözleşmenin Konusu</label>

                <label className={styles.description}>
                    İşbu sözleşmenin konusu, sitede sunulan hizmetlerin, bu hizmetlerden yararlanma şartlarının ve tarafların hak ve yükümlülüklerinin tespitidir. İşbu sözleşmenin kapsamı işbu sözleşme ile site içerisinde yer alan kullanıma, üyeliğe ve hizmetlere ilişkin Bikalp.com tarafından yapılmış olan bilcümle uyarı, yazı ve açıklama gibi beyanlardır. Üye, işbu sözleşme hükümlerini kabul etmekle, site içinde yer alan kullanıma, üyeliğe ve hizmetlere ilişkin Bikalp.com tarafından açıklanan her türlü beyanı da kabul etmiş olmaktadır. Üye bahsi geçen beyanlarda belirtilen her türlü hususa uygun olarak davranacağını kabul, beyan ve taahhüt eder.
                </label>

                <label className={styles.title}>4. Hak ve Yükümlülükler:</label>
                <label className={styles.title}>4.1. Üyelerin Hak ve Yükümlülükleri</label>
                <label>
                                Üye, üyeliği süresince, sitenin hizmetlerinden faydalanırken ve sitenin hizmetlerle ilgili herhangi bir işlemi yerine getirirken işbu sözleşme içerisinde yer alan tüm şartlara, sitenin ilgili yerlerinde belirtilen kurallara ve yürürlükteki tüm mevzuata uygun hareket edeceğini, işbu sözleşme ile belirlenen tüm şart ve kuralları anladığını, kabul ettiğini ve onayladığını kabul eder.<br/>

                - Siteye üye olabilmek için reşit olmak, işbu sözleşme hükümleri uyarınca üyeliği daha önceden iptal edilmemiş olmak gerekmektedir.. Reşit olmayan, üyeliği daha önce iptal edilmiş olan kişilerin üyelik kayıt işlemlerini tamamlamış olmaları ve işbu sözleşmeyi onaylamaları, üyelik sonucunu doğurmayacaktır üyelikleri iptal edilecektir. Üye, üyelik aşamasında ilgili internet sayfası aracılığıyla belirttiği ve "Ay, Gün, Yıl"dan oluşan doğum tarihi ile reşit olduğunu beyan etmiş olur. Reşit olmadığı, üyeliğinin daha önce iptal edilmiş olduğu tespit edilen üyenin üyeliği iptal edilir.Üyenin vermiş olduğu yanlış beyandan dolayı sitenin herhangi bir sorumluluğu yoktur.<br/>

                - Üye,Bikalp.com 'un yürürlükteki emredici mevzuat hükümleri gereğince resmi makamlara açıklama yapmakla yükümlü olduğu durumlar içersinde, resmi makamlarca usulü dairesinde bu bilgilerin talep edilmesi halinde üyelere ait gizli/özel/ticari bilgileri resmi makamlara açıklamaya yetkili olacağını ve bu sebeple Bikalp.com’dan her ne nam altında olursa olsun tazminat talep edilemeyeceğini kabul ve taahhüt eder.<br/>

                - Üyelerin, site aracılığıyla Bikalp.com tarafından sunulan hizmetlerden yararlanabilmek amacıyla kullandıkları sisteme erişim araçlarının (kullanıcı ismi, şifre v.b) güvenliği, saklanması, üçüncü kişilerin bilgisinden uzak tutulması, kullanılması durumlarıyla ilgili hususlar tamamen üyelerin sorumluluğundadır. Üyelerin, sisteme giriş araçlarının güvenliği, saklanması, üçüncü kişilerin bilgisinden uzak tutulması, kullanılması gibi hususlardaki tüm ihmal ve kusurlarından dolayı üyelerin ve/ veya üçüncü kişilerin uğradığı veya uğrayabileceği zararlardan Bikalp.com’un doğrudan veya dolaylı herhangi bir sorumluluğu yoktur.<br/>

                - Üyeler sitedeki ilgili bölümlere ve üye profillerine kendileri tarafından sağlanan bilgilerin ve içeriklerin doğru ve hukuka uygun olduğunu kabul ve taahhüt etmektedirler. Bikalp.com, üyeler tarafından siteye iletilen veya üye profillerinin oluşturulmasında ve değiştirilmesinde kendileri tarafından yüklenen, değiştirilen ve sağlanan bilgilerin ve içeriklerin doğruluğunu araştırma; bu bilgi ve içeriklerin güvenli, doğru, işbu sözleşmenin hükümlerine ve hukuka uygun olduğunu taahhüt ve garanti etmekle yükümlü ve sorumlu olmadığı gibi söz konusu bilgi ve içeriklerin yanlış veya hatalı olmasından ve/veya bu içerikler aracılığıyla diğer internet sitelerine yapılan yönlendirmelerden dolayı ortaya çıkacak hiçbir maddi-manevi zarardan da sorumlu tutulamaz.<br/>

                - Üye profilinde kişisel iletişim bilgileri (e-posta adresi, ikamet adresi, telefon numarası vb.) bulunamaz; Bikalp.com 'un üye profilinde kişisel iletişim bilgileri bulunan üyelerin üyeliklerini iptal etme hakkı bulunmaktadır. Üye profilinde bulunan bilgiler, sitenin diğer tüm üyeleri tarafından görülebilir; üye bu bilgilerin görüntülenmemesini talep edemez. Üye profilinde bulunan bilgilerin görüntülenmesine ancak üyeliğin iptal edilmesi ile son verilir.<br/>

                - Üyeler, Bikalp.com 'un yazılı onayı olmadan işbu sözleşmeyi veya bu sözleşmenin kapsamındaki hak ve yükümlülüklerini, üye profillerini, üye bilgilerini kısmen veya tamamen herhangi bir üçüncü kişiye devredemez ödünç veremez; üyelik üyenin kendisinden başka kişilerin kullanımına açılamaz. Bu tür devirler veya yetkisiz kullanımlar sonucu üçüncü kişilerin uğradıkları veya uğrayabilecekleri zararlardan dolayı Bikalp.com doğrudan ve/veya dolaylı olarak hiçbir şekilde sorumlu tutulamaz. Üyeliğini başkasına kullandırttığı veya devrettiği tespit edilen üyenin üyeliği iptal edilir.<br/>

                - Üyelerin, kendi aralarında site aracılığıyla yaptıkları özel mesajlaşmalar da dahil olmak üzere sitede yaptıkları her işlem ve eylemdeki hukuki ve cezai sorumluluk kendilerine aittir,hiçbir şekilde sitenin sorumluluğu cihetine gidilemez. İşbu sebeple Bikalp.com'un uğrayabileceği her türlü zarara karşılık sitenin üyeye rücu hakkı vardır.<br/>

                - Üye diğer üyelere, reklam ya da ticari amaçlar taşıyan mesajlar gönderemez, diğer üyeleri bir başka internet sitesine yönlendiremez. Bu tür mesajlar ileten üyenin mesajlaşma hakkı kısıtlanabilir ya da üyeliği iptal edilebilir.<br/>

                -Üyenin yaptığı mesajlaşmaların toplamı Bikalp.com 'un belirlediği ve sitenin ilgili bölümünde bildirdiği sayıdan fazla ise, mesajlar en eski tarihten başlanarak silinebilir. Üye Bikalp.com 'un belirlediği ve sitenin ilgili yerinde bildirdiği süre boyunca giriş yapmadıysa (log-in olmadıysa) tüm mesajları silinebilir.Sisteme bir ay boyunca hiç giriş yapmayan üyelerin tüm mesajları silinebilir.<br/>

                - Bir üye , başka bir üyenin interaktif alanlarını istediği gibi kullanmasını engelleyemez.<br/>

                - Üye, site aracılığıyla diğer üyelere gönderdiği özel mesajlarda ve siteye yüklediği resimlerde toplumsal ahlaka, genel nezaket kurallarına aykırı ifadeler kullanmayacağını kabul ve taahhüt eder. Özel mesajlar otomatik programlar ile taranabilir veya mesaj gönderilen Üyelerin şikayeti üzerine incelenebilir. Bu otomatik tarama sonucunda veya şikayet sonrasında yapılan incelemede gerekli görüldüğü takdirde üyenin profili yayından kaldırılabilir, mesajlaşma hakkı kısıtlanabilir, bütünüyle engellenebilir veya üyeliği tamamen iptal edilebilir.<br/>

                - Üye bir başkasının gizlilik hakkını ya da yayın haklarını çiğneyen, telif hakları, ticari marka hakları veya başka mülkiyet hakları tarafından korunan ya da bu tarif edilen sınıflara giren malzemelerden uyarlanan hiçbir bilgi, yazılım ya da başka bir malzemeyi sahibinden ya da haklarını elinde tutan kişiden izin almaksızın, postalayamaz ya da iletemez.<br/>

                - Bu web sitesi, sadece bireylerin kişisel kullanımına açıktır ve hiçbir şekilde ticari amaçlarla kullanılamaz. Herhangi bir iş çevresi, şirket veya organizasyon herhangi bir amaçla bu siteye üye olamaz<br/>

                - Bikalp.com , doğrudan sistemde bulunan kullanıcılara ya da onların e-posta adreslerine, ticari ya da reklam amaçlı istek dışı mesaj gönderilmesi, üyelerin bu amaçla başka bir web sitesine yönlendirilmesi ve sitedeki interaktif alanların bu şekilde illegal ve yetki dışında kullanılması gibi durumlarda hukuki yollara başvurma hakkını saklı tutar.<br/>

                - Üyeler, ticari amaç taşıyan ya da reklam içeren hiçbir bilgi, yazılım ya da malzeme postalayamaz ya da iletemez. Diğer üyelerden herhangi bir ürün satın almak ya da onlara ürün satmak gibi bir talepte ve reklam faaliyetinde bulunamaz. Bu amaçla üyelere yönelik e-posta zincirleri kurulamaz; junk e-posta gönderilemez.<br/>

                - Üyeleri bu tip reklam faaliyetleri ya da ısrardan korumak için tedbir amacıyla Bikalp, bir üyenin diğer üyelere göndereceği mesajları kısıtlama hakkını saklı tutmaktadır.<br/>

                - Bikalp.com site dahilindeki interaktif alanlarda üyelerin yazdıklarından sorumlu değildir; buralarda yazılan görüşleri paylaşmak durumunda değildir.<br/>

                - Bikalp.com link verdiği, banner tanıtımı yaptığı sitelerin içeriklerinden sorumlu değildir.<br/>

                - Her üye, Bikalp.com'da bulunan resimleri, metinleri, görsel ve işitsel imgeleri, video klipleri, dosyaları, veritabanları, katalogları ve listeleri çoğaltmayacağını, kopyalamayacağını, dağıtmayacağını, işlemeyeceğini, gerek bu eylemleri ile gerekse de başka yollarla Bikalp.com ile doğrudan ve/veya dolaylı olarak rekabete girmeyeceğini kabul ve taahhüt etmektedir. Üyelerin işbu sözleşme hükümlerine ve hukuka aykırı olarak gerçekleştirdikleri site üzerindeki faaliyetleri nedeniyle üçüncü kişilerin uğradıkları veya uğrayabilecekleri zararlardan dolayı Bikalp.com doğrudan ve/veya dolaylı olarak hiçbir şekilde sorumlu tutulamaz.<br/>

                - Üye, sitenin genel kullanım alanında yayınlanan her türlü bilginin dünya çapında kullanım, sergileme ve dağıtım hakkını, geri alınamaz, sürekli, özel olmayan, tamamen ücreti ödenmiş olarak Bikalp´e vermiş olur. Bikalp, üyelerinin verdiği ve veri tabanında bulunan bilgileri, istatistiksel bilgilere dönüştürmek, reklam ve pazarlama alanında kullanmak, site kullanıcılarının genel eğilimlerini belirlemek, içeriğini ve servislerini zenginleştirmek için kullanabilme hakkına sahiptir.<br/>

                - Üye, sitenin bilgi@Bikalp.com adresine "iptal talebi" başlıklı mesaj atarak üyeliğini iptal ettirebilir.<br/>

                - Bikalp´de bulunan bütün yazılı, resimli, sesli, grafik içeren ve/veya içermeyen tablo gibi materyallerin her hakkı saklıdır. Bu materyalleri kopyalayarak kişisel sayfalarda yayınlamak ve/veya pazarlamak kesinlikle yasaktır. Kişisel sayfalarda bu gibi materyallerin kullanılması halinde mutlaka kimden alıntı yapıldığı ve/veya alıntı yapılan şahıs ve ticari kurumun izin verdiğini belirten bir ibarenin sayfanın altına eklenmesi zorunludur. Aksi halde doğabilecek kanuni ihtilaflarda Bikalp, hiçbir sorumluluk kabul etmez.<br/>

                - Bikalp.com üyeliği bireysel üyelik olup, üçüncü şahıslara ya da tüzel kişilere devredilemez, emanet verilemez. Bu durumun tespiti halinde üyelik iptal edilir. Bu tip hareketlerin doğuracağı sonuçlardan Bikalp.com sorumlu tutulamaz.<br/>

                - Sitede 2 tür üyelik bulunmaktadır<br/>

                </label>

                <label className={styles.title}>1-)Standart Üyelik</label>

                <label className={styles.description}>
                    -Profil kabul şartları:<br/>

                    Üye olmak isteyen bir kullanıcının profilinin kabul edilmesi, aşağıdaki şartların yerine getirilmesine bağlıdır.<br/>

                    - Profiller e-posta adresi, web adresi, telefon numarası gibi (doğrudan ya da dolaylı olarak) kişisel bilgi içeremez.<br/>

                    - Profillerde kullanıcının kendini ya da aradığı kişiyi anlattığı alanlar, ayrıntılı, açık ve gerçeğe uygun olmalıdır.<br/>

                    - Profillerde kullanıcının kendini ya da aradığı eşi anlattığı alanlarda, herhangi bir biçimde hakaret içeren, seksist ya da ırkçı ifadeler kullanılamaz. Profil sayfaları bütün üyelerimize açıktır.<br/>

                    - Profillerde Türkçe dışında bir dil kullanılamaz.<br/>

                    - Profillerde herhangi bir siyasi görüşün propagandasını yapılamaz.<br/>

                    - Profillerde herhangi bir şekilde reklam yapılamaz.<br/>

                    - Bikalp.com´a üye olurken verilen e-posta adresinin üyeye ait ve aktif bir e-posta adresi olma zorunluluğu vardır. Üyelikle ilgili tüm yazışmalarda sisteme üye olurken verilen e-posta adresi esas alınır ve bu adres kullanılır. Bikalp.com a verilen e-postanın doğruluğuna inanır ve buna göre davranır. Yanlış ve yalan beyan edilen e-postalardan oluşabilecek hatalardan Bikalp.com sorumlu değildir.<br/>
                </label>

                <label className={styles.title}>2-)Altın Üyelik</label>

                <label className={styles.description}>
                    - Bikalp.com´da Standart üyeliğin dışında Altın üyelik bulunmaktadır:. Altın üye olunması durumunda, doldurulan formda verilen bilgilerin hatalı ve noksan olmasından dolayı ortaya çıkabilecek durumlarda, sorumluluğun üyede olduğunu, üye peşinen kabul eder.<br/>

                    - Bikalp.com´da Altın üye olurken oluşabilecek aksaklıklardan, bankalarla yaşanabilinecek problemlerden Bikalp.com sorumlu değildir.<br/>

                    - Site üyesi, kredi kartı ile aynı gün içinde, bir defadan fazla işlem yapmaya çalıştığında ödemelerin toplamı üzerinden altın üyelik süresi belirlenerek üyelik hakkı tahsis edilir.<br/>

                    - Altın üyeler, üyeliklerini sildikleri (iptal ettikleri) takdirde Altın üyelikleriyle ilgili tüm haklarını kaybeder. Üyeler silinmesi durumunda üyenin hiçbir bilgisi sistemde saklı tutulmamak üzere tüm bilgiler yok edilir. Üyelik silinmesinden doğabilecek sorunlardan Bikalp.com sorumlu tutulamaz.<br/>

                    - Bikalp.com , Üyeler, üyeliklerine ilk önce standart üyelik ile başladıkları için Bikalp.com çalışma şekli, site yönetimi, altın üyelik hakları ile ilgili olarak bilgi sahibi olmalıdır. Altın üye olunduktan sonra üyenin Altın üyelik haklarından veya Bikalp.com şart ve çalışma şeklinden, Bikalp.com sisteminden memnun kalmaması durumunda ödeme iadesi yapmaz. Üyelerin standart üye oldukları süre içerisinde Bikalp.com şartlarını iyi değerlendirmeli ve bu değerlendirme sonucu Bikalp.com şartları olumlu bulunursa üyeler, Altın üye olmalıdır.<br/>

                    - Altın üyelere ait profiller Bikalp.com kurallarını ihlal ettikleri takdirde, tıpkı Standart üyelerin profilleri gibi iptal edilebilir. Bu durumda, herhangi bir geri ödeme ya da kullanılmamış dönemlere ait ücretlerin iadesi mümkün değildir.<br/>

                    - Genel ahlaka aykırı davranışlar sebebiyle üyeliği iptal edilen Gold ve benzeri ücretli üyelere ücret iadesi yapılmaz.<br/>

                    - Satın alınan her üyelik paketi için Bikalp.com tarafından bir fatura kesilir. Faturalarının adreslerine gönderilmesini isteyen üyelerimiz iletişim bölümünden adres ve fatura bilgilerini iletmeleri halinde Bikalp.com faturasını üyenin adresine gönderir. Bikalp.com ödemeye binaen kesilmiş faturayı gönderme mecburiyeti yoktur. Gonderilmeyen faturalardan Bikalp.com sorumlu tutulamaz.<br/>

                    - Bikalp.com kullanıcıları site yetkilerini ve site içeriğini iyi bilgilendikten sonra siteye üye olmalı ve üyelikleri sırasında Bikalp.com dan memnun kaldıkları zaman Altın üye olmalıdırlar. Aksi taktirde Altın üyelik şartlarını Altın üyelik ödemesi yaptıktan sonra yeterli bulmamak kabul edici bir sebep değildir.<br/>
                </label>

                <label className={styles.title}>4.2. Bikalp.com 'un Hak ve Yükümlülükleri </label>

                <label className={styles.description}>
                - Bikalp.com, sitede sunulan hizmetleri ve içerikleri her zaman değiştirebilme; üyelerin sisteme yükledikleri bilgileri, içerikleri ve üye profillerini, üyeler de dahil olmak üzere üçüncü kişilerin erişimine kapatabilme ve silme hakkını saklı tutmaktadır. Bikalp.com bu hakkını hiçbir bildirimde bulunmadan ve önel vermeden kullanabilir. Üyeler, Bikalp.com 'un talep ettiği değişiklik ve/veya düzeltmeleri ivedi olarak yerine getirmek zorundadırlar. Bikalp.com tarafından talep edilen değişiklik ve/veya düzeltme istekleri gerekli görüldüğü takdirde bizzat Bikalp.com tarafından yapabilir. Bikalp.com tarafından talep edilen değişiklik ve/veya düzeltme taleplerinin, üyeler tarafından zamanında yerine getirilmemesi sebebiyle doğan veya doğabilecek zararlar, hukuki ve cezai sorumluluklar tamamen üyelerin kendilerine aittir.

                - Site üzerindeki yönlendirmeler (link, banner) vasıtasıyla erişilen portallar, web siteleri, dosyalar ve içerikler, bu linkler vasıtasıyla erişilen portallar veya web sitelerinden sunulan hizmetler veya ürünler veya bunların içeriği hakkında Bikalp.com 'un herhangi bir sorumluluğu yoktur.

                - Bikalp.com, sitede yer alan üye bilgilerini, üye profillerini ve üyelerin sisteme yükledikleri bilgileri ve içerikleri, güvenlik, kendi yükümlülüğünü ifa ve bazı istatistiki değerlendirmeler için dilediği biçimde kullanabilir; bunları bir veritabanı üzerinde tasnif edip muhafaza edebilir.

                - Bikalp.com, sitenin işleyişine, genel kurallarına, genel ahlak kurallarına aykırı ve Bikalp.com tarafından kabul edilmesi mümkün olmayan mesajları, içerikleri istediği zaman ve şekilde erişimden kaldırabilir; Bikalp.com bu mesaj ve içeriği giren üyenin üyeliğine herhangi bir ihbar yapmadan son verebilir. Üye Bikalp.com'a yüklediği ahlaka ve hukuka aykırı içerik sebebiyle  Bikalp.com'un maruz kalacağı her türlü zararı tazmin etmekle yükümlüdür.

                - Bikalp.com'un maruz kalacağı her türlü zararı tazmin etmekle yükümlüdür.

                - Teknik sorunlardan dolayi "Site"nin yayınlarında kesintiler olabilir. Bikalp, hizmetin bu şekilde kesilmesinden sorumlu değildir. Bikalp, telefon ve network ağı, çevrimiçi sistemler, servis sağlayıcıları, bilgisayar teçhizatı ve yazılımları, İnternet trafiğindeki tıkanıklık, üyelere veya herhangi bir kişiye zarar verecek yazılımlar yüklemek gibi teknik konulardan doğan aksaklıklardan sorumlu değildir.Bu kesintilerden dolayı yaşanan iletişim ve "Site"ye ulaşmaya dair ilişkin kesintilerde "Üye"nin yaşayacağı sorunlardan " Bikalp.com " sorumlu tutulamaz.

                - "Site"de yayınlanan ve "Üye" profillerinde yer alan her türlü görüntü, yazı, fotoğraf ve diğer materyal " Bikalp.com "un izni olmadan diğer internet sitelerinde ve gazete, televizyon, radyo, dergi gibi konvansiyonel mecralarda yayınlanamaz. "Site"de yer alan tüm içerik, Fikir ve Sanat Eserleri Kanunu'nun dördüncü maddesinin yedinci bendi olan, "Belli bir maksada göre ve hususi bir plan dahilinde verilerin ve materyallerin seçilip derlenmesi sonucu ortaya çıkan ve bir araç ile okunabilir veya diğer biçimdeki veri tabanları" ile koruma altında olduğu gibi eser niteliğindeki içerik ayrıca hukuki korumaya tabidir.
                </label>

                <label className={styles.title}>4.3. Bikalp.com 'da Güvenlik</label>

                <label className={styles.description}>
                - Bikalp.com güvenlik konusunda son derece titiz çalışmaktadır. Bikalp.com 24 saat denetlenmektedir.<br/>

                - Üye, göndereceği e-postalarda, faxlarda veya mektuplarda asla kredi kartı numaranızı yazmamalıdır. E-postalarda yer alan bilgilerin üçüncü şahıslar tarafından görülme olasılığı bulunmaktadır. Bikalp.com , bu yollarla aktarılan bilgilerin güvenliğini hiçbir koşulda garanti edemez.<br/>

                - Üye verilerinin Bikalp.com ihmali görülmeden yetkisiz kişilerce okunmasından (üyenin bilgilerini başka kişilerle paylaşması, siteden ayrılırken çıkış yapmaması, vb. durumlardan) dolayı gelebilecek zararlardan Bikalp.com sorumlu değildir.<br/>

                - Bikalp.com, online ya da offline konumdaki hiçbir üyenin davranışlarından sorumlu değildir. Hiçbir koşulda sitenin kullanımı, içeriği, online ya da offline konumda olsunlar üyeler arasındaki iletişim ve etkileşimden doğan sonuçlardan ?kayıp, hasar, zarar, ölüm, vs. dahi olsa- sorumlu değildir.<br/>

                - Bikalp.com, üyeler arasındaki anlaşmazlıkları takip etme hakkına sahiptir ama buna zorunlu değildir. Üyeler arasındaki iletişim, etkileşim ve ilişkiler, tamamen üyelerin kendi sorumluluğu altındadır. Bir üyenin yayınladığı içerik unsuru, zararlı, hatalı ya da aldatıcı olabilir. Bu durumda diğer üyelerin dikkatli ve sağduyulu davranmaları gerekmektedir. Üyeler arasındaki anlaşmazlıklardan doğan herhangi bir maddi ya da manevi zarardan Bikalp.com sorumlu değildir.<br/>

                - Bikalp.com üyeleri istedikleri zaman, Ayarlar sayfasında yer alan Üyelik silinmesi bölümündeki talimatları takip ederek üyelikten çıkabilir. Bikalp.com, herhangi bir uyarı yapmaksızın üyeliği iptal etme hakkına sahiptir.<br/>

                - Bikalp.com, kullanıcılar arasında etkileşimi mümkün kılan herhangi bir içerik unsurunu (forumlar, sohbet odaları, kısa mesaj, Messenger?a ait mesaj, fotoğraf ya da profil ) Üyelik Sözleşmesi?ni ihlal ettiği ya da saldırgan, yasa dışı, üyelerin haklarını ve güvenliğini tehdit eden unsurlar içerdiği gerekçesiyle denetleyebilir veya iptal edebilir.<br/>

                - Bu sayfada yer alan maddeler, değişikliklerin bu sayfadan belirtilmesi şartıyla Bikalp.com tarafından istendiği zaman değiştirilebilir.<br/>

                - Bikalp.com bir evlilik sitesi olduğu için üyelerinin evli olmaması gerekmektedir. Evli olduğu anlaşılan üyelerin üyelikleri iptal edilir. Bu tip durumlardan doğabilecek zararlardan Bikalp.com sorumlu tutulamaz.<br/>

                - Bikalp.com bir evlilik sitesi olduğu için üyelerinin tek niyeti evlilik olmalıdır. Niyetlerinin evlilik olmadığı anlaşılan üyelerin üyelikleri iptal edilir. Bikalp.com delil ispat etmekle yükümlü değildir.<br/>

                - Bikalp üyelerinin şikayette bulunuduğu üyelikler değerlendirme sonucu şikayet edilen üyelikler iptal edilebilir. Bikalp.com şikayet eden üyeleri gizli tutmak nedeni ile ispatta bulunmak zorunda değildir. Bikalp.com kapatılan ve iptal edilen üyelik ile ilgili sorumlu tutulamaz.<br/>

                - Bikalp.com ile tanışan ve niyetleri evlilik olan üyelerin karşılarındaki kişileri birebir tanımakla yükümlüdür. Bu kişilerle yaşayacakları ilişkiler ve evliliklerde yaşanacak sorunlardan Bikalp.com sorumlu tutulamaz.<br/>

                - Bikalp.com üyeleri biribirlerine kredi kartı ve banka hesap numarası gibi gizlilik gerektiren bilgileri saklı tutmalıdır. Bu bilgilerin saklı tutulmadığı taktirde yaşanabilecek sorunlardan Bikalp.com sorumlu tutulamaz.<br/>

                - Bikalp editörleri üyelikleri her ne kadar denetlese de, üyeler arasında yaşanabilecek dolandırıcıklık olaylarında yaşanan ikili sorunlardan Bikalp.com sorunlu tutulamaz.<br/>

                - Bikalp.com üyelerinin resimlerini gizli tutumak amacıyla anasayfasında sabit resimler gösterir. Gerçek üyeler kayıtlı üyelerin görebileceği şekilde saklı tutulmaktadır. Üyeler asla anasayfada resimlerinin gösterilmesini isteyemez ve anasayfada gösterilen resim ve içerikten Bikalp.com sorumlu tutulamaz.<br/>

                - Üye, Bikalp´in yürürlükteki şartları gereğince resmi makamlara açıklama yapmakla yükümlü olduğu durumlar içersinde, resmi makamlarca usulü dairesinde bu bilgilerin talep edilmesi halinde üyelere ait gizli/özel/ticari bilgileri resmi makamlara açıklamaya yetkili olacağını ve bu sebeple Bikalp´den her ne nam altında olursa olsun tazminat talep edilemeyeceğini kabul eder.<br/>

                - Üye, Bikalp.com içerisinde diğer üyelerle olan sorunlarında, Üyelerin Bikalp.com içerisinde yaşadığı herhangi bir sorunla Bikalp.com´dan her ne nam altında olursa olsun tazminat talep edilemeyeceğini kabul eder.<br/>

                - Üye, Altın üye olsa dahi, Bikalp.com´ a gelen şikayetler nedeni ile şikayet edilen üyenin üyeliğini iptal edebilir. Üyelik iptalleri yapılan üyelerin Bikalp.com 'an her ne nam altında olursa olsun tazminat talep edilemeyeceğini kabul eder.<br/>

                - Üye, bu sözleşmenin ihlali durumunda meydana gelebilecek olan kayıp, iddia ve suçlamalardan doğabilecek olan zararların karşılığında Bikalp.com´n, onun şubelerinin, yetkililerinin, temsilcilerinin ve diğer çalışanlarının zararlarını karşılayacağını kabul eder.<br/>


                </label>


                <label className={styles.title}>5. Sınırlı Sorumluluk</label>

                <label className={styles.description}>
                    Bikalp.com, üyelerin veya üyelerin sitede sağlanan hizmetler ve/veya yer alan uygulamalar sebebiyle muhatap olduklari 3. kişilerin, bu hizmet ve uygulamalar ile bağlantılı olarak ve /veya kaynaklanan hiç bir maddi, manevi, dolaylı veya direkt zarardan sorumlu olmayacağı gibi, uyelerin kanuna aykırı fiil ve eylemlerinden dolayı hukuki ve cezai olarak sorumlu tutulamaz.
                </label>

                <label className={styles.title}>6. Mucbir Sebepler</label>

                <label className={styles.description}>
                    Hukuken mücbir sebep sayılan tüm durumlarda, Bikalp.com işbu sözleşme ile belirlenen edimlerinden herhangi birini geç veya eksik ifa etme veya ifa etmeme nedeniyle yükümlü değildir. Bu ve bunun gibi durumlar, Bikalp.com için, gecikme, eksik ifa etme veya ifa etmeme veya temerrüt addedilmeyecek veya bu durumlar için Bikalp.com 'dan herhangi bir nam altında tazminat talep edilemeyecektir. "Mücbir sebep" terimi, doğal afet, isyan, savaş, grev, iletişim sorunları, altyapı ve internet arızaları, elektrik kesintisi ve kötü hava koşulları da dahil ve fakat bunlarla sınırlı olmamak kaydıyla ilgili tarafın makul kontrolü haricinde ve Bikalp.com 'un gerekli özeni göstermesine rağmen önleyemediği kaçınılamayacak olaylar olarak yorumlanacaktır.
                </label>

                <label className={styles.title}>7. Uygulanacak Hukuk ve Yetki</label>

                <label className={styles.description}>
                    İşbu sözleşmenin uygulanmasında, yorumlanmasında ve bu sözleşme dahilinde doğan hukuki ilişkilerin yönetiminde Türk Hukuku uygulanacaktır. İşbu sözleşmeden dolayı doğan veya doğabilecek her türlü ihtilafın hallinde İstanbul Mahkemeleri ve İcra Daireleri yetkilidir.
                </label>
                
                <label className={styles.title}>8. Sözleşmenin Feshi</label>

                <label className={styles.description}>
                    a. İşbu sözleşme üyenin üyeliği iptal edilinceye kadar yürürlükte kalacak ve taraflar arası hüküm ve sonuçlarını doğurmaya devam edecek, üyenin üyelik süresinin dolması geçici veya kalıcı olarak üyeliğinin durdurulması hallerinde sona ermiş sayılacaktır.<br/>

                    b. Bikalp.com, üyelerin işbu sözleşmede belirtilen hükümleri ve site içinde yer alan kullanıma, üyeliğe ve hizmetlere ilişkin benzeri kuralları ihlal etmeleri durumunda sözleşmeyi tek taraflı olarak feshedebilecek ve üyeler fesih sebebiyle Bikalp.com 'un uğradığı tüm zararları tazmin etmekle yükümlü olacaktır.<br/>

                    Üyelik formunda yer alan "üyelik sözleşmesini okudum, kabul ediyorum" kutusunun işaretlenmesi yukarıdaki koşulların kabul edilmiş olması anlamına gelmektedir.<br/>
                </label>
            </div>
            {
                //<FooterBanner/>
            }
            <Footer/>
        </>
    )
}
export default KullaniciSözlesmesi;