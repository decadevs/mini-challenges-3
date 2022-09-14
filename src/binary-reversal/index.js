/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
/*My thought process:
- remove the string by converting the value to integar;
- convert to binary usingthe toString method;
- pad the binary num to 8 bits;
- reverse the binary num;
- convert the binary num to a decimal num, as well convert the num to string;
- then return the decimal num;
*/

function binaryReversal(value) {
    let toIntegar = parseInt(value);
    let toBinary = toIntegar.toString(2);

    let paddedNum = toBinary.padStart(8, 0);
    let reversedNum = paddedNum.split("").reverse().join("");

    let decimalNum = parseInt(reversedNum, 2).toString();
    return decimalNum;
};



module.exports = binaryReversal;
