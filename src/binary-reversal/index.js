/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
    let binary = (value >>> 0).toString(2).split('')
    let addPad = 0
    let checkLength = 8 - binary.length

    if (checkLength > 0) {
        for (let i = 0; i < checkLength; i++) {
            binary.unshift(addPad)
        }
    }
    
    if (checkLength < 0) {
        for (let i = checkLength; i >= 0; i++) {
            redo = binary.shift()
        }
    }

    let reverseForm = binary.reverse().join('')
    let decimalConversion = parseInt(reverseForm, 2)
    return decimalConversion
}

module.exports = binaryReversal;
