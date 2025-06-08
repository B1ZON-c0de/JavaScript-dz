function getMathResult(expression) {
  const regexOp = /[\/+*=<>\-]/g;
  const regexExp = /\d+(?:[\/+*=<>\-]\d+)+/g;

  const filtered = expression
    .map((el) => (typeof el === 'string' ? el.trim() : el))
    .filter((el) => !isNaN(el) || regexOp.test(el));
  const expStr = filtered.join('');

  if (filtered.includes('=')) {
    const [val1, val2] = expStr.split('=');
    return eval(val1) == eval(val2);
  }

  if (regexExp.test(expStr) && filtered.length >= 3) {
    return eval(expStr);
  }

  return 'Ошибка';
}

console.log(getMathResult(['100', 'hello', 'javascript', 'help200', '+', 4])); //104
console.log(getMathResult(['200', '+', 300])); // 500
console.log(getMathResult(['20', '-', '5'])); // 15
console.log(getMathResult([100, '/', 100])); // 1
console.log(getMathResult([2, '-', 2])); // 0
console.log(getMathResult(['5', '>', '10'])); // false
console.log(getMathResult(['5', '<', '10'])); // true
console.log(getMathResult(['1', '=', 1])); // true
console.log(getMathResult(['1', '**', 1])); // 'Ошибка'
console.log(getMathResult(['+', '100', 10])); // 'Ошибка'
