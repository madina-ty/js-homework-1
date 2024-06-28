//Запросить имя пользователя
let userName = prompt("Введите ваше имя:");
//Вывести приветствие
alert("Привет, " + userName + "!"); //+ используется для обьединения строк

//Текущий код
const currentYear = 2024;
//Запросить год рождения пользователя 
let birthYear = parseInt(prompt("Введите год вашего рождения:")); //porseInt()- переобразует введенный текст в число и сохраняет в переменной
//Вычислить возраст 
let age = currentYear - birthYear;
//Вывести результат 
alert("Вам " + age + " лет.");

// Запросить длину стороны квадрата
let sideLength = parseFloat(prompt("Введите длину стороны квадрата:"));
// Вычислить периметр
let perimeter = 4 * sideLength;
// Вывести результат
alert("Периметр квадрата со стороной " + sideLength + " равен " + perimeter + ".");

let radius = prompt("Введите радиус круга:");
radius = parseFloat(radius); //parseFloat преобразует строки в числа
if (isNaN(radius)) { //функция isNaN проверяет является ли значение радиус числом, если нет,то использует ниже прописанные условия
    alert("Неверный формат ввода. Пожалуйста, введите число.");
}
else {
    const area = Math.PI * radius * radius;
    alert(`Площадь круга с радиусом ${radius} равна ${area.toFixed(2)}`);
}

let distance = prompt("Введите расстояние между городами в километрах:");
//запросить время в пути в часах 
let timeInHours = prompt("За сколько часов вы хотите добраться?");
//проверка на ввод пользователем число 
if(isNaN(distance) || isNaN(timeInHours)) {
    alert("Ошибка! Введите корректные значения расстояния и времени.");
}
else {
//преобразуем значения в числа
distance = parseFloat(distance);
timeInHours = parseFloat(timeInHours);
//расчитываем скорость 
let speed = distance / timeInHours;
//вывод результата
alert(`Необходимая скорость: ${speed.toFixed(2)} км/ч`);
}

const exchangeRate = 0.98;
const dollarAmount = parseFloat(prompt("Введите сумму в долларах: "));
if (isNaN(dollarAmount)) {
  alert("Некорректный ввод. Пожалуйста, введите число.");
} else {
  const euroAmount = dollarAmount * exchangeRate;
  alert(`${dollarAmount.toFixed(2)} долларов США = ${euroAmount.toFixed(2)} евро.`);
}

//запрашиваем обьем флешки от пользователя 
const flashDriveSizeGb = parseFloat(prompt("Введите объем флешки в Гб:"));
//перевод обьем флешки в мегабайты 
const flashDriveSizeMb = flashDriveSizeGb * 1024;
//размер одного файла в мегабайтах 
const fileSizeMb = 820;
//количество файлов 
const numberOfFiles = Math.floor(flashDriveSizeMb / fileSizeMb); //Math.floor() - округляет результат деления вниз до целого числа.
//вывод результата
alert (`На флешку объемом ${flashDriveSizeGb} Гб поместится ${numberOfFiles} файлов размером 820 Мб.`);

let getMoney = parseFloat(prompt("Введите сумму денег в кошельке: "));
let getPrice = parseFloat(prompt("Введите цену одной шоколадки:"));
// Проверка ввода
if (isNaN(getMoney) || isNaN(getPrice)) {
  alert("Некорректные данные. Пожалуйста, введите числа.");
} 
else {
  const quantityChocolates = Math.floor(getMoney / getPrice);
  const changeChocolates = getMoney % getPrice;
  alert(`Вы можете купить ${quantityChocolates} шоколадок.`);
  alert(`Ваша сдача составит ${changeChocolates.toFixed(2)} рублей.`);
}
