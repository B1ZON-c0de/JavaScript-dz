class Dictionary {
  constructor(name) {
    this.name = name;
    this.words = {};
  }

  add(word, description) {
    if (typeof description != 'string') return;
    if (!(word.toLowerCase() in this.words))
      this.words[word.toLowerCase()] = new Word(word, description);
  }
  remove(word) {
    delete this.words[word.toLowerCase()];
  }
  get(word) {
    if (word.toLowerCase() in this.words) return this.words[word.toLowerCase()];
    else console.log('Такого слова не существует');
  }
  showAllWords() {
    for (const { word, description } of Object.values(this.words)) {
      console.log(`${word} - ${description}`);
    }
  }
}

class HardWordsDictionary extends Dictionary {
  constructor(name) {
    super(name);
  }

  add(word, description) {
    if (typeof description != 'string') return;
    if (!(word.toLowerCase() in this.words))
      this.words[word.toLowerCase()] = new HardWord(word, description);
  }
}

class Word {
  constructor(word, description) {
    this.word = word;
    this.description = description;
  }
}

class HardWord extends Word {
  constructor(word, description) {
    super(word, description);
    this.isDifficult = true;
  }
}

const dictionary = new Dictionary('Толковый словарь');
dictionary.add('JavaScript', 'популярный язык программирования');
dictionary.add(
  'Веб-разработчик',
  'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие'
);

dictionary.remove('JavaScript');

dictionary.showAllWords();

const hardWordsDictionary = new HardWordsDictionary('Сложные слова');

hardWordsDictionary.add(
  'дилетант',
  'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.'
);

hardWordsDictionary.add(
  'неологизм',
  'Новое слово или выражение, а также новое значение старого слова.'
);

hardWordsDictionary.add(
  'квант',
  'Неделимая часть какой-либо величины в физике.'
);

hardWordsDictionary.remove('неологизм');

hardWordsDictionary.showAllWords();
