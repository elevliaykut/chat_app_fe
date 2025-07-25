import React, { useEffect, useState } from "react";
import styles from './Index.module.css';
import ThemeConfig from "@/src/utils/ThemeConfig";
import ToastMessage from "../../TostMessage";

const ProfileTextModal = ({
    onClose = () => {},
    isLoading = false,
    updateUserPersonalInfoComplete = false,
    updateUserPersonalInfo = () => {},
    resetUpdateUserPersonalInfoComplete = () => {},
    userMe = {},
}) => {

    const [content, setContent] = useState();
    const [messageVisible, setMessageVisible] = useState(false);

    const submitOnClick = () => {
        updateUserPersonalInfo({
            profileSummary: content
        });
    }

    useEffect(() => {
        if(updateUserPersonalInfoComplete) {
            resetUpdateUserPersonalInfoComplete();
            setMessageVisible(true);
            onClose();
        }
    },[updateUserPersonalInfoComplete]);

    return(
        <>
            {messageVisible && (
                <>
                    <ToastMessage message="Profil yazınız başarılı bir şekilde kaydedildi."/>
                </>
            )}
            <div className={styles.overlay}>
                <div className={styles.modal}>
                    <div className={styles.modalHeader}>
                        <div>
                            <label>PROFIL YAZISI</label>
                        </div>
                        <div style={{ marginLeft: 'auto', cursor: 'pointer'}} onClick={onClose}>
                            X
                        </div>
                    </div>
                    <div className={styles.textInputEpisode}>
                        <textarea
                            style={{ 
                                width: '100%',
                                height: '300px',
                                border: '1px solid #eee',
                                padding: '12px'
                            }}                
                            defaultValue={userMe?.detail?.profile_summary}            
                            placeholder="PROFIL YAZISI"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            maxLength={450}
                            className={styles.textInput}
                        />
                    </div>
                    <div className={styles.subText}>
                        Profil yazınız en fazla 450 karakter olmalıdır. Profil yazınız arama sonuçlarında gözükecek. Dolayısıyla diğer üyelerin sizin hakkınızda daha fazla bilgi sahibi olabilmesi için profil yazınız çok önemli! Ayrıca kendinizi ifade ettiğiniz taktirde diğer üyelerin dikkatini çekerek güvenini kazanabilirsiniz. Şimdi bize nasıl biri olduğunuzu,aradığınız eş adayının özelliklerini anlatın.
                        Lütfen e-posta, telefon gibi iletişim bilgilerinizi yazmayın ve dolaylı yollarla bildirmeyin.
                    </div>
                    <div className={styles.buttonEpisode}>
                        <div className={styles.cancelButton}>
                            <button
                                onClick={() => onClose()}
                                style={{
                                    width: '120px',
                                    height: '50px',
                                    backgroundColor: 'white',
                                    color: ThemeConfig.black,
                                    border: '1px solid #E3E6EE'
                                }}
                            >
                                Kapat
                            </button>
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
                                {isLoading ? 'Kaydediliyor' : 'Kaydet'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProfileTextModal;