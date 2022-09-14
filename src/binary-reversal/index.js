/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryNumberReversal(value) {
   value = parseInt(value); 
   let binaryNumber = value.toString(2).split(''); 
    for(var i = 0; i < binaryNumber.length; i++){ 
        if(binaryNumber.length < 8){ 
            binaryNumber.unshift('0'); 
        }
    } 
    binaryNumber = binaryNumber.reverse().join(''); 
    let final = parseInt(binaryNumber, 2); 
    final = String(final); 
    return final;
    
}

module.exports = binaryNumberReversal;
