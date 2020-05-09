/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {

    let test = Number(value);

    let binary;

    binary =  test.toString(2);

   while(binary.length < 8){


       binary = "0" + binary;  


   }

   let  reverseTest = binary.split("").reverse().join("");




   let decimal = parseInt(reverseTest, 2).toString(10);

   return decimal;




}

module.exports = binaryReversal;
