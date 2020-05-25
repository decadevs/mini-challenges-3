function listSorting(needle, haystack) {
    let index = [];
    for (let i = haystack.length - 1; i >= 0; i--) {
        if (Array.isArray(haystack[i])) {
            for (let j = haystack[i].length; j >= 0; j--) {
                if (haystack[i][j] == needle) {
                    index.push(i, j);
                    return index;
                }
            }
        } else {
            for (let i = haystack.length - 1; i >= 0; i--) {
                if (haystack[i] === needle) return i;
            }
            
        }
    }

    return -1;
    
}


module.exports = listSorting;
