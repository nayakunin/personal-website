import React from 'react';
import cx from 'classnames';
import styles from './styles.module.css';

export const Pixel = (props) => {
    return (
        <div className={styles.root}>
            <div className={cx(styles[props.map[props.row][props.col]], styles.circle)}></div>
        </div>
    )
}