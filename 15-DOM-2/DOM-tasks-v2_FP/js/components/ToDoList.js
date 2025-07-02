import { ToDoItem } from './TodoItem.js';
import { NewTask } from '../services/createNewObject.js';
import { ErrorBlock } from './ErrorBlock.js';
import { classListToDoList } from '../shared/constants.js';
import { validateInputTasks } from '../services/validateInput.js';
import addProps from '../services/addProps.js';

export function ToDoList(DOM_body, arrTasks, modal) {
  let tasks = null;
  let tasksWrapper = null;
  let createTaskBlock = null;
  let tasksList = null;
  let inputCreateTask = null;
  let buttonCreateTask = null;

  const createDOM = () => {
    tasks = document.createElement('div');
    tasksWrapper = document.createElement('div');
    createTaskBlock = document.createElement('form');
    tasksList = document.createElement('div');
    inputCreateTask = document.createElement('input');
    buttonCreateTask = document.createElement('button');
  };

  const addPropsElements = () => {
    addProps(tasks, '', { id: 'tasks' });
    addProps(tasksWrapper, classListToDoList.tasksWrapper);
    addProps(createTaskBlock, classListToDoList.createTaskBlock);
    addProps(tasksList, classListToDoList.tasksList);
    addProps(inputCreateTask, [...classListToDoList.inputCreateTask], {
      name: 'taskName',
      type: 'text',
      placeholder: 'Создайте новую задачу',
      value: 'Посмотреть урок по JavaScript',
    });
    addProps(buttonCreateTask, [...classListToDoList.buttonCreateTask], {
      type: 'submit',
    });
    buttonCreateTask.textContent = 'Создать';
  };

  const appendElements = () => {
    DOM_body.prepend(tasks);
    tasks.append(tasksWrapper);
    tasksWrapper.append(createTaskBlock);
    tasksWrapper.append(tasksList);
    createTaskBlock.append(inputCreateTask);
    createTaskBlock.append(buttonCreateTask);
  };

  const addTask = (arrTasks) => {
    const newTaskObj = new NewTask(inputCreateTask.value);
    const newTask = ToDoItem(newTaskObj, tasksList, modal, arrTasks);
    arrTasks.push(newTaskObj);
    newTask.render();
  };

  const handlerButton = () => {
    createTaskBlock.addEventListener('submit', (e) => {
      e.preventDefault();
      const [isValidate, errMsg] = validateInputTasks(
        inputCreateTask.value,
        arrTasks
      );
      if (createTaskBlock.querySelector('.error-message-block')) {
        createTaskBlock.querySelector('.error-message-block').remove();
      }
      if (isValidate) {
        const err = ErrorBlock();
        err.render(createTaskBlock, errMsg);
        return;
      }
      addTask(arrTasks);
      inputCreateTask.value = '';
    });
  };

  const render = () => {
    createDOM();
    addPropsElements();
    appendElements();
    handlerButton();
  };

  const renderTasks = (arrTasks = []) => {
    arrTasks.forEach((el) => {
      const task = ToDoItem(el, tasksList, modal, arrTasks);
      task.render();
    });
  };

  return {
    renderTasks,
    render,
  };
}
