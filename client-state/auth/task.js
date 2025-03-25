const form = document.getElementById('signin__form');
const signin = document.getElementById('signin');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');

function showWelcome(id) {
    signin.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    userId.textContent = id;
}

window.addEventListener('load', () => {
    const auth = localStorage.getItem('user_id');
    if (auth) {
        showWelcome(auth);
    }
});

form.addEventListener('submit', e => {
    e.preventDefault();

    let formData = new FormData(form);

    let xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth', true);
    xhr.responseType = 'json';
    xhr.send(formData);

    xhr.onload = function() {
        if (xhr.response.success) {
            const id = xhr.response.user_id;
            localStorage.setItem('user_id', id);
            showWelcome(id);
            form.reset();
        } else {
            alert('Неверный логин/пароль');
        }
    };
});