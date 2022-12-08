import React from 'react';
import styles from './styles.module.css';
import { Pixel } from '../pixel';

export const Map = (props) => {
    return (
        <div className={styles.root}>
            <div className={styles.grid}>
                {props.map.map((row, row_index) => {
                    return (
                        <div
                            key={row_index}
                            className={styles.grid__row}
                        >
                            {row.map((_, column_index) => {
                                return (
                                    <Pixel
                                        key={`${row_index}:${column_index}`}
                                        row={row_index}
                                        col={column_index}
                                        map={props.map}
                                    />
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
