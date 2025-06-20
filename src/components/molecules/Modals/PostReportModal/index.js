import React, { useEffect, useState } from "react";
import styles from './Index.module.css';
import ThemeConfig from "@/src/utils/ThemeConfig";
import ToastMessage from "../../TostMessage";

const PostReportModal = ({
    onClose = () => {},
    isLoading = false,
    userReports = () => {},
    userId = "",
    postId = "",
    setPostReportModalVisible = () => {}
}) => {

    const [description, setDescription] = useState();
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [alertMessageVisible, setAlertMessageVisible] = useState();

    const handleCheckboxChange = (value) => {
        setSelectedTypes(prev =>
            prev.includes(value)
                ? prev.filter(item => item !== value) // varsa çıkar
                : [...prev, value] // yoksa ekle
        );
    };

    const handleClick = () => {

        if (selectedTypes.length === 0 && (!description || description.trim() === "")) {
            setAlertMessageVisible(true);
            return;
        }

        userReports({
            userId: userId,
            type: selectedTypes,
            description: description,
            postId: postId
        });

        setPostReportModalVisible(false);
    }

    return(
        <>
            <div className={styles.overlay}>
                <div className={styles.modal}>
                    <div className={styles.modalHeader}>
                        <div>
                            <label>DURUM ŞİKAYETİ</label>
                        </div>
                        <div style={{ marginLeft: 'auto', cursor: 'pointer'}} onClick={onClose}>
                            X
                        </div>
                    </div>
                    {alertMessageVisible && (
                        <>
                            <div className={styles?.alertMessageEpisode}>
                                <label>Lütfen maddelerden işaretleyiniz veya şikayetinizi yazınız.</label>
                            </div>
                        </>
                    )}
                    <div className={styles.checkBoxTitleEpisode}>
                        <label>Lütfen şikayet nedenini seçin veya yazınız</label>
                    </div>
                    <div className={styles.checkBoxContentEpisode}>
                        
                        <div className={styles.checkbocContentLine}>
                            <div>
                                <input 
                                    style={{ width: '20px', height: '20px'}} 
                                    type="checkbox" 
                                    id="evli" 
                                    name="evli" 
                                    value="1" 
                                    checked={selectedTypes.includes("1")}
                                    onChange={() => handleCheckboxChange("1")}
                                />
                            </div>
                            <div>
                                <label>Evli</label>
                            </div>
                        </div>

                        <div className={styles.checkbocContentLine}>
                            <div>
                                <input 
                                    style={{ width: '20px', height: '20px'}} 
                                    type="checkbox" 
                                    id="evli" 
                                    name="evli" 
                                    value="2" 
                                    checked={selectedTypes.includes("2")}
                                    onChange={() => handleCheckboxChange("2")}
                                />
                            </div>
                            <div>
                                <label>Profilinde verdiği bilgiler doğru değil.</label>
                            </div>
                        </div>

                        <div className={styles.checkbocContentLine}>
                            <div>
                                <input 
                                    style={{ width: '20px', height: '20px'}} 
                                    type="checkbox" 
                                    id="evli" 
                                    name="evli" 
                                    value="3" 
                                    checked={selectedTypes.includes("3")}
                                    onChange={() => handleCheckboxChange("3")}
                                />
                            </div>
                            <div>
                                <label>Reklam İçerikli mesaj gönderiyor.</label>
                            </div>
                        </div>

                        <div className={styles.checkbocContentLine}>
                            <div>
                                <input 
                                    style={{ width: '20px', height: '20px'}} 
                                    type="checkbox" 
                                    id="evli" 
                                    name="evli" 
                                    value="4" 
                                    checked={selectedTypes.includes("4")}
                                    onChange={() => handleCheckboxChange("4")}
                                />
                            </div>
                            <div>
                                <label>Para yardımı, kontör gibi maddi taleplerde bulunuyor.</label>
                            </div>
                        </div>

                        <div className={styles.checkbocContentLine}>
                            <div>
                                <input 
                                    style={{ width: '20px', height: '20px'}} 
                                    type="checkbox" 
                                    id="evli" 
                                    name="evli" 
                                    value="5" 
                                    checked={selectedTypes.includes("5")}
                                    onChange={() => handleCheckboxChange("5")}
                                />
                            </div>
                            <div>
                                <label>Fotoğradı kendine ait değil.</label>
                            </div>
                        </div>

                        <div className={styles.checkbocContentLine}>
                            <div>
                                <input 
                                    style={{ width: '20px', height: '20px'}} 
                                    type="checkbox" 
                                    id="evli" 
                                    name="evli" 
                                    value="6" 
                                    checked={selectedTypes.includes("6")}
                                    onChange={() => handleCheckboxChange("6")}
                                />
                            </div>
                            <div>
                                <label>Birden fazla profili var ve farklı bilgiler veriyor.</label>
                            </div>
                        </div>

                        <div className={styles.checkbocContentLine}>
                            <div>
                                <input 
                                    style={{ width: '20px', height: '20px'}} 
                                    type="checkbox" 
                                    id="evli" 
                                    name="evli" 
                                    value="7" 
                                    checked={selectedTypes.includes("7")}
                                    onChange={() => handleCheckboxChange("7")}
                                />
                            </div>
                            <div>
                                <label>Uygunsuz mesaj gönderiyor.</label>
                            </div>
                        </div>

                        <div className={styles.checkbocContentLine}>
                            <div>
                                <input 
                                    style={{ width: '20px', height: '20px'}} 
                                    type="checkbox" 
                                    id="evli" 
                                    name="evli" 
                                    value="8" 
                                    checked={selectedTypes.includes("8")}
                                    onChange={() => handleCheckboxChange("8")}
                                />
                            </div>
                            <div>
                                <label>Yüzyüze tanıştığımızda sorun yaşadım.</label>
                            </div>
                        </div>
                    </div>
                    <div className={styles.textInputEpisode}>
                        <textarea
                            style={{ 
                                width: '100%',
                                height: '100px',
                                border: '1px solid #eee',
                                padding: '12px'
                            }}                         
                            placeholder="Mesaj"
                            onChange={(e) => setDescription(e.target.value)}
                            maxLength={450}
                            className={styles.textInput}
                        />
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
                                onClick={handleClick}
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
                </div>
            </div>
        </>
    )
}
export default PostReportModal;