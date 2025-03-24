const form = document.getElementById('signin__form');
const signin = document.getElementById('signin');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');

window.addEventListener('load', () => {
    const auth = localStorage.getItem('user_id');
    if (auth) {
        signin.classList.remove('signin_active');
        welcome.classList.add('welcome_active');
        userId.textContent = auth;
    }
});

form.addEventListener('submit', e => {
    e.preventDefault();

    let formData = new FormData(form);

    let xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth', true);

    xhr.send(formData);

    xhr.onload = function() {
        if (xhr.readyState === xhr.DONE) {
            const response = JSON.parse(xhr.responseText);
            if (response.success) {
                const id = response.user_id;
                localStorage.setItem('user_id', id);
                signin.classList.remove('signin_active');
                welcome.classList.add('welcome_active');
                userId.textContent = id;
            } else {
                alert('Неверный логин/пароль');
            }
        } else {
            alert('Ошибка при подключении к серверу');
        }
    };
});