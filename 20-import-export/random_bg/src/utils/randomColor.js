export function getRandomColor(isAlpha) {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  if (isAlpha) {
    const alpha = Number(Math.random().toFixed(1));
    return `rgba(${red},${green},${blue},${alpha})`;
  }

  return `rgb(${red},${green},${blue})`;
}
