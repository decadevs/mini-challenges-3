/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
    
    let number = parseInt(value) // changed a string with a num
        let binNum = number.toString(2)// to a binary number 
    
        let paddedNumber = binNum.padStart(8,'0') //padded to the nearest N \* 8 bits
        let reverseNum = paddedNumber.split('').reverse().join('') // split the binary numbers,reverse and join the strings s
    
        return parseInt(reverseNum, 2).toString();
    
  
}
console.log(binaryReversal("200"))

module.exports = binaryReversal;

