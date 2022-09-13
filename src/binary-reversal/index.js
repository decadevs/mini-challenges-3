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
        // reverse padded binary
        let reverseBinary = padBinary.split('').reverse().join('')
    
     let result = parseInt(reverseBinary, 2);
    
        return `${result}`
      }
    
    
    //   function binaryReversal(str){
    //     let inputBinaryStr = parseInt(str, 10).toString(2);
    //     let inputBinaryLength = inputBinaryStr.length;
    
    //     // loading zeroes to make the number an integral number of bytes
    
    //     let bytelen = 8 - (inputBinaryLength % 8);
    //     let x = 0;
    
    //     inputBinaryLength % 8 !== 0 ? inputBinaryStr = new Array(bytelen+1) + inputBinaryStr : inputBinaryStr
    //     inputBinaryStr = inputBinaryStr
    //     .split("")
    //     .reverse()
    //     .join("")
    
    //     inputBinaryStr = parseInt(inputBinaryStr, 2)
    //     return inputBinaryStr
    //}
    module.exports = binaryReversal;
    