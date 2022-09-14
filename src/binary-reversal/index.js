/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
    let binaryNum = parseInt(value)
        let Binary = binaryNum.toString(2);
        let padded = Binary.padStart(8, '0');
        let paddedReversal = padded.split('').reverse().join('');
        let reverseBinary = parseInt(paddedReversal,2).toString()
    
        return reverseBinary;
    
}

module.exports = binaryReversal;
