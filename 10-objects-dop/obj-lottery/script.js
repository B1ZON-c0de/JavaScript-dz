function getWinner(applications, winnerObject) {
  const keys = Object.keys(applications);
  const winnerId = getRandomNumberInRange(0, keys.length);

  const winner = applications[keys[winnerId]];

  winner.prize = winnerObject.prize;
  return winner;
}

function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const todaysWinner = {
  prize: '10 000$',
};

const winnerApplicants = {
  '001': {
    name: 'Максим',
    age: 25,
  },
  201: {
    name: 'Светлана',
    age: 20,
  },
  304: {
    name: 'Екатерина',
    age: 35,
  },
};

const resultWinner = getWinner(winnerApplicants, todaysWinner);
console.log('resultWinner', resultWinner);
// { prize: '10 000$', name: 'Максим', age: 25 }
