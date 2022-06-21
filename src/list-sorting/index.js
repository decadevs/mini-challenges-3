function listSorting(needle, haystack) {
    if(!Array.isArray(haystack[0])) return haystack.lastIndexOf(needle);
    for (let i = haystack.length - 1; i >=0; i--) {
        let element = haystack[i].lastIndexOf(needle);
        if ( element !== -1) return [i, element];
    }
    return -1;
}

module.exports = listSorting;
