import React, { CanvasHTMLAttributes, DetailedHTMLProps } from 'react';

import { DrawFunction } from './types';
import { useCanvas } from './use-canvas';

type CanvasProps = DetailedHTMLProps<CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement> & {
  draw: DrawFunction;
};

export const Canvas = ({ draw, ...rest }: CanvasProps) => {
  const canvasRef = useCanvas(draw);

  return <canvas ref={canvasRef} {...rest} />;
};
