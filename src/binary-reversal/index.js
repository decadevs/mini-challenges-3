/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
   
        let input = parseInt(value);
        let binaryInput = input.toString(2);
        let reversed = binaryInput.padStart(8,0).split('').reverse().join('');
        let output = parseInt(reversed, 2);
        return output.toString();    
}
module.exports = binaryReversal;
