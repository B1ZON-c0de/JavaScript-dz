const URL_USERS = 'https://jsonplaceholder.typicode.com/users';
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

function AsyncUsersList(URL, appendParent, loaderElement) {
  const loader = loaderElement(appendParent);

  function createUserElement({ username }) {
    const listItemUser = document.createElement('li');
    const linkUser = document.createElement('a');
    linkUser.href = '#';
    linkUser.textContent = username;

    listItemUser.append(linkUser);
    appendParent.append(listItemUser);
  }

  function fetchUsersByIds(arrIds) {
    return Promise.all(arrIds.map((id) => fetch(`${URL}/${id}`)))
      .then((promises) => {
        promises.forEach((data) => {
          if (!data.ok)
            throw new Error(
              'Не удалось получить пользователей по выбранным id'
            );
        });
        return Promise.all(promises.map((promise) => promise.json()));
      })
      .catch((err) => {
        console.error('Ошибка', err);
      });
  }

  function fetchUsers() {
    return fetch(URL)
      .then((data) => {
        if (!data.ok) {
          throw new Error('Не удалось получить пользователей');
        }
        return data.json();
      })
      .catch((err) => {
        console.error('Ошибка: ', err);
      });
  }

  function renderUsers() {
    loader.toggle();
    fetchUsers()
      .then((users) => {
        if (!Array.isArray(users))
          throw new Error('Полученные данные не являются массивом');
        users.forEach((user) => {
          createUserElement(user);
        });
      })
      .catch((err) => {
        console.error('Ошибка:', err);
      })
      .finally(() => {
        loader.toggle();
      });
  }

  function renderUsersByIds(arrIds) {
    loader.toggle();
    fetchUsersByIds(arrIds)
      .then((usersArr) => {
        if (!Array.isArray(usersArr))
          throw new Error('Полученные данные не являются массивом');
        usersArr.forEach((user) => {
          createUserElement(user);
        });
      })
      .catch((err) => {
        console.error('Ошибка:', err);
      })
      .finally(() => {
        loader.toggle();
      });
  }

  return {
    renderUsers,
    renderUsersByIds,
  };
}

const usersList = AsyncUsersList(URL_USERS, dataContainer, Loader);
// usersList.renderUsers();
usersList.renderUsersByIds([5, 6, 2, 1]);
