console.clear()
// // 1 Переменные, camelCase
// const firstName = `Mike`
// let lastName = `Chukalenko`
// let age = 35
// const isProgrammer = true
// lastName = `Kolinski`
// lastName = prompt('Input Lastname')
// console.log(`FirstName: ${firstName}, Lastname: ${lastName}, Age: ${age}`)
// console.log(isProgrammer)

// const _ = `private`
// const $ = `some value`
// const withNum5 = `5`
// // const if = '' // err
// // const 5withNum = '' // err


// // 2 Мутирование
// // console.log(`Name: ` + firstName + `, Lastname: ${lastName}, Age: ${age}`)
// alert(firstName + ' ' + lastName)

// // 3 Operators
// let currentYear = 2022
// const birthYear = 1987
// let age = currentYear - birthYear
// console.log(age)

// const a = 10
// const b = 2
// let c = 32

// // c = c + a
// c += a
// c -= a
// c *= a
// c /= a

// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(++currentYear)
// console.log(c)

// // 4 Data types
// const isProgrammer = true
// const name = `Mike`
// const age = 35

// console.log(typeof(isProgrammer))
// console.log(typeof(name))
// console.log(typeof(age))
// console.log(typeof(null))

// // 5 Operator precedence
// const fullAge = 35
// const birthYear = 1987
// const currentYear = 2022

// const isFullAge = (currentYear - birthYear) >= fullAge // 26 >= 27
// console.log(isFullAge)

// // 6 Условные операторы
// const courseStatus = `pendng` // ready, fail, pending

// if (courseStatus === `ready`) {
//     console.log(`Well done!`)
// } else if (courseStatus === `pending`) {
//     console.log(`Is pending`)
// } else {
//     console.log('Unknown')
// }

// const isReady = true

// if (isReady) {
//     console.log(`Ok`)
// } else {
//     console.log(`No`)
// }

// // Тернарное выражение
// isReady ? console.log('Ok') : console.log('No')

// // 7 Булевая логика
// // 8 Функции
// function calculateAge(year) {
//     return 2022 - year
// }

// const myAge = calculateAge(1993)
// console.log(myAge)
// console.log(calculateAge(1996))
// console.log(calculateAge(1987))

// function logInfoAbout(name, year) {
//     const age = calculateAge(year)

//     if (age > 0) {
//     console.log(`He name is ${name} and age of ${age}`)
//     } else {
//         console.log('That the future')
//     }
// }

// logInfoAbout(`Mike`, `2025`)
// logInfoAbout(`Mikki`, `1997`)

// // 9 Massive
// const cars = [`Mazda`, `Mersedes`, `Ford`]
// console.log(cars1)
// // const cars2 = new Array(`Mazda`, `Mersedes`, `Ford`)
// // console.log(cars2)

// console.log(cars1[2])
// console.log(cars1.length)

// cars1[0] = `Porshe`
// cars1[cars1.length] = `Mazda`

// console.log(cars1)

// // 10 Cycle in massive

// const cars = [`Mazda`, `Mersedes`, `Ford`, `Porshe`]

// // for (let i = 0; i < cars.length; i++) {
// //     console.log(cars[i])
// // }

// for (let car of cars) {
//     console.log(car)
// }

// // 11 Objects

// const person = {
//     firstName: `Mike`,
//     lastName: `Kolinski`,
//     year: 1987,
//     languages: [`Ru`, `En`],
//     hasWife: false,
//     greet: function() {
//         console.log(`greet`)
//     }
// }

// console.log(person.firstName)
// console.log(person[`lastName`])
// const key = `languages`
// console.log(person[key])
// person.hasWife = true
// console.log(person[`hasWife`])
// person.isProgrammer = true
// console.log(person[`isProgrammer`])
// person.greet()