let health = +prompt('Введите число параметра "здоровье" для персонажа').trim();
console.log('typeof health', typeof health);
if (health < 0 || !health) {
  alert('Параметр "здоровье" должен быть больше нуля!');
} else {
  alert(`Параметр "здоровье" равен ${health}`);
}
