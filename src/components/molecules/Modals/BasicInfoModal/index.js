import React, { useEffect, useState } from "react";
import styles from './Index.module.css';
import ThemeConfig from "@/src/utils/ThemeConfig";
import ToastMessage from "../../TostMessage";

const BasicInfoModal = ({
    onClose = () => {},
    isLoading = false,
    updateUserPersonalInfoComplete = false,
    updateUserPersonalInfo = () => {},
    resetUpdateUserPersonalInfoComplete = () => {},
    userMe = {},
    cities = [],
    districts = [],
    getDistricts = []
}) => {

    useEffect(() => {
        if(updateUserPersonalInfoComplete) {
            onClose();
            resetUpdateUserPersonalInfoComplete();
        }
    },[updateUserPersonalInfoComplete]);

    const [messageVisible, setMessageVisible] = useState(false);
    const [cityId, setCityId] = useState();
    const [districtId, setDistrictId] = useState();

    const submitOnClick = () => {
        updateUserPersonalInfo({
            cityId: cityId,
            districtId: districtId
        });
    }

    useEffect(() => {
        if(updateUserPersonalInfoComplete) {
            resetUpdateUserPersonalInfoComplete();
            setMessageVisible(true);
            onClose();
        }
    },[updateUserPersonalInfoComplete]);

    const cityOnChange = (e) => {
        getDistricts({ cityId: e?.target?.value });
        setCityId(e?.target?.value);
    }

    const districtOnChange = (e) => {
        setDistrictId(e?.target?.value);
    }

    return (
        <>
            {messageVisible && (
                <>
                    <ToastMessage message="Temel bilgileriniz başarılı bir şekilde kaydedildi."/>
                </>
            )}

            <div className={styles.overlay}>
                <div className={styles.modal}>
                    <div className={styles.modalHeader}>
                        <div>
                            <label>TEMEL BİLGİLER</label>
                        </div>
                        <div style={{ marginLeft: 'auto', cursor: 'pointer'}} onClick={onClose}>
                            X
                        </div>
                    </div>
                    <div className={styles.modalContent}>
                        <div style={{ marginTop: '18px'}}>
                            <label>Rumuz</label>
                            <input
                                value={userMe?.username}
                                readOnly
                                className={styles.input}
                            />
                        </div>
                        <div style={{ marginTop: '18px'}}>
                            <label>E-mail</label>
                            <input
                                value={userMe?.email}
                                readOnly
                                className={styles.input}
                            />
                        </div>
                        <div style={{ marginTop: '18px'}}>
                            <label>Cinsiyet</label>
                            <input
                                value={userMe?.gender === 1 ? 'Erkek' : 'Kadın'}
                                readOnly
                                className={styles.input}
                            />
                        </div>
                        <div style={{ marginTop: '18px'}}>
                            <label>Medeni Haliniz</label>
                            <input
                                value={userMe?.detail?.marital_status_value}
                                readOnly
                                className={styles.input}
                            />
                        </div>
                        <div style={{ marginTop: '18px'}}>
                            <label>Doğum Tarihiniz</label>
                            <input
                                value={userMe?.birth_date}
                                readOnly
                                className={styles.input}
                            />
                        </div>

                        <div style={{ marginTop: '18px'}}>
                            <label>Yaşadığınız Şehir </label>
                            <select
                                defaultValue={userMe?.detail?.city?.id ?? ""}
                                style={{ marginTop: '10px' }}
                                onChange={cityOnChange}
                                required
                            >
                                <option value="" disabled>
                                    {userMe?.detail?.city?.name}
                                </option>
                                {cities?.map(item => (
                                    <option key={item.id} value={item.id}>
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div style={{ marginTop: '18px'}}>
                            <label>Yaşadığınız İlçe </label>
                            <select
                                style={{ marginTop: '10px'}}
                                defaultValue={userMe?.detail?.district?.id ?? ""}
								onChange={districtOnChange}
								required
							>
                                <option value="" disabled>
                                    {userMe?.detail?.district?.name}
                                </option>
                                {districts?.map(item => (
                                    <>
								        <option value={item?.id}>{item.name}</option>
                                    </>
                                ))}
							</select>
                        </div>
                        
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
export default BasicInfoModal;