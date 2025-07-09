import React, { useEffect, useState } from "react";
import styles from './Index.module.css';
import AdminTopBanner from "../../molecules/AdminTopBanner";
import AdminMenu from "../../molecules/AdminMenu";
import debounce from 'lodash.debounce';

const DashboardPage = ({
    userLogout = () => {},
    adminGetUsers = () => {},
    isLoading = false,
    error = false,
    adminUsers = []
}) => {
    const [usersVisible, setUsersVisible] = useState(false);

    useEffect(() => {
        if(!isLoading) {
            setUsersVisible(true);
        }
    },[]);
    
    useEffect(() => {
        adminGetUsers();
    },[]);

    const handleDetailClick = (userId) => {
        window.location = `/admin/user/${userId}`;
    };

    const setSearchTerm = value => {
		debounceOnSearch(value);
	};

	const debounceOnSearch = debounce(value => {
		adminGetUsers({ username: value });
	}, 400);

    return (
        <>
            <AdminTopBanner 
                userLogout={userLogout}
            />
            <div className={styles.frame}>
                <div className={styles.content}>
                    <AdminMenu/>
                    <div style={{ width: '100%'}}>
                        
                        {usersVisible && (
                            <>
                                <div className={styles.container}>
                                    <h1 className={styles.title}>Kullanıcı Listesi</h1>
                                    <input
                                        type="text"
                                        placeholder="Kullanıcı adına göre ara..."
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className={styles.searchInput}
                                    />
                                    <table className={styles.table}>
                                        <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>İsim</th>
                                            <th>Soyisim</th>
                                            <th>Kullanıcı Adı</th>
                                            <th>Email</th>
                                            <th>Telefon</th>
                                            <th>Durum</th>
                                            <th>Cinsiyet</th>
                                            <th>Tarih</th>
                                            <th>Detay</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {adminUsers.map(user => (
                                            <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.surname}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                            <td>{user.status === 1 ? 'Aktif' : 'Pasif'}</td>
                                            <td>{user.gender === 1 ? 'Erkek'  :'Kadın'}</td>
                                            <td>{user?.created_at}</td>
                                            <td>
                                                <button
                                                    className={styles.detailButton}
                                                    onClick={() => handleDetailClick(user.id)}
                                                >
                                                    Detay
                                                </button>
                                            </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
export default DashboardPage;