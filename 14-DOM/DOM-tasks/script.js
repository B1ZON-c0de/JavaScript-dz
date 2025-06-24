const tasksList = document.querySelector('.tasks-list');

const tasks = [
  {
    id: '1138465078061',
    completed: false,
    text: 'Посмотреть новый урок по JavaScript',
  },
  {
    id: '1138465078062',
    completed: false,
    text: 'Выполнить тест после урока',
  },
  {
    id: '1138465078063',
    completed: false,
    text: 'Выполнить ДЗ после урока',
  },
];

function renderTasks(arrTasks, tasksList) {
  tasksList.innerHTML = '';

  arrTasks.forEach(({ id, text }) =>
    tasksList.insertAdjacentHTML(
      'beforeend',
      `<div class="task-item" data-task-id="${id}">
    <div class="task-item__main-container">
        <div class="task-item__main-content">
            <form class="checkbox-form">
                <input class="checkbox-form__checkbox" type="checkbox" id="task-${id}">
                <label for="task-${id}"></label>
            </form>
            <span class="task-item__text">
                ${text}
            </span>
        </div>
        <button class="task-item__delete-button default-button delete-button">
            Удалить
        </button>
    </div>
</div>`
    )
  );
}
function completeTask(e) {
  const textSpans = document.querySelectorAll('.task-item__text');
  const task = tasks.find((el) => el.id === e.target.id.replace('task-', ''));
  const taskText = [...textSpans].find(
    (el) => el.closest('.task-item').dataset.taskId === task.id
  );
  task.completed = e.target.checked;
  task.completed
    ? (taskText.style.textDecoration = 'line-through')
    : (taskText.style.textDecoration = '');
}

renderTasks(tasks, tasksList);

const completeBtns = document.querySelectorAll('.checkbox-form__checkbox');

completeBtns.forEach((el) => el.addEventListener('click', completeTask));
