import { Component } from '../core/Component';
import { Form } from './Form';
import { List } from './List';
import { ListItem } from './ListItem';
import { toNumber } from '../utils/toNumber';

export class App extends Component {
  setup(props) {
    this.state = {
      donates: [],
      donateList: null,
    };

    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'app';

    this.$spanAmount = document.createElement('span');
    this.$spanAmount.textContent = '$0';

    const $headerAmount = document.createElement('h1');
    $headerAmount.classList.add('total-amount');
    $headerAmount.textContent = 'Итого: ';
    $headerAmount.appendChild(this.$spanAmount);
    this.$rootElement.appendChild($headerAmount);

    const donateForm = new Form({ onSubmit: this.onItemCreate.bind(this) });
    this.$rootElement.appendChild(donateForm.$rootElement);

    const donateList = new List({ onDelete: this.onItemDelete.bind(this) });
    this.state.donateList = donateList;
    this.$rootElement.appendChild(donateList.$rootElement);
  }

  onItemCreate(amount) {
    this.state.donates.push(amount);
    this.$spanAmount.textContent = `$${this.state.donates.reduce(
      (acc, val) => acc + val,
      0
    )}`;

    this.state.donateList.addItem(
      new ListItem({ donateValue: amount }).$rootElement
    );
  }

  onItemDelete(value, element) {
    element.remove();
    this.state.donates.splice(this.state.donates.indexOf(value), 1);

    this.$spanAmount.textContent = `$${
      toNumber(this.$spanAmount.textContent) - value
    }`;
  }
}
