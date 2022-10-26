console.clear()

let massive1 = [ 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
let massive2 = [ 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
let massive3 = [ 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

function sortMin1(x) {
    let m = 0
    let t
    for (let i = 1; i < x.length; i++){
        if (x[i] < x[i-1]) {
            t = x[i-1]
            x[i-1] = x[i]
            x[i] = t
            i = 0
            m++
        }
    }
    console.log(m)
}
//////////////////////////////////////////////////////////////
function sortMin2(x) {
    let m = 0
    let t
    for (let i = 1; i < x.length; i++){
        if (x[i] < x[i-1]) {
            t = x[i-1]
            x[i-1] = x[i]
            x[i] = t
            if (i < (x.length - 1)) {
                if (x[i] > x[i+1]) {
                    t = x[i+1]
                    x[i+1] = x[i]
                    x[i] = t
                    if (x[i] < x[i-1]) { // без этого кусочка
                        t = x[i-1]       // счётчик m показывал
                        x[i-1] = x[i]    // 29 сбросов i до нуля.
                        x[i] = t         // теперь 25 !!
                    }                    // Вот так ;)
                }
            }
            i = 0
            m++
        }
    }
    console.log(m)
}
////////////////////////////////////////////////////////////
// function sortMin3(x) {
//     let t, mn, mx
//     let m = 0
//     let n = 0
//     let min = x[0]
//     let max = 0
//     for (let i = 0; i < (x.length / 2); i++, n++) {
//         for (let ii = i; ii < (x.length - n); ii++) {
//             if (max < x[ii]) {
//                 max = x[ii]
//                 mx = ii
//             }
//             if (min > x[ii]) {
//                 min = x[ii]
//                 mn = ii
//             }
//         }
//         t = x[i]
//         x[i] = x[mn]
//         x[mn] = t
//         t = x[x.length - n]
//         x[x.length - n] = x[mx]
//         x[mx] = t

//         m++
//         // n++
//     }
//     console.log(m)
// }
/////////////////////////////////////////////////
// function sortMin3(x) {
//     let t, mn, mx
//     let m = 0
//     let n = 0
//     let min = x[0]
//     let max = 0
//     for (let i = 0; i < (x.length - n); i++, n++) {
//         for (let ii = i; ii < (x.length - n); ii++) {
//              if (max < x[ii]) {
//                  max = x[ii]
//                  mx = ii
//              }
//              if (min > x[ii]) {
//                  min = x[ii]
//                  mn = ii
//              }
//          }
//          t = x[i]
//          x[i] = x[mn]
//          x[mn] = t
//          t = x[x.length - n]
//          x[x.length - n] = x[mx]
//          x[mx] = t
//          min = x[i]
//          max = 0
//          m++
//          console.log(x)
//     }
//     console.log(m)
// }
/////////////////////////////////////
// function sortMin3(x) { // Перебор работает правильно!!!
//     let n = 0
//     for (let i = 0; i < x.length; i++) {
//         for (let ii = i; ii < (x.length - n); ii++) {
//             console.log(x[ii])
//         }
//         console.log('-----')
//         n++
//     }
// }
//////////////////////////////////////
function sortMin3(x) {
    let t = 0
    min = x[0]
    max = 0
    let n = 0
    for (let i = 0; i < (x.length / 2); i++) {
        for (let ii = i; ii < (x.length - n); ii++) {
            if (max < x[ii]) {
                max = x[ii]
                mx = ii
            }
            if (min > x[ii]) {
                min = x[ii]
                mn = ii
            }
        }
        t = x[i]
        x[i] = x[mn]
        x[mn] = t
        t = x[x.length - n]
        x[x.length - n] = x[mx]
        x[mx] = t
        console.log(`Min is ${min} on ${mn+1} position, max is ${max} on ${mx+1} position`)
        console.log(x)
        console.log('-----')

        n++
        min = x[n]
        max = 0
    }
}





// console.log('------alg1-----------------')
// console.log(massive1)
// sortMin1(massive1)
// console.log(massive1)
// console.log('------alg2-----------------')
// console.log(massive2)
// sortMin2(massive2)
// console.log(massive2)
// console.log('------alg3-----------------')
console.log(massive3)
sortMin3(massive3)
console.log(massive3)