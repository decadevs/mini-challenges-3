/**
 * Implement the solution in this function
 *
 * @param {string} value
 * @returns {string} decimal string
 * 
 */
function binaryReversal(value) {
    if(value < 1){
        throw ("Enter positive integer");
    }

    //convert to binary, pad, reverse and return decimal
    let paddingFactor = Math.floor((value/255) % 8 + 1) * 8; //use 255 to represent 8 bits and check if multiple of 8
    let binary = parseInt(value).toString(2);
    let paddedBinary = binary.padStart(paddingFactor,'0');
    let reversedArray = [...paddedBinary].reverse();
    let reversedString = reversedArray.join('');
    let decimal = parseInt(reversedString, 2);
    let decimalString = decimal.toString();
    
    return decimalString;
}

module.exports = binaryReversal;
