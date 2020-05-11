/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {

    let valueToString = Number(value).toString(2).padStart(8, 0);
    
    let strReverse = valueToString.split('').reverse().join('');
    
    let binaryToNum = parseInt(strReverse, 2).toString(10);

    return binaryToNum
      
}

module.exports = binaryReversal;
