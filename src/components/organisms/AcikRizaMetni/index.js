import React, { useEffect, useState } from "react";
import styles from './Index.module.css';
import FooterBanner from "../../molecules/FooterBanner";
import TopBanner from "../../molecules/TopBanner";

const AcikRizaMetni = ({
    getUserMe = () => {},
    userLogout = () => {},
    getNotifications = () => {},
    notifications = {},
    userMe = {},
    userMeLoading = false,
    notificationIsLoading = false,
    isLoading = false,
}) => {
    const [userMeVisible, setUserMeVisible] = useState(false);

    useEffect(() => {
        if(!userMeLoading) {
            setUserMeVisible(true);
        }
    },[userMeLoading]);

    useEffect(() => {
        getUserMe();
        getNotifications({ read: false });
    },[]);

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
            <div className={styles.frame}>
                <label className={styles.title}>
                    Ticari Elektronik İleti İzni Aydınlatma ve Onay Metni
                </label>
                <label className={styles.description}>
                    6698 sayılı kişisel verilerin korunması kanunu, elektronik ticaretin düzenlenmesi hakkında kanun, ticari iletişim ve ticari elektronik iletiler hakkında yönetmelik ve sair mevzuatlar kapsamında SGD BİLİŞİM HİZMETLERİ VE ELEKTRONİK TİCARET LİMİTED ŞİRKETİ (“Bi Kalp”) olarak siz değerli üyelerimizi ticari elektronik iletiler hakkında bilgilendirmek ve ticari elektronik ileti onayınızı alarak size daha iyi bir hizmet sunmak istemekteyiz.
                </label>

                <label className={styles.title}>
                    Bilgilendirme Metni
                </label>
                <label className={styles.description}>
                    Ticari elektronik ileti; telefon, çağrı merkezleri, faks, otomatik arama makineleri, akıllı ses kaydedici sistemler, elektronik posta, kısa mesaj hizmeti gibi vasıtalar kullanılarak elektronik ortamda gerçekleştirilen ve ticari amaçlarla gönderilen veri, ses ve görüntü içerikli iletileri, ifade etmektedir. Ticari elektronik iletiler, alıcılara ancak önceden onayları alınmak kaydıyla gönderilebilir. Bu onay, yazılı olarak veya her türlü elektronik iletişim araçlarıyla alınabilir. Alıcılar diledikleri zaman, hiçbir gerekçe belirtmeksizin ticari elektronik iletileri almayı reddedebilir. Bu kapsamda ticari elektronik ileti gönderimine dair onay verseniz dahi dilediğiniz zaman, hiçbir gerekçe belirtmeksizin ticari elektronik iletileri almayı gönderide yer alan linke girerek her zaman reddedebilirsiniz.
                </label>

                <label className={styles.title}>
                    Onay Metni
                </label>
                <label className={styles.description}>
                    Bu formun onaylanması 6563 sayılı Elektronik Ticaretin Düzenlenmesi Hakkında Kanun ve 15 Temmuz 2015 tarihli 29417 sayılı Resmi Gazete ’de yayınlanan Ticari İletişim ve Ticari Elektronik İletiler Hakkında Yönetmelik kapsamında gerekli bilgilendirmenin tarafıma yapıldığını, işbu bilgilendirme formunu okuyup anladığımı ve bu şekilde alınan aşağıdaki beyanınım geçerli olduğunu kabul ediyorum. SGD Bilişim tarafından veya bir aracı firma vasıtasıyla tarafıma telefon, çağrı merkezleri, faks, otomatik arama makineleri, akıllı ses kaydedici sistemler, elektronik posta, kısa mesaj hizmeti gibi vasıtalar kullanılarak elektronik ortamda gerçekleştirilen ve ticari amaçlarla gönderilen veri, ses ve görüntü içerikli her türlü ticari elektronik ileti ile yapılacak tüm tanıtım, kampanya ve bilgilendirme mesajı gönderimine muvafakat ediyorum. Bu kapsamda verdiğim onayın geri alınabilir olduğu konusunda bilgilendirildiğimi ve bu doğrultuda ticari elektronik ileti hangi iletişim kanalıyla gönderildiyse reddetme hakkımı da dilediğim zaman aynı kanal üzerinden de kullanabileceğimi bildiğimi kabul ederim.
                </label>

            </div>
            <FooterBanner/>
        </>
    )
}
export default AcikRizaMetni;