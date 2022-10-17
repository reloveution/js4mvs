// Основные классы
console.log(`-------------Step 1-----------`)

class Round {
    constructor(r) {
        this.r = r;
    }

    getArea() {
        return Math.PI*Math.pow(this.r, 2);
    }
}

class Triangle {
    constructor(r) {
        this.r = r;
    }

    getArea() {
        return (Math.sqrt(3)*Math.pow(this.r, 2))/4;
    }
}

class Square {
    constructor(r) {
        this.r = r;
    }

    getArea() {
        return Math.pow(this.r, 2);
    }
}

// Фабрика классов

class Factory {
    static list = {
        ro: Round,
        tr: Triangle,
        sq: Square
    }

    create(form, r) {
        const Obj = Factory.list[form];
        const obj = new Obj(r);
        obj.form = form;
        obj.define = function() {
            console.log(`${this.form} ${this.r} ${obj.getArea()}`);
        };
        return obj;
    }
}

// Создаём фабрику, создаем класс для массива
// и сам массив с объектами

const factory = new Factory();

// const massive = [
//     factory.create( 'ro', 2),
//     factory.create( 'ro', 3),
//     factory.create( 'ro', 4),
//     factory.create( 'tr', 2),
//     factory.create( 'tr', 3),
//     factory.create( 'tr', 4),
//     factory.create( 'sq', 2),
//     factory.create( 'sq', 3),
//     factory.create( 'sq', 4)
// ]

// console.log(massive)
// console.log(`------------------------------`)


// massive.forEach( massive => {
//     massive.define()
// })

console.log(`-------------Step 2-----------`)

// let indexMin
// let minTemp = massive[0].getArea()

// // console.log(minTemp)

// for (let i = 0; i < massive.length; i++) {
//     if (massive[i].getArea() < minTemp) {
//         minTemp = massive[i].getArea()
//         indexMin = i
//     }
// }
// console.log('Position element with Min area ' + (indexMin + 1))
// console.log(massive[indexMin])
// console.log(minTemp)

// let indexMax
// let maxTemp = 0
// for (let i = 0; i < massive.length; i++) {
//     if (massive[i].getArea() > maxTemp) {
//         maxTemp = massive[i].getArea()
//         indexMax = i
//     }
// }
// console.log('Position element with Max area ' + (indexMax + 1))
// console.log(massive[indexMax])
// console.log(maxTemp)

console.log(`-------------Step 2.1----------`)

class Massive {
    // let indexMax
    // let maxTemp = 0

    findMin() {
        let indexMin
        let minTemp = massive[0].getArea()
        for (let i = 0; i < obj.length; i++){    
            if (massive[i].getArea() < minTemp) {
                minTemp = massive[i].getArea()
                indexMin = i
            }
        }
        console.log('Position element with Min area ' + (indexMin + 1))
        console.log(massive[indexMin])
        console.log(minTemp)
    }
}

const massive = new Massive([
    factory.create( 'ro', 2),
    factory.create( 'ro', 3),
    factory.create( 'ro', 4),
    factory.create( 'tr', 2),
    factory.create( 'tr', 3),
    factory.create( 'tr', 4),
    factory.create( 'sq', 2),
    factory.create( 'sq', 3),
    factory.create( 'sq', 4)
]);

console.log(massive)