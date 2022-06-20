/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
      
      let binary = Number(value).toString(2)
      let eightBit = `0000000${binary}`.slice(-8)
      let reverse ="";
      for(let i = eightBit.length-1;i>=0;i--){
         reverse +=eightBit[i];
      }
     let decimal = parseInt(reverse,2);
     
     return String(decimal);
   
   
}

//console.log(binaryReversal("45"))
module.exports = binaryReversal;
