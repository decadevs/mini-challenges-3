/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function convertToReveredBinary(value) {
    if (value <= 0) {
        return "";
    }
    let remainder = (value % 2).toString();
    let newVal = Number.parseInt(value / 2, 0);
    return  remainder + convertToReveredBinary(newVal);
};

function binaryReversal(value) {
    const reversedBinary = convertToReveredBinary(value)
    const padding = 8 - reversedBinary.length;
    const paddedReversedBinary = reversedBinary + "0".repeat(padding)
    return Number.parseInt(paddedReversedBinary, 2).toString(10)
}

module.exports = binaryReversal;
