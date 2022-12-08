import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { mapSelector } from '../../redux/selectors';
import styles from './styles.module.css';

export const Info = (props) => {
    const mapState = useSelector(mapSelector);
    const [preysAvg, setPreysAvg] = useState(1);
    const [predatorsAvg, setPredatorsAvg] = useState(1);


    useEffect(() => {
        if (mapState.preyData.length > 1) {
            setPreysAvg(
                mapState.preyData.slice(-100, -1)
                    .reduce((sum, curr) => sum + curr)
                / (mapState.preyData.length < 100
                    ? mapState.preyData.length : 100));
        }
        if (mapState.predatorData.length > 1) {
            setPredatorsAvg(
                mapState.predatorData.slice(-100, -1)
                    .reduce((sum, curr) => sum + curr)
                / (mapState.predatorData.length < 100
                    ? mapState.predatorData.length : 100));
        }
    }, [mapState, setPreysAvg, setPredatorsAvg]);

    return (
        <div className={styles.root}>
            <ul className={styles.list}>
                <li className={styles.option}>
                    <h4 className={styles.title}>Среднее количество жертв за последние 100 итераций:</h4>
                    <p className={styles.value}>{preysAvg}</p>
                </li>
                {localStorage.getItem('isPreyOnly') === '0'
                    ? (
                        <li className={styles.option}>
                            <h4 className={styles.title}>Среднее количество хищников за последние 100 итераций:</h4>
                            <p className={styles.value}>{predatorsAvg}</p>
                        </li>
                    ) : null}
                <li className={styles.option}>
                    <h4 className={styles.title}>Площадь мира:</h4>
                    <p className={styles.value}>{mapState.size.width * mapState.size.height}</p>
                </li>
            </ul>
        </div>
    )
}
