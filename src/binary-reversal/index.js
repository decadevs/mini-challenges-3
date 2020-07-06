/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) 
{

    let decimalNumber=parseInt(value);//convert value to Integer

        decimalNumber=decimalNumber.toString(2).padStart(8, 0); //convert  valueto string binary

        decimalNumber=decimalNumber.split("").reverse().join(""); //Split and reverse then join the reversed binary value

        decimalNumber= parseInt(decimalNumber,2); //convert binary value to decimal number
        decimalNumber=decimalNumber.toString(); // convert decimal number to a string value
        return decimalNumber;
}

module.exports = binaryReversal;
