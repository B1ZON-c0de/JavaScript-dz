function getKiller(suspectInfo, deadPeople) {
  for (const [suspect, peoples] of Object.entries(suspectInfo)) {
    const hasAll = deadPeople.every((el) => peoples.includes(el));
    if (hasAll) return suspect;
  }
}

console.log(
  getKiller(
    {
      James: ['Jacob', 'Bill', 'Lucas'],
      Johnny: ['David', 'Kyle', 'Lucas'],
      Peter: ['Lucy', 'Kyle'],
    },
    ['Lucas', 'Bill']
  )
); // Убийца James

console.log(
  getKiller(
    {
      Brad: [],
      Megan: ['Ben', 'Kevin'],
      Finn: [],
    },
    ['Ben']
  )
); // Убийца Megan
