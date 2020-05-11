/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
    const integerValue = Number(value);
    // convert to binary
    const binaryStr = integerValue.toString(2);
     // calculate the number of zeroes need to pad the string
    const noOfZeroesToAdd = (binaryStr.length % 8) == 0 ? 0 : 8 -  (binaryStr.length % 8);
     // pad the string
     const paddedString =  "0".repeat(noOfZeroesToAdd) + binaryStr;
    const reversedStr =  reverseString(paddedString);
    // convert the reversed string to decimal
    const binaryToDecimal =  parseInt(reversedStr, 2);
    const answer = binaryToDecimal.toString();
    
    return answer;
}

function reverseString(str) {
    let result = "";
    const start = str.length-1;
    // loop from the ending to the beginning
    for(let x = start; x >= 0; x--){
        result+= str[x];
    }
    return result;
}


module.exports = binaryReversal;
