// Покраска всех карточек
const productCards = document.querySelectorAll ('.catalog__item');
const changeColorAllCardButton = document.querySelector ('#change-color-all-card');
const greenColorHash = '#00ff3c'
const blueColorHash = '#0000ff'

//console.log ('Product card', productCard)
//console.log ('Button', changeColorCardButton)

changeColorAllCardButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash)
})



// Покраска первой карточки
const firstProductCard = document.querySelector ('.catalog__item');
const changeColorFirstCardButton = document.querySelector ('#change-color-first-card');

changeColorFirstCardButton.addEventListener('click', () => {
   firstProductCard.style.backgroundColor = blueColorHash;
})

//Открыть google
const OpenGoogleButton = document.querySelector ('#Open-google');

  OpenGoogleButton.addEventListener ('click', openGoogle) 

function openGoogle () {
  const answer = confirm('Вы действительно хотите открыть Google?')

  if (answer === true) {
    window.open('http://google.com')
  } else {
    return;
  }
}

// Вывод консоль лог

const outputLogButton = document.querySelector ('#output-console-log');

outputLogButton.addEventListener('click', () => outputConsoleLog ('ДЗ №4')) 


function outputConsoleLog(message) {
  alert('message')

  console.log(message)
}



