const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
let isLoading = false;

const createNewPost = async () => {
  isLoading = true;
  try {
    const response = await fetch(POSTS_URL, { method: 'POST' });
    const result = await response.json();

    console.log('result', result);
  } catch (err) {
    console.error('Ошибка: ', err);
  } finally {
    isLoading = false;
  }
};

createNewPost();
