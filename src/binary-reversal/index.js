/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
    let binary = "";
    while(value != 0){
        let b = value % 2;
        binary += b;
        value = Math.trunc(value / 2);
    }

    let zero_fills = ((8 - binary.length) > 0 ? "0".repeat((8 - binary.length)) : "" );
    binary += zero_fills;
    
    // since this is already in reverse pattern no need for reversal
    // convert to decimal
    let decimal = 0;
    let p = binary.length - 1;
    for(let i = 0; i < binary.length; i++){
        val = Number(binary[i]) * Math.pow(2, p);
        decimal += val;
        p--;
    }
    return decimal;

    
    
}
console.log(binaryReversal(47));
module.exports = binaryReversal;
