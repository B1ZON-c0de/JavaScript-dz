import { Component } from '../core/Component';

export class Form extends Component {
  setup(props) {
    this.state = {
      amount: 0,
    };

    this.$rootElement = document.createElement('form');
    this.$rootElement.className = 'donate-form';
    this.$btnSubmit = document.createElement('button');

    this.$btnSubmit.classList.add('donate-form__submit-button');
    this.$btnSubmit.type = 'submit';
    this.$btnSubmit.disabled = true;
    this.$btnSubmit.textContent = 'Задонатить';
    this.$btnSubmit.addEventListener('click', this.handleSubmit.bind(this));

    this.$inputDonate = document.createElement('input');
    this.$inputDonate.classList.add('donate-form__donate-input');
    this.$inputDonate.name = 'amount';
    this.$inputDonate.type = 'number';
    this.$inputDonate.max = 100;
    this.$inputDonate.min = 1;
    this.$inputDonate.required = true;
    this.$inputDonate.addEventListener('input', this.handleInput.bind(this));

    const $labelforInput = document.createElement('label');
    $labelforInput.classList.add('donate-form__input-label');
    $labelforInput.textContent = 'Введите сумму в $';
    $labelforInput.appendChild(this.$inputDonate);
    this.$rootElement.appendChild($labelforInput);

    this.$rootElement.appendChild(this.$btnSubmit);
  }

  handleInput(event) {
    if (
      event.target.value > Number(this.$inputDonate.max) ||
      event.target.value < Number(this.$inputDonate.min)
    ) {
      this.$btnSubmit.disabled = true;
    } else {
      this.$btnSubmit.disabled = false;
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.state.amount = Number(this.$inputDonate.value);
    this.props.onSubmit(this.state.amount);
    this.$inputDonate.value = '';
    this.$btnSubmit.disabled = true;
  }
}
