import { ToDoItem } from './TodoItem.js';
import { NewTask } from '../services/createNewObject.js';
import { ErrorBlock } from './ErrorBlock.js';
import { clasListToDoList } from '../shared/constants.js';
import { validateInputTasks } from '../services/validateInput.js';
import addProps from '../services/addProps.js';

export class ToDoList {
  #DOM_body;
  #arrTasks;
  #modal;
  #tasks;
  #tasksWrapper;
  #createTaskBlock;
  #tasksList;
  #inputCreateTask;
  #buttonCreateTask;
  constructor(DOM_body, arrTasks, modal) {
    this.#DOM_body = DOM_body;
    this.#arrTasks = arrTasks;
    this.#modal = modal;

    this.#tasks = null;
    this.#tasksWrapper = null;
    this.#createTaskBlock = null;
    this.#tasksList = null;
    this.#inputCreateTask = null;
    this.#buttonCreateTask = null;
  }

  #createDOM() {
    this.#tasks = document.createElement('div');
    this.#tasksWrapper = document.createElement('div');
    this.#createTaskBlock = document.createElement('form');
    this.#tasksList = document.createElement('div');
    this.#inputCreateTask = document.createElement('input');
    this.#buttonCreateTask = document.createElement('button');
  }

  #addPropsElements() {
    addProps(this.#tasks, '', { id: 'tasks' });

    addProps(this.#tasksWrapper, clasListToDoList.tasksWrapper);

    addProps(this.#createTaskBlock, clasListToDoList.createTaskBlock);

    addProps(this.#tasksList, clasListToDoList.tasksList);

    addProps(this.#inputCreateTask, [...clasListToDoList.inputCreateTask], {
      name: 'taskName',
      type: 'text',
      placeholder: 'Создайте новую задачу',
      value: 'Посмотреть урок по JavaScript',
    });

    addProps(this.#buttonCreateTask, [...clasListToDoList.buttonCreateTask], {
      type: 'submit',
    });
    this.#buttonCreateTask.textContent = 'Создать';
  }

  #appendElements() {
    this.#DOM_body.prepend(this.#tasks);
    this.#tasks.append(this.#tasksWrapper);
    this.#tasksWrapper.append(this.#createTaskBlock);
    this.#tasksWrapper.append(this.#tasksList);
    this.#createTaskBlock.append(this.#inputCreateTask);
    this.#createTaskBlock.append(this.#buttonCreateTask);
  }

  render() {
    this.#createDOM();
    this.#addPropsElements();
    this.#appendElements();
    this.#handlerButton();
  }

  renderTasks(arrTasks = []) {
    arrTasks.forEach((el) => {
      const task = new ToDoItem(
        el,
        this.#tasksList,
        this.#modal,
        this.#arrTasks
      );
      task.render();
    });
  }

  #addTask(arrTasks) {
    const newTaskObj = new NewTask(this.#inputCreateTask.value);
    const newTask = new ToDoItem(
      newTaskObj,
      this.#tasksList,
      this.#modal,
      this.#arrTasks
    );
    arrTasks.push(newTaskObj);
    newTask.render();
  }

  #handlerButton() {
    this.#createTaskBlock.addEventListener('submit', (e) => {
      e.preventDefault();
      const [isValidate, errMsg] = validateInputTasks(
        this.#inputCreateTask.value,
        this.#arrTasks
      );
      if (this.#createTaskBlock.querySelector('.error-message-block')) {
        this.#createTaskBlock.querySelector('.error-message-block').remove();
      }
      if (isValidate) {
        const err = new ErrorBlock();
        err.render(this.#createTaskBlock, errMsg);
        return;
      }
      this.#addTask(this.#arrTasks);
      this.#inputCreateTask.value = '';
    });
  }
}
