// Main Function
function getSumOfNumbers(number, type = 'odd') {
  let sum = 0;

  if (number === '' || isNaN(number)) {
    return NaN;
  }

  number = +number;
  sum = getSum(number, type);
  return sum;
}

// Function of select cycle
function getSum(num, type) {
  if (type === '') return getCycleAll(num);
  if (type === 'even') return getCycleEven(num);
  if (type === 'odd') return getCycleOdd(num);
}

// Function is type empty
function getCycleAll(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
}

// Function is type even
function getCycleEven(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) sum += i;
  }
  return sum;
}

// Function is type odd
function getCycleOdd(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    if (i % 2 != 0) sum += i;
  }
  return sum;
}

console.log(getSumOfNumbers('10', ''));
