export const drawBoard = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  size: number,
) => {
  for (let i = 0; i <= size; i++) {
    ctx.beginPath();
    ctx.strokeStyle = '#93c5fd';
    ctx.moveTo((width / size) * i, 0);
    ctx.lineTo((width / size) * i, height);
    ctx.moveTo(0, (height / size) * i);
    ctx.lineTo(width, (height / size) * i);
    ctx.stroke();
  }
};
