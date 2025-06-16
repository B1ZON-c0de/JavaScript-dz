const dog = {
  name: 'Чарли',
  type: 'Собака',
  makeSound() {
    return 'Гав-Гав';
  },
};

const bird = {
  name: 'Петя',
  type: 'Воробей',
  makeSound() {
    return 'Чик-чирик'; // ЧЫК-ЧЫРЫК xD
  },
};

function makeDomestic(isDomestic) {
  this.isDomestic = isDomestic;
  console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
  return this;
}

makeDomestic.bind(dog, true)();
makeDomestic.call(bird, false);
makeDomestic.apply(bird, [false]);
