const numbers = [10, 4, 100, -5, 54, 2];

function calcFor(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i] ** 3;
  }

  return sum;
}

function calcForOf(nums) {
  let sum = 0;
  for (num of nums) {
    sum += num ** 3;
  }

  return sum;
}

function calcForEach(nums) {
  let sum = 0;
  nums.forEach((num) => (sum += num ** 3));
  return sum;
}

function calcReduce(nums) {
  let sum = nums.reduce((acc, numVal) => acc + numVal ** 3, 0);
  return sum;
}

console.log(calcFor(numbers));
console.log(calcForOf(numbers));
console.log(calcForEach(numbers));
console.log(calcReduce(numbers));
