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
                    //    let column =  r[r_index].lastIndexOf(c_index)
                        index = [r_index, c_index]
                    } 
                })
            });
            return index
        }
    }
   
 return index
}

console.log(listSorting(50, [
        [1, 2],
        [1],
        [10],
        [1, 2],
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4],
        [1, 2, 3, 4, 5, 6, 7],
        [1, 2, 3, 4, 5, 6],
        [0],
      ]))
module.exports = listSorting;
