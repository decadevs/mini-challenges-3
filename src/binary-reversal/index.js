/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
 function binaryReversal(value) {
    value = parseInt(value);
     let toBinary = value.toString(2);
     let paddedBinary = toBinary.padStart(8, 0);
     let result = paddedBinary.split('').reverse().join('');
     return parseInt(result, 2).toString();
}

module.exports = binaryReversal;
