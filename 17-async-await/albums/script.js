const URL_ALBUMS = 'https://jsonplaceholder.typicode.com/albums';
const dataContainer = document.querySelector('#data-container');

function ErrorMessage(appendParent) {
  const spanErr = document.createElement('span');
  spanErr.style.color = 'red';
  spanErr.style.display = 'none';

  appendParent.append(spanErr);

  function show(text) {
    spanErr.textContent = '';
    spanErr.style.display = 'block';
    spanErr.textContent = text;
  }

  return {
    show,
  };
}

function Loader(appendParent) {
  const spanLoader = document.createElement('span');
  spanLoader.textContent = 'Загрузка...';
  spanLoader.style.display = 'none';

  appendParent.append(spanLoader);

  function toggle() {
    spanLoader.style.display =
      spanLoader.style.display === 'none' ? 'block' : 'none';
  }

  return {
    toggle,
  };
}

function Albums(URL, appendParent, LoaderElement, ErrElement) {
  const loader = LoaderElement(appendParent);
  const errMsg = ErrElement(appendParent);

  function createAlbumItem({ title }) {
    const liAlbum = document.createElement('li');
    liAlbum.textContent = title;

    appendParent.append(liAlbum);
  }

  async function fetchAlbums() {
    try {
      const response = await fetch(URL);
      if (!response.ok)
        throw new Error('Произошла ошибка в получении данных об альбомах...');
      const data = await response.json();

      return data;
    } catch (err) {
      errMsg.show(err.message);
    }
  }

  async function renderAlbums() {
    loader.toggle();
    try {
      const albums = await fetchAlbums();
      if (!Array.isArray(albums))
        throw new Error('Произошла ошибка в получении данных об альбомах...');
      albums.forEach((album) => {
        createAlbumItem(album);
      });
    } catch (err) {
      errMsg.show(err.message);
    } finally {
      loader.toggle();
    }
  }

  return {
    renderAlbums,
  };
}

const albums = Albums(URL_ALBUMS, dataContainer, Loader, ErrorMessage);
albums.renderAlbums();
