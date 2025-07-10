const bodyPosts = document.querySelector('body');
const URL_POSTS = 'https://jsonplaceholder.typicode.com/posts';
const URL_COMMENTS = 'https://jsonplaceholder.typicode.com/comments';

function PostComponent(URL_POSTS, URL_COMMENTS, appendParent) {
  function createPost({ id, title, body }) {
    const postBlock = document.createElement('div');
    const postTitle = document.createElement('h1');
    const postText = document.createElement('p');
    const postCommentHeader = document.createElement('b');
    const postCommentsBlock = document.createElement('div');

    postBlock.id = `post`;
    postBlock.classList.add('post', `post_${id}`);

    postTitle.classList.add('post__title');
    postTitle.textContent = title;

    postText.classList.add('post__text');
    postText.textContent = body;

    postCommentHeader.classList.add('post__comments-text');
    postCommentHeader.textContent = 'Комментарии';

    postCommentsBlock.classList.add('post__comments');

    postBlock.append(postTitle, postText, postCommentHeader, postCommentsBlock);
    appendParent.append(postBlock);

    return postCommentsBlock;
  }

  function createComment(appendParent, { id, email, body }) {
    const commentBlock = document.createElement('div');
    const commentAuthor = document.createElement('span');
    const commentText = document.createElement('span');

    commentBlock.classList.add('post-comment');
    commentBlock.id = id;

    commentAuthor.classList.add('post-comment__author');
    commentAuthor.textContent = email;

    commentText.classList.add('post-comment__text');
    commentText.textContent = body;

    commentBlock.append(commentAuthor, commentText);
    appendParent.append(commentBlock);
  }

  async function fetchPost(id) {
    try {
      const response = await fetch(`${URL_POSTS}/${id}`);

      if (!response.ok) throw new Error('Не удалось получить посты');
      const data = await response.json();

      return data;
    } catch (err) {
      console.error('Ошибка: ', err.message);
    }
  }

  async function fetchComments(id) {
    try {
      const response = await fetch(`${URL_COMMENTS}?postId=${id}`);
      if (!response.ok) throw new Error('Не удалось получить комментарии');
      const data = await response.json();
      return data;
    } catch (err) {
      console.error('Ошибка: ', err.message);
    }
  }

  async function renderComments(id, parentComments) {
    const comments = await fetchComments(id);
    comments.forEach((comment) => createComment(parentComments, comment));
  }

  async function renderPost(id) {
    const post = await fetchPost(id);
    const commentParent = createPost(post);

    renderComments(id, commentParent);
  }

  return {
    renderPost,
  };
}

const post = PostComponent(URL_POSTS, URL_COMMENTS, bodyPosts);
post.renderPost(1);
