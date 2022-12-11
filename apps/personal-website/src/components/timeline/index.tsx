import './styles.css';

import clsx from 'clsx';
import React from 'react';

const arr = [1, 2, 3];

const Timeline = () => {
  return (
    <ul className="flex flex-col gap-y-5">
      {arr.map((_, i) => (
        <li className={clsx('listItem relative pb-5')}>
          <div className="dot bg-green-500 rounded" />
          <div className="line" />
          <div className="description">
            <p className="text-xl">Title</p>
            <p className="text-md mt-1">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam recusandae repellat
              possimus, aut incidunt quasi doloribus iure ipsum nemo aliquam fugiat officiis nulla
              cupiditate a rem. Accusantium sed eum officia.
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Timeline;