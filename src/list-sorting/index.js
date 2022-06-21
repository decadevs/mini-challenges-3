function listSorting(needle, haystack) {

    let rowI = -1;
    let colJ = -1;
    let sorted = [rowI, colJ]
    let len1 = haystack.length;
    for (let i = 0; i < len1; i++) {
        if (Array.isArray(haystack[i])) {
            let len2 = haystack[i].length;
            for (let j = 0; j < len2; j++) {
                if (needle === haystack[i][j]) {
                    rowI = i;
                    colJ = j;
                    sorted = [i, j];
                }
            }
        } else if (needle === haystack[i]) {
            rowI = i;
        }
    }
    if (colJ === -1) {
        return rowI;
    } else {
        return sorted;
    }
}

module.exports = listSorting;