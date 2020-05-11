/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
"use strict";

function binaryReversal(value) {

  let remain = "";
  let padRemain = "";
  let decimalStr = 0;

  //Convert to binary
  do{

    remain += value % 2;
    value = Math.floor(value / 2);

  }while(value > 0);

   remain = remain.split('').reverse().join('');

   while(remain.length < 8){
     remain = '0' + remain;
   }

   padRemain = remain.split('').reverse().join('');
   let riseToPower2 = 2 ** (padRemain.length - 1);

  //Convert to decimal
  for(let i = 0; i < padRemain.length; i++){
    decimalStr += padRemain[i] * riseToPower2;
    riseToPower2 = riseToPower2 / 2;
  }
  console.log(decimalStr)
  return decimalStr.toString();

}

module.exports = binaryReversal;
