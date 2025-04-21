// let map = new Map([
//     ['regina', 1],
//     ['egor', 2],
//     ['marta', 3],
//     ['Yaroslav', 4]
// ])

// let reversMap = new Map()

// for (let [key,value] of map) {
//     reversMap.set(value, key)
// }

// console.log(reversMap)


// let user = {
//     name: "Marta",
//     age: 17
// };
// let sales = {
//     1: 60,
//     2: 30,
//     3: 90
// };


// // Object.keys(user)
// // Object.values(user)
// // Object.entries(user) // Возврощает массив пар: ключ значение
// // for (let value of Object.values(user)) {
// //     console.log(value)
// // }

// let multiplay = Object.fromEntries(
    
//     Object.entries(sales).map(([key, value]) => [key, value /2]))

// console.log(multiplay)

// let salaries = {
//     "john": 100,
//     "pete": 300,
//     "Mery": 250
// };

// function sum_sal(salaries) {
//     let sum = 0
//     for (let salary of Object.values(salaries)) {
//         sum += salary
//     }
//     return sum
// }

// console.log(salaries)



// function  count(obj) {
//     return Object.keys(obj).length;
// }

// console.log(count(salaries))


// Дата и время
// let time = new Date()
// console.log(time)

// let time = new Date()
// console.log(time)


// let start =  Data.now()

// let end = Data.now()
// alert(end - start) 


 // JSON (Java Script Objekt Notation) - формат представления значений и объекта.

 // JSON.STRINGIFY - переобразовывает объекты в json

//  let CarList = {
//     brand: "mercesed",
//     mark: "e220",
//     years: "1999"
//  }

//  let json = JSON.stringify(CarList)
//  console.log(typeof json)
//  console.log(json)


// let user = {
//     nick: "qwerty",
//     dateReg: "now",
//     isAfmin: {
//         owner: false,
//         adm: true
//     }
// };

// console.log(JSON.stringify(user, null, 2))