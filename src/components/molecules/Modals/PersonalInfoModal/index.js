import React, { useEffect, useState } from "react";
import styles from './Index.module.css';
import ThemeConfig from "@/src/utils/ThemeConfig";
import ToastMessage from "../../TostMessage";

const PersonalInfoModal = ({
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
    const [messageVisible, setMessageVisible] = useState(false);
    const [horoscope, setHoroscope] = useState();
    const [headCraft, setHeadCraft] = useState();
    const [tall, setTall] = useState();
    const [weight, setWeight] = useState();
    const [eyeColor, setEyeColor] = useState();
    const [hairColor, setHairColor] = useState();
    const [skinColor, setSkinColor] = useState();
    const [bodyType, setBodyType] = useState();
    const [haveAChild, setHaveAChild] = useState();
    const [wantToChild, setWantToChild] = useState();
    const [cigarette, setCigarette] = useState();
    const [alcohol, setAlcohol] = useState();
    const [educationStatus, setEducationStatus] = useState();
    const [foreighLanguages, setForeignLanguages] = useState([]);
    const [job, setJob] = useState();
    const [salary, setSalary] = useState();
    const [workStatus, setWorkStatus] = useState();
    const [liveWith, setLiveWith] = useState();
    const [clothingStyle, setClothingStyle] = useState();
    const [notCompromise, setNotCompromise] = useState([]);
    const [community, setCommunity] = useState();
    const [sect, setSect] = useState();
    const [pray, setPray] = useState();
    const [quran, setQuran] = useState();
    const [fasting, setFasting] = useState();
    const [considerIslam, setConsiderIslam] = useState([]);
    const [musicType, setMusicType] = useState([]);
    const [bookType, setBookType] = useState([]);
    const [lookingQuality, setLookingQuality] = useState([]);
    const [hoobies, setHoobies] = useState([]);
    const [yourPersonality, setYourPersonality] = useState([]);
    const [disability, setDisability] = useState();

    const submitOnClick = () => {
        updateUserPersonalInfo({
            horoscope: horoscope,
            headscarf: headCraft,
            tall: tall,
            weight: weight,
            eyeColor: eyeColor,
            hairColor: hairColor,
            skinColor: skinColor,
            bodyType: bodyType,
            haveAChild: haveAChild,
            wantAChild: wantToChild,
            useCigarette: cigarette,
            useAlcohol: alcohol,
            educationStatus: educationStatus,
		    foreignLanguage: foreighLanguages.length > 0 ? foreighLanguages.join(',') : undefined,
            job: job,
            salary: salary,
            workStatus: workStatus,
            liveWith:liveWith,
            clothingStyle: clothingStyle,
            notCompromise: notCompromise.length > 0 ? notCompromise.join(',') : undefined,
            community: community,
            sect: sect,
            doYouPray: pray,
            doYouKnowQuran: quran,
            areYouFasting: fasting,
            considerImportantInIslam: considerIslam.length > 0 ? considerIslam.join(',') : undefined,
            listeningMusicType: musicType.length > 0  ? musicType.join(',') : undefined,
            readingBookTypes: bookType.length > 0 ? bookType.join(',') : undefined,
            lookingQualities: lookingQuality.length > 0 ? lookingQuality.join(',') : undefined,
            yourHobbies: hoobies.length > 0 ? hoobies.join(',') : undefined,
            yourPersonality: yourPersonality.length > 0 ? yourPersonality.join(',') : undefined,
            physicalDisability: disability
        });
    }

    useEffect(() => {
        if(updateUserPersonalInfoComplete) {
            resetUpdateUserPersonalInfoComplete();
            onClose();
            setMessageVisible(true);
        }
    },[updateUserPersonalInfoComplete]);
    

  const handleCheckboxChange = (event) => {
    const value = event.target.value;

    // Eğer checkbox seçiliyse, seçilenler listesine ekle, değilse listeden çıkar
    setForeignLanguages((prevState) =>
      prevState.includes(value)
        ? prevState.filter((lang) => lang !== value)
        : [...prevState, value]
    );
  };

  const handleNotCompromiseChange = (event) => {
    const value = event.target.value;

    // Eğer checkbox seçiliyse, seçilenler listesine ekle, değilse listeden çıkar
    setNotCompromise((prevState) =>
      prevState.includes(value)
        ? prevState.filter((lang) => lang !== value)
        : [...prevState, value]
    );
  };

  const handleConsiderIslamChange = (event) => {
    const value = event.target.value;

    // Eğer checkbox seçiliyse, seçilenler listesine ekle, değilse listeden çıkar
    setConsiderIslam((prevState) =>
      prevState.includes(value)
        ? prevState.filter((lang) => lang !== value)
        : [...prevState, value]
    );
  };

  const handleMusicTypeChange = (event) => {
    const value = event.target.value;

    // Eğer checkbox seçiliyse, seçilenler listesine ekle, değilse listeden çıkar
    setMusicType((prevState) =>
      prevState.includes(value)
        ? prevState.filter((lang) => lang !== value)
        : [...prevState, value]
    );
  };

  const handleBookTypeChange = (event) => {
    const value = event.target.value;

    // Eğer checkbox seçiliyse, seçilenler listesine ekle, değilse listeden çıkar
    setBookType((prevState) =>
      prevState.includes(value)
        ? prevState.filter((lang) => lang !== value)
        : [...prevState, value]
    );
  };

  const handleLookingQualityChange = (event) => {
    const value = event.target.value;

    // Eğer checkbox seçiliyse, seçilenler listesine ekle, değilse listeden çıkar
    setLookingQuality((prevState) =>
      prevState.includes(value)
        ? prevState.filter((lang) => lang !== value)
        : [...prevState, value]
    );
  };

  const handleHoobiesChange = (event) => {
    const value = event.target.value;

    // Eğer checkbox seçiliyse, seçilenler listesine ekle, değilse listeden çıkar
    setHoobies((prevState) =>
      prevState.includes(value)
        ? prevState.filter((lang) => lang !== value)
        : [...prevState, value]
    );
  };

  const handlePersonalityChange = (event) => {
    const value = event.target.value;

    // Eğer checkbox seçiliyse, seçilenler listesine ekle, değilse listeden çıkar
    setYourPersonality((prevState) =>
      prevState.includes(value)
        ? prevState.filter((lang) => lang !== value)
        : [...prevState, value]
    );
  };

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
                            <label>KİŞİSEL BİLGİLER</label>
                        </div>
                        <div style={{ marginLeft: 'auto', cursor: 'pointer'}} onClick={onClose}>
                            X
                        </div>
                    </div>
                    
                    <div className={styles.modalContent}>
                        
                        <div style={{ marginTop: '18px'}}>
                            <label>Burç</label>
                            <select
                                defaultValue={userMe?.detail?.horoscope ?? ""}
                                style={{ marginTop: '10px'}}
								onChange={(e) => setHoroscope(e?.target?.value)}
							>
                                <option value="" disabled>
                                    {userMe?.detail?.horoscope}
                                </option>
								<option value="Koç">Koç</option>
								<option value="Boğa">Boğa</option>
								<option value="İkizler">İkizler</option>
								<option value="Yengeç">Yengeç</option>
								<option value="Aslan">Aslan</option>
								<option value="Başak">Başak</option>
								<option value="Terazi">Terazi</option>
								<option value="Akrep">Akrep</option>
								<option value="Yay">Yay</option>
								<option value="Oğlak">Oğlak</option>
								<option value="Kova">Kova</option>
								<option value="Balık">Balık</option>
							</select>
                        </div>

                        {userMe?.gender === 0 && (
                            <>
                                <div style={{ marginTop: '18px'}}>
                                    <label>Tessetür</label>
                                    <select
                                        defaultValue={userMe?.detail?.headscarf ?? ""}
                                        style={{ marginTop: '10px'}}
                                        onChange={(e) => setHeadCraft(e?.target?.value)}
                                        required
                                    >
                                    <option value="" disabled>
                                        {userMe?.detail?.headscarf}
                                    </option>
                                        <option value="Evet">Evet</option>
                                        <option value="Hayır">Hayır</option>
                                    </select>
                                </div>
                            </>
                        )}

                        <div style={{ marginTop: '18px'}}>
                            <label>Boy </label>
                            <input
                                defaultValue={userMe?.detail?.tall}
                                placeholder="Boy"
                                onChange={(e) => setTall(e?.target?.value)}
                                className={styles.input}
                            />
                        </div>

                        <div style={{ marginTop: '18px'}}>
                            <label>Kilo </label>
                            <input
                                defaultValue={userMe?.detail?.weight}
                                placeholder="Kilo"
                                onChange={(e) => setWeight(e?.target?.value)}
                                className={styles.input}
                            />
                        </div>

                        <div style={{ marginTop: '18px'}}>
                            <label>Göz Rengi </label>
                            <select
                                defaultValue={userMe?.detail?.eye_color ?? ""}
                                style={{ marginTop: '10px'}}
								onChange={(e) => setEyeColor(e?.target?.value)}
							>
                                <option value="" disabled>
                                    {userMe?.detail?.eye_color}
                                </option>
								<option value="Siyah">Siyah</option>
								<option value="Kahverengi">Kahverengi</option>
								<option value="Ela">Ela</option>
								<option value="Yeşil">Yeşil</option>
								<option value="Mavi">Mavi</option>
								<option value="Diğer">Diğer</option>
							</select>
                        </div>

                        <div style={{ marginTop: '18px'}}>
                            <label>Saç rengi </label>
                            <select
                                defaultValue={userMe?.detail?.hair_color ?? ""}
                                style={{ marginTop: '10px'}}
								onChange={(e) => setHairColor(e?.target?.value)}
							>
                                <option value="" disabled>
                                    {userMe?.detail?.hair_color}
                                </option>
								<option value="Siyah">Siyah</option>
								<option value="Kahverengi">Kahverengi</option>
								<option value="Kızıl">Kızıl</option>
								<option value="Kırlaşmış">Kırlaşmış</option>
								<option value="Sarı">Sarı</option>
								<option value="Diğer">Diğer</option>
							</select>
                        </div>

                        <div style={{ marginTop: '18px'}}>
                            <label>Ten rengi </label>
                            <select
                                defaultValue={userMe?.detail?.skin_color ?? ""}
                                style={{ marginTop: '10px'}}
								onChange={(e) => setSkinColor(e?.target?.value)}
							>
                                <option value="" disabled>
                                    {userMe?.detail?.skin_color}
                                </option>
								<option value="Buğday">Buğday</option>
								<option value="Bronz">Bronz</option>
								<option value="Esmer">Esmer</option>
								<option value="Beyaz">Beyaz</option>
							</select>
                        </div>

                        <div style={{ marginTop: '18px'}}>
                            <label>Vücut Tipi</label>
                            <select
                                defaultValue={userMe?.detail?.body_type ?? ""}
                                style={{ marginTop: '10px'}}
								onChange={(e) => setBodyType(e?.target?.value)}
							>
                                <option value="" disabled>
                                    {userMe?.detail?.body_type}
                                </option>
								<option value="İnce">İnce</option>
								<option value="Normal">Normal</option>
								<option value="Atletik">Atletik</option>
								<option value="Balık Etli">Balık Etli</option>
								<option value="Kilolu">Kilolu</option>
							</select>
                        </div>

                        <div style={{ marginTop: '18px'}}>
                            <label>Çocuğunuz Varmı? </label>
                            <select
                                defaultValue={userMe?.detail?.have_a_child ?? ""}
                                style={{ marginTop: '10px'}}
								onChange={(e) => setHaveAChild(e?.target?.value)}
							>
                                <option value="" disabled>
                                    {userMe?.detail?.have_a_child}
                                </option>
								<option value="Çocuğum Yok">Çocuğum Yok</option>
								<option value="Çocuğum var ama benimle yaşamıyor">Çocuğum var ama benimle yaşamıyor</option>
								<option value="Çocuğum benimle yaşıyor">Çocuğum benimle yaşıyor</option>
							</select>
                        </div>

                        <div style={{ marginTop: '18px'}}>
                            <label>Çocuk İstiyormusunuz? </label>
                            <select
                                defaultValue={userMe?.detail?.want_a_child ?? ""}
                                style={{ marginTop: '10px'}}
								onChange={(e) => setWantToChild(e?.target?.value)}
							>
                                <option value="" disabled>
                                    {userMe?.detail?.want_a_child}
                                </option>
								<option value="İstiyorum">İstiyorum</option>
								<option value="Daha sonra istiyorum">Daha sonra istiyorum</option>
								<option value="İstemiyorum">İstemiyorum</option>
								<option value="Henüz düşünmedim">Henüz düşünmedim</option>
							</select>
                        </div>

                        <div style={{ marginTop: '18px'}}>
                            <label>Sigara Kullanıyormusunuz? </label>
                            <select
                                defaultValue={userMe?.detail?.use_cigarette ?? ""}
                                style={{ marginTop: '10px'}}
								onChange={(e) => setCigarette(e?.target?.value)}
							>
                                <option value="" disabled>
                                    {userMe?.detail?.use_cigarette}
                                </option>
								<option value="İçmiyorum">İçmiyorum</option>
								<option value="İçiyorum">İçiyorum</option>
								<option value="Arasıra içiyorum">Arasıra içiyorum</option>
							</select>
                        </div>

                        <div style={{ marginTop: '18px'}}>
                            <label>Alkol Kullanıyormusunuz? </label>
                            <select
                                defaultValue={userMe?.detail?.use_alcohol ?? ""}
                                style={{ marginTop: '10px'}}
								onChange={(e) => setAlcohol(e?.target?.value)}
							>
                                <option value="" disabled>
                                    {userMe?.detail?.use_alcohol}
                                </option>
								<option value="Hiç kullanmadım">Hiç kullanmadım</option>
								<option value="Kullanmıyorum">Kullanmıyorum</option>
								<option value="Ara sıra kullanıyorum">Ara sıra kullanıyorum</option>
								<option value="Kullanıyorum">Kullanıyorum</option>
							</select>
                        </div>

                        <div style={{ marginTop: '18px'}}>
                            <label>Eğitim Durumunuz </label>
                            <select
                                defaultValue={userMe?.detail?.education_status ?? ""}
                                style={{ marginTop: '10px'}}
								onChange={(e) => setEducationStatus(e?.target?.value)}
							>
                                <option value="" disabled>
                                    {userMe?.detail?.education_status}
                                </option>
								<option value="İlk Öğretim">İlk Öğretim</option>
								<option value="Lise">Lise</option>
								<option value="Ön Lisans">Ön Lisans</option>
								<option value="Lisans">Lisans</option>
								<option value="Lisans Üstü">Lisans Üstü</option>
							</select>
                        </div>
                        
                        <div style={{ marginTop: '18px'}}>
                            <label>Yabancı Dilleriniz </label>
                            <div
                                style={{
                                    position: 'relative',
                                    border: '1px solid #ccc',
                                    borderRadius: '5px',
                                    maxHeight: '200px',
                                    overflowY: 'auto',
                                    backgroundColor: '#f9f9f9',
                                    padding: '10px',
                                  }}
                            >
                                <ul>
                                {['İngilizce', 'Almanca', 'Fransızca', 'Arapça', 'İspanyolca', 'Japonca', 'Diğer'].map((lang) => (
                                    <li 
                                        key={lang} 
                                        style={{ padding: '15px 0', marginTop: '-15px', width: '60%' }}>
                                    <input
                                        type="checkbox"
                                        value={lang}
                                        checked={foreighLanguages.includes(lang)}
                                        onChange={handleCheckboxChange}
                                        style={{ marginTop: '-200px'}}
                                    />
                                        <label style={{ marginTop: '-25px'}}>{lang}</label>
                                    </li>
                                ))}
                                </ul>
                            </div>
                        </div>

                        <div style={{ marginTop: '18px'}}>
                            <label>Mesleğiniz </label>
                            <select
                                defaultValue={userMe?.detail?.job ?? ""}
                                style={{ marginTop: '10px'}}
								onChange={(e) => setJob(e?.target?.value)}
							>
                                <option value="" disabled>
                                    {userMe?.detail?.job}
                                </option>
								<option value="İngilizce">Bilişim</option>
								<option value="Almanca">Çevirmen</option>
								<option value="Danışmanlık">Danışmanlık</option>
								<option value="Denizci">Denizci</option>
								<option value="Doktor">Doktor</option>
								<option value="Eczacı">Eczacı</option>
								<option value="Emniyet görevlisi">Emniyet görevlisi</option>
								<option value="Ev kadını">Ev kadını</option>
								<option value="Finans">Finans</option>
								<option value="Halkla ilişkiler">Halkla ilişkiler</option>
								<option value="Hemşire">Hemşire</option>
								<option value="Hostes">Hostes</option>
								<option value="Hukukçu">Hukukçu</option>
								<option value="İlaç sektörü">İlaç sektörü</option>
								<option value="Din adamı">Din adamı</option>
								<option value="İnsan kaynakları">İnsan kaynakları</option>
								<option value="İthalat - İhracat">İthalat - İhracat</option>
								<option value="Manken">Manken</option>
								<option value="Medya mensubu">Medya mensubu</option>
								<option value="Memur">Memur</option>
								<option value="Mimar">Mimar</option>
								<option value="Muhasebe">Muhasebe</option>
								<option value="Mühendis">Mühendis</option>
								<option value="Müzisyen">Müzisyen</option>
								<option value="Ordu mensubu">Ordu mensubu</option>
								<option value="Otomotiv">Otomotiv</option>
								<option value="Öğretim görevlisi">Öğretim görevlisi</option>
								<option value="Öğretmen">Öğretmen</option>
								<option value="Politikacı">Politikacı</option>
								<option value="Psikolog">Psikolog</option>
								<option value="Reklam">Reklam</option>
								<option value="Sağlık hizmetleri">Sağlık hizmetleri</option>
								<option value="Sanatçı">Sanatçı</option>
								<option value="Sanayici">Sanayici</option>
								<option value="Satış - Pazarlama">Satış - Pazarlama</option>
								<option value="Serbest meslek">Serbest meslek</option>
								<option value="Sigortacı">Sigortacı</option>
								<option value="Sporcu">Sporcu</option>
								<option value="Tekstil">Tekstil</option>
								<option value="Ticaret">Ticaret</option>
								<option value="Turizm">Turizm</option>
								<option value="Ulaşım - Taşımacılık">Ulaşım - Taşımacılık</option>
								<option value="Yayıncılık">Yayıncılık</option>
							</select>
                        </div>

                        <div style={{ marginTop: '18px'}}>
                            <label>Geliriniz </label>
                            <select
                                defaultValue={userMe?.detail?.salary ?? ""}
                                style={{ marginTop: '10px'}}
								onChange={(e) => setSalary(e?.target?.value)}
							>
                                <option value="" disabled>
                                    {userMe?.detail?.salary}
                                </option>
								<option value="0-10000 TL">0-10000 TL</option>
								<option value="10000-20000 TL">10000-20000 TL</option>
								<option value="20000-30000 TL">20000-30000 TL</option>
								<option value="30000-40000 TL">30000-40000 TL</option>
								<option value="40000 + TL">40000 + TL</option>
								<option value="Belirtmek İstemiyorum">Belirtmek İstemiyorum</option>
							</select>
                        </div>

                        <div style={{ marginTop: '18px'}}>
                            <label>Çalışma Şekliniz </label>
                            <select
                                defaultValue={userMe?.detail?.work_status ?? ""}
                                style={{ marginTop: '10px'}}
								onChange={(e) => setWorkStatus(e?.target?.value)}
							>
                                <option value="" disabled>
                                    {userMe?.detail?.work_status}
                                </option>
								<option value="Full time">Full time</option>
								<option value="Kendi işim">Kendi işim</option>
								<option value="Part time">Part time</option>
								<option value="Çalışmıyorum">Çalışmıyorum</option>
							</select>
                        </div>

                        <div style={{ marginTop: '18px'}}>
                            <label>Kiminle Yaşıyorsunuz? </label>
                            <select
                                defaultValue={userMe?.detail?.live_with ?? ""}
                                style={{ marginTop: '10px'}}
								onChange={(e) => setLiveWith(e?.target?.value)}
							>
                                <option value="" disabled>
                                    {userMe?.detail?.live_with}
                                </option>
								<option value="Ailemle">Ailemle</option>
								<option value="Ev arkadaşımla">Ev arkadaşımla</option>
								<option value="Yalnız">Yalnız</option>
								<option value="Çocuklarımla">Çocuklarımla</option>
								<option value="Diğer">Diğer</option>
							</select>
                        </div>

                        <div style={{ marginTop: '18px'}}>
                            <label>Giyim Tarzınız </label>
                            <select
                                defaultValue={userMe?.detail?.clothing_style ?? ""}
                                style={{ marginTop: '10px'}}
								onChange={(e) => setClothingStyle(e?.target?.value)}
							>
                                <option value="" disabled>
                                    {userMe?.detail?.clothing_style}
                                </option>
								<option value="Ne bulursam giyerim">Ne bulursam giyerim</option>
								<option value="Bazen dikkat ederim">Bazen dikkat ederim</option>
								<option value="Her zaman şık giyinirim">Her zaman şık giyinirim</option>
							</select>
                        </div>

                        <div style={{ marginTop: '18px'}}>
                            <label>Taviz Vermeyecekleriniz</label>
                            <div
                                style={{
                                position: 'relative',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                maxHeight: '200px',
                                overflowY: 'auto',
                                backgroundColor: '#f9f9f9',
                                padding: '10px',
                                }}
                            >
                                <ul style={{ listStyleType: 'none', padding: '0' }}>
                                {['Namaz', 'Oruç', 'Sadakat', 'Dürüstlük'].map((item) => (
                                    <li key={item} style={{ padding: '15px 0', marginTop: '-15px', width: '60%' }}>
                                        <input
                                            type="checkbox"
                                            value={item}
                                            checked={notCompromise.includes(item)}
                                            onChange={handleNotCompromiseChange}  // Burada onChange fonksiyonu çağrılıyor
                                        />
                                            <label style={{ marginTop: '-25px'}}>{item}</label>
                                    </li>
                                ))}
                                </ul>
                            </div>
                        </div>

                        <div style={{ marginTop: '18px'}}>
                            <label>Cemaat </label>
                            <select
                                defaultValue={userMe?.detail?.community ?? ""}
                                style={{ marginTop: '10px'}}
								onChange={(e) => setCommunity(e?.target?.value)}
							>
                                <option value="" disabled>
                                    {userMe?.detail?.community}
                                </option>
								<option value="Bir çok cemaatle bağlantılarım var">Bir çok cemaatle bağlantılarım var</option>
								<option value="Bir cemaate bağlıyım">Bir cemaate bağlıyım</option>
								<option value="Hiç bir cemaate bağlı değilim">Hiç bir cemaate bağlı değilim</option>
							</select>
                        </div>

                        <div style={{ marginTop: '18px'}}>
                            <label>Mezhebiniz </label>
                            <select
                                defaultValue={userMe?.detail?.sect ?? ""}
                                style={{ marginTop: '10px'}}
								onChange={(e) => setSect(e?.target?.value)}
							>
                                <option value="" disabled>
                                    {userMe?.detail?.sect}
                                </option>
								<option value="Hanefi">Hanefi</option>
								<option value="Şafii">Şafii</option>
								<option value="Hanbeli">Hanbeli</option>
								<option value="Maliki">Maliki</option>
							</select>
                        </div>

                        <div style={{ marginTop: '18px'}}>
                            <label>Namaz Kılıyormusunuz? </label>
                            <select
                                defaultValue={userMe?.detail?.do_you_pray ?? ""}
                                style={{ marginTop: '10px'}}
								onChange={(e) => setPray(e?.target?.value)}
							>
                                <option value="" disabled>
                                    {userMe?.detail?.do_you_pray}
                                </option>
								<option value="Namazlarımı kılıyorum">Namazlarımı kılıyorum</option>
								<option value="Namazlarımı kılmaya çalışıyorum">Namazlarımı kılmaya çalışıyorum</option>
								<option value="Cuma namazlarını kılıyorum">Cuma namazlarını kılıyorum</option>
								<option value="Namazlarımı kılamıyorum">Namazlarımı kılamıyorum</option>
								<option value="Namazlarımı kılmıyorum">Namazlarımı kılmıyorum</option>
							</select>
                        </div>

                        <div style={{ marginTop: '18px'}}>
                            <label>Kuran'ı Kerim Biliyor ve Okuyormusunuz? </label>
                            <select
                                defaultValue={userMe?.detail?.do_you_know_quran ?? ""}
                                style={{ marginTop: '10px'}}
								onChange={(e) => setQuran(e?.target?.value)}
							>
                                <option value="" disabled>
                                    {userMe?.detail?.do_you_know_quran}
                                </option>
								<option value="Okumayı biliyorum ve okuyorum">Okumayı biliyorum ve okuyorum</option>
								<option value="Okumayı biliyorum ama vakit bulamıyorum">Okumayı biliyorum ama vakit bulamıyorum</option>
								<option value="Bilmiyorum ama öğrenmek istiyorum/öğreniyorum">Bilmiyorum ama öğrenmek istiyorum/öğreniyorum</option>
								<option value="Okumayı bilmiyorum">Okumayı bilmiyorum</option>
							</select>
                        </div>

                        <div style={{ marginTop: '18px'}}>
                            <label>Oruç Tutuyormusunuz? </label>
                            <select
                                defaultValue={userMe?.detail?.are_you_fasting ?? ""}
                                style={{ marginTop: '10px'}}
								onChange={(e) => setFasting(e?.target?.value)}
							>
                                <option value="" disabled>
                                    {userMe?.detail?.are_you_fasting}
                                </option>
								<option value="Oruçlarımı eksiksiz tutarım">Oruçlarımı eksiksiz tutarım</option>
								<option value="Oruçlarımı tutmaya çalışıyorum">Oruçlarımı tutmaya çalışıyorum</option>
								<option value="Sağlıksal sorunlarım nedeniyle tutamıyorum">Sağlıksal sorunlarım nedeniyle tutamıyorum</option>
								<option value="Oruçlarımı tutmuyorum">Oruçlarımı tutmuyorum</option>
							</select>
                        </div>

                        <div style={{ marginTop: '18px'}}>
                            <label>İslami ve Alaki Olarak Önemli Gördükleriniz</label>
                            <div
                                style={{
                                position: 'relative',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                maxHeight: '200px',
                                overflowY: 'auto',
                                backgroundColor: '#f9f9f9',
                                padding: '10px',
                                }}
                            >
                                <ul style={{ listStyleType: 'none', padding: '0' }}>
                                {[
                                    "Allah´tan korksun",
                                    "Namazlarını kılsın",
                                    "İslami bilgisi olsun",
                                    "Doğrudan ayrılmasın",
                                    "İslamdan taviz vermesin",
                                    "Yalan söylemesin"
                                ].map((item) => (
                                    <li key={item} style={{ padding: '15px 0', marginTop: '-15px', width: '60%' }}>
                                    <input
                                        type="checkbox"
                                        value={item}
                                        checked={considerIslam.includes(item)}
                                        onChange={handleConsiderIslamChange}  // Burada onChange fonksiyonu çağrılıyor
                                        style={{ marginRight: '8px' }}
                                    />
                                        <label style={{ marginTop: '-25px'}}>{item}</label>
                                    </li>
                                ))}
                                </ul>
                            </div>
                        </div>

                        <div style={{ marginTop: '18px'}}>
                            <label>Dinlediğiniz Müzik Türleri</label>
                            <div
                                style={{
                                position: 'relative',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                maxHeight: '200px',
                                overflowY: 'auto',
                                backgroundColor: '#f9f9f9',
                                padding: '10px',
                                marginTop: '10px'
                                }}
                            >
                                <ul style={{ listStyleType: 'none', padding: '0' }}>
                                {[
                                    "İlahi",
                                    "Arabesk",
                                    "Klasik",
                                    "Türkçe pop",
                                    "Türkçe rock",
                                    "Yabancı pop",
                                    "Yabancı rock",
                                    "Türk halk müziği"
                                ].map((item) => (
                                    <li key={item} style={{ padding: '15px 0', marginTop: '-15px', width: '60%' }}>
                                    <input
                                        type="checkbox"
                                        value={item}
                                        checked={musicType.includes(item)}
                                        onChange={handleMusicTypeChange}  // Burada onChange fonksiyonu çağrılıyor
                                        style={{ marginRight: '8px' }}
                                    />
                                        <label style={{ marginTop: '-25px'}}>{item}</label>
                                    </li>
                                ))}
                                </ul>
                            </div>
                        </div>

                        <div style={{ marginTop: '18px'}}>
                            <label>Okuduğunuz Kitap Türleri</label>
                            <div
                                style={{
                                position: 'relative',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                maxHeight: '200px',
                                overflowY: 'auto',
                                backgroundColor: '#f9f9f9',
                                padding: '10px',
                                marginTop: '10px'
                                }}
                            >
                                <ul style={{ listStyleType: 'none', padding: '0' }}>
                                {[
                                    "Risale-i Nur", 
                                    "Fıkıh", 
                                    "Hadis-i Şerif", 
                                    "Dini hikayeler", 
                                    "Tefsir",
                                    "Roman", 
                                    "Bilim-kurgu", 
                                    "Hikaye-öykü", 
                                    "Psikoloji", 
                                    "Dini", 
                                    "Kişisel gelişim"
                                ].map((item) => (
                                    <li key={item} style={{ padding: '15px 0', marginTop: '-15px', width: '60%' }}>
                                    <input
                                        type="checkbox"
                                        value={item}
                                        checked={bookType.includes(item)}
                                        onChange={handleBookTypeChange}  // Burada onChange fonksiyonu çağrılıyor
                                        style={{ marginRight: '8px' }}
                                    />
                                        <label style={{ marginTop: '-25px'}}>{item}</label>
                                    </li>
                                ))}
                                </ul>
                            </div>
                        </div>

                        <div style={{ marginTop: '18px'}}>
                            <label>Eş Adayında Aradığınız Özellikler</label>
                            <div
                                style={{
                                position: 'relative',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                maxHeight: '200px',
                                overflowY: 'auto',
                                backgroundColor: '#f9f9f9',
                                padding: '10px',
                                marginTop: '10px'
                                }}
                            >
                                <ul style={{ listStyleType: 'none', padding: '0' }}>
                                {[
                                     "Politik uyum", 
                                     "Hoşgörü", 
                                     "Saygı", 
                                     "Cinsel uyum", 
                                     "Eğitim",
                                     "Sevgi", 
                                     "İyi vakit geçirme", 
                                     "Güven", 
                                     "Gelir uyumu"
                                ].map((item) => (
                                    <li key={item} style={{ padding: '15px 0', marginTop: '-15px', width: '60%' }}>
                                    <input
                                        type="checkbox"
                                        value={item}
                                        checked={lookingQuality.includes(item)}
                                        onChange={handleLookingQualityChange}  // Burada onChange fonksiyonu çağrılıyor
                                        style={{ marginRight: '8px' }}
                                    />
                                        <label style={{ marginTop: '-25px'}}>{item}</label>
                                    </li>
                                ))}
                                </ul>
                            </div>
                        </div>

                        <div style={{ marginTop: '18px'}}>
                            <label>Hobileriniz</label>
                            <div
                                style={{
                                position: 'relative',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                maxHeight: '200px',
                                overflowY: 'auto',
                                backgroundColor: '#f9f9f9',
                                padding: '10px',
                                marginTop: '10px'
                                }}
                            >
                                <ul style={{ listStyleType: 'none', padding: '0' }}>
                                {[
                                     "Gece hayatı", 
                                     "Bilgisayar", 
                                     "Dans", 
                                     "Sanat", 
                                     "Televizyon",
                                     "Yemek pişirmek", 
                                     "İnternet", 
                                    "Ev işleri", 
                                    "Müzik", 
                                    "Kitap",
                                    "Sinema", 
                                    "Spor", 
                                    "Tiyatro", 
                                    "Gezme", 
                                    "Arkadaşlık"
                                ].map((item) => (
                                    <li key={item} style={{ padding: '15px 0', marginTop: '-15px', width: '60%' }}>
                                    <input
                                        type="checkbox"
                                        value={item}
                                        checked={hoobies.includes(item)}
                                        onChange={handleHoobiesChange}  // Burada onChange fonksiyonu çağrılıyor
                                        style={{ marginRight: '8px' }}
                                    />
                                        <label style={{ marginTop: '-25px'}}>{item}</label>
                                    </li>
                                ))}
                                </ul>
                            </div>
                        </div>

                        <div style={{ marginTop: '18px'}}>
                            <label>Kişiliğiniz</label>
                            <div
                                style={{
                                position: 'relative',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                maxHeight: '200px',
                                overflowY: 'auto',
                                backgroundColor: '#f9f9f9',
                                padding: '10px',
                                marginTop: '10px'
                                }}
                            >
                                <ul style={{ listStyleType: 'none', padding: '0' }}>
                                {[
                                     "Açık görüşlü", 
                                     "Az konuşan", 
                                     "Arkadaş canlısı", 
                                     "Dindar", 
                                     "Modern",
                                    "Eğlenceli", 
                                    "Dürüst", 
                                    "Ciddi", 
                                    "Kıskanç", 
                                    "Konuşkan",
                                    "Muhafazakar", 
                                    "Sempatik", 
                                    "Zeki", 
                                    "İyimser"
                                ].map((item) => (
                                    <li key={item} style={{ padding: '15px 0', marginTop: '-15px', width: '60%' }}>
                                    <input
                                        type="checkbox"
                                        value={item}
                                        checked={yourPersonality.includes(item)}
                                        onChange={handlePersonalityChange}  // Burada onChange fonksiyonu çağrılıyor
                                        style={{ marginRight: '8px' }}
                                    />
                                        <label style={{ marginTop: '-25px'}}>{item}</label>
                                    </li>
                                ))}
                                </ul>
                            </div>
                        </div>

                        <div style={{ marginTop: '18px'}}>
                            <label>Fiziksel Engel</label>
                            <select
                                defaultValue={userMe?.detail?.physical_disability ?? ""}
                                style={{ marginTop: '10px'}}
								onChange={(e) => setDisability(e?.target?.value)}
							>
                                <option value="" disabled>
                                    {userMe?.detail?.physical_disability}
                                </option>
								<option value="Hayır">Hayır</option>
								<option value="Var; Görme engelliyim">Var; Görme engelliyim</option>
								<option value="Var; İşitme engelliyim">Var; İşitme engelliyim</option>
								<option value="Var; Bedensel engelliyim">Var; Bedensel engelliyim</option>
								<option value="Diğer">Diğer</option>
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
export default PersonalInfoModal;