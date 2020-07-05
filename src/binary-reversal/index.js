/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
    //     convert string to decimal
        let parsedValue = parseInt(value, 10);
    // convert decimal to string 
     let stringedValue = parsedValue.toString(2)
    //     split and reverse string
    let splitedValue =(stringedValue.padStart(8,'0').split("").reverse().join(""));
    console.log(splitedValue);
    let reversedDecimal = parseInt(splitedValue, 2);
    return reversedDecimal.toString(10);
    }
module.exports = binaryReversal;
