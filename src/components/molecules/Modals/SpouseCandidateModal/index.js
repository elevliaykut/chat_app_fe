import React, { useEffect, useState } from "react";
import styles from './Index.module.css';
import ThemeConfig from "@/src/utils/ThemeConfig";
import ToastMessage from "../../TostMessage";

const SpouseCandidateModal = ({
    onClose = () => {},
    isLoading = false,
    userUpdateSpouseCandidateInfoComplete = false,
    userUpdateSpouseCandidate = () => {},
    userUpdateSpouseCandidateReset = () => {},
    userMe = {},
    cities = [],
    districts = [],
    getDistricts = []
}) => {
    const [messageVisible, setMessageVisible] = useState(false);
    const [ageRange, setAgeRange] = useState([20, 40]);
    const [about, setAbout] = useState();
    const [tall, setTall] = useState();
    const [weight, setWeight] = useState();
    const [maturity, setMaturity] = useState();
    const [eyeColor, setEyeColor] = useState();
    const [hairColor, setHairColor] = useState();
    const [skinColor, setSkinColor] = useState();
    const [bodyType, setBodyType] = useState();
    const [haveAChild, setHaveAChild] = useState();
    const [wantAChild, setWantAChild] = useState();
    const [cigarette, setCigarette] = useState();
    const [alcohol, setAlcohol] = useState();
    const [educationStatus, setEducationStatus] = useState();
    const [salary, setSalary] = useState();
    const [notCompromise, setNotCompromise] = useState([]);
    const [community, setCommunity] = useState();
    const [sect, setSect] = useState();
    const [pray, setPray] = useState();
    const [lookingQuality, setLookingQuality] = useState([]);
    const [disability, setDisability] = useState();


    const handleMinChange = (e) => {
        const newMin = parseInt(e.target.value);
        if (newMin <= ageRange[1]) setAgeRange([newMin, ageRange[1]]);
    };

    const handleMaxChange = (e) => {
        const newMax = parseInt(e.target.value);
        if (newMax >= ageRange[0]) setAgeRange([ageRange[0], newMax]);
    };

    const submitOnClick = () => {
        userUpdateSpouseCandidate({
            ageRange: ageRange.join(','),
            maritalStatus: maturity,
            haveAChild: haveAChild,
            useCigarette: cigarette,
            useAlcohol: alcohol,
            educationStatus: educationStatus,
            salary: salary,
            notCompromise: notCompromise.length > 0 ? notCompromise.join(',') : undefined,
            community: community,
            sect: sect,
            doYouPray: pray,
            physicalDisability: disability,
            about: about,
            tall: tall,
            weight: weight,
            eyeColor: eyeColor,
            hairColor: hairColor,
            skinColor: skinColor,
            bodyType: bodyType,
            wantAChild: wantAChild,
            lookingQualities: lookingQuality.length > 0 ? lookingQuality.join(',') : undefined,
        });
    }

    useEffect(() => {
        if(userUpdateSpouseCandidateInfoComplete) {
            userUpdateSpouseCandidateReset();
            setMessageVisible(true);
            onClose();
        }
    },[userUpdateSpouseCandidateInfoComplete]);

  const handleNotCompromiseChange = (event) => {
    const value = event.target.value;

    // Eğer checkbox seçiliyse, seçilenler listesine ekle, değilse listeden çıkar
    setNotCompromise((prevState) =>
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

    return (
        <>
            {messageVisible && (
                <>
                    <ToastMessage message="Eş adayı özellikleriniz başarılı bir şekilde kaydedildi."/>
                </>
            )}

            <div className={styles.overlay}>
                <div className={styles.modal}>
                    <div className={styles.modalHeader}>
                        <div>
                            <label>EŞADAYI ÖZELLİKLER</label>
                        </div>
                        <div style={{ marginLeft: 'auto', cursor: 'pointer'}} onClick={onClose}>
                            X
                        </div>
                    </div>
                    
                    <div className={styles.modalContent}>
                    <div style={{ marginTop: '18px' }}>
                        
                        <label>Yaş Aralığı: {ageRange[0]} - {ageRange[1]}</label>
                            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                                <input
                                type="range"
                                min="18"
                                max="99"
                                value={ageRange[0]}
                                onChange={handleMinChange}
                                style={{ flex: 1 }}
                                />
                                <input
                                type="range"
                                min="18"
                                max="99"
                                value={ageRange[1]}
                                onChange={handleMaxChange}
                                style={{ flex: 1 }}
                                />
                            </div>
                        </div>

                        <div style={{ marginTop: '18px'}}>
                            <label>Hakkında </label>
                            <input
                                defaultValue={userMe?.spouse_candidate?.about}
                                placeholder="Hakkında"
                                onChange={(e) => setAbout(e?.target?.value)}
                                className={styles.input}
                            />
                        </div>

                        <div style={{ marginTop: '18px'}}>
                            <label>Boy </label>
                            <input
                                defaultValue={userMe?.spouse_candidate?.tall}
                                placeholder="Boy"
                                onChange={(e) => setTall(e?.target?.value)}
                                className={styles.input}
                            />
                        </div>

                        <div style={{ marginTop: '18px'}}>
                            <label>Kilo </label>
                            <input
                                defaultValue={userMe?.spouse_candidate?.weight}
                                placeholder="Kilo"
                                onChange={(e) => setWeight(e?.target?.value)}
                                className={styles.input}
                            />
                        </div>

                        <div style={{ marginTop: '18px'}}>
                            <label>Medeni Hal</label>
                            <select
                                defaultValue={userMe?.spouse_candidate?.marital_status ?? ""}
                                style={{ marginTop: '10px'}}
								onChange={(e) => setMaturity(e?.target?.value)}
							>
                                <option value="" disabled>
                                    {userMe?.spouse_candidate?.marital_status}
                                </option>
								<option value="Hiç Evlenmemiş">Hiç Evlenmemiş</option>
								<option value="Bekar">Bekar</option>
								<option value="Boşanmış">Boşanmış</option>
								<option value="Eşi Vefat Etmiş">Eşi Vefat Etmiş</option>
							</select>
                        </div>

                        <div style={{ marginTop: '18px'}}>
                            <label>Göz Rengi </label>
                            <select
                                defaultValue={userMe?.spouse_candidate?.eye_color ?? ""}
                                style={{ marginTop: '10px'}}
								onChange={(e) => setEyeColor(e?.target?.value)}
							>
                                <option value="" disabled>
                                    {userMe?.spouse_candidate?.eye_color}
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
                                defaultValue={userMe?.spouse_candidate?.hair_color ?? ""}
                                style={{ marginTop: '10px'}}
								onChange={(e) => setHairColor(e?.target?.value)}
							>
                                <option value="" disabled>
                                    {userMe?.spouse_candidate?.hair_color}
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
                                defaultValue={userMe?.spouse_candidate?.skin_color ?? ""}
                                style={{ marginTop: '10px'}}
								onChange={(e) => setSkinColor(e?.target?.value)}
							>
                                <option value="" disabled>
                                    {userMe?.spouse_candidate?.skin_color}
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
                                defaultValue={userMe?.spouse_candidate?.body_type ?? ""}
                                style={{ marginTop: '10px'}}
								onChange={(e) => setBodyType(e?.target?.value)}
							>
                                <option value="" disabled>
                                    {userMe?.spouse_candidate?.body_type}
                                </option>
								<option value="İnce">İnce</option>
								<option value="Normal">Normal</option>
								<option value="Atletik">Atletik</option>
								<option value="Balık Etli">Balık Etli</option>
								<option value="Kilolu">Kilolu</option>
							</select>
                        </div>

                        <div style={{ marginTop: '18px'}}>
                            <label>Çocuğu Olsun mu? </label>
                            <select
                                defaultValue={userMe?.spouse_candidate?.have_a_child ?? ""}
                                style={{ marginTop: '10px'}}
								onChange={(e) => setHaveAChild(e?.target?.value)}
							>
                                <option value="" disabled>
                                    {userMe?.spouse_candidate?.have_a_child}
                                </option>
								<option value="Olsun">Olsun</option>
								<option value="Olmasın">Olmasın</option>
								<option value="Farketmez">Farketmez</option>
							</select>
                        </div>

                        <div style={{ marginTop: '18px'}}>
                            <label>Çocuk İstesin mi? </label>
                            <select
                                defaultValue={userMe?.spouse_candidate?.want_a_child ?? ""}
                                style={{ marginTop: '10px'}}
								onChange={(e) => setWantAChild(e?.target?.value)}
							>
                                <option value="" disabled>
                                    {userMe?.spouse_candidate?.want_a_child}
                                </option>
								<option value="İstesin">İstesin</option>
								<option value="Daha sonra istesin">Daha sonra istesin</option>
								<option value="İstemesin">İstemesin</option>
                                <option value="Henüz Düşünmesin">Henüz Düşünmesin</option>
							</select>
                        </div>

                        <div style={{ marginTop: '18px'}}>
                            <label>Tanışacağınız üyenin sigara kullanmasıyla ilgili ne düşünürsünüz? </label>
                            <select
                                defaultValue={userMe?.spouse_candidate?.use_cigarette ?? ""}
                                style={{ marginTop: '10px'}}
								onChange={(e) => setCigarette(e?.target?.value)}
							>
                                <option value="" disabled>
                                    {userMe?.spouse_candidate?.use_cigarette}
                                </option>
								<option value="İçsin">İçsin</option>
								<option value="İçmesin">İçmesin</option>
								<option value="Farketmez">Farketmez</option>
							</select>
                        </div>

                        <div style={{ marginTop: '18px'}}>
                            <label>Tanışacağınız üyenin alkol kullanmasıyla ilgili ne düşünürsünüz?</label>
                            <select
                                defaultValue={userMe?.spouse_candidate?.use_alcohol ?? ""}
                                style={{ marginTop: '10px'}}
								onChange={(e) => setAlcohol(e?.target?.value)}
							>
                                <option value="" disabled>
                                    {userMe?.spouse_candidate?.use_alcohol}
                                </option>
								<option value="Kesinlikle içmesin">Kesinlikle içmesin</option>
								<option value="Arasıra içsin">Arasıra içsin</option>
								<option value="İçmesin">İçmesin</option>
								<option value="Farketmez">Farketmez</option>
							</select>
                        </div>

                        <div style={{ marginTop: '18px'}}>
                            <label>Tanışacağınız üyenin mezununiyet derecesi sizin için ne kadar önemli?</label>
                            <select
                                defaultValue={userMe?.spouse_candidate?.education_status ?? ""}
                                style={{ marginTop: '10px'}}
								onChange={(e) => setEducationStatus(e?.target?.value)}
							>
                                <option value="" disabled>
                                    {userMe?.spouse_candidate?.education_status}
                                </option>
								<option value="İlk Öğretim">İlk Öğretim</option>
								<option value="Lise">Lise</option>
								<option value="Ön Lisans">Ön Lisans</option>
								<option value="Lisans">Lisans</option>
								<option value="Lisans Üstü">Lisans Üstü</option>
								<option value="Farketmez">Farketmez</option>
							</select>
                        </div>

                        <div style={{ marginTop: '18px'}}>
                            <label>Tanışacağınız üyenin maddi durumu sizin için ne kadar önemli?</label>
                            <select
                                defaultValue={userMe?.spouse_candidate?.salary ?? ""}
                                style={{ marginTop: '10px'}}
								onChange={(e) => setSalary(e?.target?.value)}
							>
                                <option value="" disabled>
                                    {userMe?.spouse_candidate?.salary}
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
                            <label>Taviz vermeyecekleri </label>
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
                                        style={{ marginRight: '8px' }}
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
                                defaultValue={userMe?.spouse_candidate?.community ?? ""}
                                style={{ marginTop: '10px'}}
								onChange={(e) => setCommunity(e?.target?.value)}
							>
                                <option value="" disabled>
                                    {userMe?.spouse_candidate?.community}
                                </option>
								<option value="Cemaatlerle ilişkileri olsun">Cemaatlerle ilişkileri olsun</option>
								<option value="Bir cemaate bağlı olsun">Bir cemaate bağlı olsun</option>
								<option value="Cemaatlerle ilişiği olmasın">Cemaatlerle ilişiği olmasın</option>
								<option value="Farketmez">Farketmez</option>
							</select>
                        </div>

                        <div style={{ marginTop: '18px'}}>
                            <label>Mezhebi </label>
                            <select
                                defaultValue={userMe?.spouse_candidate?.sect ?? ""}
                                style={{ marginTop: '10px'}}
								onChange={(e) => setSect(e?.target?.value)}
							>
                                <option value="" disabled>
                                    {userMe?.spouse_candidate?.sect}
                                </option>
								<option value="Hanefi">Hanefi</option>
								<option value="Şafii">Şafii</option>
								<option value="Hanbeli">Hanbeli</option>
								<option value="Maliki">Maliki</option>
								<option value="Farketmez">Farketmez</option>
							</select>
                        </div>

                        <div style={{ marginTop: '18px'}}>
                            <label>Namaz kılsın mı? </label>
                            <select
                                defaultValue={userMe?.spouse_candidate?.do_you_pray ?? ""}
                                style={{ marginTop: '10px'}}
								onChange={(e) => setPray(e?.target?.value)}
							>
                                <option value="" disabled>
                                    {userMe?.spouse_candidate?.do_you_pray}
                                </option>
								<option value="Namazlarını kılsın">Namazlarını kılsın</option>
								<option value="Namazlarını kılmaya çalışsın">Namazlarını kılmaya çalışsın</option>
								<option value="Cuma namazlarını kılsın">Cuma namazlarını kılsın</option>
								<option value="Farketmez">Farketmez</option>
							</select>
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
                            <label>Fiziksel Engel</label>
                            <select
                                defaultValue={userMe?.spouse_candidate?.physical_disability ?? ""}
                                style={{ marginTop: '10px'}}
								onChange={(e) => setDisability(e?.target?.value)}
							>
                                <option value="" disabled>
                                    {userMe?.spouse_candidate?.physical_disability}
                                </option>
								<option value="Hayır">Hayır</option>
								<option value="Evet; Görme engelli">Evet; Görme engelli</option>
								<option value="Evet; İşitme engelli">Evet; İşitme engelli</option>
								<option value="Evet; Bedensel engelli">Evet; Bedensel engelli</option>
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
export default SpouseCandidateModal;