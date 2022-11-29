/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
 function binaryReversal(value) {
    var value = Number(value);
    var valueInBinary = value.toString(2);

    var binArray = valueInBinary.split('');
    var num = valueInBinary.length
    if (binArray.length < 8) {
        for (let i = 0; i < (8 - num); i++) {
            binArray.unshift('0');
            
        }
    }
    var reversal = binArray.reverse();
    
    return parseInt(reversal.join(''),2).toString();
}

module.exports = binaryReversal;
