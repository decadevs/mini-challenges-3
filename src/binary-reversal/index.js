/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
    //convert to binary
    let positiveInt = +value;    
    let binary = positiveInt.toString(2);
    // Check if binary is eight bit if not add 00
    while(binary.length < 8){
        binary = 0 + binary;
    }
    // reverse binary
    let reverseBinary = binary.split('').reverse().join('');
    // covert back to number
    let digit = parseInt(reverseBinary, 2);
    // Return result
    return digit.toString();
}

module.exports = binaryReversal;
