export function validateText(str) {
  if (str === null) return false;
  return str.trim().length >= 3;
}
