import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import LOGO from '../../../utils/imgs/logo.png';
import Image from 'next/image';

const LoginPage = ({
	loginUser = () => {},
	userRegister = () => {},
	error = () => {},
	isLoading = true,
	resetError = () => {},
}) => {
	const [gender, setGender] 								= useState();
	const [username, setUsername]							= useState();
	const [email, setEmail]									= useState();
	const [password, setPassword]	    					= useState();
	const [birthDate, setBirthDate]							= useState();
	const [name, setName]									= useState();
	const [surname, setSurname]								= useState();
	const [age, setAge]										= useState();
	const [phone, setPhone]									= useState();
	const [isPrivacyChecked, setIsPrivacyChecked] 			= useState(false);
	const [loginPrivacyChecked, setLoginPrivacyChecked] 	= useState(false);
	const [emailPrivacyChecked, setEmailPrivacyChecked] 	= useState(false);

	const [sectionOneVisible, setSectionOneVisible] 		= useState(true);
	const [sectionTwoVisible, setSectionTwoVisible] 		= useState(false);
	const [formOneHeaderVisible, setFormOneHeaderVisible]   = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

			if(loginPrivacyChecked && emailPrivacyChecked) {
				const data = new FormData();
				data.append('name', name);
				data.append('surname', surname);
				data.append('age', age);
				data.append('username',username);
				data.append('email', email);
				data.append('password', password);
				data.append('phone', phone);
				data.append('gender', gender);
				data.append('birth_date', birthDate);
				data.append('type', 1);

				userRegister({
					formData: data
				});
			}
	}

	const genderHandleChange = (e) => {
		setGender(e?.target?.value);
	}

	const formOneButtonOnClick = () => {
		if(isPrivacyChecked) {
			setSectionOneVisible(false);
			setSectionTwoVisible(true);
			setFormOneHeaderVisible(true);
		}
	}

	const sectionTwoHeaderOnClick = () => {
		setSectionOneVisible(true);
		setSectionTwoVisible(false);
	}

	const sectionOneHeaderOnClick = () => {
		setSectionOneVisible(false);
		setSectionTwoVisible(true);
	}

	return (
		<>
			<div className={styles.container}>
				<div className={styles.frame}>
					<div className={styles.header}>
						<div className={styles.logoEpisode}>
							<Image
								src={LOGO} // Görselin path'i burada yer alacak. "public" klasörüne yükleyin.
								alt="logo"
							/>
						</div>
						<div className={styles.loginEpisode}>
							<button className={styles.loginButton}>GİRİŞ YAP</button>
						</div>
					</div>
				</div>
				<div className={styles.frame}>
					<div className={styles.contentEpisode}>
						
						<div className={styles.leftContentEpisode}>
							<div className={styles.formContainer}>
								<form onSubmit={handleSubmit}>
								
								{sectionOneVisible && (
									<>
										{formOneHeaderVisible && (
											<>
												<div className={styles.sectionRoute}>
													<div className={styles.sectionRouteOne} onClick={sectionOneHeaderOnClick}>
														1
													</div>
													<div style={{ color: 'white'}}>
														----
													</div>
													<div className={styles.sectionRouteTwo} onClick={sectionOneHeaderOnClick}>
														2
													</div>
												</div>
											</>
										)}
										<div className={styles.formGroup}>
											<select
												id="gender"
												name="gender"
												onChange={genderHandleChange}
												required
											>
												<option value="">Seçin</option>
												<option value="1">Erkek</option>
												<option value="0">Kadın</option>
												<option value="other">Diğer</option>
											</select>
										</div>
										<div className={styles.formGroup}>
											<input 
												type="text" 
												id="username" 
												placeholder="Rumuz" 
												onChange={(e) => setUsername(e.target.value)}
											/>
										</div>
										<div className={styles.formGroup}>
											<input 
												type="email" 
												id="email" 
												placeholder="Email" 
												onChange={(e) => setEmail(e.target.value)}
											/>
										</div>
										<div className={styles.formGroup}>
											<input 
												type="password" 
												id="password" 
												placeholder="Şifre" 
												onChange={(e) => setPassword(e.target.value)}
											/>
										</div>
										<div className={styles.formGroup}>
											<input
												type={birthDate ? "date" : "text"}
												id="birthDate"
												value={birthDate}
												onFocus={(e) => e.target.type = 'date'}
												onBlur={(e) => !e.target.value && (e.target.type = 'text')}
												onChange={(e) => setBirthDate(e.target.value)}
												placeholder="Doğum tarihinizi seçin"
												required
											/>
										</div>
										<button className={styles.submitButton} onClick={formOneButtonOnClick}>ÜCRETSİZ ÜYE OL</button>
										<div style={{ marginTop: '20px'}}> 
											<label style={{ display: "flex" }}>
												<input
													style={{ width: '15px'}}
													type="checkbox"
													checked={isPrivacyChecked}
													onChange={(e) => setIsPrivacyChecked(e.target.checked)}
													required
												/>
												<span style={{ color: 'white', fontWeight: 500, paddingLeft: '12px'}}>Gizlilik Sözleşmesini okudum ve kabul ediyorum.</span>
											</label>
										</div>
									</>
								)}

								{sectionTwoVisible && (
									<>
										<div className={styles.sectionRoute}>
											<div className={styles.sectionRouteOne} 
											onClick={sectionTwoHeaderOnClick}>
												1
											</div>
											<div style={{ color: 'white'}}>
												----
											</div>
											<div className={styles.sectionRouteTwo}>
												2
											</div>
										</div>
										<div className={styles.formGroup}>
											<input 
												type="text" 
												id="name" 
												placeholder="İsim" 
												onChange={(e) => setName(e.target.value)}
											/>
										</div>
										<div className={styles.formGroup}>
											<input 
												type="text" 
												id="surname" 
												placeholder="Soyisim" 
												onChange={(e) => setSurname(e.target.value)}
											/>
										</div>
										<div className={styles.formGroup}>
											<input 
												type="text" 
												id="age" 
												placeholder="Yaş" 
												onChange={(e) => setAge(e.target.value)}
											/>
										</div>
										<div className={styles.formGroup}>
											<input 
												type="number" 
												id="phone" 
												placeholder="Telefon" 
												onChange={(e) => setPhone(e.target.value)}
											/>
										</div>
										<button type="submit" className={styles.submitButton} disabled={isLoading}>{isLoading ? <span className={styles.spinner}/> : "ÜYELİĞİ TAMAMLA"}</button>
										<div style={{ marginTop: '20px'}}> 
											<label style={{ display: "flex" }}>
												<input
													style={{ width: '15px'}}
													type="checkbox"
													checked={loginPrivacyChecked}
													onChange={(e) => setLoginPrivacyChecked(e.target.checked)}
													required
												/>
												<span style={{ color: 'white', fontWeight: 500, paddingLeft: '12px'}}>Üyelik Sözleşmesini okudum,kabul ediyorum.</span>
											</label>
										</div>
										<div style={{ marginTop: '5px'}}> 
											<label style={{ display: "flex" }}>
												<input
													style={{ width: '15px'}}
													type="checkbox"
													checked={emailPrivacyChecked}
													onChange={(e) => setEmailPrivacyChecked(e.target.checked)}
													required
												/>
												<span style={{ color: 'white', fontWeight: 500, paddingLeft: '12px'}}>Tafafıma tanıtıcı e-posta gönderilmesine izin veriyorum.</span>
											</label>
										</div>
									</>
								)}
							</form>
							</div>
						</div>
						<div className={styles.rightContentEpisode}>
							<h1 style={{ color: 'white', fontSize: '44px'}}>İslami Evlilik Sitesi</h1>
							<h2 style={{ marginTop: '15px', textAlign: 'right', color: "white", fontSize: '20px'}}>Diğer flört uygulamaları gibi değiliz.</h2>
							<p style={{ marginTop: '15px', fontSize: '16px', lineHeight: '30px', color: 'white'}}>
								Ciddi bir ilişki arayan <br></br>
								milyonlarca üyeyi bir araya getiren<br></br>
								Gönülden Sevenler, her gün 1000 den<br></br>
								fazla çiftin mutluluğuna şahitlik ediyor.
							</p>
							<h2 style={{ marginTop: '15px', textAlign: 'right', fontSize: '18px', color: "white"}}>
								Sıradaki sen olabilirsin!<br></br>
								Hemen aramıza katıl!
							</h2>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LoginPage;
