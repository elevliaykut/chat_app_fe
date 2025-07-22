import React, { useEffect, useState } from 'react';
import styles from './Index.module.css';
import Footer from '../../molecules/Footer';

export default function Home() {
  return (
    <>
        <div className={styles?.frame}>
          <div className={styles?.content}>

              <div className={styles.container}>
                  <p className={styles.greeting}>Değerli Kullanıcılarımız,</p>
                  <p className={styles.intro}>
                    Artık <strong>Gönülden Sevenler</strong> ile ilgili tüm sorularınızı, önerilerinizi ve destek taleplerinizi WhatsApp müşteri hizmetlerimize iletebilirsiniz. 
                    Size daha hızlı ve etkili bir şekilde yardımcı olabilmek için buradayız!
                  </p>

                  <div className={styles.whatsappBox}>
                    <p className={styles.whatsapp}>
                      <strong>WhatsApp:</strong> 0507 675 28 56 <span className={styles.hours}>(09:00 - 24:00)</span>
                    </p>
                    <p className={styles.subtitle}>WhatsApp üzerinden destek alabileceğiniz konular:</p>
                    <ul className={styles.list}>
                      <li>Hesap sorunları</li>
                      <li>Üyelik bilgileri</li>
                      <li>Ödeme ve paket işlemleri</li>
                      <li>Geri bildirim ve öneriler</li>
                    </ul>
                  </div>

                  <p className={styles.mailTitle}><strong>Mail adresiniz : destek@bikalp.com & yardim@bikalp.com</strong></p>

                  <a href="/help" className={styles.link}>
                    Yardım sayfamız için TIKLAYINIZ
                  </a>
                </div>
          </div>
        </div>
        <Footer/>
    </>
    
  );
}
