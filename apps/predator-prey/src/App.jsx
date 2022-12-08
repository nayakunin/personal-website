import React, { useEffect } from 'react';
  import { useDispatch, useSelector } from "react-redux";
  import { initMap, step, addPredator } from './redux/actions';
  import { Map } from './components/map';
  import { Selectors } from './components/selectors';
  import { Header } from './components/header';
  import { LineChart } from './components/line-chart';
  import { Info } from './components/info';
  import { Description } from './components/description';
  import styles from './App.module.css';

export const App = (props) => {
    const dispatch = useDispatch();
    const mapState = useSelector(state => state.map);

    useEffect(() => {
        if (!localStorage.length) {
            localStorage.setItem('isPreyOnly', '0');
        }
    })

    useEffect(() => {
        if (mapState.isMapCreated) {
            // World loop
            const interval = setInterval(() => {
                dispatch(step());
                if (localStorage.getItem('isPreyOnly') === '0' && mapState.iteration % 25 === 0) {
                    dispatch(addPredator());
                }
            }, mapState.speed);
            return () => clearInterval(interval);
        } else {
            // Init map
            dispatch(initMap());
        }
    }, [dispatch, mapState]);

    return (
        <div className={styles.root}>
            <Header />
            <main className={styles.main}>
                <section className={styles['map-container']}>
                    <Map
                        map={mapState.currentMap}
                    />
                </section>
                <section className={styles['stats-container']}>
                    <div className={styles['stats-block']}>
                        <LineChart
                            preys={mapState.preyData}
                            predators={mapState.predatorData}
                            labels={mapState.chartLabels}
                        />
                    </div>
                    <div className={styles['stats-block']}>
                        <Selectors />
                    </div>
                    <div className={styles['stats-block']}>
                        <Info />
                    </div>
                    <div className={styles['stats-block']}>
                        <Description />
                    </div>
                </section>
            </main>
        </div>

    );
}