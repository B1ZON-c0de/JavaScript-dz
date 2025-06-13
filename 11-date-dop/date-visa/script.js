const peopleWithVisa = [
  {
    firstName: 'Stasia',
    lastName: 'Ward',
    criminalRecord: true,
    passportExpiration: '19.06.2040',
  },
  {
    firstName: 'Elliot',
    lastName: 'Baker',
    criminalRecord: false,
    passportExpiration: '04.06.2041',
  },
  {
    firstName: 'Leighann',
    lastName: 'Scott',
    criminalRecord: true,
    passportExpiration: '31.07.2039',
  },
  {
    firstName: 'Nick',
    lastName: 'Pop',
    criminalRecord: false,
    passportExpiration: '31.12.2010',
  },
];

function allowVisa(clients) {
  const now = Date.now();
  return clients.filter((el) => {
    const [day, month, year] = el.passportExpiration.split('.').map(Number);
    const dateExpiration = new Date(year, month - 1, day);
    return el.criminalRecord === false && now < dateExpiration;
  });
}

const result = allowVisa(peopleWithVisa);
console.log('result', result);
