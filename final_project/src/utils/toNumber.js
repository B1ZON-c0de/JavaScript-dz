export function toNumber(str) {
  if (typeof str !== 'string') return undefined;
  return Number(str.replace('$', ''));
}
