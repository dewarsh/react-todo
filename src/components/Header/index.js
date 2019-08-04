import React from 'react';
import styles from './style.module.css';

const Header = () => {
    return(
        <div className={styles.headerContainer}>
            <p className={styles.headerText}>To-do</p>
        </div>
    )
}

export default Header;