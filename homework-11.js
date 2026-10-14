import Modal from './modal.js';
import Form from './form.js';

/* ===================== Форма подписки ===================== */
const subscribeForm = new Form('subscribe-form');
const emailInput = document.getElementById('email');

subscribeForm.form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!subscribeForm.isValid()) {
    emailInput.classList.add('subscribe-form__input_invalid');
    emailInput.focus();
    console.log('Ошибка: введите корректный email');
    return;
  }

  emailInput.classList.remove('subscribe-form__input_invalid');
  console.log(subscribeForm.getValues());
  subscribeForm.reset();
});

emailInput.addEventListener('input', () => {
  emailInput.classList.remove('subscribe-form__input_invalid');
});

/* ===================== Модальное окно + форма регистрации ===================== */
const registerModal = new Modal('modal');
const registerForm = new Form('register-form');
const regError = document.getElementById('reg-error');
const passwordInput = document.getElementById('reg-password');
const passwordRepeatInput = document.getElementById('reg-password-repeat');

const registerBtn = document.getElementById('register-btn');
registerBtn.addEventListener('click', () => {
  registerModal.open();
});

let user;

registerForm.form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!registerForm.isValid()) {
    regError.textContent = 'Пожалуйста, заполните все поля корректно';
    return;
  }

  if (passwordInput.value !== passwordRepeatInput.value) {
    regError.textContent = 'Пароли не совпадают';
    return;
  }

  regError.textContent = '';

  const values = registerForm.getValues();
  user = { ...values, createdOn: new Date() };

  console.log(user);

  registerForm.reset();
  registerModal.close();
});