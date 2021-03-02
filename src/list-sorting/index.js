function listSorting(needle, haystack) {
    let result = -1;

    if (haystack.length == 0){
        return result;
    }

    if (haystack[0].length != undefined){
        for (let i=haystack.length - 1; i>=0; i--) {
            for (let j=haystack[i].length - 1; j>=0; j--) {
                if (haystack[i][j]==needle) {
                    result = [i, j];
                    return result;
                }
            }
        }
    } else {
        for (let i=haystack.length - 1; i>=0; i--) {
            if (haystack[i]==needle) {
                result = i;
                return result;
            }
        }
    }
    return result;
}

module.exports = listSorting;
