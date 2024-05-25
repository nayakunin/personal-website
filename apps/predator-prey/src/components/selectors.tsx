import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { INIT_SPEED, MAX_MAP_SPEED, MIN_MAP_SPEED } from '../constants';
import { changeSpeed, useAppSelector } from '../redux';
import { Slider } from './slider';

export const Selectors = () => {
  const dispatch = useDispatch();
  const mapState = useAppSelector((state) => state.map);
  const [speed, setSpeed] = useState(mapState.speed);

  const handleRestart = useCallback(() => {
    location.reload();
  }, []);

  const handleChange = useCallback(() => {
    localStorage.setItem('isPreyOnly', localStorage.getItem('isPreyOnly') === '0' ? '1' : '0');
    location.reload();
  }, []);

  useEffect(() => {
    dispatch(changeSpeed(speed));
  }, [dispatch, speed]);

  return (
    <div className='px-4 w-full'>
      <h4 className='mr-1 inline'>Time between iterations:</h4>
      <Slider
        defaultValue={INIT_SPEED}
        getAriaValueText={(value) => `${value} ms`}
        aria-labelledby='discrete-slider'
        valueLabelDisplay='auto'
        step={100}
        min={MIN_MAP_SPEED}
        max={MAX_MAP_SPEED}
        onChange={(_, value) => setSpeed(value as number)}
      />
      <div className='flex justify-between'>
        <button className='py-2 px-3 rounded-md bg-green-600 text-white' onClick={handleRestart}>
          Restart
        </button>
        <button className='py-2 px-3 rounded-md bg-green-600 text-white' onClick={handleChange}>
          Change model
        </button>
      </div>
    </div>
  );
};
