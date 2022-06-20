/**
 * Finds the last index of element in array
 *
 * @param {number, number[]} 
 * @returns {number[] | number} returns number array or -1
 *
 * */

function listSorting(needle, haystack) {

    if(typeof(haystack[0])=== "number"){
        return haystack.lastIndexOf(needle);
    }
    // loop from bottom. Return if found
    for(let i=haystack.length - 1; i>= 0; i--){
        for(let j=haystack[i].length-1; j >= 0; j--){
            if(needle === haystack[i][j]){
                return [i, j];
            }
        }
    }
    return -1;
}

module.exports = listSorting;
