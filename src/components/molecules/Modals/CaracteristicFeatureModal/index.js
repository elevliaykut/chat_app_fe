import React, { useEffect, useState } from "react";
import styles from './Index.module.css';
import ThemeConfig from "@/src/utils/ThemeConfig";
import ToastMessage from "../../TostMessage";

const CaracteristicFeatureModal = ({
    onClose = () => {},
    isLoading = false,
    userUpdateCaracteristicFeatureComplete = false,
    userUpdateCaracteristicFeature = () => {},
    userUpdateCaracteristicFeatureReset = () => {},
    userMe = {},
}) => {
    const [messageVisible, setMessageVisible] = useState(false);
    const [questionOne, setQuestionOne] = useState();
    const [questionTwo, setQuestionTwo] = useState();
    const [questionThree, setQuestionThree] = useState();
    const [questionFour, setQuestionFour] = useState();
    const [questionFive, setQuestionFive] = useState();
    const [questionSix, setQuestionSix] = useState();
    const [questionSeven, setQuestionSeven] = useState();
    const [questionEight, setQuestionEight] = useState();
    const [questionNine, setQuestionNine] = useState();
    const [questionTen, setQuestionTen] = useState();
    const [questionEleven, setQuestionEleven] = useState();



    const submitOnClick = () => {
        userUpdateCaracteristicFeature({
            questionOne: questionOne,
            questionTwo: questionTwo,
            questionThree: questionThree,
            questionFour: questionFour,
            questionFive: questionFive,
            questionSix: questionSix,
            questionSeven: questionSeven,
            questionEight: questionEight,
            questionNine: questionNine,
            questionTen: questionTen,
            questionEleven: questionEleven,
        });
    }

    useEffect(() => {
        if(userUpdateCaracteristicFeatureComplete) {
            userUpdateCaracteristicFeatureReset();
            setMessageVisible(true);
            onClose();
        }
    },[userUpdateCaracteristicFeatureComplete]);


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
                            <label>KARAKTER ANALİZİ</label>
                        </div>
                        <div style={{ marginLeft: 'auto', cursor: 'pointer'}} onClick={onClose}>
                            X
                        </div>
                    </div>
                    
                    <div className={styles.modalContent}>
                    <div style={{ marginTop: '18px'}}>
                            <label>Tanışmak istediğiniz kişide aradığınız 3 özellik </label>
                            <input
                                defaultValue={userMe?.caracterisric_feature?.question_one}
                                placeholder="KENDİ KELİMELERİNİZ İLE ANlATIN"
                                onChange={(e) => setQuestionOne(e?.target?.value)}
                                className={styles.input}
                            />
                        </div>

                        <div style={{ marginTop: '18px'}}>
                            <label>Tanışmak istediğiniz kişide istemediğiniz 3 özellik </label>
                            <input
                                defaultValue={userMe?.caracterisric_feature?.question_two}
                                placeholder="KENDİ KELİMELERİNİZ İLE ANlATIN"
                                onChange={(e) => setQuestionTwo(e?.target?.value)}
                                className={styles.input}
                            />
                        </div>

                        <div style={{ marginTop: '18px'}}>
                            <label>Yanından ayırmadığı 3 şey </label>
                            <input
                                defaultValue={userMe?.caracterisric_feature?.question_three}
                                placeholder="KENDİ KELİMELERİNİZ İLE ANlATIN"
                                onChange={(e) => setQuestionThree(e?.target?.value)}
                                className={styles.input}
                            />
                        </div>

                        <div style={{ marginTop: '18px'}}>
                            <label>Kitap tercihiz </label>
                            <input
                                defaultValue={userMe?.caracterisric_feature?.question_four}
                                placeholder="KENDİ KELİMELERİNİZ İLE ANlATIN"
                                onChange={(e) => setQuestionFour(e?.target?.value)}
                                className={styles.input}
                            />
                        </div>

                        <div style={{ marginTop: '18px'}}>
                            <label>Hayvanları seviyor mu? </label>
                            <input
                                defaultValue={userMe?.caracterisric_feature?.question_five}
                                placeholder="KENDİ KELİMELERİNİZ İLE ANlATIN"
                                onChange={(e) => setQuestionFive(e?.target?.value)}
                                className={styles.input}
                            />
                        </div>

                        <div style={{ marginTop: '18px'}}>
                            <label>Müzik zevkiniz </label>
                            <input
                                defaultValue={userMe?.caracterisric_feature?.question_six}
                                placeholder="KENDİ KELİMELERİNİZ İLE ANlATIN"
                                onChange={(e) => setQuestionSix(e?.target?.value)}
                                className={styles.input}
                            />
                        </div>

                        <div style={{ marginTop: '18px'}}>
                            <label>Spora ilginiz </label>
                            <input
                                defaultValue={userMe?.caracterisric_feature?.question_seven}
                                placeholder="KENDİ KELİMELERİNİZ İLE ANlATIN"
                                onChange={(e) => setQuestionSeven(e?.target?.value)}
                                className={styles.input}
                            />
                        </div>

                        <div style={{ marginTop: '18px'}}>
                            <label>Tatil tercihiz </label>
                            <input
                                defaultValue={userMe?.caracterisric_feature?.question_eight}
                                placeholder="KENDİ KELİMELERİNİZ İLE ANlATIN"
                                onChange={(e) => setQuestionEight(e?.target?.value)}
                                className={styles.input}
                            />
                        </div>

                        <div style={{ marginTop: '18px'}}>
                            <label>Damak zevkiniz </label>
                            <input
                                defaultValue={userMe?.caracterisric_feature?.question_nine}
                                placeholder="KENDİ KELİMELERİNİZ İLE ANlATIN"
                                onChange={(e) => setQuestionNine(e?.target?.value)}
                                className={styles.input}
                            />
                        </div>

                        <div style={{ marginTop: '18px'}}>
                            <label>Oyun Zevkiniz </label>
                            <input
                                defaultValue={userMe?.caracterisric_feature?.question_ten}
                                placeholder="KENDİ KELİMELERİNİZ İLE ANlATIN"
                                onChange={(e) => setQuestionTen(e?.target?.value)}
                                className={styles.input}
                            />
                        </div>

                        <div style={{ marginTop: '18px'}}>
                            <label>Favori çizgi filmleriniz</label>
                            <input
                                defaultValue={userMe?.caracterisric_feature?.question_eleven}
                                placeholder="KENDİ KELİMELERİNİZ İLE ANlATIN"
                                onChange={(e) => setQuestionEleven(e?.target?.value)}
                                className={styles.input}
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
            </div>
        </>
    )
}
export default CaracteristicFeatureModal;