/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
    let numberValue = parseInt(value).toString(2);
    let numberValueReversed = "";

    while (numberValue.length < 8) {
        numberValue = "0" + numberValue;
    }
    
    for (let i = numberValue.length - 1; i >= 0; i--) {
        numberValueReversed += numberValue[i]
    }

    return parseInt(numberValueReversed, 2).toString();
}


module.exports = binaryReversal;

