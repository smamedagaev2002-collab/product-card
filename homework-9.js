//Задание 1

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const fromFive = number.filter(num => num >= 5);
console.log(fromFive);

//Задание 2

const movies = ["Интерстеллар", "Начало", "Тёмный рыцарь", "Дюна", "Матрица"];
const hasDune = movies.includes("Дюна");
console.log(hasDune); // true
const hasAvatar = movies.includes("Аватар");
console.log(hasAvatar); // false

//Задание 3
function reverseArray(arr) {
    return [...arr].reverse();
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const movies = ["Интерстеллар", "Начало", "Тёмный рыцарь", "Дюна", "Матрица"];
console.log(reverseArray(numbers)); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(reverseArray(movies));  // ["Матрица", "Дюна", "Тёмный рыцарь", "Начало", "Интерстеллар"]

//Задание 4

import { comments } from './comments.js';

//Задание 5

const comEmails = comments.filter(comment => comment.email.includes(".com"));

//Задание 6

const updatedComments = comments.map(comment => ({
    ...comment,
    postId: comment.id <= 5 ? 2 : 1
}));

//Задание 7
const shortComments = comments.map(comment => ({
    id: comment.id,
    name: comment.name
}));

//Задание 8
const validatedComments = comments.map(comment => ({
    ...comment,
    isInvalid: comment.body.length > 180
}));

//Задание 9-10
import { comments } from './comments.js';


// Через map
const emailsMap = comments.map(c => c.email);
console.log("Через map:", emailsMap);

// Через reduce
const emailsReduce = comments.reduce((acc, c) => {
    acc.push(c.email);
    return acc;
}, []);
console.log("Через reduce:", emailsReduce);

// === Задание 12: массив → строка ===

// Через join
const strJoin = emailsMap.join(", ");
console.log("join:", strJoin);

// Через toString
const strToString = emailsMap.toString();
console.log("toString:", strToString);