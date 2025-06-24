const body = document.querySelector('body');
// Toggle Dark Theme -------
document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    e.preventDefault();
    body.classList.toggle('dark-theme');
  }
});

//----------

const tasksList = document.querySelector('.tasks-list');

const inputTask = document.querySelector('.create-task-block__input');
const submit = document.querySelector('.create-task-block');

const errorBlock = document.createElement('span');
errorBlock.className = 'error-message-block';

createModal();
const modal = document.querySelector('.modal-overlay');
let deleteModalBtn = null;

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
function handlerSubmit(e) {
  e.preventDefault();
  if (
    !inputTask.value ||
    tasks.some((el) => el.text === inputTask.value.trim())
  ) {
    errorBlock.textContent = !inputTask.value
      ? 'Название задачи не должно быть пустым'
      : 'Задача с таким названием уже существует.';
    submit.append(errorBlock);
  } else {
    if (document.querySelector('.error-message-block')) errorBlock.remove();
    tasks.push({
      id: Date.now().toString(),
      completed: false,
      text: inputTask.value.trim(),
    });
    inputTask.value = '';
    renderTasks(tasks, tasksList);
    handleTasks();
  }
}
function deleteTask(e) {
  const deleteBtnTask = e.target.closest('.task-item__delete-button');

  if (deleteBtnTask) {
    const modal = document.querySelector('.modal-overlay');
    modal.classList.remove('modal-overlay_hidden');

    deleteModalBtn = deleteBtnTask;
  }
}
function handleTasks() {
  const completeBtns = document.querySelectorAll('.checkbox-form__checkbox');

  submit.addEventListener('submit', handlerSubmit);
  completeBtns.forEach((el) => el.addEventListener('click', completeTask));
  tasksList.addEventListener('click', deleteTask);
}

function createModal() {
  body.insertAdjacentHTML(
    'beforeend',
    `<div class="modal-overlay modal-overlay_hidden">
    <div class="delete-modal">
        <h3 class="delete-modal__question">
            Вы действительно хотите удалить эту задачу?
        </h3>
        <div class="delete-modal__buttons">
            <button class="delete-modal__button delete-modal__cancel-button">
                Отмена
            </button>
            <button class="delete-modal__button delete-modal__confirm-button">
                Удалить
            </button>
        </div>
    </div>
</div>`
  );
  handleModal();
}
function handleModal() {
  const cancelBtn = document.querySelector('.delete-modal__cancel-button');
  const confirmBtn = document.querySelector('.delete-modal__confirm-button');
  cancelBtn.addEventListener('click', () => {
    modal.classList.add('modal-overlay_hidden');
  });
  confirmBtn.addEventListener('click', handleConfirmButton);
}
function handleConfirmButton() {
  const task = deleteModalBtn.closest('.task-item');
  const indexTask = tasks.indexOf(
    tasks.find((el) => el.id === task.dataset.taskId)
  );
  tasks.splice(indexTask, 1);
  console.log(tasks);
  modal.classList.add('modal-overlay_hidden');
  renderTasks(tasks, tasksList);
  handleTasks();
}

renderTasks(tasks, tasksList);
handleTasks();
