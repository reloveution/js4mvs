// Основные классы

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

// Создаём фабрику и массив с объектами

const factory = new Factory();

const massive = [
    factory.create( 'ro', 2),
    factory.create( 'ro', 3),
    factory.create( 'ro', 4),
    factory.create( 'tr', 2),
    factory.create( 'tr', 3),
    factory.create( 'tr', 4),
    factory.create( 'sq', 2),
    factory.create( 'sq', 3),
    factory.create( 'sq', 4)
]

console.log(massive)
console.log(`------------------------------`)


massive.forEach( massive => {
    massive.define()
})