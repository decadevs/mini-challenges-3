/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
    if (typeof value !== "string") {
        throw Error("Invalid value, expected string value");
    }

    let number = Number(value);

    if (!number || number < 0) {
        throw Error("Please enter a valid string");
    }

    let binaryArray = number.toString(2).split("")
    const LEN = binaryArray.length;
    const BYTE_LENGTH = 8;

    let binaryPadded;
    if (LEN < BYTE_LENGTH) {
        binaryArray.unshift("0".repeat(BYTE_LENGTH - LEN));
    }

    const REVERSE_STRING = binaryArray.reverse().join("")
    return parseInt(REVERSE_STRING, 2).toString(10);

}

module.exports = binaryReversal;
