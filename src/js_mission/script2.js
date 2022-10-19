console.clear()
const nString = '1234567890123456789012345678901234567890'
console.log(nString)

for (let i = 0; i < nString.length; i++){
    let n = Number(nString[i])
    for (let ii = i+1; (n < 10) || (ii < nString.length); ii++){
        n += Number(nString[ii])
        if (n === 10) {
            console.log('----match----')
            console.log(`Start position is ${i+1}, end position is ${ii+1}`)
            let iii = 0
            while (iii <= (ii - i)) {
                console.log(nString[i+iii]);
                iii++;
            }
        }
    } 
}