function listSorting(needle, haystack) {
    let rowIndex = null;
    let colIndex = null;
    let totalArrayIndex = null;
    let needleIndex;
    if (Array.isArray(haystack[0])){
        for (let i = 0; i < haystack.length; i++){
            if(Array.isArray(haystack[i])){
                for (let j = 0; j < haystack[i].length; j++){
                    if(haystack[i].lastIndexOf(needle) !== -1){
                        rowIndex = haystack.indexOf(haystack[i]);
                        colIndex = haystack[i].lastIndexOf(needle);
                    }
                }
            }
        }
    }
    else{
        needleIndex = haystack.lastIndexOf(needle);
    }
    if ((rowIndex && colIndex !== -1) || (rowIndex == 0)){
        totalArrayIndex = [rowIndex, colIndex];
    
    }
    else if ((needleIndex && needleIndex !== -1) || (needleIndex == 0)){
        totalArrayIndex = needleIndex;
    }
    else{
        totalArrayIndex = -1;
    }
    return totalArrayIndex
}

module.exports = listSorting;
