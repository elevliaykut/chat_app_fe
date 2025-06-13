import React, { useState, useEffect } from "react";
import styles from './Index.module.css';
import { usePathname, useRouter } from 'next/navigation'; // next/navigation kullanıyoruz

const SearchMenu = () => {
    const [activePath, setActivePath] = useState('');
    const router = useRouter();
    const pathname = usePathname(); 

    useEffect(() => {
        setActivePath(pathname);
    }, [pathname]);

    const menuItems = [
        { label: 'DETAYLI ARAMA', path: '/search/detail' },
        { label: 'ÇEVRİMİÇİ ÜYELER', path: '/search/online' },
        { label: 'YAKIN KONUMDA', path: '/search/near' },
        { label: 'YENİ ÜYELER', path: '/search/new' },
        { label: 'ONAYLI ÜYELER', path: '/search/approve' },
        //{ label: 'YENİ FOTOĞRAFLAR', path: '/search/photo' },
        { label: 'BUGÜN DOĞANLAR', path: '/search/birthday' },
    ];

    const handleMenuClick = (path) => {
        router.push(path);
        setActivePath(path);
    };

    return (
        <div className={styles.container}>
            <div className={styles.frame}>
                {menuItems.map((item) => (
                    <div
                        key={item.path}
                        className={`${styles.menu} ${activePath === item.path ? styles.active : ''}`}
                        onClick={() => handleMenuClick(item.path)}
                    >
                        <label>{item.label}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default SearchMenu;
