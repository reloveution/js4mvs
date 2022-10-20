console.clear()

// let nString = ''

// for (let i = 0; i < 20; i++){
//     nString += Math.floor(Math.random() * 10);
// }

// console.log(nString)

// for (let i = 0; i < nString.length; i++){
//     let n = Number(nString[i])
//     for (let ii = i+1; (n < 10) || (ii < nString.length); ii++){
//         n += Number(nString[ii])
//         if (n === 10) {
//             console.log('----match----')
//             console.log(`Start position is ${i+1}, end position is ${ii+1}`)
//             let iii = 0
//             while (iii <= (ii - i)) {
//                 console.log(nString[i+iii]);
//                 iii++;
//             }
//         }
//     } 
// }

function makeString(l) {
    let stroke = ''
    for (let i = 0; i < l; i++){
        stroke += Math.floor(Math.random() * 10);
    }
    return stroke
}


class Rstring {
    constructor(l) {
        nString : makeString(l)
    }

    match(x) {
        console.log(this.nString)

        for (let i = 0; i < this.nString.length; i++){
            let n = Number(this.nString[i])
            for (let ii = i+1; (n < x) || (ii < this.nString.length); ii++){
                n += Number(this.nString[ii])
                if (n === x) {
                    console.log('----match----')
                    console.log(`Start position is ${i+1}, end position is ${ii+1}`)
                    let iii = 0
                    while (iii <= (ii - i)) {
                        console.log(this.nString[i+iii]);
                        iii++;
                    }
                }
            } 
        }
    }

}

let string1 = new Rstring(10)

string1.match(3)