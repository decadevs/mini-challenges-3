/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
    let number = parseInt(value)
    let binaryNumber = number.toString(2)

    let paddedNumber = binaryNumber.padStart(8,0)
    let reversedNumber = paddedNumber.split('').reverse().join('')
    let myOutput = parseInt(reversedNumber, 2)
    myOutput.toString()

    return `${myOutput}`
}

module.exports = binaryReversal;
