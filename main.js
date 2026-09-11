const productCards = document.querySelectorAll('.catalog__item');
const changeColorAllCardButton = document.querySelector('#change-color-all-card');
const greenColorHash = '#00ff3c';
const blueColorHash = '#0000ff';

// Сменить цвет всех карточек
changeColorAllCardButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash);
});

// Покраска первой карточки
const firstProductCard = document.querySelector('.catalog__item');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card');

changeColorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = blueColorHash;
});

// Открыть Google
const OpenGoogleButton = document.querySelector('#Open-google');

OpenGoogleButton.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');

  if (answer === true) {
    window.open('http://google.com');
  }
}

// Вывод в консоль
const outputLogButton = document.querySelector('#output-console-log');

outputLogButton.addEventListener('click', () => outputConsoleLog('ДЗ №4'));

function outputConsoleLog(message) {
  alert(message);
  console.log(message);
}

// Кнопка, которая меняет СВОЙ цвет по клику ===
const selfColorButton = document.querySelector('#change-self-color');

selfColorButton.addEventListener('click', () => {

  // Переключаем цвет кнопки между красным и зелёным
  if (selfColorButton.style.backgroundColor === 'red') {
    selfColorButton.style.backgroundColor = 'green';
  } else {
    selfColorButton.style.backgroundColor = 'red';
  }
});

// При наведении на .catalog__title выводим textContent в консоль ===
const catalogTitle = document.querySelector('.catalog__title');

catalogTitle.addEventListener('mouseenter', () => {
  console.log(catalogTitle.textContent);
});