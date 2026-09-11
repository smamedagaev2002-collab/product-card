import { products } from './products.js';

// ==========================================
// Задание 3: шаблон карточки товара
// ==========================================
function createProductCardTemplate(product) {
  const compositionItems = product.composition
    .map((item) => `<li class="catalog__composition-item">${item}</li>`)
    .join('');

  return `
    <li class="catalog__item">
        <img class="catalog__image" src="${product.image}" alt="${product.name}">
        <p class="catalog__application">${product.application}</p>
        <h2 class="catalog__name">${product.name}</h2>
        <p class="catalog__description">${product.description}</p>
        <span class="catalog__composition-title">Состав:</span>
        <ul class="catalog__composition-list">
            ${compositionItems}
        </ul>
        <div class="catalog__price">
            <span class="catalog__price-title">Цена</span>
            <span class="catalog__price-value">${product.price}</span>
        </div>
    </li>
  `;
}


const productDescriptionsMap = products.reduce((accumulator, product) => {
  accumulator[product.name] = product.description;
  return accumulator;
}, {});

console.log('Карта "название -> описание":', productDescriptionsMap);


// Функция №1 из задания 5 — спрашивает количество карточек
function getCardsCountFromUser() {
  let userInput = prompt('Сколько карточек отобразить? От 1 до 5');
  let count = Number(userInput);

  while (
    userInput !== null &&
    (isNaN(count) || !Number.isInteger(count) || count < 1 || count > 5)
  ) {
    userInput = prompt('Неверное значение. Введите целое число от 1 до 5');
    count = Number(userInput);
  }

  return userInput === null ? products.length : count;
}

// Функция отображения карточек
function renderCards(cards) {
  const cardsContainer = document.querySelector('.cards');

  cardsContainer.innerHTML = '';

  cards.forEach(function(product) {
    const card = document.createElement('div');

    card.classList.add('card');

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.application}</p>
      <p>${product.description}</p>
      <p>${product.price}</p>
    `;

    cardsContainer.append(card);
  });
}


// Инициализация страницы
function init() {
  const cardsCount = getCardsCountFromUser();
  const cardsToRender = products.slice(0, cardsCount);
  renderCards(cardsToRender);
}

init();