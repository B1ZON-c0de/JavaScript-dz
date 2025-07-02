export const tasks = [
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

export const classListErrorBlock = {
  errMsgBlock: 'error-message-block',
};

export const classListModal = {
  modalOverlay: ['modal-overlay', 'modal-overlay_hidden'],
  deleteModal: 'delete-modal',
  modalText: 'delete-modal__question',
  deleteButtons: 'delete-modal__buttons',
  buttonCancel: ['delete-modal__button', 'delete-modal__cancel-button'],
  buttonConfirm: ['delete-modal__button', 'delete-modal__confirm-button'],
};

export const classListToDoItem = {
  taskItem: 'task-item',
  mainContainer: 'task-item__main-container',
  mainContent: 'task-item__main-content',
  checkboxForm: 'checkbox-form',
  checkbox: 'checkbox-form__checkbox',
  taskItemText: 'task-item__text',
  deleteButton: ['task-item__delete-button', 'default-button', 'delete-button'],
};

export const classListToDoList = {
  tasksWrapper: 'tasks__wrapper',
  createTaskBlock: 'create-task-block',
  tasksList: 'tasks-list',
  inputCreateTask: ['create-task-block__input', 'default-text-input'],
  buttonCreateTask: ['create-task-block__button', 'default-button'],
};
