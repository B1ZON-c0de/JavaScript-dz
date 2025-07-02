import addProps from '../services/addProps.js';
import { classListModal } from '../shared/constants.js';

export function ModalWindow(DOM_Element, arrTasks) {
  let currentDeleteObject = null;
  let modalOverlay = null;
  let deleteModal = null;
  let modalText = null;
  let deleteButtons = null;
  let buttonCancel = null;
  let buttonConfirm = null;

  const setDeleteObj = (valueObj) => {
    currentDeleteObject = valueObj;
  };

  const createDOM = () => {
    modalOverlay = document.createElement('div');
    deleteModal = document.createElement('div');
    modalText = document.createElement('h3');
    deleteButtons = document.createElement('div');
    buttonCancel = document.createElement('button');
    buttonConfirm = document.createElement('button');
  };

  const addPropsElements = () => {
    addProps(modalOverlay, [...classListModal.modalOverlay]);
    addProps(deleteModal, classListModal.deleteModal);
    addProps(modalText, classListModal.modalText);
    modalText.textContent = 'Вы действительно хотите удалить эту задачу?';
    addProps(deleteButtons, classListModal.deleteButtons);
    addProps(buttonCancel, [...classListModal.buttonCancel]);
    buttonCancel.textContent = 'Отмена';
    addProps(buttonConfirm, [...classListModal.buttonConfirm]);
    buttonConfirm.textContent = 'Удалить';
  };

  const appendElements = () => {
    DOM_Element.prepend(modalOverlay);
    modalOverlay.append(deleteModal);
    deleteModal.append(modalText);
    deleteModal.append(deleteButtons);
    deleteButtons.append(buttonCancel);
    deleteButtons.append(buttonConfirm);
  };

  const hundlerButtons = () => {
    deleteButtons.addEventListener('click', (e) => {
      if (e.target.closest('.delete-modal__cancel-button')) close();
      if (e.target.closest('.delete-modal__confirm-button')) {
        arrTasks.splice(arrTasks.indexOf(currentDeleteObject), 1);
        document
          .querySelector(`[data-task-id="${currentDeleteObject.id}"]`)
          .remove();
        close();
      }
    });
  };

  const render = () => {
    createDOM();
    addPropsElements();
    appendElements();
    hundlerButtons();
  };

  const open = () => {
    modalOverlay.classList.remove('modal-overlay_hidden');
  };

  const close = () => {
    modalOverlay.classList.add('modal-overlay_hidden');
  };

  return { setDeleteObj, open, render };
}
