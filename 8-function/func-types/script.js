function getName1(name) {
  return `Имя равно ${name}`;
}
console.log(getName1('Роман')); // Function Declaration

console.log(
  (function (name) {
    return `Имя равно ${name}`;
  })('Роман')
); // getName2 Function Expression

console.log(((name) => `Имя равно ${name}`)('Роман')); // Arrow Function Expression
