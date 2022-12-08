import React from 'react';
import cx from 'classnames';
import styles from './styles.module.css';

type PixelProps = {
    map: string[][];
    row: number;
    col: number;
}

export const Pixel = (props: PixelProps) => {
    return (
        <div className={styles.root}>
            <div className={cx(styles[props.map[props.row][props.col]], styles.circle)}></div>
        </div>
    )
}