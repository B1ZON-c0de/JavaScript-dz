import './index.css';
import jsLogo from './assets/js_logo.png';

console.log('Hello World!');

function Content(img) {
  function createContent() {
    const headerText = document.createElement('h1');
    headerText.textContent = 'I love JavaScript';

    const headerImg = document.createElement('img');
    headerImg.src = img;

    document.body.append(headerText, headerImg);
  }

  function render() {
    createContent();
  }

  return {
    render,
  };
}

const content = Content(jsLogo);
content.render();
