const goals = [8, 1, 1, 3, 2, -1, 5];

function getStats(arr) {
  const { round, max, min } = Math;

  const filtered = arr.filter((el) => el !== -1);
  const sumOfGoals = filtered.reduce((acc, val) => acc + val, 0);
  const numberOfGoalsBest = max(...filtered);
  const numberOfGoalsBad = min(...filtered);
  const bestMatch = arr.indexOf(numberOfGoalsBest) + 1;
  const badMatch = filtered
    .map((el, idx) => (el === numberOfGoalsBad ? idx + 1 : null))
    .filter(Number);
  const isAutoLose = arr.includes(-1) ? 'да' : 'нет';
  const middleNumGoals = round(sumOfGoals / arr.length);
  const sortedGoals = [...filtered].sort((a, b) => a - b); // без -1 потомучто это не гол, а автопоражение

  alert(
    `Самый результативный матч был под номером ${bestMatch}. В нем было забито ${numberOfGoalsBest} гол(ов).`
  );

  alert(
    `Самые нерезультативные матчи были под номерами ${badMatch}. В каждом из них было забито по ${numberOfGoalsBad} мячу(а).`
  );
  alert(`Общее количество голов за сезон равно ${sumOfGoals}`);
  alert(`Были автоматические поражения: ${isAutoLose}`);
  alert(`Среднее количество голов за матч равно ${middleNumGoals}`);
  alert(sortedGoals);
}

getStats(goals);
