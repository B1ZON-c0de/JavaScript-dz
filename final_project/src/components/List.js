import { Component } from '../core/Component';
import { toNumber } from '../utils/toNumber';

export class List extends Component {
  setup() {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donates-container';

    const $headingDonates = document.createElement('h2');
    $headingDonates.classList.add('donates-container__title');
    $headingDonates.textContent = 'Список донатов';
    this.$rootElement.appendChild($headingDonates);

    const $donatesList = document.createElement('div');
    $donatesList.classList.add('donates-container__donates');
    this.$rootElement.appendChild($donatesList);

    this.$rootElement.addEventListener('click', this.handleBtn.bind(this));
  }

  addItem(item) {
    this.$rootElement.appendChild(item);
  }

  handleBtn(event) {
    if (event.target.closest('.delete-button')) {
      this.props.onDelete(
        toNumber(event.target.parentElement.querySelector('b').textContent),
        event.target.parentElement
      );
    }
  }
}
