/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
 function binaryReversal(value) {
    const valueNum = Number(value)
    const binaryNum = valueNum.toString(2)
    
    let revBinary = binaryNum.split('').reverse().join('');
    
    while (revBinary.length < 8) {
      revBinary += 0;
    }
  
  
    const output = parseInt(revBinary, 2);
    
    const result = output.toString();
    return result
  
  
  }
  
  binaryReversal('47')

module.exports = binaryReversal;
