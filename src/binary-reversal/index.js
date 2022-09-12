/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
    let valNumber = Number(value).toString(2)

    let reversedValue =`${valNumber}`

    let newValue = reversedValue.padStart(8, '0').split('').reverse().join('')

    let stringValue = parseInt(newValue, 2)

    return stringValue.toString();
}

module.exports = binaryReversal;
