function startGame(heroPlayer, enemyPlayer) {
  while (enemyPlayer.health > 0 && heroPlayer.health > 0) {
    if (getRandomNumberInRange(0, 1) === 1) {
      enemyPlayer.heatHero(hero);
      console.log(
        `${enemyPlayer.name} наносит удар!\n`,
        `У ${heroPlayer.name} осталось здоровья:`,
        heroPlayer.health
      );
    } else {
      heroPlayer.heatEnemy(enemy);
      console.log(
        `${heroPlayer.name} наносит удар!\n`,
        `У ${enemyPlayer.name} осталось здоровья:`,
        enemyPlayer.health
      );
    }
  }

  const winner =
    enemyPlayer.health > heroPlayer.health ? enemyPlayer : heroPlayer;
  alert(`${winner.name} победил! У него осталось ${winner.health} здоровья`);
}

function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const hero = {
  name: 'Batman',
  health: 100,
  heatEnemy: function (enemy) {
    enemy.health -= 10;
  },
};
const enemy = {
  name: 'Joker',
  health: 100,
  heatHero: function (hero) {
    hero.health -= 10;
  },
};

startGame(hero, enemy);
