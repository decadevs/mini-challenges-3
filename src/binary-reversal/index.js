/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
    const binaryStr = value.toString(2);
    const paddedStr = "00" + binaryStr;
    const reversedStr = reverseString(paddedStr);

    
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
