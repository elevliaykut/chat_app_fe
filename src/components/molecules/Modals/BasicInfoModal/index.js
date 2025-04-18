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
    userMe = {}
}) => {
    const [messageVisible, setMessageVisible] = useState(false);
    const [horoscope, setHoroscope] = useState();
    const [maturity, setMaturity] = useState();
    const [headCraft, setHeadCraft] = useState();
    const [tall, setTall] = useState();
    const [weight, setWeight] = useState();
    const [eyeColor, setEyeColor] = useState();
    const [hairColor, setHairColor] = useState();
    const [skinColor, setSkinColor] = useState();
    const [bodyType, setBodyType] = useState();
    const [haveAChicd, setHaveAChild] = useState();
    const [wantToChild, setWantToChild] = useState();
    const [cigarette, setCigarette] = useState();
    const [alcohol, setAlcohol] = useState();
    const [educationStatus, setEducationStatus] = useState();
    const [foreighLanguages, setForeignLanguages] = useState();
    const [job, setJob] = useState();
    const [salary, setSalary] = useState();
    const [workStatus, setWorkStatus] = useState();
    const [liveWith, setLiveWith] = useState();
    const [clothingStyle, setClothingStyle] = useState();
    const [notCompromise, setNotCompromise] = useState();
    const [community, setCommunity] = useState();
    const [sect, setSect] = useState();
    const [pray, setPray] = useState();
    const [quran, setQuran] = useState();
    const [fasting, setFasting] = useState();
    const [considerIslam, setConsiderIslam] = useState();
    const [musicType, setMusicType] = useState();
    const [bookType, setBookType] = useState();
    const [lookingQuality, setLookingQuality] = useState();
    const [hoobies, setHoobies] = useState();
    const [yourPersonality, setYourPersonality] = useState();
    const [disability, setDisability] = useState();

    useEffect(() => {
        if(updateUserPersonalInfoComplete) {
            resetUpdateUserPersonalInfoComplete();
            setMessageVisible(true);
        }
    },[updateUserPersonalInfoComplete]);
    
    const maturityOnChange = (e) => {
		setMaturity(e?.target?.value);
	}
    
    const headCraftOnChange = (e) => {
		setHeadCraft(e?.target?.value);
	}

    const haveAChildOnChange = (e) => {
        setHaveAChild(e?.target?.value)
    };

    const wantTohChildOnChange = (e) => {
        setWantToChild(e?.target?.value);
    }

    const cigaretteOnChange = (e) => {
        setCigarette(e?.target?.value);
    }

    const alcoholOnChange = (e) => {
        setAlcohol(e?.target?.value);
    }

    const doYouPrayOnChange = (e) => {
        setPray(e?.target?.value);
    }

    const doYouKnowQuranOnChange = (e) => {
        setQuran(e?.target?.value);
    }

    const areYouFasting = (e) => {
        setFasting(e?.target?.value);
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
                        <div style={{ marginTop: '10px'}}>
                            <label>Burç</label>
                            <input
                                placeholder="Burç"
                                onChange={(e) => setHoroscope(e?.target?.value)}
                                className={styles.input}
                            />
                        </div>
                        <div style={{ marginTop: '10px'}}>
                            <label>Medeni Haliniz</label>
                            <select
                                style={{ marginTop: '10px'}}
								onChange={maturityOnChange}
								required
							>
								<option value="1">Evli</option>
								<option value="2">Boşanmış</option>
								<option value="3">Bekar</option>
							</select>
                        </div>
                        <div style={{ marginTop: '10px'}}>
                            <label>Tessetür </label>
                            <select
                                style={{ marginTop: '10px'}}
								onChange={headCraftOnChange}
								required
							>
								<option value="0">Evet</option>
								<option value="1">Hayr</option>
							</select>
                        </div>
                        <div style={{ marginTop: '10px'}}>
                            <label>Boy </label>
                            <input
                                placeholder="Boy"
                                onChange={(e) => setTall(e?.target?.value)}
                                className={styles.input}
                            />
                        </div>
                        <div style={{ marginTop: '10px'}}>
                            <label>Kilo </label>
                            <input
                                placeholder="Kilo"
                                onChange={(e) => setWeight(e?.target?.value)}
                                className={styles.input}
                            />
                        </div>
                        <div style={{ marginTop: '10px'}}>
                            <label>Göz rengi </label>
                            <input
                                placeholder="Göz Rengi"
                                onChange={(e) => setEyeColor(e?.target?.value)}
                                className={styles.input}
                            />
                        </div>
                        <div style={{ marginTop: '10px'}}>
                            <label>Saç rengi </label>
                            <input
                                placeholder="Saç Rengi"
                                onChange={(e) => setHairColor(e?.target?.value)}
                                className={styles.input}
                            />
                        </div>
                        <div style={{ marginTop: '10px'}}>
                            <label>Ten rengi </label>
                            <input
                                placeholder="Ten Rengi"
                                onChange={(e) => setSkinColor(e?.target?.value)}
                                className={styles.input}
                            />
                        </div>
                        <div style={{ marginTop: '10px'}}>
                            <label>Vücut Tipi </label>
                            <input
                                placeholder="Vücut Tipi"
                                onChange={(e) => setBodyType(e?.target?.value)}
                                className={styles.input}
                            />
                        </div>
                        <div style={{ marginTop: '10px'}}>
                            <label>Çocuğunuz Varmı? </label>
                            <select
                                style={{ marginTop: '10px'}}
								onChange={haveAChildOnChange}
								required
							>
								<option value="0">Evet</option>
								<option value="1">Hayr</option>
							</select>
                        </div>
                        <div style={{ marginTop: '10px'}}>
                            <label>Çocuk İstiyormusunuz? </label>
                            <select
                                style={{ marginTop: '10px'}}
								onChange={wantTohChildOnChange}
								required
							>
								<option value="0">Evet</option>
								<option value="1">Hayr</option>
							</select>
                        </div>
                        <div style={{ marginTop: '10px'}}>
                            <label>Sigara Kullanıyormusunuz? </label>
                            <select
                                style={{ marginTop: '10px'}}
								onChange={cigaretteOnChange}
								required
							>
								<option value="0">Evet</option>
								<option value="1">Hayr</option>
							</select>
                        </div>
                        <div style={{ marginTop: '10px'}}>
                            <label>Alkol Kullanıyormusunuz? </label>
                            <select
                                style={{ marginTop: '10px'}}
								onChange={alcoholOnChange}
								required
							>
								<option value="0">Evet</option>
								<option value="1">Hayr</option>
							</select>
                        </div>
                        <div style={{ marginTop: '10px'}}>
                            <label>Eğitim Durumunuz </label>
                            <input
                                placeholder="Eğitim Durumunuz"
                                onChange={(e) => setEducationStatus(e?.target?.value)}
                                className={styles.input}
                            />
                        </div>
                        <div style={{ marginTop: '10px'}}>
                            <label>Yabancı Dilleriniz </label>
                            <input
                                placeholder="Yabancı Dilleriniz"
                                onChange={(e) => setForeignLanguages(e?.target?.value)}
                                className={styles.input}
                            />
                        </div>
                        <div style={{ marginTop: '10px'}}>
                            <label>Mesleğiniz </label>
                            <input
                                placeholder="Mesleğiniz"
                                onChange={(e) => setJob(e?.target?.value)}
                                className={styles.input}
                            />
                        </div>
                        <div style={{ marginTop: '10px'}}>
                            <label>Geliriniz </label>
                            <input
                                placeholder="Geliriniz"
                                onChange={(e) => setSalary(e?.target?.value)}
                                className={styles.input}
                            />
                        </div>
                        <div style={{ marginTop: '10px'}}>
                            <label>Çalışma Şekliniz </label>
                            <input
                                placeholder="Çalışma Şekliniz"
                                onChange={(e) => setWorkStatus(e?.target?.value)}
                                className={styles.input}
                            />
                        </div>
                        <div style={{ marginTop: '10px'}}>
                            <label>Kiminle Yaşıyorsunuz? </label>
                            <input
                                placeholder="Kiminle Yaşıyorsunuz?"
                                onChange={(e) => setLiveWith(e?.target?.value)}
                                className={styles.input}
                            />
                        </div>
                        <div style={{ marginTop: '10px'}}>
                            <label>Giyim Tarzınız </label>
                            <input
                                placeholder="Giyim Tarzınız"
                                onChange={(e) => setClothingStyle(e?.target?.value)}
                                className={styles.input}
                            />
                        </div>
                        <div style={{ marginTop: '10px'}}>
                            <label>Taviz Vermeyecekleriniz </label>
                            <input
                                placeholder="Taviz Vermeyecekleriniz"
                                onChange={(e) => setNotCompromise(e?.target?.value)}
                                className={styles.input}
                            />
                        </div>
                        <div style={{ marginTop: '10px'}}>
                            <label>Cemaat </label>
                            <input
                                placeholder="Cemaat"
                                onChange={(e) => setCommunity(e?.target?.value)}
                                className={styles.input}
                            />
                        </div>
                        <div style={{ marginTop: '10px'}}>
                            <label>Mezhebiniz </label>
                            <input
                                placeholder="Mezhebiniz"
                                onChange={(e) => setSect(e?.target?.value)}
                                className={styles.input}
                            />
                        </div>
                        <div style={{ marginTop: '10px'}}>
                            <label>Namaz Kılıyormusunuz? </label>
                            <select
                                style={{ marginTop: '10px'}}
								onChange={doYouPrayOnChange}
								required
							>
								<option value="0">Evet</option>
								<option value="1">Hayr</option>
							</select>
                        </div>
                        <div style={{ marginTop: '10px'}}>
                            <label>Kuran'ı Kerim Biliyor ve Okuyormusunuz? </label>
                            <select
                                style={{ marginTop: '10px'}}
								onChange={doYouKnowQuranOnChange}
								required
							>
								<option value="0">Evet</option>
								<option value="1">Hayr</option>
							</select>
                        </div>
                        <div style={{ marginTop: '10px'}}>
                            <label>Oruç Tutuyormsunuz? </label>
                            <select
                                style={{ marginTop: '10px'}}
								onChange={areYouFasting}
								required
							>
								<option value="0">Evet</option>
								<option value="1">Hayr</option>
							</select>
                        </div>
                        <div style={{ marginTop: '10px'}}>
                            <label>İslami ve Alaki Olarak Önemli Gördükleriniz</label>
                            <input
                                placeholder="İslami ve Alaki Olarak Önemli Gördükleriniz"
                                onChange={(e) => setConsiderIslam(e?.target?.value)}
                                className={styles.input}
                            />
                        </div>
                        <div style={{ marginTop: '10px'}}>
                            <label>Dinlediğiniz Müzik Türleri</label>
                            <input
                                placeholder="Dinlediğiniz Müzik Türleri"
                                onChange={(e) => setMusicType(e?.target?.value)}
                                className={styles.input}
                            />
                        </div>
                        <div style={{ marginTop: '10px'}}>
                            <label>Okuduğunuz Kitap Türleri</label>
                            <input
                                placeholder="Okuduğunuz Kitap Türleri"
                                onChange={(e) => setBookType(e?.target?.value)}
                                className={styles.input}
                            />
                        </div>
                        <div style={{ marginTop: '10px'}}>
                            <label>Eş Adayında Aradığınız Özellikler</label>
                            <input
                                placeholder="Eş Adayında Aradığınız Özellikler"
                                onChange={(e) => setLookingQuality(e?.target?.value)}
                                className={styles.input}
                            />
                        </div>
                        <div style={{ marginTop: '10px'}}>
                            <label>Hobileriniz</label>
                            <input
                                placeholder="Hobileriniz"
                                onChange={(e) => setHoobies(e?.target?.value)}
                                className={styles.input}
                            />
                        </div>
                        <div style={{ marginTop: '10px'}}>
                            <label>Kişiliğiniz</label>
                            <input
                                placeholder="Kişiliğiniz"
                                onChange={(e) => setYourPersonality(e?.target?.value)}
                                className={styles.input}
                            />
                        </div>
                        <div style={{ marginTop: '10px'}}>
                            <label>Fiziksel Engel</label>
                            <input
                                placeholder="Fiziksel Engel"
                                onChange={(e) => setDisability(e?.target?.value)}
                                className={styles.input}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BasicInfoModal;