const ticketNumbersRange = [1016, 1937];
let winnerTicket = null;

function validationTicket(num) {
  return num % 3 === 0 && num % 7 === 0 && num % 5 !== 0 && num % 2 !== 0;
}

for (let i = ticketNumbersRange[0]; i <= ticketNumbersRange[1]; i++) {
  if (validationTicket(i)) {
    if (i > winnerTicket) {
      winnerTicket = i;
    }
  }
}

console.log('Номер выигрышного билета: ', winnerTicket);
