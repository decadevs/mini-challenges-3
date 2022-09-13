/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
 function binaryReversal(value) {
    // conversion of integar to binary
        let toBinary = parseInt(value).toString(2);
        // padding of the binary to 8 bits.
        let padBinary = toBinary.padStart(8,0);
        // split the padded binary,reverse and join.
        let reversedBinary = padBinary.split('').reverse().join('')
    // convert the reversed binary into digits and store in a variable finalNum
     let finalNum = parseInt(reversedBinary, 2);
    // return the final result
     return `${finalNum}`
     
      }
      module.exports = binaryReversal;
    