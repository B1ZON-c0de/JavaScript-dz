function getSumOfSequence(number) {
  let arr = [];
  let sum = 0;
  arr = createArr(number);
  sum = calcSum(arr);
  return sum;
}

function createArr(num) {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }
  return arr;
}

function calcSum(arr) {
  let sum = arr.at(0) + arr.at(-1);
  return sum;
}

console.log(getSumOfSequence(5));
