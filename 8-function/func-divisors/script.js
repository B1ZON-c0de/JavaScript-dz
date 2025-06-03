function getDivisorsCount(number) {
  if (number === '' || isNaN(number)) return NaN;
  else if (number < 0 || !Number.isInteger(number)) {
    return getErrMsg(number, alert);
  }

  number = +number;
  let count = getDivisors(number);
  return count;
}

function getDivisors(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) sum++;
  }

  return sum;
}

function getErrMsg(num, callback) {
  callback(`${num} должен быть целым числом и больше нуля!`);
}

console.log(getDivisorsCount(0));
