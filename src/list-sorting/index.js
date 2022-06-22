function listSorting(needle, haystack) {
    let index
    
    for (let i = 0; i < haystack.length; i++) {
        
        
        if (haystack[i][i] === undefined) {
             index = (haystack.lastIndexOf(needle))
        
            return index
            
        } else {
            
            //multidimentional array
            haystack.forEach((r, r_index) => {
               
                r.forEach((c, c_index) => {
                    if (c === needle) {
                        index = [r_index, c_index]
                        return index
                    } 
                
                })
            });
            return index
        }
    }
    if (Array.isArray(haystack) && !haystack.length) {
            index = -1
            return index;
        }
}


module.exports = listSorting;
