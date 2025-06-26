class CustomSelect {
  #id;
  #options;
  #currentSelectedOption;
  #selectDropdown;
  #btn;
  #span;
  #ul;
  constructor(id, options) {
    this.#id = id;
    this.#options = options;
    this.#currentSelectedOption = null;

    this.#selectDropdown = document.createElement('div');
    this.#btn = document.createElement('button');
    this.#span = document.createElement('span');
    this.#ul = document.createElement('ul');
  }

  get #selectedValue() {
    const selectedObj = this.#options.find(
      ({ value }) =>
        Number(value) == Number(this.#currentSelectedOption.dataset.value)
    );
    return selectedObj;
  }

  render(container) {
    this.#options.forEach(({ value, text }) => {
      const liElement = new CustomLiElement(value, text);
      const li = liElement.createLiElement();
      this.#ul.appendChild(li);
    });

    this.#btn.classList.add(
      'select-dropdown__button',
      `select-dropdown__button--${this.#id}`
    );
    this.#btn.addEventListener('click', () =>
      this.#ul.classList.toggle('active')
    );

    this.#span.classList.add(
      'select-dropdown__text',
      `select-dropdown__text--${this.#id}`
    );
    this.#span.textContent = 'Выберите элемент';

    this.#ul.classList.add(
      'select-dropdown__list',
      `select-dropdown__list--${this.#id}`
    );
    this.#ul.addEventListener('click', this.#handleButton.bind(this));

    this.#selectDropdown.classList.add(
      'select-dropdown',
      `select-dropdown--${this.#id}`
    );

    this.#btn.append(this.#span);
    this.#selectDropdown.append(this.#btn, this.#ul);
    container.append(this.#selectDropdown);
  }

  #handleButton(e) {
    const allLi = this.#ul.querySelectorAll('.select-dropdown__list-item');
    const selectedLi = e.target.closest('.select-dropdown__list-item');
    if (selectedLi) {
      this.#currentSelectedOption = selectedLi;
      this.#span.textContent = this.#selectedValue.text;
      allLi.forEach((el) => {
        el.classList.remove('selected');
      });
      selectedLi.classList.add('selected');
    }
  }
}

class CustomLiElement {
  #value;
  #text;
  constructor(value, text) {
    this.#value = value;
    this.#text = text;
  }

  createLiElement() {
    const liElement = document.createElement('li');
    liElement.classList.add('select-dropdown__list-item');
    liElement.dataset.value = this.#value;
    liElement.textContent = this.#text;

    return liElement;
  }
}

const options = [
  { value: 1, text: 'JavaScript' },
  { value: 2, text: 'NodeJS' },
  { value: 3, text: 'ReactJS' },
  { value: 4, text: 'HTML' },
  { value: 5, text: 'CSS' },
];

const customSelect = new CustomSelect('123', options);
const mainContainer = document.querySelector('#container');
customSelect.render(mainContainer);
