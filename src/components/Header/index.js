import React from 'react';
import styles from './style.module.css';

const Header = ({isFilterVisible, onFilterToggle}) => {
    return(
        <div className={styles.headerContainer}>
            <p className={styles.headerText}>To-do</p>
            {isFilterVisible && <select className={styles.selectTask} onChange={onFilterToggle}>
                <option value="All tasks">All tasks</option>
                <option value="Completed">Completed</option>
                <option value="To be done">To be done</option>
            </select>}
        </div>
    )
}

export default Header;