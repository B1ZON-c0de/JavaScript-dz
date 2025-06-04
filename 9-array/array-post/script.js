const peopleWaiting = [
  'Кристина',
  'Олег',
  'Кирилл',
  'Мария',
  'Светлана',
  'Артём',
  'Глеб',
];

function giveParcel(arr) {
  let person = '';
  let personReceived = '';
  while (arr.length) {
    [person] = arr;
    if (person === 'Кирилл') {
      alert('Почта закрылась на обед');
      return leaveQueueWithoutParcel(arr);
    }
    personReceived = arr.shift();
    alert(
      `${personReceived} получил(а) посылку. В очереди осталось ${arr.length} человек`
    );
  }
}

function leaveQueueWithoutParcel(arr) {
  let leftPerson = '';
  leftPerson = arr.shift();
  alert(`${leftPerson} не получил(а) посылку и ушел(ла) из очереди`);
  while (arr.length) {
    leftPerson = arr.pop();
    alert(`${leftPerson} не получил(а) посылку и ушел(ла) из очереди`);
  }

  return 'Все ушли';
}

console.log(giveParcel(peopleWaiting));
