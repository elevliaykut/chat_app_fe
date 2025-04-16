import React from "react";
import styles from './Index.module.css';

const SearchMenu = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.frame}>
                    <div className={styles.menu} onClick={() => window.location = '/search/detail'}>
                        <label>DETAYLI ARAMA</label>
                    </div>
                    <div className={styles.menu} onClick={() => window.location = '/search/online'}>
                        <label>ÇEVRİMİÇİ ÜYELER</label>
                    </div>
                    <div className={styles.menu} onClick={() => window.location = '/search/near'}>
                        <label>YAKIN KONUMDA</label>
                    </div>
                    <div className={styles.menu} onClick={() => window.location = '/search/new'}>
                        <label>YENİ ÜYELER</label>
                    </div>
                    <div className={styles.menu} onClick={() => window.location = '/search/approve'}>
                        <label>ONAYLI ÜYELER</label>
                    </div>
                    <div className={styles.menu} onClick={() => window.location = '/search/photo'}>
                        <label>YENİ FOTOĞRAFLAR</label>
                    </div>
                    <div className={styles.menu} onClick={() => window.location = '/search/birthday'}>
                        <label>BUGÜN DOĞANLAR</label>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SearchMenu;