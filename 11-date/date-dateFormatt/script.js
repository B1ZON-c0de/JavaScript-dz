function getDateFormat(date, separator = '.') {
  if (typeof separator != 'string') return 'Ошибка';

  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };

  formatDate = date
    .toLocaleDateString('ru-RU', options)
    .replace(/\./g, separator);

  return formatDate;
}

const date = new Date();

console.log(getDateFormat(date, '-'));
