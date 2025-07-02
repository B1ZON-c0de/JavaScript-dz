import addProps from '../services/addProps.js';
import { classListToDoItem } from '../shared/constants.js';

export function ToDoItem(taskObj = {}, tasksList, modalWindow, arrTasks) {
  const modal = modalWindow;

  let taskItem = null;
  let mainContainer = null;
  let mainContent = null;
  let checkboxForm = null;
  let checkbox = null;
  let labelForTask = null;
  let taskItemText = null;
  let deleteButton = null;

  const createDOM = () => {
    taskItem = document.createElement('div');
    mainContainer = document.createElement('div');
    mainContent = document.createElement('div');
    checkboxForm = document.createElement('form');
    checkbox = document.createElement('input');
    labelForTask = document.createElement('label');
    taskItemText = document.createElement('span');
    deleteButton = document.createElement('button');
  };

  const addPropsElements = () => {
    addProps(taskItem, classListToDoItem.taskItem, {
      'data-task-id': taskObj.id,
    });

    addProps(mainContainer, classListToDoItem.mainContainer);

    addProps(mainContent, classListToDoItem.mainContent);

    addProps(checkboxForm, classListToDoItem.checkboxForm);

    addProps(checkbox, classListToDoItem.checkbox, {
      id: `task-${taskObj.id}`,
      type: 'checkbox',
    });

    addProps(labelForTask, '', { for: `task-${taskObj.id}` });

    addProps(taskItemText, classListToDoItem.taskItemText);
    taskItemText.textContent = taskObj?.text;

    addProps(deleteButton, [...classListToDoItem.deleteButton]);
    deleteButton.textContent = 'Удалить';
  };

  const appendElements = () => {
    tasksList.append(taskItem);
    taskItem.append(mainContainer);
    mainContainer.append(mainContent);
    mainContainer.append(deleteButton);
    mainContent.append(checkboxForm);
    mainContent.append(taskItemText);
    checkboxForm.append(checkbox);
    checkboxForm.append(labelForTask);
  };

  const handleItems = () => {
    taskItem.addEventListener('click', (e) => {
      if (e.target.closest('.delete-button')) {
        modal.open();
        modal.setDeleteObj(
          arrTasks.find(
            (el) => el.id === e.target.closest('.task-item').dataset.taskId
          )
        );
      }
      if (e.target.closest('.checkbox-form')) {
        e.target.checked
          ? (taskItemText.style.textDecoration = 'line-through')
          : (taskItemText.style.textDecoration = 'none');
      }
    });
  };

  const render = () => {
    createDOM();
    addPropsElements();
    appendElements();
    handleItems();
  };

  return { render };
}
