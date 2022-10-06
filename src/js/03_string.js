'use strict'
console.clear()
// const name = 'Michael'
// const age = 35

// function getAge() {
//     return age
// }
// const output = `Привет меня зовут ${name}, мой возраст ${getAge()} лет`
// const output = `Привет меня зовут ${name}, мой возраст ${age < 20 ? 'A' : 'B'} лет.`

// const output = `<div>This is div</div>
// <p>This is p</p>` // пищем на разных строчках
// console.log(output)

// const name = 'Michael'
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.charAt(3))
// console.log(name.indexOf('ael')) // индекс подстроки
// console.log(name.startsWith('Mic'))
// console.log(name.toLowerCase().startsWith('mic'))
// console.log(name.endsWith('ael'))
// console.log(name.toUpperCase().endsWith('AEL'))
// console.log(name.repeat(3))
// const string = '      password       '
// console.log(string.trim()) // очищает пробелы
// console.log(string.trimLeft())
// console.log(string.trimRight())

function logPerson(s, name, age) {
    if (age < 0) {
        age = `ещё не родился`
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const personName = `Michael`
const personName2 = `Kolinski`
const personAge = 35
const personAge2 = -10

const output = logPerson`Name: ${personName}, Age: ${personAge}!`
const output2 = logPerson`Name: ${personName2}, Age: ${personAge2}!`

console.log(output)
console.log(output2)