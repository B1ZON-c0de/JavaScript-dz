import { Component } from '../core/Component';

export class ListItem extends Component {
  setup(props) {
    this.state = {
      time: new Date(),
    };
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donate-item';
    this.$rootElement.textContent = `${this.state.time
      .toLocaleDateString()
      .replace(/\./g, '/')}, ${this.state.time.toLocaleTimeString()} - `;

    const $donateAmount = document.createElement('b');
    $donateAmount.textContent = `$${this.props.donateValue}`;
    this.$rootElement.appendChild($donateAmount);

    const $deleteBtn = document.createElement('button');
    $deleteBtn.classList.add('delete-button');
    $deleteBtn.textContent = 'Удалить';
    this.$rootElement.appendChild($deleteBtn);
  }
}
