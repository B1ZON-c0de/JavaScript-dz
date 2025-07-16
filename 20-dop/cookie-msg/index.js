import './index.css';

const btnCoockie = document.querySelector('.cookie-consent__button');
Boolean(localStorage.getItem('isSuccessCoockie')) &&
  btnCoockie.parentNode.remove();
btnCoockie.addEventListener('click', (e) => {
  localStorage.setItem('isSuccessCoockie', true);
  e.target.parentNode.remove();
});
