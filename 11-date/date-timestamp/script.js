function addDays(date, days) {
  if (isNaN(days) || days <= 0) return 'Ошибка';
  const numberOfDaysMs = days * 24 * 60 * 60 * 1000;

  const newDate = date.getTime() + numberOfDaysMs;

  return new Date(newDate);
}

const date = new Date();

console.log(addDays(date, 5));
