class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge(personObj) {
    if (this.age >= personObj.age)
      alert(`${this.name} старше, чем ${personObj.name}`);
    else alert(`${this.name} младше, чем ${personObj.name}`);
  }
}

const person1 = new Person('Максим', 24);
const person2 = new Person('Светлана', 36);
const person3 = new Person('Ирина', 23);

person1.compareAge(person2); // Максим младше, чем Светлана
person2.compareAge(person3); // Светлана старше, чем Ирина
person3.compareAge(person1); // Ирина младше, чем Максим
