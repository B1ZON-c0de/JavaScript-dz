const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

const getTodosByIds = async (ids) => {
  const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));

  try {
    const responses = await Promise.all(requests);
    const allTasks = await Promise.all(responses.map((data) => data.json()));
    console.log(allTasks);
  } catch (err) {
    console.error('Ошибка: ', err);
  }
};

getTodosByIds([43, 21, 55, 100, 10]);
