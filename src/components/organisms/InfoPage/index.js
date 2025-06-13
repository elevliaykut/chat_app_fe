import React, { useEffect, useState } from "react";
import styles from './Index.module.css';
import TopBanner from "../../molecules/TopBanner";
import ThemeConfig from "@/src/utils/ThemeConfig";
import FooterBanner from "../../molecules/FooterBanner";

const InfoPage = ({
    getUserMe = () => {},
    userLogout = () => {},
    getNotifications = () => {},
    notifications = {},
    userMe = {},
    userMeLoading = false,
    isLoading = false,
    notificationIsLoading = false,
    getCities = () => {},
    cities = [],
    districts = [],
    getDistricts = [],
    definitionIsLoading = false,
    updateUserPersonalInfoComplete = false,
    updateUserPersonalInfo = () => {},
    resetUpdateUserPersonalInfoComplete = () => {}
}) => {
    const [userMeVisible, setUserMeVisible] = useState(false);

    const [infoOne, setInfoOne] = useState(true);
    const [infoTwo, setInfoTwo] = useState(false);
    const [infoThree, setInfoThree] = useState(false);
    const [infoFour, setInfoFour] = useState(false);
    const [infoFive, setInfoFive] = useState(false);

    const [menuOne, setMenuOne] = useState(true);
    const [menuTwo, setMenuTwo] = useState(false);
    const [menuThree, setMenuThree] = useState(false);
    const [menuFour, setMenuFour] = useState(false);
    const [menuFive, setMenuFive] = useState(false);

    const [name, setName] = useState();
    const [surname, setSurname] = useState();
    const [age, setAge] = useState();
    const [phone, setPhone] = useState();

    const [tall, setTall] = useState();
    const [maritalStatus, setMaritalStatus] = useState(1);
    const [weight, setWeight] = useState();
    const [headCraft, setHeadCraft] = useState("Evet");
    const [cityId, setCityId] = useState();
    const [districtId, setDistrictId] = useState();
    const [eyeColor, setEyeColor] = useState("Siyah");
    const [bodyType, setBodyType] = useState("İnce");
    const [hairColor, setHairColor] = useState("Siyah");
    const [educationStatus, setEducationStatus] = useState("İlk Öğretim");
    const [skinColor, setSkinColor] = useState("Buğday");
    const [disability, setDisability] = useState("Hayır");
    const [haveAChild, setHaveAChild] = useState("Çocuğum Yok");
    const [cigarette, setCigarette] = useState("İçmiyorum");
    const [wantToChild, setWantToChild] = useState("İstiyorum");
    const [alcohol, setAlcohol] = useState("Hiç kullanmadım");
    const [liveWith, setLiveWith] = useState("Ailemle");
    const [salary, setSalary] = useState("0-10000 TL");
    const [job, setJob] = useState("Bilişim");
    const [workStatus, setWorkStatus] = useState("Full time");

    const [formVisible, setFormVisible] = useState(false);

    useEffect(() => {
        if(!definitionIsLoading) {
            setFormVisible(true);
        }
    },[definitionIsLoading]);

    const formSubmitOnClick = () => {
        updateUserPersonalInfo({
            name: name,
            surname: surname,
            age: age,
            phone: phone,
            tall: tall,
            maritalStatus: maritalStatus,
            weight: weight,
            headscarf: headCraft,
            cityId: cityId,
            districtId: districtId,
            eyeColor: eyeColor,
            bodyType: bodyType,
            hairColor: hairColor,
            educationStatus: educationStatus,
            skinColor: skinColor,
            physicalDisability: disability,
            haveAChild: haveAChild,
            useCigarette: cigarette,
            wantAChild: wantToChild,
            useAlcohol: alcohol,
            liveWith: liveWith,
            salary: salary,
            job: job,
            workStatus: workStatus
        });
    }

    useEffect(() => {
        if(updateUserPersonalInfoComplete) {
            resetUpdateUserPersonalInfoComplete();
            window.location = '/home';
        }
    },[updateUserPersonalInfoComplete]);

    const cityOnChange = (e) => {
        getDistricts({ cityId: e?.target?.value });
        setCityId(e?.target?.value);
    }

    const districtOnChange = (e) => {
        setDistrictId(e?.target?.value);
    }

    useEffect(() => {
        getCities();
    },[]);

    useEffect(() => {
        if(!userMeLoading) {
            setUserMeVisible(true);
        }
    },[userMeLoading]);

    useEffect(() => {
        getUserMe();
        getNotifications({ read: false });
    },[]);

    const formOneNextOnClick = () => {
        
        if(name === undefined) {
            alert('İsim Girin!');
            return;
        };

        if(surname === undefined) {
            alert('Soyisim Girin!');
            return;
        };

        if(age === undefined) {
            alert('Yaş Girin!');
            return;
        };

        if(phone === undefined) {
            alert('Telefon Girin!');
            return;
        };

        if(tall === undefined) {
            alert('Boyunuzu Girin!');
            return;
        };

        if(weight === undefined) {
            alert('Kilonuzu Girin!');
            return;
        };
        
        setInfoOne(false);
        setInfoTwo(true);
        setInfoThree(false);
        setInfoFour(false);
        setInfoFive(false);

        setMenuOne(true);
        setMenuTwo(true);
        setMenuThree(false);
        setMenuFour(false);
        setMenuFive(false);
    }

    const formTwoNextOnClick = () => {
        setInfoOne(false);
        setInfoTwo(false);
        setInfoThree(true);
        setInfoFour(false);
        setInfoFive(false);

        setMenuOne(true);
        setMenuTwo(true);
        setMenuThree(true);
        setMenuFour(false);
        setMenuFive(false);
    }

    const formTwoBackOnClick = () => {
        setInfoOne(true);
        setInfoTwo(false);
        setInfoThree(false);
        setInfoFour(false);
        setInfoFive(false);
        
        setMenuOne(true);
        setMenuTwo(false);
        setMenuThree(false);
        setMenuFour(false);
        setMenuFive(false);
    }

    const formThreeNextOnClick = () => {
        setInfoOne(false);
        setInfoTwo(false);
        setInfoThree(false);
        setInfoFour(true);
        setInfoFive(false);

        setMenuOne(true);
        setMenuTwo(true);
        setMenuThree(true);
        setMenuFour(true);
        setMenuFive(false);
    }

    const formThreeBackOnClick = () => {
        setInfoOne(false);
        setInfoTwo(true);
        setInfoThree(false);
        setInfoFour(false);
        setInfoFive(false);

        setMenuOne(true);
        setMenuTwo(true);
        setMenuThree(false);
        setMenuFour(false);
        setMenuFive(false);
    }

    const formFourNextOnClick = () => {
        setInfoOne(false);
        setInfoTwo(false);
        setInfoThree(false);
        setInfoFour(false);
        setInfoFive(true);

        setMenuOne(true);
        setMenuTwo(true);
        setMenuThree(true);
        setMenuFour(true);
        setMenuFive(true);
    }

    const formFourBackOnClick = () => {
        setInfoOne(false);
        setInfoTwo(false);
        setInfoThree(true);
        setInfoFour(false);
        setInfoFive(false);

        setMenuOne(true);
        setMenuTwo(true);
        setMenuThree(true);
        setMenuFour(false);
        setMenuFive(false);
    }

    const formFiveBackOnClick = () => {
        setInfoOne(false);
        setInfoTwo(false);
        setInfoThree(false);
        setInfoFour(true);
        setInfoFive(false);

        setMenuOne(true);
        setMenuTwo(true);
        setMenuThree(true);
        setMenuFour(true);
        setMenuFive(false);
    }

    return(
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
                <div className={styles.wrapper}>
                    <div className={styles.title}>
                        <h1>Kullanıcı Bilgileriniz</h1>
                        <label>Adımları Doğru ve eksiksiz bir şekilde tamamlayınız.</label>
                    </div>
        
                        {formVisible && (
                            <>
                                <div className={styles.menuContainer}>
                            
                                    <div className={styles.menus}>
                                        <div className={styles.episode}>
                                            <div 
                                                style={{ 
                                                        backgroundColor: '#ec3b8c', 
                                                        height: '3px',
                                                        width: '100%',
                                                        marginTop: '37px',
                                                }}/>
                                            <div className={styles.circle} style={{ backgroundColor: ThemeConfig.purple}}>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke={ThemeConfig.white}>
                                                        <circle cx="12" cy="8" r="4" />
                                                        <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                                                    </svg>

                                                </div>
                                            </div>
                                        </div>
                                        <label>Kişisel Bilgiler 1</label>
                                    </div>
                                    <div className={styles.menus}>
                                        <div className={styles.episode}>
                                            <div 
                                                style={{ 
                                                        backgroundColor: menuTwo ? ThemeConfig.purple : '#eee', 
                                                        height: '3px',
                                                        width: '100%',
                                                        marginTop: '37px'
                                                }}/>
                                            <div className={styles.circle} style={{ backgroundColor: menuTwo ? ThemeConfig.purple : ThemeConfig.white}}>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke={menuTwo ? ThemeConfig.white : ThemeConfig.purple}>
                                                        <circle cx="12" cy="8" r="4" />
                                                        <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                                                    </svg>

                                                </div>
                                            </div>
                                        </div>
                                        <label>Kişisel Bilgiler 2</label>
                                    </div>
                                    <div className={styles.menus}>
                                        <div className={styles.episode}>
                                            <div 
                                                style={{ 
                                                        backgroundColor: menuThree ? ThemeConfig.purple : '#eee', 
                                                        height: '3px',
                                                        width: '100%',
                                                        marginTop: '37px'
                                                }}/>
                                            <div className={styles.circle} style={{ backgroundColor: menuThree ? ThemeConfig.purple : ThemeConfig.white }}>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke={menuThree ? ThemeConfig.white : ThemeConfig.purple}>
                                                        <circle cx="12" cy="8" r="4" />
                                                        <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                                                    </svg>

                                                </div>
                                            </div>
                                        </div>
                                        <label>Kişisel Bilgiler 3</label>
                                    </div>
                                    <div className={styles.menus}>
                                        <div className={styles.episode}>
                                            <div 
                                                style={{ 
                                                        backgroundColor: menuFour ? ThemeConfig.purple : '#eee', 
                                                        height: '3px',
                                                        width: '100%',
                                                        marginTop: '37px'
                                                }}/>
                                            <div className={styles.circle} style={{ backgroundColor: menuFour ? ThemeConfig.purple : ThemeConfig.white}}>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke={menuFour ? ThemeConfig.white : ThemeConfig.purple}>
                                                        <circle cx="12" cy="8" r="4" />
                                                        <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                                                    </svg>

                                                </div>
                                            </div>
                                        </div>
                                        <label>Kişisel Bilgiler 4</label>
                                    </div>
                                    <div className={styles.menus}>
                                        <div className={styles.episode}>
                                            <div 
                                                style={{ 
                                                        backgroundColor: menuFive ? ThemeConfig.purple : '#eee', 
                                                        height: '3px',
                                                        width: '100%',
                                                        marginTop: '37px'
                                                }}/>
                                            <div className={styles.circle} style={{ backgroundColor: menuFive ? ThemeConfig.purple : ThemeConfig.white }}>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke={menuFive ? ThemeConfig.white : ThemeConfig.purple}>
                                                        <circle cx="12" cy="8" r="4" />
                                                        <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                                                    </svg>

                                                </div>
                                            </div>
                                        </div>
                                        <label>Kişisel Bilgiler 5</label>
                                    </div>
                                </div>

                                {infoOne && (
                                    <>
                                        <div className={styles.formOne}>
                                            
                                            <div className={styles.twoInputLineEpisode}>
                                                
                                                <div className={styles.leftInputEpisode}>
                                                    <label>İsim</label>
                                                    <input
                                                        defaultValue={name}
                                                        placeholder="İsim"
                                                        onChange={(e) => setName(e?.target?.value)}
                                                        className={styles.input}
                                                    />
                                                </div>
                                                <div className={styles.rightInputEpisode}>
                                                    <label>Soyisim</label>
                                                    <input
                                                        defaultValue={surname}
                                                        placeholder="Soyisim"
                                                        onChange={(e) => setSurname(e?.target?.value)}
                                                        className={styles.input}
                                                    />
                                                </div>
                                            </div>

                                            <div className={styles.twoInputLineEpisode} style={{ marginTop: '18px'}}>
                                                
                                                <div className={styles.leftInputEpisode}>
                                                    <label>Yaş</label>
                                                    <input
                                                        defaultValue={age}
                                                        placeholder="Yaş"
                                                        onChange={(e) => setAge(e?.target?.value)}
                                                        className={styles.input}
                                                    />
                                                </div>
                                                <div className={styles.rightInputEpisode}>
                                                    <label>Telefon</label>
                                                    <input
                                                        defaultValue={phone}
                                                        placeholder="Telefon"
                                                        onChange={(e) => setPhone(e?.target?.value)}
                                                        className={styles.input}
                                                    />
                                                </div>
                                            </div>

                                            <div className={styles.twoInputLineEpisode} style={{ marginTop: '18px'}}>
                                                
                                                <div className={styles.leftInputEpisode}>
                                                    <label>Boyunuz</label>
                                                    <input
                                                        defaultValue={tall}
                                                        placeholder="Boyunuz"
                                                        onChange={(e) => setTall(e?.target?.value)}
                                                        className={styles.input}
                                                    />
                                                </div>

                                                <div className={styles.rightInputEpisode}>
                                                    <label>Medeni Haliniz</label>
                                                    <select
                                                        onChange={(e) => setMaritalStatus(e?.target?.value)}
                                                        style={{ marginTop: '5px'}}
                                                    >
                                                        <option disabled>{maritalStatus}</option>
                                                        <option value="1">Hiç Evlenmemiş</option>
                                                        <option value="2">Bekar</option>
                                                        <option value="3">Boşanmış</option>
                                                        <option value="4">Eşi Vefat Etmiş</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className={styles.singleInputEpisode} style={{ marginTop: '18px'}}>
                                                    <label>Kilo</label>
                                                    <input
                                                        defaultValue={weight}
                                                        placeholder="Kilo"
                                                        onChange={(e) => setWeight(e?.target?.value)}
                                                        className={styles.input}
                                                    />
                                            </div>

                                            {userMe?.gender === 0 && (
                                                <>
                                                    <div className={styles.singleInputEpisode} style={{ marginTop: '18px'}}>
                                                        <label>Tessetür Kullanıyormusunuz</label>
                                                        <select
                                                            style={{ marginTop: '5px'}}
                                                            onChange={(e) => setHeadCraft(e?.target?.value)}
                                                            required
                                                        >
                                                            <option disabled>{headCraft}</option>
                                                            <option value="Evet">Evet</option>
                                                            <option value="Hayır">Hayır</option>
                                                        </select>
                                                    </div>
                                                </>
                                            )}
                                            
                                            <div className={styles.buttonEpisode}>
                                                <div className={styles.nextButton}>
                                                    <button
                                                        onClick={formOneNextOnClick}
                                                        style={{
                                                            width: '120px',
                                                            height: '40px',
                                                            borderRadius: '16px',
                                                            backgroundColor: ThemeConfig.purple,
                                                            color: ThemeConfig.white,
                                                            border: 'none'
                                                        }}
                                                    >
                                                        İleri
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}

                                {infoTwo && (
                                    <>
                                        <div className={styles.formTwo}>
                                            <div className={styles.twoInputLineEpisode}>
                                                
                                                <div className={styles.leftInputEpisode}>
                                                    <label>Yaşadığınız İl </label>
                                                    <select
                                                        style={{ marginTop: '5px'}}
                                                        onChange={cityOnChange}
                                                        required
                                                    >
                                                        {cities?.map(item => (
                                                            <option key={item.id} value={item.id}>
                                                                {item.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className={styles.rightInputEpisode}>
                                                    <label>Yaşadığınız İlçe </label>
                                                    <select
                                                        style={{ marginTop: '5px'}}
                                                        onChange={districtOnChange}
                                                        required
                                                    >
                                                        {districts?.map(item => (
                                                            <>
                                                                <option value={item?.id}>{item.name}</option>
                                                            </>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className={styles.buttonEpisode}>
                                                    <div className={styles.backButton}>
                                                        <button
                                                            onClick={formTwoBackOnClick}
                                                            style={{
                                                                width: '120px',
                                                                height: '40px',
                                                                borderRadius: '16px',
                                                                backgroundColor: ThemeConfig.white,
                                                                color: ThemeConfig.purple,
                                                                border: '2px solid #ec3b8c'
                                                            }}
                                                        >
                                                            Geri
                                                        </button>
                                                    </div>
                                                    <div className={styles.nextButton}>
                                                        <button
                                                            onClick={formTwoNextOnClick}
                                                            style={{
                                                                width: '120px',
                                                                height: '40px',
                                                                borderRadius: '16px',
                                                                backgroundColor: ThemeConfig.purple,
                                                                color: ThemeConfig.white,
                                                                border: 'none'
                                                            }}
                                                        >
                                                            İleri
                                                        </button>
                                                    </div>
                                            </div>
                                        </div>
                                    </>
                                )}

                                {infoThree && (
                                    <>
                                        <div className={styles.formThree}>
                                    
                                            <div className={styles.twoInputLineEpisode}>
                                                <div className={styles.leftInputEpisode}>
                                                    <label>Göz Renginiz</label>
                                                    <select
                                                        onChange={(e) => setEyeColor(e?.target?.value)}
                                                        style={{ marginTop: '5px'}}
                                                    >   
                                                        <option disabled>{eyeColor}</option>
                                                        <option value="Siyah">Siyah</option>
                                                        <option value="Kahverengi">Kahverengi</option>
                                                        <option value="Ela">Ela</option>
                                                        <option value="Yeşil">Yeşil</option>
                                                        <option value="Mavi">Mavi</option>
                                                        <option value="Diğer">Diğer</option>
                                                    </select>
                                                </div>
                                                <div className={styles.rightInputEpisode}>
                                                    <label>Vucut Tipiniz</label>
                                                    <select
                                                        onChange={(e) => setBodyType(e?.target?.value)}
                                                        style={{ marginTop: '5px'}}
                                                    >
                                                        <option disabled>{bodyType}</option>
                                                        <option value="İnce">İnce</option>
                                                        <option value="Normal">Normal</option>
                                                        <option value="Atletik">Atletik</option>
                                                        <option value="Balık Etli">Balık Etli</option>
                                                        <option value="Kilolu">Kilolu</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className={styles.twoInputLineEpisode} style={{ marginTop: '18px'}}>
                                                <div className={styles.leftInputEpisode}>
                                                    <label>Saç Renginiz</label>
                                                    <select
                                                        onChange={(e) => setHairColor(e?.target?.value)}
                                                        style={{ marginTop: '5px'}}
                                                    >
                                                        <option disabled>{hairColor}</option>
                                                        <option value="Siyah">Siyah</option>
                                                        <option value="Kahverengi">Kahverengi</option>
                                                        <option value="Kızıl">Kızıl</option>
                                                        <option value="Kırlaşmış">Kırlaşmış</option>
                                                        <option value="Sarı">Sarı</option>
                                                        <option value="Diğer">Diğer</option>
                                                    </select>
                                                </div>
                                                <div className={styles.rightInputEpisode}>
                                                    <label>Eğitim Durumunuz</label>
                                                        <select
                                                            onChange={(e) => setEducationStatus(e?.target?.value)}
                                                            style={{ marginTop: '5px'}}
                                                        >
                                                        <option disabled>{educationStatus}</option>
                                                        <option value="İlk Öğretim">İlk Öğretim</option>
                                                        <option value="Lise">Lise</option>
                                                        <option value="Ön Lisans">Ön Lisans</option>
                                                        <option value="Lisans">Lisans</option>
                                                        <option value="Lisans Üstü">Lisans Üstü</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className={styles.singleInputEpisode} style={{ marginTop: '18px'}}>
                                                    <label>Ten renginiz</label>
                                                    <select
                                                        onChange={(e) => setSkinColor(e?.target?.value)}
                                                        style={{ marginTop: '5px'}}
                                                    >
                                                        <option disabled>{skinColor}</option>
                                                        <option value="Buğday">Buğday</option>
                                                        <option value="Bronz">Bronz</option>
                                                        <option value="Esmer">Esmer</option>
                                                        <option value="Beyaz">Beyaz</option>
                                                    </select>
                                            </div>

                                            <div className={styles.singleInputEpisode} style={{ marginTop: '18px'}}>
                                                    <label>Fiziksel Engel</label>
                                                    <select
                                                        onChange={(e) => setDisability(e?.target?.value)}
                                                        style={{ marginTop: '5px'}}
                                                    >
                                                        <option disabled>{disability}</option>
                                                        <option value="Hayır">Hayır</option>
                                                        <option value="Var; Görme engelliyim">Var; Görme engelliyim</option>
                                                        <option value="Var; İşitme engelliyim">Var; İşitme engelliyim</option>
                                                        <option value="Var; Bedensel engelliyim">Var; Bedensel engelliyim</option>
                                                        <option value="Diğer">Diğer</option>
                                                    </select>
                                            </div>

                                            <div className={styles.buttonEpisode}>
                                                    <div className={styles.backButton}>
                                                        <button
                                                            onClick={formThreeBackOnClick}
                                                            style={{
                                                                width: '120px',
                                                                height: '40px',
                                                                borderRadius: '16px',
                                                                backgroundColor: ThemeConfig.white,
                                                                color: ThemeConfig.purple,
                                                                border: '2px solid #ec3b8c'
                                                            }}
                                                        >
                                                            Geri
                                                        </button>
                                                    </div>
                                                    <div className={styles.nextButton}>
                                                        <button
                                                            onClick={formThreeNextOnClick}
                                                            style={{
                                                                width: '120px',
                                                                height: '40px',
                                                                borderRadius: '16px',
                                                                backgroundColor: ThemeConfig.purple,
                                                                color: ThemeConfig.white,
                                                                border: 'none'
                                                            }}
                                                        >
                                                            İleri
                                                        </button>
                                                    </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                        
                                {infoFour && (
                                    <>
                                        <div className={styles.formFour}>
                                    
                                            <div className={styles.twoInputLineEpisode}>
                                                <div className={styles.leftInputEpisode}>
                                                    <label>Çocuğunuz Varmı? </label>
                                                    <select
                                                        onChange={(e) => setHaveAChild(e?.target?.value)}
                                                        style={{ marginTop: '5px'}}
                                                    >
                                                        <option disabled>{haveAChild}</option>
                                                        <option value="Çocuğum Yok">Çocuğum Yok</option>
                                                        <option value="Çocuğum var ama benimle yaşamıyor">Çocuğum var ama benimle yaşamıyor</option>
                                                        <option value="Çocuğum benimle yaşıyor">Çocuğum benimle yaşıyor</option>
                                                    </select>
                                                </div>
                                                <div className={styles.rightInputEpisode}>
                                                    <label>Sigara Kullanıyormusunuz? </label>
                                                    <select
                                                        onChange={(e) => setCigarette(e?.target?.value)}
                                                        style={{ marginTop: '5px'}}
                                                    >
                                                        <option disabled>{cigarette}</option>
                                                        <option value="İçmiyorum">İçmiyorum</option>
                                                        <option value="İçiyorum">İçiyorum</option>
                                                        <option value="Arasıra içiyorum">Arasıra içiyorum</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className={styles.twoInputLineEpisode} style={{ marginTop: '18px'}}>
                                                <div className={styles.leftInputEpisode}>
                                                    <label>Çocuk İstiyormusunuz? </label>
                                                    <select
                                                        onChange={(e) => setWantToChild(e?.target?.value)}
                                                        style={{ marginTop: '5px'}}
                                                    >
                                                        <option disabled>{wantToChild}</option>
                                                        <option value="İstiyorum">İstiyorum</option>
                                                        <option value="Daha sonra istiyorum">Daha sonra istiyorum</option>
                                                        <option value="İstemiyorum">İstemiyorum</option>
                                                        <option value="Henüz düşünmedim">Henüz düşünmedim</option>
                                                    </select>
                                                </div>
                                                <div className={styles.rightInputEpisode}>
                                                    <label>Alkol Kullanıyormusunuz? </label>
                                                    <select
                                                        onChange={(e) => setAlcohol(e?.target?.value)}
                                                        style={{ marginTop: '5px'}}
                                                    >
                                                        <option disabled>{alcohol}</option>
                                                        <option value="Hiç kullanmadım">Hiç kullanmadım</option>
                                                        <option value="Kullanmıyorum">Kullanmıyorum</option>
                                                        <option value="Ara sıra kullanıyorum">Ara sıra kullanıyorum</option>
                                                        <option value="Kullanıyorum">Kullanıyorum</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className={styles.singleInputEpisode} style={{ marginTop: '18px'}}>
                                                <label>Kiminle Yaşıyorsunuz? </label>
                                                <select
                                                    onChange={(e) => setLiveWith(e?.target?.value)}
                                                    style={{ marginTop: '5px'}}
                                                >
                                                    <option disabled>{liveWith}</option>
                                                    <option value="Ailemle">Ailemle</option>
                                                    <option value="Ev arkadaşımla">Ev arkadaşımla</option>
                                                    <option value="Yalnız">Yalnız</option>
                                                    <option value="Çocuklarımla">Çocuklarımla</option>
                                                    <option value="Diğer">Diğer</option>
                                                </select>
                                            </div>

                                            <div className={styles.buttonEpisode}>
                                                    <div className={styles.backButton}>
                                                        <button
                                                            onClick={formFourBackOnClick}
                                                            style={{
                                                                width: '120px',
                                                                height: '40px',
                                                                borderRadius: '16px',
                                                                backgroundColor: ThemeConfig.white,
                                                                color: ThemeConfig.purple,
                                                                border: '2px solid #ec3b8c'
                                                            }}
                                                        >
                                                            Geri
                                                        </button>
                                                    </div>
                                                    <div className={styles.nextButton}>
                                                        <button
                                                            onClick={formFourNextOnClick}
                                                            style={{
                                                                width: '120px',
                                                                height: '40px',
                                                                borderRadius: '16px',
                                                                backgroundColor: ThemeConfig.purple,
                                                                color: ThemeConfig.white,
                                                                border: 'none'
                                                            }}
                                                        >
                                                            İleri
                                                        </button>
                                                    </div>
                                            </div>
                                        </div>
                                    </>
                                )}

                                {infoFive && (
                                    <>
                                        <div className={styles.formFive}>
                                            <div className={styles.twoInputLineEpisode}>
                                                <div className={styles.leftInputEpisode}>
                                                    <label>Geliriniz </label>
                                                    <select
                                                        onChange={(e) => setSalary(e?.target?.value)}
                                                        style={{ marginTop: '5px'}}
                                                    >
                                                        <option disabled>{salary}</option>
                                                        <option value="0-10000 TL">0-10000 TL</option>
                                                        <option value="10000-20000 TL">10000-20000 TL</option>
                                                        <option value="20000-30000 TL">20000-30000 TL</option>
                                                        <option value="30000-40000 TL">30000-40000 TL</option>
                                                        <option value="40000 + TL">40000 + TL</option>
                                                        <option value="Belirtmek İstemiyorum">Belirtmek İstemiyorum</option>
                                                    </select>
                                                </div>
                                                
                                                <div className={styles.rightInputEpisode}>
                                                    <label>Mesleğiniz </label>
                                                    <select
                                                        onChange={(e) => setJob(e?.target?.value)}
                                                        style={{ marginTop: '5px'}}
                                                    >
                                                        <option disabled>{job}</option>
                                                        <option value="Bilişim">Bilişim</option>
                                                        <option value="Çevirmen">Çevirmen</option>
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
                                            </div>
                                            
                                            <div className={styles.singleInputEpisode} style={{ marginTop: '18px'}}>
                                                    <label>Çalışma Şekliniz </label>
                                                    <select
                                                        onChange={(e) => setWorkStatus(e?.target?.value)}
                                                        style={{ marginTop: '5px'}}
                                                    >
                                                        <option disabled>{workStatus}</option>
                                                        <option value="Full time">Full time</option>
                                                        <option value="Kendi işim">Kendi işim</option>
                                                        <option value="Part time">Part time</option>
                                                        <option value="Çalışmıyorum">Çalışmıyorum</option>
                                                    </select>
                                            </div>

                                            <div className={styles.buttonEpisode}>
                                                    <div className={styles.backButton}>
                                                        <button
                                                            onClick={formFiveBackOnClick}
                                                            style={{
                                                                width: '120px',
                                                                height: '40px',
                                                                borderRadius: '16px',
                                                                backgroundColor: ThemeConfig.white,
                                                                color: ThemeConfig.purple,
                                                                border: '2px solid #ec3b8c'
                                                            }}
                                                        >
                                                            Geri
                                                        </button>
                                                    </div>
                                                    <div className={styles.nextButton}>
                                                        <button
                                                            onClick={formSubmitOnClick}
                                                            style={{
                                                                width: '120px',
                                                                height: '40px',
                                                                borderRadius: '16px',
                                                                backgroundColor: ThemeConfig.purple,
                                                                color: ThemeConfig.white,
                                                                border: 'none'
                                                            }}
                                                        >
                                                            {isLoading ? 'Kaydediliyor' : 'Kaydet'}
                                                        </button>
                                                    </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </>
                        )}
                </div>
            </div>
            <FooterBanner/>
        </>
    )
}
export default InfoPage;