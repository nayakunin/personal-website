import React from 'react';

import { Pixel } from './pixel';

type MapProps = {
  map: string[][];
};

export const Map = (props: MapProps) => {
  return (
    <div className='flex items-center'>
      {props.map.map((row, row_index) => {
        return (
          <div key={row_index} className='flex flex-col items-center'>
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
  );
};
