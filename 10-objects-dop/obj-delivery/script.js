const groceries = {
  '73Wakv': {
    name: 'Orange Juice',
    price: 1.5,
    discount: 10,
  },
  '5L3db9': {
    name: 'Chocolate',
    price: 2,
    discount: 0,
  },
  // more items...
};

function getTotalPriceOfShoppingBag(shoppingBagArray) {
  let res = 0;

  for (let { productId, count } of shoppingBagArray) {
    const product = groceries[productId];

    const { price, discount } = product;
    const discountPrice = price * (1 - discount / 100);
    res += discountPrice * count;
  }

  return res.toFixed(2);
}

const shoppingBag = [
  { productId: '5L3db9', count: 23 },
  { productId: '73Wakv', count: 3 },
];

const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
console.log('totalPrice', totalPrice); // Возвращает 50.05
