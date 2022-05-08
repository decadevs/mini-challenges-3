/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
    let valueConvert = value - 0; 
    let valueString;
    let binaryString1 = "";
    let count = 0;

    // A condition that checks the value, loops through it and converts to binary;
    while (valueConvert !== 0){
        binaryString1 += valueConvert % 2;
        valueConvert = Math.trunc(valueConvert / 2);
        count ++;     
    }
    //No need for reversal as the while loop does that ALREADY!.
    // condition that checks for the number of times value was divisible by 2
    if (count < 8){
        binaryString1 += "0".repeat(8 - count);
    }

    // Conversion back to binary
    valueString= binaryString1.split("");
    let binaryString2 = 0;
    for (let i = 0; i < valueString.length; i++){
        binaryString2 = (binaryString2 * 2) + Number(valueString[i]);
    }
   
    return binaryString2;
}

module.exports = binaryReversal;
