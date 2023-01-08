export const drawEntity = (
  ctx: CanvasRenderingContext2D,
  type: string,
  width: number,
  height: number,
  row_index: number,
  column_index: number,
  size: number
) => {
  if (type === 'prey') {
    ctx.beginPath();
    ctx.fillStyle = 'rgb(234 179 8)';
    ctx.arc(
      (width / size) * column_index + width / size / 2,
      (height / size) * row_index + height / size / 2,
      width / size / 2,
      0,
      2 * Math.PI,
      false
    );
    ctx.fill();
  } else if (type === 'predator') {
    ctx.beginPath();
    ctx.fillStyle = 'rgb(249 115 22)';
    ctx.arc(
      (width / size) * column_index + width / size / 2,
      (height / size) * row_index + height / size / 2,
      width / size / 2,
      0,
      2 * Math.PI,
      false
    );
    ctx.fill();
  }
};
