/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {

    // change param(str) to integer
    // convert the int to base 2
    




let binStr = parseInt(value).toString(2).toString().padStart(8, 0)
let binReversal = binStr.split('').reverse().join('')
let num = parseInt(binReversal, 2)



return num.toString();

}





module.exports = binaryReversal;
