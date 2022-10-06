'use strict'
console.clear()


// // 1 Function

// // Function expression - можно использоввать только после инициализации
// const greet2 = function greet2(name) {
//     console.log(`Hello too ${name}`)    
// }

// greet(`Mike`)
// greet2(`Mike`)

// // Function declaration - можно создавать после того как она вызвана
// function greet(name) {
//     console.log(`Hello ${name}`)
// }

// console.log(typeof greet)
// console.log(typeof greet2)

// // 2 Anonymous function
// let counter = 0
// const interval = setInterval(function() { // setTimeout
//     if (counter === 5) {
//         clearInterval(interval) // clearTimeout
//     } else {
//         console.log(++counter)
//     }
// }, 1000)

// // 3 Стрелочная функция

// const arrow = (name, age) => {
//     console.log(`Hello ${name}`)
// }

// arrow('Mike')

// const arrow2 = name => console.log(`Hello ${name}`)

// arrow2('Mike')

// // const pow2 = num => console.log(Math.pow(num, 2))
// const pow2 = num => num ** 2
// console.log(pow2(2))

// // 4 Параметры по умолчанию
// const sum = (a = 1, b = a * 2) => a + b // можем задавать параметры по умолчанию

// console.log(sum())
// console.log(sum(2))
// console.log(sum(2, 2))

// function sumAll(...all) {
//     let result = 0
//     for (let num of all) {
//         result += num
//     }
//     return result
// }

// const res = sumAll(1, 2, 3, 4, 5, 6, 7, 8)
// console.log(res)

// 5 Замыкания
function createMember(name) {
    return function(lastName) {
        console.log(name + lastName)
    }
}

const logWithLastName = createMember('Mike')
console.log(logWithLastName('Kolinski'))