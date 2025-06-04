const coffees = ['Latte', 'Cappuccino', 'Americano'];
const prices = [1.5, 1, 2];

const updatePrices = prices.map((el) => el + 0.5);

coffees.forEach((el, i) =>
  alert(`Кофе ${el} сейчас стоит ${updatePrices[i]} евро`)
);
