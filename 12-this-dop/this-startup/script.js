const attacker = {
  archer: 30,
  footSoldier: 55,
  cavalry: 10,
  artillery: 3,
  checkChancesToWin(defenderObject) {
    let chance = 0;
    Object.keys(defender).forEach((key) => {
      if (this[key] > defenderObject[key]) chance++;
    });
    return [chance, Object.keys(defenderObject).length];
  },

  improveArmy() {
    for (obj in this) {
      if (typeof this[obj] === 'number') this[obj] += 5;
    }
  },

  attack(defenderObject) {
    const [chance, maxChance] = this.checkChancesToWin(defenderObject);
    const chanceAttack = (chance / maxChance) * 100;
    if (chanceAttack < 70) {
      this.improveArmy();
      alert(
        `Наши шансы равны ${Math.round(chanceAttack)}%. Необходимо укрепление!`
      );
    } else alert('Мы усилились! Мы несомненно победим! Наши шансы высоки!');
  },
};

const defender = {
  archer: 33,
  footSoldier: 50,
  cavalry: 40,
  artillery: 10,
};

attacker.attack(defender); // Наши шансы равны 1/4. Необходимо укрепление!
attacker.attack(defender); // Наши шансы равны 2/4. Необходимо укрепление!
attacker.attack(defender); // Мы усилились! Мы несомненно победим! Наши шансы высоки!
