import React, { useCallback, useState } from 'react';

import { Canvas } from './components';
import { clear, drawBoard, drawEntity } from './helpers';

type MapProps = {
  map: string[][];
};

export const CanvasMap = ({ map }: MapProps) => {
  const [canvasSize, setCanvasSize] = useState(0);

  const canvasContainerRef = useCallback((node: HTMLDivElement) => {
    if (node === null) return;

    setCanvasSize(node.clientWidth);
  }, []);

  const draw = useCallback(
    (ctx: CanvasRenderingContext2D) => {
      const width = ctx.canvas.width;
      const height = ctx.canvas.height;

      clear(ctx, width, height);
      drawBoard(ctx, width, height, map.length);

      map.forEach((row, row_index) => {
        row.forEach((cell, column_index) => {
          drawEntity(ctx, cell, width, height, row_index, column_index, map.length);
        });
      });
    },
    [map],
  );

  return (
    <div ref={canvasContainerRef} className='w-full'>
      <Canvas draw={draw} width={canvasSize} height={canvasSize} />
    </div>
  );
};
