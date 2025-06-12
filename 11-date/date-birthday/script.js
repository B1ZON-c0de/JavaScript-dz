// Оновная функция которая получает дни до др
function getDaysBeforeBirthday(nextBirthdayDate) {
  if (!isNaN(nextBirthdayDate)) {
    const { now } = Date;
    const dif = nextBirthdayDate.getTime() - now();
    const days = convertMsToDays(dif);
    if (days < 0) return 'Ваш день рождения уже прошёл';
    else return `До вашего дня рождения осталось:  ${days} дней`;
  } else {
    return nextBirthdayDate;
  }
}

// функция которая конверирует из мс в дни
function convertMsToDays(date) {
  const oneDay = 1000 * 60 * 60 * 24;
  const days = Math.round(date / oneDay);

  return days;
}

// функция которая получает и обрабатывает ввод пользователя
function getBirthdayDate() {
  const inputDateBirthday = prompt(
    'Введите дату вашего дня рождение по шаблону(ГГГГ,ММ,ДД)'
  )
    .trim()
    .replace(/\s/g, '')
    .split(',')
    .filter((el) => el != '')
    .map((el) => Number(el));

  const [year, months, day] = inputDateBirthday;

  if (
    inputDateBirthday.length === 3 &&
    String(year).length === 4 &&
    !isNaN(year) &&
    !isNaN(months) &&
    !isNaN(day) &&
    months >= 1 &&
    months <= 12
  )
    return new Date(year, months - 1, day);

  return [
    'Ошибка!\nДата должна быить написана по шаблону [ГГГГ,ММ,ДД] например: 2025,6,19',
    'error',
  ];
}

// Функция которая обрабатывет текст полученный из основной функции
function showTextConsole(str) {
  const { isArray } = Array;
  if (isArray(str)) {
    const [txt, modifier] = str;
    console[modifier](txt);
  } else console.log(str);
}

const birthday = getBirthdayDate();

showTextConsole(getDaysBeforeBirthday(birthday));
