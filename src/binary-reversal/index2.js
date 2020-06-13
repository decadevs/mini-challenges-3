/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
    let decimal_to_binary = parseInt(value, 10).toString(2);
    while (decimal_to_binary.length < 8) {
        decimal_to_binary= "0"+ decimal_to_binary;
    }
    let reversedString = decimal_to_binary.split("").reverse().join("");
    let binary_to_decimal = (parseInt(reversedString, 2)).toString();
    return binary_to_decimal;
}

module.exports = binaryReversal;
