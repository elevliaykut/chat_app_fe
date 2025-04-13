import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import LOGO from '../../../utils/imgs/logo.png';
import Image from 'next/image';

const LoginPage = ({
	loginUser = () => {},
	error = () => {},
	isLoading = false,
	resetError = () => {},
}) => {
	const [gender, setGender] 			= useState();
	const [username, setUsername]		= useState();
	const [email, setEmail]				= useState();
	const [password, setPassword]	    = useState();
	const [birthDate, setBirthDate]		= useState();

	const handleSubmit = async (e) => {
		e.preventDefault();
	}

	const handleChange = () => {

	}

	const genderHandleChange = (e) => {
		console.log(e?.target?.value);
		setGender(e?.target?.value);
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
								<button type="submit" className={styles.submitButton}>ÜCRETSİZ KAYIT OL</button>
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
