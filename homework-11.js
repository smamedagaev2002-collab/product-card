// Находим форму и поле email на странице
const form = document.getElementById('subscribe-form');
const emailInput = document.getElementById('email');

// Вешаем обработчик на событие "отправка формы"
form.addEventListener('submit', function (event) {
  // 1. Отменяем стандартную отправку формы (перезагрузку страницы)
  event.preventDefault();

  // 2. Проверяем, проходит ли поле встроенную валидацию
  //    (required — не пустое, type="email" — похоже на email)
  if (!emailInput.validity.valid) {
    // Подсвечиваем поле красным
    emailInput.classList.add('subscribe-form__input_invalid');
    emailInput.focus();
    console.log('Ошибка: введите корректный email');
    return; // выходим — форма "не отправляется"
  }

  // 3. Всё ок — убираем подсветку ошибки
  emailInput.classList.remove('subscribe-form__input_invalid');

  // 4. Выводим в консоль объект { email: "введённая почта" }
  console.log({
    email: emailInput.value
  });

  // 5. Очищаем поле после "отправки"
  form.reset();
});

// Когда пользователь снова печатает — убираем красную подсветку
emailInput.addEventListener('input', function () {
  emailInput.classList.remove('subscribe-form__input_invalid');
});



/* ===================== МОДАЛЬНОЕ ОКНО ===================== */
const registerBtn = document.getElementById('register-btn');
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modal-close');
const overlay = document.getElementById('overlay');

// Открытие окна
registerBtn.addEventListener('click', function () {
  modal.classList.add('modal-showed');
});

// Закрытие по крестику
modalClose.addEventListener('click', function () {
  modal.classList.remove('modal-showed');
});

// Закрытие по клику на затемнённый фон (но не на само окно)
overlay.addEventListener('click', function (event) {
  if (event.target === overlay) {
    modal.classList.remove('modal-showed');
  }
});

/* ===================== ФОРМА РЕГИСТРАЦИИ ===================== */
const registerForm = document.getElementById('register-form');
const regError = document.getElementById('reg-error');
const passwordInput = document.getElementById('reg-password');
const passwordRepeatInput = document.getElementById('reg-password-repeat');

// внешняя переменная, куда положим объект после успешной регистрации
let user;

registerForm.addEventListener('submit', function (event) {
  event.preventDefault();

  if (!registerForm.checkValidity()) {
    regError.textContent = 'Пожалуйста, заполните все поля корректно';
    return;
  }

  if (passwordInput.value !== passwordRepeatInput.value) {
    regError.textContent = 'Пароли не совпадают';
    return;
  }

  regError.textContent = '';

  user = {
    firstname: document.getElementById('reg-firstname').value.trim(),
    lastname: document.getElementById('reg-lastname').value.trim(),
    birthdate: document.getElementById('reg-birthdate').value,
    login: document.getElementById('reg-login').value.trim(),
    password: passwordInput.value,
    passwordRepeat: passwordRepeatInput.value,
    createdOn: new Date()
  };

  console.log(user);

  registerForm.reset();
  modal.classList.remove('modal-showed');
});