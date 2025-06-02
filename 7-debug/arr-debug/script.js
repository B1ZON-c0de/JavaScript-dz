let numbers = [10, 4, 100, -5, 54, 2];
let sum = 0;

// Через цикл for
for (let i = 0; i < numbers.length; i += 1) {
  numbers[i] = numbers[i] ** 3;
  sum += numbers[i];
  console.log('sum: ', sum);
}
console.log(sum); // 1158411

// Через цикл for of
sum = 0;
for (let num of numbers) {
  console.log('num: ', num);
  // num = num ** 3; <--- тут ошибка, удалять не буду просто закоментирую
  sum += num;
}
console.log(sum); // 1003904306910622800
