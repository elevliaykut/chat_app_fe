import React, { useEffect, useState } from "react";
import TopBanner from "../../molecules/TopBanner";
import SearchMenu from "../../molecules/SearchMenu";
import styles from "./Index.module.css";
import SearchUserProfile from "../../molecules/SearchUserProfile";
import FilterWithToggleEpisode from "../../molecules/FilterWithToggleEpisode";
import ThemeConfig from "@/src/utils/ThemeConfig";

const SearchDetailPage = ({
    getOnlineProfiles = () => {},
    isLoading = false,
    pageLoading = false,
    error = null,
    userActivitySmiled = () => {},
    userActivitySmiledReset = () => {},
    userActivitySmiledCompleted = false,
    userBlocked = () => {},
    userBlockedReset = () => {},
    userBlockedComplete = false,
    userActivityFavorite = () => {},
    userActivityFavoriteReset = () => {},
    userActivityFavoriteCompleted = false,
    userActivityLiked = () => {},
    userActivityLikedReset = () => {},
    userActivityLikedCompleted = false,
    cities = [],
    getCities = () => {},
    isLoadingDefinition = false,
    getUserMe = () => {},
    userMe = {},
    getUsers = () => {},
    members = [],
    memberIsLoading = false,
    userMeLoading = false,
    filterUserIsLoading = false
}) => {
    const [username, setUsername] = useState();
    const [minAge, setMinAge] = useState();
    const [maxAge, setMaxAge] = useState();
    const [minTall, setMinTall] = useState();
    const [maxTall, setMaxTall] = useState();
    const [minWeight, setMinWeight] = useState();
    const [maxWeight, setMaxWeight] = useState();
    const [cityId, setCityId] = useState();
    const [job, setJob] = useState();
    const [maturityStatus, setMaturityStatus] = useState();
    const [headCraft, setHeadCraft] = useState();
    const [child, setChild] = useState();
    const [cigarette, setCigarette] = useState();
    const [alcohol, setAlcohol] = useState();
    const [education, setEducation] = useState();
    const [salary, setSalary] = useState();
    const [physicalDisability, setPhysicalDisability] = useState();

    // visibles
    const [citiesVisible, setCitiesVisible]     = useState(false);
    const [memberVisible, setMemberVisible] = useState(false);

    // toggle
    const [onlineToggleIsStatus, setOnlineToggleIsStatus] = useState(false);
    const [newMemberIsStatus, setNewMemberIsStatus] = useState(false);
    const [nearMemberToggleStatus, setNearMemberToggleStatus] = useState(false);
    const [approveMemberToggleStatus, setApproveMemberToggleStatus] = useState(false);
    const [hasPhotoMemberToggleStatus, setHasPhotoMemberToggleStatus] = useState(false);
    const [hasNotPhotoMemberToggleStatus, setHasNotPhotoMemberToggleStatus] = useState(false);

    useEffect(() => {
        if(onlineToggleIsStatus) {
            getOnlineProfiles();
        } else {
            getUsers();
        }
    },[onlineToggleIsStatus]);

    useEffect(() => {
        if(newMemberIsStatus) {
            const now = new Date();
            const oneWeekAgo = new Date();
            oneWeekAgo.setDate(now.getDate() - 7);
            const formatDate = (date) => date.toISOString().split('T')[0];
            const merge = formatDate(oneWeekAgo) + ',' + formatDate(now);
            getUsers({
                startsBetween: merge
            });
        } else {
            getUsers();
        }
    },[newMemberIsStatus]);

    useEffect(() => {
        if(nearMemberToggleStatus) {
            getUsers({
                nearUsers: userMe?.detail?.district?.id
            });
        } else {
            getUsers();
        }
    },[nearMemberToggleStatus]);

    useEffect(() => {
        if(approveMemberToggleStatus) {
            getUsers({
                status: 1
            });
        } else {
            getUsers();
        }
    },[approveMemberToggleStatus]);

    useEffect(() => {
        if(hasPhotoMemberToggleStatus) {
            getUsers({
                hasPhotos: "1"
            });
        } else {
            getUsers();
        }
    },[hasPhotoMemberToggleStatus]);

    useEffect(() => {
        if(hasNotPhotoMemberToggleStatus) {
            getUsers({
                hasPhotos: "0"
            });
        } else {
            getUsers();
        }
    },[hasNotPhotoMemberToggleStatus]);

    useEffect(() => {
        if(!isLoadingDefinition) {
            setCitiesVisible(true);
        }
    },[isLoadingDefinition]);

    useEffect(() => {
        if(memberIsLoading) {
            setMemberVisible(true);
        }
    },[memberIsLoading]);

    useEffect(() => {
        getCities();
        getUserMe();
        getUsers();
    },[]);

    useEffect(() => {
        if(userActivitySmiledCompleted) {
            getUsers({
                username: username,
                minAgeRange: minAge,
                maxAgeRange: maxAge,
                minTall: minTall,
                maxTall: maxTall,
                minWeight: minWeight,
                maxWeight: maxWeight,
                cityId: cityId,
                job: job,
                maritalStatus: maturityStatus,
                headCraft: headCraft,
                haveAChild: child,
                useCigarette: cigarette,
                useAlcohol: alcohol,
                education: education,
                salary: salary,
                physical: physicalDisability
            });
            userActivitySmiledReset();
        }
    },[userActivitySmiledCompleted]);

    useEffect(() => {
        if(userBlockedComplete) {
            getUsers({
                username: username,
                minAgeRange: minAge,
                maxAgeRange: maxAge,
                minTall: minTall,
                maxTall: maxTall,
                minWeight: minWeight,
                maxWeight: maxWeight,
                cityId: cityId,
                job: job,
                maritalStatus: maturityStatus,
                headCraft: headCraft,
                haveAChild: child,
                useCigarette: cigarette,
                useAlcohol: alcohol,
                education: education,
                salary: salary,
                physical: physicalDisability
            });
            userBlockedReset();
        }
    },[userBlockedComplete]);

    useEffect(() => {
        if(userActivityFavoriteCompleted) {
            getUsers({
                username: username,
                minAgeRange: minAge,
                maxAgeRange: maxAge,
                minTall: minTall,
                maxTall: maxTall,
                minWeight: minWeight,
                maxWeight: maxWeight,
                cityId: cityId,
                job: job,
                maritalStatus: maturityStatus,
                headCraft: headCraft,
                haveAChild: child,
                useCigarette: cigarette,
                useAlcohol: alcohol,
                education: education,
                salary: salary,
                physical: physicalDisability
            });
            userActivityFavoriteReset();
        }
    },[userActivityFavoriteCompleted]);

    useEffect(() => {
        if(userActivityLikedCompleted) {
            getUsers({
                username: username,
                minAgeRange: minAge,
                maxAgeRange: maxAge,
                minTall: minTall,
                maxTall: maxTall,
                minWeight: minWeight,
                maxWeight: maxWeight,
                cityId: cityId,
                job: job,
                maritalStatus: maturityStatus,
                headCraft: headCraft,
                haveAChild: child,
                useCigarette: cigarette,
                useAlcohol: alcohol,
                education: education,
                salary: salary,
                physical: physicalDisability
            });
            userActivityLikedReset();
        }
    },[userActivityLikedCompleted]);

    useEffect(() => {
        userActivitySmiledReset();
        userBlockedReset();
        userActivityFavoriteReset();
        userActivityLikedReset();
    },[]);

    const cityOnChange = (e) => {
        setCityId(e?.target?.value);
    }

    const filterOnClick = () => {
        getUsers({
            username: username,
            minAgeRange: minAge,
            maxAgeRange: maxAge,
            minTall: minTall,
            maxTall: maxTall,
            minWeight: minWeight,
            maxWeight: maxWeight,
            cityId: cityId,
            job: job,
            maritalStatus: maturityStatus,
            headCraft: headCraft,
            haveAChild: child,
            useCigarette: cigarette,
            useAlcohol: alcohol,
            education: education,
            salary: salary,
            physical: physicalDisability
        });
    }

    return (
        <>
            <TopBanner/>
            <SearchMenu/>
            <FilterWithToggleEpisode
                setOnlineToggleIsStatus={setOnlineToggleIsStatus}
                setNewMemberIsStatus={setNewMemberIsStatus}
                setNearMemberToggleStatus={setNearMemberToggleStatus}
                setApproveMemberToggleStatus={setApproveMemberToggleStatus}
                setHasPhotoMemberToggleStatus={setHasPhotoMemberToggleStatus}
                setHasNotPhotoMemberToggleStatus={setHasNotPhotoMemberToggleStatus}
            />

            <div className={styles.container}>
                <div className={styles.frame}>
                    
                    <div className={styles.filterEpisode}>
                        <div className={styles.filterButtonEpisode}>
                                <div>
                                    <button
                                        onClick={() => getUsers()}
                                        disabled={false}
                                        style={{
                                            width: '120px',
                                            height: '50px',
                                            backgroundColor: ThemeConfig.light,
                                            color: ThemeConfig.black
                                        }}
                                    >
                                        Temizle
                                    </button>
                                </div>
                                <div style={{ marginLeft: '15px'}}>
                                    <button
                                        onClick={filterOnClick}
                                        disabled={filterUserIsLoading}
                                        style={{
                                            width: '120px',
                                            height: '50px',
                                        }}
                                    >
                                        {filterUserIsLoading ? 'Aranıyor' : 'Ara'}
                                    </button>
                                </div>
                            </div>
                            <div className={styles.inputLineEpisode}>
                                <label>Rumuz</label>
                                <input
									type="text"
									placeholder="Rumuz"
									onChange={(e) => setUsername(e.target.value)}
								/>
                            </div>
                            <div className={styles.inputLineEpisode}>
                                <label>Min Yaş</label>
                                <input
									type="text"
									placeholder="Minumum Yaş"
									onChange={(e) => setMinAge(e.target.value)}
								/>
                            </div>
                            <div className={styles.inputLineEpisode}>
                                <label>Max Yaş</label>
                                <input
									type="text"
									placeholder="Maximum Yaş"
									onChange={(e) => setMaxAge(e.target.value)}
								/>
                            </div>
                            <div className={styles.inputLineEpisode}>
                                <label>Min Boy</label>
                                <input
									type="text"
									placeholder="Minumum Boy"
									onChange={(e) => setMinTall(e.target.value)}
								/>
                            </div>
                            <div className={styles.inputLineEpisode}>
                                <label>Max Boy</label>
                                <input
									type="text"
									placeholder="Maximum Boy"
									onChange={(e) => setMaxTall(e.target.value)}
								/>
                            </div>
                            <div className={styles.inputLineEpisode}>
                                <label>Min Kilo</label>
                                <input
									type="text"
									placeholder="Minumum Kilo"
									onChange={(e) => setMinWeight(e.target.value)}
								/>
                            </div>
                            <div className={styles.inputLineEpisode}>
                                <label>Max Kilo</label>
                                <input
									type="text"
									placeholder="Maximum Kilo"
									onChange={(e) => setMaxWeight(e.target.value)}
								/>
                            </div>
                            {citiesVisible && (
                                <>
                                    <div className={styles.inputLineEpisode}>
                                        <label>Yaşadığı Şehir</label>
                                        <select
                                            style={{ marginTop: '10px' }}
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
                                </>
                            )}
                            <div className={styles.inputLineEpisode}>
                                <label>Meslek</label>
                                <select
                                    style={{ marginTop: '10px'}}
                                    onChange={(e) => setJob(e?.target?.value)}
                                >
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
                            <div className={styles.inputLineEpisode}>
                                <label>Medeni Hal</label>
                                <select
                                    onChange={(e) => setMaturityStatus(e?.target?.value)}
                                >
                                    <option value="Boşanmış">Boşanmış</option>
                                    <option value="Eşi vefat etmiş">Eşi vefat etmiş</option>
                                    <option value="Farketmez">Farketmez</option>
                                    <option value="Hiç evlenmemiş">Hiç evlenmemiş</option>
                                </select>
                            </div>
                            {userMeLoading && (
                                <>
                                    {userMe?.gender === 1 && (
                                        <>
                                            <div className={styles.inputLineEpisode}>
                                                <label>Tessetür</label>
                                                <select
                                                    onChange={(e) => setHeadCraft(e?.target?.value)}
                                                >
                                                    <option value="Evet">Evet</option>
                                                    <option value="Hayır">Hayır</option>
                                                </select>
                                            </div>
                                        </>
                                    )}
                                </>
                            )}
                            <div className={styles.inputLineEpisode}>
                                <label>Çocuğu Varmı? </label>
                                <select
                                    onChange={(e) => setChild(e?.target?.value)}
                                >
                                    <option value="Çocuğum Yok">Çocuğu Olmasın</option>
                                    <option value="Çocuğum var ama benimle yaşamıyor">Çocuğu olsun ama yalnız yaşasın</option>
                                    <option value="Çocuğum benimle yaşıyor">Çocuğu kendisiyle yaşasın</option>
                                </select>
                            </div>
                            <div className={styles.inputLineEpisode}>
                                <label>Sigara </label>
                                <select
                                    onChange={(e) => setCigarette(e?.target?.value)}
                                >
                                    <option value="İçmiyorum">İçmesin</option>
                                    <option value="İçiyorum">İçsin</option>
                                    <option value="Arasıra içiyorum">Arasıra İçsin</option>
                                </select>
                            </div>
                            <div className={styles.inputLineEpisode}>
                                <label>Alkol </label>
                                <select
                                    onChange={(e) => setAlcohol(e?.target?.value)}
                                >
                                    <option value="Hiç kullanmadım">Hiç Kullanmasın</option>
                                    <option value="Kullanmıyorum">Kullansın</option>
                                    <option value="Ara sıra kullanıyorum">Ara sıra Kullansın</option>
                                    <option value="Kullanıyorum">Kullansın</option>
                                </select>
                            </div>
                            <div className={styles.inputLineEpisode}>
                                <label>Eğitim </label>
                                <select
                                    onChange={(e) => setEducation(e?.target?.value)}
                                >
                                    <option value="İlk Öğretim">İlk Öğretim</option>
                                    <option value="Lise">Lise</option>
                                    <option value="Ön Lisans">Ön Lisans</option>
                                    <option value="Lisans">Lisans</option>
                                    <option value="Lisans Üstü">Lisans Üstü</option>
                                </select>
                            </div>
                            <div className={styles.inputLineEpisode}>
                                <label>Geliri </label>
                                <select
                                    onChange={(e) => setSalary(e?.target?.value)}
                                >
                                    <option value="0-10000 TL">0-10000 TL</option>
                                    <option value="10000-20000 TL">10000-20000 TL</option>
                                    <option value="20000-30000 TL">20000-30000 TL</option>
                                    <option value="30000-40000 TL">30000-40000 TL</option>
                                    <option value="40000 + TL">40000 + TL</option>
                                    <option value="Belirtmek İstemiyorum">Belirtmek İstemiyorum</option>
                                </select>
                            </div>
                            <div className={styles.inputLineEpisode}>
                                <label>Fiziksel Engel</label>
                                <select
                                    onChange={(e) => setPhysicalDisability(e?.target?.value)}
                                >
                                    <option value="Hayır">Hayır</option>
                                    <option value="Var; Görme engelliyim">Olsun; Görme Engelli</option>
                                    <option value="Var; İşitme engelliyim">Olsun; İşitme Engelli</option>
                                    <option value="Var; Bedensel engelliyim">Olsun; Bedensel Engel</option>
                                    <option value="Diğer">Diğer</option>
                                </select>
                            </div>
                    </div>
                    
                    <div className={styles.content}>
                        {memberVisible && (
                            <>
                                {members.map(user => (
                                    <>
                                        <SearchUserProfile 
                                            user={user}
                                            userActivitySmiled={userActivitySmiled}
                                            userBlocked={userBlocked}
                                            userActivityFavorite={userActivityFavorite}
                                            userActivityLiked={userActivityLiked}
                                        />
                                    </>
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
export default SearchDetailPage;