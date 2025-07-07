const URL_IMG = 'https://api.slingacademy.com/v1/sample-data/photos';
const dataContainer = document.querySelector('#data-container');

function Loader(appendParent) {
  const spanLoader = document.createElement('span');
  spanLoader.id = 'loader';
  spanLoader.setAttribute('hidden', '');
  spanLoader.textContent = 'Загрузка...';

  appendParent.append(spanLoader);

  function toggle() {
    if (spanLoader.hasAttribute('hidden')) {
      spanLoader.removeAttribute('hidden');
    } else {
      spanLoader.setAttribute('hidden', '');
    }
  }

  return {
    toggle,
  };
}

function PhotoItem(URL, appendParent, LoaderElement) {
  const loader = LoaderElement(appendParent);

  function createItemImg({ url, title }) {
    const photoItem = document.createElement('li');
    const photoItemImg = document.createElement('img');
    const photoItemTitle = document.createElement('h3');

    photoItem.classList.add('photo-item');
    photoItemImg.classList.add('photo-item__image');
    photoItemTitle.classList.add('photo-item__title');

    photoItemImg.src = url;
    photoItemTitle.textContent = title;

    photoItem.append(photoItemImg);
    photoItem.append(photoItemTitle);
    appendParent.append(photoItem);
  }

  function fetchRaceImg(arrIds) {
    return Promise.race(arrIds.map((id) => fetch(`${URL}/${id}`)))
      .then((data) => {
        if (!data.ok) throw new Error('Не удалось получить изображение');
        return data.json();
      })
      .catch((err) => console.error('Ошибка: ', err));
  }

  function renderItemImg(arrIds) {
    loader.toggle();
    return fetchRaceImg(arrIds)
      .then((img) => {
        console.log(img);
        if (!img.success) throw new Error('Не удалось загрузить изображение');
        createItemImg(img.photo);
      })
      .catch((err) => console.error('Ошибка: ', err))
      .finally(() => {
        loader.toggle();
      });
  }

  return {
    renderItemImg,
  };
}

const photo = PhotoItem(URL_IMG, dataContainer, Loader);
photo.renderItemImg([60, 12, 55]);
