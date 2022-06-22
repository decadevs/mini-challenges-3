function listSorting(needle, haystack) {
    let index;
    for (let i = 0; i < haystack.length; i++) {
        if (typeof haystack === 'object') {
            //multidimentional array
            haystack.forEach((r, r_index) => {
                r.forEach((c, c_index) => {
                    index = [r_index, c_index]
                })
                if (r === needle) {
                    index = r_index;
                }
            });
            {
        
            }
        }
    } return index
}


module.exports = listSorting;
