import './index.css';

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { CanvasMap, Description, Header, Info, LineChart, Selectors } from './components';
import { StatsBlock } from './components/stats-block';
import { addPredator, init, step, useAppSelector } from './redux';

export const App = () => {
  const dispatch = useDispatch();
  const mapState = useAppSelector((state) => state.map);

  useEffect(() => {
    if (!localStorage.length) {
      localStorage.setItem('isPreyOnly', '0');
    }
  });

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
      dispatch(init());
    }
  }, [dispatch, mapState]);

  return (
    <div className="w-full p-4">
      <Header />
      <main className="m-auto max-w-7xl grid grid-cols-1 gap-8 xl:grid-cols-2">
        <section className="relative flex flex-col justify-start items-center">
          <CanvasMap map={mapState.currentMap} />
        </section>
        <section className="flex flex-col justify-start items-start overflow-y-scroll max-h-[90vh]">
          <StatsBlock>
            <LineChart
              preys={mapState.preyData}
              predators={mapState.predatorData}
              labels={mapState.chartLabels}
            />
          </StatsBlock>
          <StatsBlock>
            <Selectors />
          </StatsBlock>
          <StatsBlock>
            <Info />
          </StatsBlock>
          <StatsBlock>
            <Description />
          </StatsBlock>
        </section>
      </main>
    </div>
  );
};
