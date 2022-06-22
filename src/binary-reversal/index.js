/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
    let binary = Number(value).toString(2)
      let eightBit = `0000000${binary}`.slice(-8)
      let toreverse ="";
      for(let i = eightBit.length-1;i>=0;i--){
          toreverse +=eightBit[i];
      }
     let decimal = parseInt( toreverse,2);
     
     return String(decimal);
}

module.exports = binaryReversal;
