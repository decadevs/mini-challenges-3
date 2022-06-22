/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
    let result = (+value).toString(2).padStart(8, 0).split('').reverse().join('').toString();
    result = parseInt(result, 2) + '';
    return result


}

module.exports = binaryReversal;

// binaryReversal("10")