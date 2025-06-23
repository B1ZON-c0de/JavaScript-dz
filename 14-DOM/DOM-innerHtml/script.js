const body = document.querySelector('body');
//Первый способо

// body.innerHTML = `<form class="create-user-form">
//     <label>
//         Имя
//         <input type="text" name="userName" placeholder="Введите ваше имя">
//     </label>
//     <label>
//         Пароль
//         <input type="password" name="password" placeholder="Придумайте Пароль">
//     </label>
//     <button type="submit">
//         Подтвердить
//     </button>
// </form>`;

// Второй способ

const form = document.createElement('form');
form.className = 'create-user-form';
form.innerHTML = `    <label>
        Имя
        <input type="text" name="userName" placeholder="Введите ваше имя">
    </label>
    <label>
        Пароль
        <input type="password" name="password" placeholder="Придумайте Пароль">
    </label>
    <button type="submit">
        Подтвердить
    </button>`;
body.prepend(form);
