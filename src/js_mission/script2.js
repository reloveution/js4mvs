'use strict'
console.clear()

class Rstring {
    constructor(l) {
        this.nString = this.makeString(l)
    }

    makeString(l) {
        let stroke = ''
        for (let i = 0; i < l; i++){
            stroke += Math.floor(Math.random() * 10);
        }
        return stroke
    }

    match(x) {
        console.log(this.nString)
        let iii = 0
        for (let i = 0; i < this.nString.length; i++){
            let nn = this.nString[i]
            let n = Number(this.nString[i])
            for (let ii = i+1; (n < x) || (ii < this.nString.length); ii++){
                nn += this.nString[ii]
                n += Number(this.nString[ii])
                if (n === x) {
                    console.log(`----match for sum ${x}----`)
                    console.log(nn)
                    console.log(`Start position is ${i+1}, end position is ${ii+1}`)
                    iii++
                    // while (iii <= (ii - i)) {
                    //     console.log(this.nString[i+iii]);
                    //     iii++;
                    // }
                }
            } 
        }
        console.log('FFFFFFFFFFFFFFFFFFFFF')
        console.log(`${iii} match in total`)
        console.log('FFFFFFFFFFFFFFFFFFFFF')
    }

}



let string1 = new Rstring(55)

string1.match(55)