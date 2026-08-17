//Задание 3 Создать объект на основе данных

const myProfile = {
  firstName: "Said",
  lastName: "Mamedagaev",
  age: "23",
  country: "Russia",
  work: "Teacher",
  hobby: "Futbol",
  city: "Kaspiyck"
};

// Задание 4 Создать объект который будет хранить данные об автомобиле

const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
  color: "чёрный",
  transmission: "автомат"
};
car.owner = myProfile;

console.log(car);


// Задание 5. Функция проверки максимальной скорости

function checkMaxSpeed(car) {
  if ("максимальная скорость" in car) {
    return;
  }

  car["максимальная скорость"] = 220;
}

// Проверка:
checkMaxSpeed(car);
console.log(car);

checkMaxSpeed(car); 
console.log(car);   



// Задание 6. Функция, которая выводит значение свойства объекта

function showProperty(obj, propName) {
  console.log(obj[propName]);
}

// Проверка:
showProperty(car, "brand");                 // "Toyota"
showProperty(car, "color");                // "чёрный"
showProperty(car, "максимальная скорость"); // 220
showProperty(car, "owner");                 // объект владельца

//Задание 7 Создать массив

const products = ["молоко", "сыр", "хлеб", "арбуз", "яйцо", "йогурт" ];
console.log(products);


// Задание 8. Массив объектов — книги


const books = [
  {
    title: "Война и мир",
    author: "Лев Толстой",
    year: 1869,
    coverColor: "синий",
    genre: "роман"
  },
  {
    title: "Преступление и наказание",
    author: "Фёдор Достоевский",
    year: 1866,
    coverColor: "красный",
    genre: "роман"
  },
  {
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    year: 1967,
    coverColor: "чёрный",
    genre: "фантастика"
  }
];


books.push({
  title: "1984",
  author: "Джордж Оруэлл",
  year: 1949,
  coverColor: "серый",
  genre: "антиутопия"
});

// Проверка
console.log(books);
console.log("Всего книг:", books.length);


// Задание 9. Массив книг определённой вселенной + объединение массивов


const harryPotterBooks = [
  {
    title: "Гарри Поттер и философский камень",
    author: "Дж. К. Роулинг",
    year: 1997,
    coverColor: "красный",
    genre: "фэнтези"
  },
  {
    title: "Гарри Поттер и Тайная комната",
    author: "Дж. К. Роулинг",
    year: 1998,
    coverColor: "зелёный",
    genre: "фэнтези"
  },
  {
    title: "Гарри Поттер и узник Азкабана",
    author: "Дж. К. Роулинг",
    year: 1999,
    coverColor: "фиолетовый",
    genre: "фэнтези"
  }
];


const allBooks = [...books, ...harryPotterBooks];

console.log(allBooks);
console.log("Всего книг в объединённом массиве:", allBooks.length);


// Задание 10. Метод map — добавляем свойство isRare


function addRareProperty(booksArray) {
  return booksArray.map(function(book) {
    
    return {
      ...book,
      isRare: book.year > 2000  
    };
  });
}


const booksWithRare = addRareProperty(allBooks);

// Проверка
console.log(booksWithRare);


console.log(booksWithRare[0]);  