import React, { useEffect, useState } from "react";
import styles from './Index.module.css';
import MySettingProfileCard from "../../molecules/MySettingProfileCard";
import TopBanner from "../../molecules/TopBanner";
import ToastMessage from "../../molecules/TostMessage";
import ConfirmModal from "../../molecules/Modals/ConfirmModal";

const MySettingsPage = ({
    userMe = {},
    isLoading = false,
    error = null,
    pageLoading = false,
    getUserMe = () => {},
    userMeLoading = false,
    isUserLoggedIn = false,
    userLogout = () => {},
    notifications = [],
    notificationIsLoading = false,
    getNotifications = () => {},
    updateUserPersonalInfoComplete = false,
    updateUserPersonalInfo = () => {},
    resetUpdateUserPersonalInfoComplete = () => {},
    userFreezeAccount = () => {},
    resetUserFreezeAccountComplete = () => {},
    freezeAccountComplete = false,
    userDeleteAccount = () => {},
    resetUserDeleteAccountComplete = () => {},
    deleteAccountComplete = false,
    userChangeEmail = () => {},
    resetUserChangeEmailComplete = () => {},
    changeEmailComplete = false,
    userChangePassword = () => {},
    resetUserChangePasswordComplete = () => {},
    changePasswordComplete = false,
}) => {
    const [profileVisible, setProfileVisible] = useState(false);
    const [userMeVisible, setUserMeVisible] = useState(false);

    const [maturity, setMaturity] = useState(1);
    const [accountFreeze, setAccountFreeze] = useState(1);
    const [deleteAccount, setDeleteAccount] = useState(1);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordConfirm, setPasswordConfirm] = useState();

    // episode visibles
    const [filterEpisodeVisible, setFilterEpisodeVisible] = useState(true);
    const [freezeAccountEpisodeVisible, setFreezeAccountEpisodeVisible] = useState(false);
    const [deleteAccountEpisodeVisible, setDeleteAccountEpisodeVisible] = useState(false);
    const [changeEmailEpisodeVisible, setChangeEmailEpisodeVisible] = useState(false);
    const [changePasswordEpisodeVisible, setChangePasswordEpisodeVisible] = useState(false);

    const [filterSuccessToastVisible, setFilterSuccessToastVisible] = useState(false);
    const [freezeAccountToastVisible, setFreezeAccountToastVisible] = useState(false);
    const [deleteAccountToastVisible, setDeleteAccountToastVisible] = useState(false);
    const [changeEmailToastVisible, setChangeEmailToastVisible] = useState(false);
    const [changePasswordToastVisible, setChangePasswordToastVisible] = useState(false);

    //confirm
    const [freezeConfirmModalVisible, setFreezeConfirmModalVisible] = useState(false);
    const [deleteConfirmModalVisible, setDeleteConfirmModalVisible] = useState(false);
    
    useEffect(() => {
        getNotifications({ read: false });
    },[]);

    useEffect(() => {
        if (!isUserLoggedIn) {
          window.location = '/';
        }
    }, [isUserLoggedIn]);

    useEffect(() => {
        if(!userMeLoading) {
            setProfileVisible(true);
        }
    },[userMeLoading]);

    useEffect(() => {
        getUserMe();
    },[]);

    useEffect(() => {
        if(!userMeLoading) {
            setUserMeVisible(true);
        }
    },[userMeLoading]);

    useEffect(() => {
        if(updateUserPersonalInfoComplete) {
            resetUpdateUserPersonalInfoComplete();
            setFilterSuccessToastVisible(true);
        }
    },[updateUserPersonalInfoComplete]);

    useEffect(() => {
        if(freezeAccountComplete) {
            resetUserFreezeAccountComplete();
            setFreezeAccountToastVisible(true);
            setFreezeConfirmModalVisible(false);
        }
    },[freezeAccountComplete]);

    useEffect(() => {
        if(deleteAccountComplete) {
            resetUserDeleteAccountComplete();
            setDeleteAccountToastVisible(true);
            setDeleteConfirmModalVisible(false);
            window.location = '/';
        }
    },[deleteAccountComplete]);

    useEffect(() => {
        if(changeEmailComplete) {
            resetUserChangeEmailComplete();
            setChangeEmailToastVisible(true);
        }
    },[changeEmailComplete]);
    
    useEffect(() => {
        if(changePasswordComplete) {
            resetUserChangePasswordComplete();
            setChangePasswordToastVisible(true);
        }
    },[changePasswordComplete]);


    const filterButtonOnClick = () => {
        updateUserPersonalInfo({
            maritalStatus: maturity,
            name: userMe?.name,
            surname: userMe?.surname,
            age: userMe?.age,
            phone: userMe?.phone
        });
    }

    const changeEmailButtonOnClick = () => {
        if(email) {
            userChangeEmail({
                email: email
            });
        }
    }

    const changePasswordButtonOnClick = () => {
        if(password !== passwordConfirm) {
            return alert("Şifreler Eşleşmedi!")
        }
        if(password && passwordConfirm) {
            userChangePassword({
                password: password,
                passwordConfirmation: passwordConfirm
            });
        }
    }

    const freezeAccountButtonOnClick = () => {
        setFreezeConfirmModalVisible(true);
    }

    const freezeModalOnClose = () => {
        setFreezeConfirmModalVisible(false);
    }

    const freezeAccountHandleSubmit = () => {
        userFreezeAccount({
            status: accountFreeze
        });
    }

    const deleteAccountButtonOnClick = () => {
        setDeleteConfirmModalVisible(true);
    }

    const deleteModalOnClose = () => {
        setDeleteConfirmModalVisible(false);
    }

    const deleteAccountHandleSubmit = () => {
        if(deleteAccount === 1) {
            userDeleteAccount();
        }
    }

    return (
        <>
            {filterSuccessToastVisible && (
                <>
                    <ToastMessage message="Filtre Ayarları Başarılı bir Şekilde Güncellendi."/>
                </>
            )}

            {freezeAccountToastVisible && (
                <>
                    <ToastMessage message="Hesap Dondurma İşleminiz Başarılı Bir Şekilde Gerçekleşti."/>
                </>
            )}

            {deleteAccountToastVisible && (
                <>
                    <ToastMessage message="Hesap Silme İşleminiz Başarılı Bir Şekilde Gerçekleşti."/>
                </>
            )}

            {changeEmailToastVisible && (
                <>
                    <ToastMessage message="Email Başarılı Bir Şekilde Değiştirildi."/>
                </>
            )}

            {changePasswordToastVisible && (
                <>
                    <ToastMessage message="Şifre Başarılı Bir Şekilde Değiştirildi."/>
                </>
            )}

            {freezeConfirmModalVisible && (
                <>
                    <ConfirmModal
                        desc={"Hesabınızı Dondurmak İstediğinize Eminmisiniz?"}
                        onClose={freezeModalOnClose}
                        onConfirm={freezeAccountHandleSubmit}
                    />
                </>
            )}

            {deleteConfirmModalVisible && (
                <>
                    <ConfirmModal
                        desc={"Hesabınızı Silmek İstediğinize Eminmisiniz?"}
                        onClose={deleteModalOnClose}
                        onConfirm={deleteAccountHandleSubmit}
                    />
                </>
            )}

            <TopBanner
                onlineMemberCount={userMe?.online_member_count}
                messageCount={userMe?.message_count}
                profileVisible={userMeVisible}
                userLogout={userLogout}
                notifications={notifications}
                notificationIsLoading={notificationIsLoading}
            />
            
            <div className={styles.frame}>
                <div className={styles.content}>
                    {profileVisible && (
                        <>
                            <MySettingProfileCard
                                details={userMe}
                                setFilterEpisodeVisible={setFilterEpisodeVisible}
                                setFreezeAccountEpisodeVisible={setFreezeAccountEpisodeVisible}
                                setDeleteAccountEpisodeVisible={setDeleteAccountEpisodeVisible}
                                setChangeEmailEpisodeVisible={setChangeEmailEpisodeVisible}
                                setChangePasswordEpisodeVisible={setChangePasswordEpisodeVisible}
                            />
                        </>
                    )}

                    <div style={{ width: '100%'}}>
                        
                        {userMeVisible && (
                            <>
                                {filterEpisodeVisible && (
                                    <>
                                        <div className={styles.settingsEpisodeContainer}>
                                            <label>Medeni Hal</label>
                                            <select
                                                defaultValue={userMe?.detail?.marital_status_value}
                                                style={{ marginTop: '10px'}}
                                                onChange={(e) => setMaturity(e?.target?.value)}
                                            >
                                                <option value="">
                                                    {userMe?.detail?.marital_status_value}
                                                </option>
                                                <option value="1">Hiç Evlenmemiş</option>
                                                <option value="2">Bekar</option>
                                                <option value="3">Boşanmış</option>
                                                <option value="4">Eşi Vefat Etmiş</option>
                                            </select>

                                            <div className={styles.settingsSubmitButtonEpisode}>
                                                <button
                                                    onClick={filterButtonOnClick}
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
                                    </>
                                )}
                            </>
                        )}

                        {freezeAccountEpisodeVisible && (
                            <>
                                <div className={styles?.settingsEpisodeContainer}>
                                    <label>Hesabımı Dondur</label>
                                    <select
                                        style={{ marginTop: '10px'}}
                                        onChange={(e) => setAccountFreeze(e?.target?.value)}
                                    >
                                        <option value="1">Hayır</option>
                                        <option value="4">Evet</option>
                                    </select>

                                    <div className={styles.settingsSubmitButtonEpisode}>
                                        <button
                                            onClick={freezeAccountButtonOnClick}
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
                            </>
                        )}

                        {deleteAccountEpisodeVisible && (
                            <>
                                <div className={styles?.settingsEpisodeContainer}>
                                    <label>Hesabımı Sil</label>
                                    <select
                                        style={{ marginTop: '10px'}}
                                        onChange={(e) => setDeleteAccount(e?.target?.value)}
                                    >
                                        <option disabled></option>
                                        <option value="1">Evet</option>
                                    </select>

                                    <div className={styles.settingsSubmitButtonEpisode}>
                                        <button
                                            onClick={deleteAccountButtonOnClick}
                                            disabled={isLoading}
                                            style={{
                                                width: '120px',
                                                height: '50px',
                                            }}
                                        >
                                            {isLoading ? 'Siliniyor' : 'Sil'}
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}

                        {changeEmailEpisodeVisible && (
                            <>
                                <div className={styles?.settingsEpisodeContainer}>
                                    <label>Email</label>
                                    <input
                                        style={{ marginTop: '10px'}}
                                        defaultValue={userMe?.email}
                                        onChange={(e) => setEmail(e?.target?.value)}
                                        className={styles.input}
                                    />

                                    <div className={styles.settingsSubmitButtonEpisode}>
                                        <button
                                            onClick={changeEmailButtonOnClick}
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
                            </>
                        )}

                        {changePasswordEpisodeVisible && (
                            <>
                                <div className={styles?.settingsEpisodeContainer}>
                                    <label>Şifre</label>
                                    <input
                                        type="password"
                                        style={{ marginTop: '10px'}}
                                        onChange={(e) => setPassword(e?.target?.value)}
                                        className={styles.input}
                                    />
                                    <label style={{ marginTop: '15px'}}>Şifre Tekrar</label>
                                    <input
                                        type="password"
                                        style={{ marginTop: '10px'}}
                                        onChange={(e) => setPasswordConfirm(e?.target?.value)}
                                        className={styles.input}
                                    />

                                    <div className={styles.settingsSubmitButtonEpisode}>
                                        <button
                                            onClick={changePasswordButtonOnClick}
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
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
export default MySettingsPage;