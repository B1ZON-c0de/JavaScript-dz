import { ModalWindow } from './components/ModalWindow.js';
import { ToDoList } from './components/ToDoList.js';
import { tasks } from './shared/constants.js';

const body = document.querySelector('body');

const modal = ModalWindow(body, tasks);
const todo = ToDoList(body, tasks, modal);
modal.render();
todo.render();
todo.renderTasks(tasks);
