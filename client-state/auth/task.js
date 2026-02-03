const btn = document.getElementById('signin__btn');
const welcome = document.getElementById('welcome');
const signin = document.getElementById('signin');
const login = document.getElementsByName('login')[0];
const password = document.getElementsByName('password')[0];
const userId = document.getElementById('user_id');
const exitBtn = document.getElementById('exit');

function successEnter(id) {
    userId.textContent = id;
    localStorage.setItem('user_id', id);
    signin.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
}

const savedId = localStorage.getItem('user_id');
if (savedId) {
    successEnter(savedId);
}

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('login', login.value);
    formData.append('password', password.value);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.onload = () => {
        const response = JSON.parse(xhr.responseText);
        if (response.success) {
            successEnter(response.user_id);
        } else {
            alert('Неверный логин/пароль');
            login.value = '';
            password.value = '';
        }
    };
    xhr.send(formData);
})

exitBtn.addEventListener('click', () => {
    localStorage.removeItem('user_id');
    welcome.classList.remove('welcome_active');
    signin.classList.add('signin_active');
})