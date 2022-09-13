/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
    let num = parseInt(value)
    let binaryNum = numToString(2);
    
    let padded = binaryNum.padStart(8,0)
    let reversed = padded.split('').reverse().join
}

module.exports = binaryReversal;
