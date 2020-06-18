/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
    let padded = ""

    let binaryValue = parseInt(value).toString(2);

    if (binaryValue.length < 8) {
        padded = binaryValue.padStart(8, "0")
    }

    let reversed = (padded || binaryValue).split('').reverse().join("");

    return parseInt(reversed, 2).toString();

}

module.exports = binaryReversal;