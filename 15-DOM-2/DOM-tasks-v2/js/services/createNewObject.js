export class NewTask {
  constructor(text) {
    this.id = Date.now().toString();
    this.completed = false;
    this.text = text;
  }
}
