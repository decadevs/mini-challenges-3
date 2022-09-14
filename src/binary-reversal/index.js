/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
    value = parseInt(value);
    let binary = value.toString(2).split('');
    
    for(var i = 0; i < binary.length; i++){
        if(binary.length < 8){
                binary.unshift('0');
        }
    }
    binary = binary.reverse().join('');
    let result = parseInt(binary, 2);
    result = String(result);
    
    return result;
}

module.exports = binaryReversal;
