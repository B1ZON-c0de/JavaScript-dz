class Dictionary {
  #name;
  #words;
  constructor(name) {
    this.#name = name;
    this.#words = {};
  }

  get mainName() {
    return this.#name;
  }

  set mainName(value) {
    this.#name = value;
  }

  get allWords() {
    return this.#words;
  }

  _addNewWord(wordKey, wordObj, description) {
    this.#words[wordKey.toLowerCase()] = new wordObj(wordKey, description);
  }

  add(word, description) {
    if (typeof description != 'string') return;
    if (!(word.toLowerCase() in this.#words))
      this._addNewWord(word, Word, description);
  }
  remove(word) {
    delete this.#words[word.toLowerCase()];
  }
  get(word) {
    if (word.toLowerCase() in this.#words)
      return this.#words[word.toLowerCase()];
    else console.log('Такого слова не существует');
  }
  showAllWords() {
    for (const { word, description } of Object.values(this.#words)) {
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
    if (!(word.toLowerCase() in this.allWords))
      this._addNewWord(word, HardWord, description);
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

console.log(hardWordsDictionary.mainName); // Сложные слова
hardWordsDictionary.mainName = 'Новый Словарь';
console.log(hardWordsDictionary.mainName); // Новый Словарь
console.log(hardWordsDictionary.allWords); // выводит объект в котором есть слова
// дилетант и квант
