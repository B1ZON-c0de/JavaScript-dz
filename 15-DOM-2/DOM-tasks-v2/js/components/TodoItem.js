import addProps from '../services/addProps.js';
import { classListToDoItem } from '../shared/constants.js';

export class ToDoItem {
  #taskObj;
  #tasksList;
  #modal;
  #arrTasks;
  #taskItem;
  #mainContainer;
  #mainContent;
  #checkboxForm;
  #checkbox;
  #labelForTask;
  #taskItemText;
  #deleteButton;
  constructor(taskObj = {}, tasksList, modalWindow, arrTasks) {
    this.#taskObj = taskObj;
    this.#tasksList = tasksList;
    this.#modal = modalWindow;
    this.#arrTasks = arrTasks;

    this.#taskItem = null;
    this.#mainContainer = null;
    this.#mainContent = null;
    this.#checkboxForm = null;
    this.#checkbox = null;
    this.#labelForTask = null;
    this.#taskItemText = null;
    this.#deleteButton = null;
  }

  #createDOM() {
    this.#taskItem = document.createElement('div');
    this.#mainContainer = document.createElement('div');
    this.#mainContent = document.createElement('div');
    this.#checkboxForm = document.createElement('form');
    this.#checkbox = document.createElement('input');
    this.#labelForTask = document.createElement('label');
    this.#taskItemText = document.createElement('span');
    this.#deleteButton = document.createElement('button');
  }

  #addPropsElements() {
    addProps(this.#taskItem, classListToDoItem.taskItem, {
      'data-task-id': this.#taskObj.id,
    });

    addProps(this.#mainContainer, classListToDoItem.mainContainer);

    addProps(this.#mainContent, classListToDoItem.mainContent);

    addProps(this.#checkboxForm, classListToDoItem.checkboxForm);

    addProps(this.#checkbox, classListToDoItem.checkbox, {
      id: `task-${this.#taskObj.id}`,
      type: 'checkbox',
    });

    addProps(this.#labelForTask, '', { for: `task-${this.#taskObj.id}` });

    addProps(this.#taskItemText, classListToDoItem.taskItemText);
    this.#taskItemText.textContent = this.#taskObj?.text;

    addProps(this.#deleteButton, [...classListToDoItem.deleteButton]);
    this.#deleteButton.textContent = 'Удалить';
  }

  #appendElements() {
    this.#tasksList.append(this.#taskItem);
    this.#taskItem.append(this.#mainContainer);
    this.#mainContainer.append(this.#mainContent);
    this.#mainContainer.append(this.#deleteButton);
    this.#mainContent.append(this.#checkboxForm);
    this.#mainContent.append(this.#taskItemText);
    this.#checkboxForm.append(this.#checkbox);
    this.#checkboxForm.append(this.#labelForTask);
  }

  render() {
    this.#createDOM();
    this.#addPropsElements();
    this.#appendElements();
    this.#handleItems();
  }

  #handleItems() {
    this.#taskItem.addEventListener('click', (e) => {
      if (e.target.closest('.delete-button')) {
        this.#modal.open();
        this.#modal.setDeleteObj = this.#arrTasks.find(
          (el) => el.id === e.target.closest('.task-item').dataset.taskId
        );
      }
      if (e.target.closest('.checkbox-form')) {
        e.target.checked
          ? (this.#taskItemText.style.textDecoration = 'line-through')
          : (this.#taskItemText.style.textDecoration = 'none');
      }
    });
  }
}
