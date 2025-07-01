import addProps from '../services/addProps.js';
import { classListErrorBlock } from '../shared/constants.js';

export class ErrorBlock {
  #errMsgBlock;
  constructor() {
    this.#errMsgBlock = null;
  }

  #createDOM() {
    this.#errMsgBlock = document.createElement('span');
  }

  render(DOM_Element, text) {
    this.#createDOM();
    addProps(this.#errMsgBlock, classListErrorBlock.errMsgBlock);
    DOM_Element.append(this.#errMsgBlock);
    this.#errMsgBlock.textContent = text;
  }
}
