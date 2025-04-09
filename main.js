// Метод примитивов
// Значение примитивного типеа
// 1. string, number, boolean, symbol, null, undefined, bigint
// 2. null, undefined - не имеют методов


// let objekt = {
//     hello: function() {
//         alert("Это функция в обьекте")
//     }
// }

// let city = "Sochi"
// console.log(city.toUpperCase())
// Метод toUpperCas() - переводит все буквы в верхний регистр

// let number = 1.89996
// console.log(number .toFixed(1))

// NUMBER 
// Числа в JS хранятся в 64-битном формате IEE-754, который называают числа с плавающей точкой двойной точности.
// BifInt - эти числа позволяют работать с целыми числами произвольной длины.

// let million = 1000000;
// let mil = 1_000_000
// Cинтаксический сахар - он позволяет делать код более читабельным.
// let billon = 1e9

// let mcs = 0.000001
// let ms = 1e-6

// Шестандацатеричные цифры
// console.log(0xFF) // 255

// let number = 225
// console.log(number.toString(16))
// Метод возвращает строковое представление чисел в системе исчесления base.
// Base
// basse=16 - для шеснадцатеричного представления цвета, кодировки, символов.
// Цифры 0-9, A-F
// base = 2 -обычно используются для откладки побитовых операций (0/1)
// base = 36 - максимальный режим, цтфры могут быть 0-9, A-Z (латинский алфавит)

// Округление.
// let value = 5.6
// console.log(Math.floor(value))
// console.log(Math.ceil(value))
// console.log(Math.round(value))
// console.log(Math.trunc(value))

// Метод toFixed - округляет число до n знака после запятой и возвращает строковое представоени результата.

// console.log(typeof(value.toFixed(1)))

// alert(parseInt("500.5px"))
// alert(parseFloat("500.5px"))

// alert(Math.random() * (100 - 0) + 0)
// Это метод объекта  Math в javaScript, который генерирует случайное число в диапозоне от 0 до 1.
// Math.random() * (max - min) + min

//alert(Math.pow(2.4))

//Строки
// let word = 'Hello'
// alert(`I love world ${word}`)
// Спецсимволы для строк
// alert(`I love world\n ${word}`)
// \n - перевод строки (enter)

// Изменение регистра
// alert(word.toUpperCase())
// alert(word.toLowerCase())

// Масивы Array
// let arr = new Array();
// let arr1 = [1,2,3,4,5,6,7,8,9,10,"Яблоко красное", "Яблоко зеленое", "Гнилое яблоко"]
// console.log(arr1[arr1.length-1])
// console.log(arr1.at(-2))


// console.log(arr1[12])
// arr1[12] = "Спелое яблоко"
// arr1[13] = "Мое яблоко"
// console.log(arr1)
// alert(arr1.length)
// В массиве могут хранится элементы любого типа данных.

// pop/push, shift, unsift - методы массивов.
// Коллекция.

// let array = ["Egor", "Arseniy", "Yaroslav", "marta"]
// array.push("Regina")
// console.log(array)

// let lastvalue = array.pop()
// console.log(lastvalue)
// console.log(array)

// array.unshift("Ilya")
// console.log(array)
// let myFirstStudent = array.shift()

// let array = ["Egor", "Arseniy", "Yaroslav", "marta"]
// let myStudentsInAcademy = array
// // alert(array === MystudentsInAcademy)
// myStudentsInAcademy.push("Robert")
// console.log(myStudentsInAcademy)


// let array = ["Egor", "Arseniy", "Yaroslav", "marta"]
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i])
// }

// console.log("Другой МАССИВ")
// let student = ["Nikita", "misha", "Maga", "Dima", "sava"]
// for (stud of student) {
//     console.log(stud)
// }

// for (let value in student) {
//     console.log(student[value])
// }

// let array = new Array(2)

// Многомерные массивы
// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// console.log(matrix[1][1])


// let styles = ["Джаз", "Блюз"]
// styles.push("Рок-н-ролл")
// styles[3] = "Классика" 

// console.log(styles.shift());

// styles.unshift("реп", "регги");

// console.log(styles)

// function sumInput() {
//     let array = [];
//     while(true) {
//         let i = +prompt("Введитие значение")
//         if (value === "") {
//             array.push
//         }
//     }

// }   

function sumInput() {

    let numbers = [];
  
    while (true) {
  
      let value = prompt("Введите число", 0);
  
      if (value === "" || value === null || !isFinite(value)) break;
  
      numbers.push(+value);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
  
  alert( sumInput() );
