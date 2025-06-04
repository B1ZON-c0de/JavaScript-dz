const coffees = ['Latte', 'Cappuccino', 'Americano'];

let coffeeName = '';
let coffeIndex = 0;

do {
  coffeeName = prompt('Поиск кофе по названию:').trim().toLowerCase();
  coffeIndex = coffees.findIndex((el) => el.toLowerCase() === coffeeName);
  if (coffeIndex === -1) alert('К сожалению, такого вида кофе нет в наличии');
  else {
    alert(
      `Держите ваш любимый кофе ${coffees[coffeIndex]}. Он ${
        coffeIndex + 1
      }-й по популярности в нашей кофейне.`
    );
    break;
  }
} while (true);
