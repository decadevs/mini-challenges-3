/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
    // Convert value to binarry.
    let binaryArray = [];

    while (value > 0) {
        remainder = Math.round(value % 2);
        binaryArray.push(remainder);
        newValue = Math.round(value / 2);
        value = newValue - remainder;
    }

    // Adjust array of binary numbers to the nearest 8bit length;
    if (binaryArray.length < 8){
        while (binaryArray.length < 8){
            binaryArray.push(0);
        }
    }
    if (binaryArray.length > 8){
        let excess = Math.round(binaryArray.length % 8);
        let completeEightBit = 8 - excess;
        for (let x = 0; x < completeEightBit; x++){
            binaryArray.push(0);
        }
    }
    
    // Reverse the binarry array.
    binaryArray.reverse();

    // convert decimal
    let sum = 0;
    for (let i = 0; i < binaryArray.length; i++){
        sum += binaryArray[i] * 2**i;
    }
    
    sum = sum.toString()

    return sum;
}

module.exports = binaryReversal;
