/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
 function binaryReversal(value) {
    if(!value) return "0";
    // let value = '225';
    let num = parseInt(value);
    let binaryNumber = num.toString(2);

    
    let paddedBinary;
    if(binaryNumber.length > 8) {
        paddedBinary = "0".repeat(8 - (binaryNumber.length % 8)) + binaryNumber;
    }else {
        paddedBinary = "0".repeat(8 - binaryNumber.length) + binaryNumber;
    }
    console.log(paddedBinary);
    let reversedBinary = paddedBinary.split("").reverse().join("");

    
    return parseInt(reversedBinary,2).toString();
    
}
// console.log(binaryReversal("1"));



module.exports = binaryReversal;
