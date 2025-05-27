import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import LOGO from '../../../utils/imgs/logo.png';
import DARKLOGO from '../../../utils/imgs/gs-logo-dark.png';
import Image from 'next/image';
import ThemeConfig from '@/src/utils/ThemeConfig';

const LoginPage = ({
	loginUser = () => {},
	userRegister = () => {},
	error = () => {},
	isLoading = true,
	resetError = () => {},
	registerCompleted = false,
	userRegisterCompletedReset = () => {},
	loginIsLoaing = false
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
	const [maritalStatus, setMaritalStatus]					= useState();

	const [sectionOneVisible, setSectionOneVisible] 		= useState(true);
	const [sectionTwoVisible, setSectionTwoVisible] 		= useState(false);
	const [formOneHeaderVisible, setFormOneHeaderVisible]   = useState(false);
	const [loginModalVisible, setLoginModalVisible]			= useState(false);

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
				data.append('marital_status', maritalStatus);
				userRegister({
					formData: data
				});
			}
	}

	useEffect(() => {
		userRegisterCompletedReset();
	},[]);

	useEffect(() => {
		if(registerCompleted) {
			loginUser({
				username: username,
				password: password
			})
		}
	},[registerCompleted]);

	const loginHandleSubmit = async (e) => {
		e.preventDefault();
		loginUser({
			username: username,
			password: password
		});
	}

	const genderHandleChange = (e) => {
		setGender(e?.target?.value);
	}

	const martialStatusChange = (e) => {
		setMaritalStatus(e?.target?.value);
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

	const loginButtonOnClick = () => {
		setLoginModalVisible(true);
	}

	const onClose = () => {
		setLoginModalVisible(false);
		resetError();
	}

	useEffect(() => {
		resetError();
	},[]);

	return (
		<>
			{loginModalVisible && (
				<>
					<div className={styles.overlay}>
						<div className={styles.modal}>
							<div style={{ textAlign: 'right', cursor: 'pointer'}} onClick={onClose}>
								X
							</div>
							<div className={styles.loginLogoEpisode}>
								<Image
									src={DARKLOGO} // Görselin path'i burada yer alacak. "public" klasörüne yükleyin.
									alt="logo"
								/>
							</div>
							<label style={{ fontSize: '14px', fontWeight: 'bold', color: ThemeConfig.error, paddingTop: '5px'}}>{error?.message}</label>
							<form onSubmit={loginHandleSubmit}>
								<label style={{ fontSize: '14px', fontWeight: 'bold'}}>Kullanıcı Adı</label>
								<input
									type="text"
									placeholder="Kullanıcı Adı"
									value={username}
									onChange={(e) => setUsername(e.target.value)}
									required
								/>
								<label style={{ fontSize: '14px', fontWeight: 'bold',marginTop: '13px'}}>Şifre</label>
								<input
									type="password"
									placeholder="Şifre"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									required
								/>
								<button 
									type="submit" 
									disabled={loginIsLoaing} 
									style={{ 
										height: '52px',
										marginTop: '12px',
										borderRadius: '8px', 
										fontSize: '18px'
									}}>
									{loginIsLoaing ? 'Giriş Yapılıyor...' : 'Giriş Yap'}
								</button>
								<label style={{
									fontSize: '16px',
									marginTop: '15px',
									cursor: 'pointer'
								}}>Şifremi Unuttum ?</label>
							</form>
						</div>
    				</div>
				</>
			)}
			
			<div className={styles.container}>
				<div className={styles.frame}>
					<div className={styles.header}>
						<div className={styles.logoEpisode}>
							<Image
								src={LOGO} // Görselin path'i burada yer alacak. "public" klasörüne yükleyin.
								alt="logo"
							/>
						</div>
						<div className={styles.loginEpisode} onClick={loginButtonOnClick}>
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
										<div className={styles.formGroup}>
											<select
												id="marital_status"
												name="marital_status"
												onChange={martialStatusChange}
												required
											>
												<option value="1">Evli</option>
												<option value="2">Boşanmış</option>
												<option value="3">Bekar</option>
											</select>
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

			<div className={styles.frame}>
				<section className={styles.statsSection}>
					<div className={styles.statBox}>
						<div className={styles.iconArea}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="36" height="36" fill="#b4005c">
							<path d="M96 128a64 64 0 1 1 128 0 64 64 0 1 1-128 0zm96 96c53 0 96 43 96 96v32H0v-32c0-53 43-96 96-96h96zM464 320h176v-32c0-53-43-96-96-96h-42.7c9.5 15.4 14.7 33.4 14.7 52.7V320zM448 256a64 64 0 1 0-128 0 64 64 0 1 0 128 0zm32 64v32H304v-32c0-53 43-96 96-96s96 43 96 96z"/>
						</svg>
						</div>
						<div className={styles.divider}></div>
						<div className={styles.textArea}>
						<div className={styles.number}>29.000</div>
						<div className={styles.label}>Üye</div>
						</div>
					</div>

					<div className={styles.statBox}>
						<div className={styles.iconArea}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="36" height="36" fill="#8e008b">
							<path d="M192 96c0-17.7 14.3-32 32-32h64V32h64v32h64c17.7 0 32 14.3 32 32v32H192V96zm304 48c0 13.3-10.7 24-24 24H168c-13.3 0-24-10.7-24-24V96c0-35.3 28.7-64 64-64h224c35.3 0 64 28.7 64 64v48zm-96 160a80 80 0 1 1-160 0 80 80 0 1 1 160 0zm-80-48a48 48 0 1 0 0 96 48 48 0 1 0 0-96z"/>
						</svg>

						</div>
						<div className={styles.divider}></div>
						<div className={styles.textArea}>
						<div className={styles.number}>15.000</div>
						<div className={styles.label}>Mutlu Çift</div>
						</div>
					</div>

					<div className={styles.statBox}>
						<div className={styles.iconArea}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="36" height="36" fill="#b0006e">
							<path d="M224 96c-17.7 0-32 14.3-32 32v16h-64v64h32v32h64v-32h64v-64h-64V128c0-17.7-14.3-32-32-32zm0 48h32v32h-32v-32zm0 64h32v32h-32v-32zm-64-32h32v32h-32v-32zm-48 96c-44.2 0-80 35.8-80 80v32h320v-32c0-44.2-35.8-80-80-80H112z"/>
						</svg>	

						</div>
						<div className={styles.divider}></div>
						<div className={styles.textArea}>
						<div className={styles.number}>7000</div>
						<div className={styles.label}>Eşleşme</div>
						</div>
					</div>
				</section>
			</div>

			<div className={styles.frame}>
				<div className={styles.sectionOne}>
					<div className={styles.sectionLeftEpisode}>
						<img src={"/home-one.png"}/>
					</div>
					<div className={styles.sectionRightEpisode}>
						<div className={styles.sectionTitle}>
							<h1>İslami Evlilik Sitesi</h1>
						</div>		
						<div className={styles.sectionContentText}>
							<label>
								Gönülden sevenler islami evlilik sitesi, evlilik amacıyla yola çıkan ve ciddi bir şekilde evlilik gerçekleştirmek isteyen bireyleri bir araya getiren online evlilik sitesidir. Türkiye’nin ilk ve en büyük evlilik sitesi Gönülden Sevenler; arkadaşlık, dostluk ya da çöpçatan sitesi değildir. İslami evlilik sitesi olan gönülden sevenlere yalnızca niyeti evlilik olan kullanıcılar üye olmaktadır. Üye olan kullanıcılar titizlikle editörler tarafından incelenerek onaylanır. Niyetinin evlilik olmadığı anlaşılan kullanıcılar ise siteden uzaklaştırılır. Sistemimize ulaşan mesaj ve kullanıcı şikayetleri anında değerlendirmeye alınarak gerekli işlemler yapılır. Evli olmayan gençlerimizin başarılı bir evlilik geçirmesi adına mutlu ve huzurlu bir yuva kurmalarına yardımcı olmaktayız. Sizler için diğer üyelerimiz ile rahat iletişim sağlayacağınız bir mesaj sistemi oluşturulmuştur.	
							</label>
						</div>
					</div>
				</div>
			</div>

			<div className={styles.frame}>
				<div className={styles.sectionTwo}>
					<div className={styles.sectionLeftEpisode}>
						<div className={styles.sectionTitle}>
							<h1>Detaylı Arama</h1>
						</div>		
						<div className={styles.sectionContentText}>
							<label>
								İslami evlilik sitesi gönülden sevenler detaylı arama özelliği ile siteye kayıtlı milyonlarca üyeyi karşınıza çıkarır. Bu milyonlarca üye arasından ruh eşinizi ise akıllı filtreleme özelliği ile kolayca ulaşabilirsiniz. Gönülden sevenler sunmuş olduğu çok gelişmiş filtreleme seçeneği ile size en uygun karakter ve hayat tarzına uygun eş adayını diğer üyelerden ayırarak bulmanıza olanak tanır. Gönülden sevenler ile doğru eş adayına ulaşmak çok kolay! İslami arkadaşlık sitesi gönülden sevenler, detaylı profil filtreleme özelliği sayesinde size en uygun kişilerin listesini oluşturarak, ideal eş adayınızı bulma konusunda yardımcı olur.
							</label>
						</div>
					</div>
					<div className={styles.sectionRightEpisode}>
						<img src={"/home-two.png"}/>
					</div>
				</div>
			</div>

			<div className={styles.frame}>
				<div className={styles.sectionThree}>
					<div className={styles.sectionLeftEpisode}>
						<img src={"/home-one.png"}/>
					</div>
					<div className={styles.sectionRightEpisode}>
						<div className={styles.sectionTitle}>
							<h1>Eşleşme Zamanı</h1>
						</div>		
						<div className={styles.sectionContentText}>
							<label>
								İslami evlilik sitesi gönülden sevenler detaylı arama özelliği ile sizin ideal eş adayınız ile tanışmanıza olanak tanır. Detaylı aramada seçmiş olduğunuz filtreler ile ana sayfada sadece sizin filtrelediğiniz uygun eş adayları sıralanır. Ana sayfanızda listelenen eş adaylarından size en uygun eş adayına karar vererek hemen sohbet etmeye başlayabilirsiniz. Eş adayınız ile ilk olarak iletişim bilgilerinizi paylaşmadan gönülden sevenler üzerinden sohbet edebilirsiniz. Sohbet sırasında evlilik sitesine aykırı herhangi olumsuz bir durumda kuralları ihlal eden üye üyelikten atılır ve tekrar aynı bilgilerle üye olamaz. Aktif ve güvenilir bireylerin yer aldığı Gönülden Sevenler’de doğruluğundan emin olmadığımız insanlara sitemizde yer vermiyoruz.
							</label>
						</div>
					</div>
				</div>
			</div>

			<div className={styles.frame}>
				<div className={styles.sectionBlogContainer}>
					<div className={styles.sectionBlog}>
						<img src={"/blog.jpeg"}/>
						<h1>Mutlu Olmanın Yolları</h1>	
						<label>Hepimiz hayatımızın geri kalanını birlikte geçireceğimiz eş adaylarımızı ararken sosyal anlamda kendimizi iyi ifade…...</label>	
						<button
                            onClick={() => window.location = '/'}
                            style={{
                                width: '120px',
                                height: '42px',
                                backgroundColor: '#d63384',
                                color: ThemeConfig.white,
                                cursor: 'pointer',
								marginTop: '15px',
								marginBottom: '15px'
                            }}
                        >
                            Devamını Oku
                        </button>
					</div>
					<div className={styles.sectionBlog}>
						<img src={"/blog.jpeg"}/>
						<h1>Mutlu Olmanın Yolları</h1>	
						<label>Hepimiz hayatımızın geri kalanını birlikte geçireceğimiz eş adaylarımızı ararken sosyal anlamda kendimizi iyi ifade…...</label>		
						<button
                            onClick={() => window.location = '/'}
                            style={{
                                width: '120px',
                                height: '42px',
                                backgroundColor: '#d63384',
                                color: ThemeConfig.white,
                                cursor: 'pointer',
								marginTop: '15px',
								marginBottom: '15px'
                            }}
                        >
                            Devamını Oku
                        </button>
					</div>
					<div className={styles.sectionBlog}>
						<img src={"/blog.jpeg"}/>
						<h1>Mutlu Olmanın Yolları</h1>
						<label>Hepimiz hayatımızın geri kalanını birlikte geçireceğimiz eş adaylarımızı ararken sosyal anlamda kendimizi iyi ifade…...</label>		
						<button
                            onClick={() => window.location = '/'}
                            style={{
                                width: '120px',
                                height: '42px',
                                backgroundColor: '#d63384',
                                color: ThemeConfig.white,
                                cursor: 'pointer',
								marginTop: '15px',
								marginBottom: '15px'
                            }}
                        >
                            Devamını Oku
                        </button>
					</div>	
				</div>
			</div>

			<div className={styles.frame}>
				
			</div>
		</>
	);
};

export default LoginPage;
