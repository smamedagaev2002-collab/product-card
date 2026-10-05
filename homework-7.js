// ЗАДАНИЕ 3
function showTemperature(city, temperature) {
  console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
}

showTemperature('Москве', 25);
showTemperature('Лондоне', 14);





// ЗАДАНИЕ 4
// Переменная со скоростью света
const speedOfLight = 299792458;

// Функция проверки скорости
function checkSpeed(speed) {
  if (speed > speedOfLight) {
    console.log('Сверхсветовая скорость');
  } else if (speed < speedOfLight) {
    console.log('Досветовая скорость');
  } else {
    console.log('Скорость света');
  }
}

// Проверяем:
checkSpeed(350000000);   // Сверхсветовая скорость
checkSpeed(100000);      // Досветовая скорость
checkSpeed(299792458);   // Скорость света








//Задание 5

// Переменные товара
const productName = 'Наушники';
const productPrice = 5000;

// Функция покупки
function buyProduct(budget) {
  if (budget >= productPrice) {
    console.log(productName + ' приобретён. Спасибо за покупку!');
  } else {
    const difference = productPrice - budget;
    console.log('Вам не хватает ' + difference + '$, пополните баланс');
  }
}

// Проверяем:
buyProduct(7000);   // Хватает → "Наушники приобретён. Спасибо за покупку!"
buyProduct(5000);   // Ровно → тоже покупка состоится
buyProduct(3200);   // Не хватает → "Вам не хватает 1800$, пополните баланс"


//ЗАДАНИЕ 6
function sayGoodbye(name) {
  console.log('До свидания, ' + name + '! Хорошего дня!');
}

sayGoodbye('Антон');  // → До свидания, Антон! Хорошего дня!



//ЗАДАНИЕ 7
const myName = 'Антон';
let myAge = 20;
const favoriteColor = 'синий';

console.log('Меня зовут ' + myName);
console.log('Мне ' + myAge + ' лет');
console.log('Любимый цвет: ' + favoriteColor);