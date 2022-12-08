import React from 'react';
import styles from './styles.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>{
                localStorage.getItem('isPreyOnly') === '0'
                    ? 'Модель хищник-жертва' : 'Модель жертва'}
            </h1>
        </header>
    );
};
