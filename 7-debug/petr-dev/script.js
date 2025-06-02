const salaryOfJuniorDeveloper = 500;
const numberOfJuniorDevelopers = 3;
let taxPercentage = 13;
let totalJuniorDevelopersSalary = 0;

for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
  console.log(i);
  const salaryWithTax =
    salaryOfJuniorDeveloper - (salaryOfJuniorDeveloper * taxPercentage) / 100;

  console.log(salaryWithTax);

  totalJuniorDevelopersSalary += salaryWithTax;

  console.log(totalJuniorDevelopersSalary);
}
console.log('totalJuniorDevelopersSalary', totalJuniorDevelopersSalary);
