function listSorting(needle, haystack) {
    // if (Array.isArray(haystack[0])) {
    //     for (let i = 0; i < haystack.length; i++) {
    //         if (arr[i].includes(needle)) {
    //             return 
    //         }
    //     }
    // } else {
    //     return haystack.lastIndexOf(needle);
    // }

    if(!Array.isArray(haystack[0])) return haystack.lastIndexOf(needle);
    for (let i = haystack.length - 1; i >=0; i--) {
        let value = haystack[i].lastIndexOf(needle);
        if ( value !== -1) return [i, value];
    }
    return -1;
}

console.log(listSorting(5, [1, 2, 3, 4, 8, 5]));

module.exports = listSorting;
