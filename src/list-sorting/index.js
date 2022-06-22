function listSorting(needle, haystack) {
    let index = -1
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i][i] === undefined) {
             index = (haystack.lastIndexOf(needle))
            return index
        } else {
            //multidimentional array
            haystack.forEach((r, r_index) => {
                r.forEach((c, c_index) => {
                    if (c === needle) {
                        console.log(c_index);
                        index = [r_index, c_index]
                    } 
                })
            });
            return index
        }
    }
 return index
}

module.exports = listSorting;
