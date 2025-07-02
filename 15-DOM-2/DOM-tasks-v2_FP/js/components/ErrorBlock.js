import addProps from '../services/addProps.js';
import { classListErrorBlock } from '../shared/constants.js';

export function ErrorBlock() {
  let errMsgBlock = null;

  const createDOM = () => {
    errMsgBlock = document.createElement('span');
  };

  const render = (DOM_Element, text) => {
    createDOM();
    addProps(errMsgBlock, classListErrorBlock.errMsgBlock);
    DOM_Element.append(errMsgBlock);
    errMsgBlock.textContent = text;
  };

  return { render };
}
