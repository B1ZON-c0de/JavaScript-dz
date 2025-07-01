export function validateInputTasks(inputVal, arr) {
  if (!inputVal) return [true, 'Название задачи не должно быть пустым'];
  else if (arr.find((el) => el.text === inputVal))
    return [true, 'Задача с таким названием уже существует'];

  return [false];
}
