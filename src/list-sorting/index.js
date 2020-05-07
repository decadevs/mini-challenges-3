function listSorting(needle, haystack) {
    let row = 0;
    let index = -1;
    let nested = false;
    for (let i = 0; i < haystack.length; i++){
        if (typeof(haystack[i]) === "object"){
            nested = true;
            for (let j = 0; j < haystack[i].length; j++){
                if (haystack[i][j] === needle){
                    row = i;
                    index = j;
                }
            }  
        }
        else if (haystack[i] === needle){
            index = i;
        }
    }

    if (nested === true && index > -1){
        return [row, index];
    }
    return index;
}

module.exports = listSorting;
