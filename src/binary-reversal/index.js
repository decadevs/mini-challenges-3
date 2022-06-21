/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
    let convert = Number(value)
    let binaryNum = convert.toString(2)
    let totalLength = binaryNum.padStart(8, 0);
    let reverseNum = totalLength.split('').reverse().join('')
    let convertToDecimal = parseInt(reverseNum, 2)

return `${convertToDecimal}`

}
console.log(binaryReversal('100'))

module.exports = binaryReversal;
