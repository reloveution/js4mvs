// Основные классы
console.log(`-------------Step 1-----------`)

class Round {
    constructor(r) {
        // this._r = r;
        // this.area = this.getArea()
        this.setArg(r)
    }

    setArg(r) {
        this._r = r
        this.area = this.getArea()
    }

    getArg() {
        return this._r
    }

    getArea() {
        return Math.PI*Math.pow(this._r, 2);
    }
}

class Triangle {
    constructor(r) {
        // this._r = r;
        // this.area = this.getArea()
        this.setArg(r)
    }

    setArg(r) {
        this._r = r
        this.area = this.getArea()
    }

    getArg() {
        return this._r
    }

    getArea() {
        return (Math.sqrt(3)*Math.pow(this._r, 2))/4;
    }
}

class Square {
    constructor(r) {
        // this.r = r;
        // this.area = this.getArea()
        this.setArg(r)
    }

    setArg(r) {
        this._r = r
        this.area = this.getArea()
    }

        getArg() {
        return this._r
    }

    getArea() {
        return Math.pow(this._r, 2);
    }
}

// Фабрика классов(абстрактная фабрика)

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
            console.log(`${this.form} ${this.getArg()} ${this.area}`);
        };
        return obj;
    }
}

// Создаём фабрику, создаем класс для массива
// и сам массив с объектами

const factory = new Factory();

class Massive {

    constructor(m) {
        this.m = m;
    }

    findMin() {
        let indexMin
        let minTemp = this.m[0].area
        for (let i = 0; i < this.m.length; i++){    
            if (this.m[i].area < minTemp) {
                minTemp = this.m[i].area
                indexMin = i
            }
        }
        console.log('Position element with Min area ' + (indexMin + 1))
        console.log(this.m[indexMin])
        console.log('Area is ' + minTemp)
    }

    findMax() {
        let indexMax
        let maxTemp = 0
        for (let i = 0; i < this.m.length; i++) {
            if (this.m[i].area > maxTemp) {
                maxTemp = this.m[i].area
                indexMax = i
            }
        }
        console.log('Position element with Max area ' + (indexMax + 1))
        console.log(this.m[indexMax])
        console.log('Area is ' + maxTemp)
    }

    listing() {
        for (let i = 0; i < this.m.length; i++){
            this.m[i].define()
        }
    }

    sortMin() {
        let t
        for (let i = 1; i < this.m.length; i++){
            if (this.m[i].area < this.m[i-1].area) {
                t = this.m[i-1]
                this.m[i-1] = this.m[i]
                this.m[i] = t
                i = 0
            }
        }
    }

    sortMax() {
        let t
        for (let i = 1; i < this.m.length; i++) {
            if (this.m[i-1].area < this.m[i].area) {
                t = this.m[i]
                this.m[i] = this.m[i-1]
                this.m[i-1] = t
                i = 0
            }            
        }
    }

}

let massive = new Massive ([
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

massive.listing()
console.log('------------------')
massive.findMin()
console.log('------------------')
massive.findMax()
console.log('-------sortMin-----------')
massive.sortMin()
massive.listing()
console.log('-------sortMax-----------')
massive.sortMax()
massive.listing()
console.log('--------setArg-----------')
console.log(massive.m[4])
massive.m[4].setArg(6)
console.log(massive.m[4].getArg())
console.log(massive.m[4])