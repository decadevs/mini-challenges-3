/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
    //account for if a user inputs a negative integer
    let num = Number(value)
    if(num < 0){
        return "invalid"
    }
    //convert number to binary
let bi = num.toString(2);
console.log(bi)
// let padBinary = '00'+ binary
let padBi = bi.padStart(8, 0);
//let padBinary = padStart(3,"00")
console.log(padBi);
//reverse the converted number
let reversebinary = padBi.split('').reverse();
//join and then turn to DECIMAL number
let binaryStri = reversebinary.join('')
let finalNum = parseInt(binaryStri,2)
let final = `${finalNum}`
return final
}
console.log(binaryReversal("4567"))
module.exports = binaryReversal;
