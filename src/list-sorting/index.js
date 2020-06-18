function listSorting(needle, haystack) {

    if (typeof haystack[0] != "object") {
        return haystack.lastIndexOf(needle);
    }

    for (let i = haystack.length - 1; i >= 0; i--) {
        let index = haystack[i];

        if (index.lastIndexOf(needle) > -1) {
            return [i, index.lastIndexOf(needle)];
        }
    }

    return -1;
}

module.exports = listSorting;