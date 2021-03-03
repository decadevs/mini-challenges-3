/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
    let decimal = parseInt(value, 10);
    let box = [];
 
    // Convert to reverse binary
    while (decimal > 0) { 
        let rem = (decimal % 2); 
        decimal = (decimal-rem)/2;
        box.push(rem);
    }
    box.reverse();

    // Pad if array has less than 8 values
    if (box.length < 8) {
        let a = (8 - box.length);
        for(let i = 0; i<a; i++) {
            box.unshift(0);
        }  
    }
    
    //convert back to decimal
    let new_decimal = 0;
    for(let j = (box.length-1); j>=0; j--) {
        let num = box[j];
        let base = Math.pow(2,j);
        new_decimal+=(num*base);
    }
    
    return new_decimal.toString();
}

module.exports = binaryReversal;
