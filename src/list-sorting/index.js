function listSorting(needle, haystack) {
    if ((typeof needle !== "number") || !(haystack instanceof Array)) {
        throw Error("Invalid input");
    }

    const LENGTH = haystack.length;
    let index = -1;

    for(let i = LENGTH - 1; i >= 0; i--) {
        if (haystack[i] instanceof Array) {
            index = listSorting(needle, haystack[i]);
            if (index >= 0) {
                return [i, index];
            }
        } else if (haystack[i] === needle) {
            index = i;
            break;
        }
    }
    return index;
}

module.exports = listSorting;
