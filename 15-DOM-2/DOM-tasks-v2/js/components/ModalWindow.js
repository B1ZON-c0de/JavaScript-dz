import addProps from '../services/addProps.js';
import { classListModal } from '../shared/constants.js';

export class ModalWindow {
  #DOM_Element;
  #arrTasks;
  #modalOverlay;
  #deleteModal;
  #modalText;
  #deleteButtons;
  #buttonCancel;
  #buttonConfirm;
  #currentDeleteObject;
  constructor(DOM_Element, arrTasks) {
    this.#DOM_Element = DOM_Element;
    this.#arrTasks = arrTasks;

    this.#currentDeleteObject = null;

    this.#modalOverlay = null;
    this.#deleteModal = null;
    this.#modalText = null;
    this.#deleteButtons = null;
    this.#buttonCancel = null;
    this.#buttonConfirm = null;
  }

  set setDeleteObj(valueObj) {
    this.#currentDeleteObject = valueObj;
  }

  #createDOM() {
    this.#modalOverlay = document.createElement('div');
    this.#deleteModal = document.createElement('div');
    this.#modalText = document.createElement('h3');
    this.#deleteButtons = document.createElement('div');
    this.#buttonCancel = document.createElement('button');
    this.#buttonConfirm = document.createElement('button');
  }

  #addPropsElements() {
    addProps(this.#modalOverlay, [...classListModal.modalOverlay]);

    addProps(this.#deleteModal, classListModal.deleteModal);

    addProps(this.#modalText, classListModal.modalText);
    this.#modalText.textContent = 'Вы действительно хотите удалить эту задачу?';

    addProps(this.#deleteButtons, classListModal.deleteButtons);

    addProps(this.#buttonCancel, [...classListModal.buttonCancel]);
    this.#buttonCancel.textContent = 'Отмена';

    addProps(this.#buttonConfirm, [...classListModal.buttonConfirm]);
    this.#buttonConfirm.textContent = 'Удалить';
  }

  #appendElements() {
    this.#DOM_Element.prepend(this.#modalOverlay);
    this.#modalOverlay.append(this.#deleteModal);
    this.#deleteModal.append(this.#modalText);
    this.#deleteModal.append(this.#deleteButtons);
    this.#deleteButtons.append(this.#buttonCancel);
    this.#deleteButtons.append(this.#buttonConfirm);
  }

  render() {
    this.#createDOM();
    this.#addPropsElements();
    this.#appendElements();
    this.#handlerButtons();
  }

  open() {
    this.#modalOverlay.classList.remove('modal-overlay_hidden');
  }

  #close() {
    this.#modalOverlay.classList.add('modal-overlay_hidden');
  }

  #handlerButtons() {
    this.#deleteButtons.addEventListener('click', (e) => {
      if (e.target.closest('.delete-modal__cancel-button')) this.#close();
      if (e.target.closest('.delete-modal__confirm-button')) {
        this.#arrTasks.splice(
          this.#arrTasks.indexOf(this.#currentDeleteObject),
          1
        );
        document
          .querySelector(`[data-task-id="${this.#currentDeleteObject.id}"]`)
          .remove();

        this.#close();
      }
    });
  }
}
