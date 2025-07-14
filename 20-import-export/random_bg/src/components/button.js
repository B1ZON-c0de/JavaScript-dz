import { getRandomColor } from '../utils/randomColor';

export default function Button() {
  function createButton() {
    const btn = document.createElement('button');
    btn.classList.add('button');
    btn.textContent = 'Изменить цвет страницы';

    document.body.append(btn);

    return btn;
  }

  function buttonHandler() {
    document.body.style.backgroundColor = getRandomColor();
  }

  function render() {
    const btnComponent = createButton();
    btnComponent.addEventListener('click', buttonHandler);
  }

  return {
    render,
  };
}
