/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
 function binaryReversal(value) {
    let result = '';
    if(value < 0){
        return "not a positive value"
    }
    value = Number(value)
    let binaryCode = value.toString(2)
    while(binaryCode.length < 8) {
        binaryCode = "0" + binaryCode;
    }
    let splitBinary = binaryCode.split('');
    let revBinary = splitBinary.reverse();
    let joinBinary = revBinary.join('');
    let reverseDecimal = parseInt(joinBinary, 2);
    result += reverseDecimal;
    return String(result);
}


module.exports = binaryReversal;
