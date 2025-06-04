const clientEstimations = [];

function askClientToGiveEstimation() {
  const estimations = +prompt(
    'Как вы оцениваете нашу кофейню от 1 до 10?'
  ).trim();

  typeof estimations === 'number' &&
    estimations >= 1 &&
    estimations <= 10 &&
    clientEstimations.push(estimations);
}

function calcEstimations(arr) {
  let goodFilteredEstimations = arr.filter((el) => el > 5);
  let badFilteredEstimations = arr.filter((el) => el <= 5);
  let good = goodFilteredEstimations.reduce((acc) => ++acc, 0);

  let bad = badFilteredEstimations.reduce((acc) => ++acc, 0);

  return [good, bad];
}

function printEstimations(good, bad, callback) {
  callback(
    `Всего положительных оценок: ${good}; Всего отрицательных оценок: ${bad}`
  );
}

for (let i = 0; i < 5; i++) {
  askClientToGiveEstimation();
}

const [goodEstimations, notGoodEstimations] =
  calcEstimations(clientEstimations);

printEstimations(goodEstimations, notGoodEstimations, alert);
