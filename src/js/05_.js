'use strict'
console.clear()
// Massive
const cars = ['Mazda', 'Ford', 'BMW', 'Mersedes']
const fid = [1, 1, 2, 3, 5, 8, 13, '21', true]

// cars.push(`Reno`)

// console.log(cars)

// cars.unshift(`Volga`)

// console.log(cars)

// const firstItem = cars.shift()
// const lastItem = cars.pop()
// console.log(firstItem)
// console.log(lastItem)
// console.log(cars)

// console.log(cars.reverse())
// console.log(cars)

const index = cars.indexOf(`BMW`)
cars[cars.indexOf(`BMW`)] = `Audi`
console.log(cars)

// // Задача 1
// const text = `Hello I'm`
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText)