const body = document.querySelector('body');
const tasksList = document.querySelector('.tasks-list');
const inputTask = document.querySelector('.create-task-block__input');
const submit = document.querySelector('.create-task-block');

// Инициализация блока ошибки
const errorBlock = document.createElement('span');
errorBlock.className = 'error-message-block';

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

// Переменная для хранения кнпоки удаления выбранной задачи
let deleteModalBtn = null;

// Переключение тем (светлая-тёмная)
document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    e.preventDefault();
    body.classList.toggle('dark-theme');
  }
});

// Создание и инициализация модального окна
createModal();
const modal = document.querySelector('.modal-overlay');

// Инициализация задач и обработчика к ним
renderTasks(tasks, tasksList);
initHandlersTasks();

// Отображение задач
function renderTasks(arrTasks, tasksList) {
  tasksList.innerHTML = '';

  arrTasks.forEach(({ id, text, completed }) =>
    tasksList.insertAdjacentHTML(
      'beforeend',
      `<div class="task-item" data-task-id="${id}">
    <div class="task-item__main-container">
        <div class="task-item__main-content">
            <form class="checkbox-form">
                <input class="checkbox-form__checkbox" type="checkbox" id="task-${id}" ${
        completed ? 'checked' : ''
      }>
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
// Обработка создания задачи
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
  }
}
// Обработка кнопок задачи (удаление и выполнение)
function handleBtnsTask(e) {
  const deleteBtnTask = e.target.closest('.task-item__delete-button');
  const completeBtn = e.target.closest('.checkbox-form__checkbox');

  if (deleteBtnTask) {
    modal.classList.remove('modal-overlay_hidden');

    deleteModalBtn = deleteBtnTask;
  }
  if (completeBtn) {
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
}
// Глобальные обработчики задач
function initHandlersTasks() {
  submit.addEventListener('submit', handlerSubmit);
  tasksList.addEventListener('click', handleBtnsTask);
}

// Создание модального окна удаления в DOM
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

// Логика обработчика кнопок моадльного окна удаления(ОТМЕНА И УДАЛИТЬ)
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
  modal.classList.add('modal-overlay_hidden');
  renderTasks(tasks, tasksList);
}
