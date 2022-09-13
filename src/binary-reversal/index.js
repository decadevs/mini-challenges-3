/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
 function binaryReversal(value) {
    //let returnedNum = ''
 // conversion of integar to binary
     let intToBinary = parseInt(value).toString(2);
     // padding of the binary to 8 bits.
     let padStr = intToBinary.padStart(8,0);
     // reverse padded binary
     let reverseStr = padStr.split('').reverse().join('')
 
  let result = parseInt(reverseStr, 2);
 
     return `${result}`
   }

module.exports = binaryReversal;
