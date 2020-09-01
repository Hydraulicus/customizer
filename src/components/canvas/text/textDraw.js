function textDraw({ ctx, ...props }) {
  const { text } = props;
  // console.log('textDraw ctx = ', ctx)
  ctx.font = "120px serif";
  ctx.fillText(text, 500, 1050);
  // ctx.beginPath();
  // ctx.arc(text.length * 50, 50, 50, 0, 2 * Math.PI);
  // ctx.fill();
}

export default textDraw;
