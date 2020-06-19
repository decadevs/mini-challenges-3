/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {

    let num = Number(value).toString(2);
    const array = [];

    for(let i = 0; i < num.length; i++){
        array.push(num[i]);
    }

    while(array.length < 8){
        array.unshift("0");
    }

    let reverseArray = array.reverse().join('');
    
    let binary2Decimal = parseInt(reverseArray,2);

    return (binary2Decimal.toString());
}

module.exports = binaryReversal;
