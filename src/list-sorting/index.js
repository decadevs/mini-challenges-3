function listSorting(needle, haystack) {
    const N = haystack.length;
    let M = needle;
    let defaultIndex = -1;
    let sandbox = [];

    for (let i=0; i< N; i++){
        if (haystack[i].length >= 0) {
            for (let j = 0; j<haystack[i].length; j++) {
                let current = haystack[i][j];
                if (current === M) {
                    sandbox.push([i,j]);
                }
            }
        }
    }
    if (sandbox.length>0) {
        let finalIndex = sandbox[sandbox.length-1];
        return finalIndex;
    } 
    else if (haystack.includes(M)) {
        return haystack.lastIndexOf(M);
    } 
    else {
        return defaultIndex;
    }
   
}

module.exports = listSorting;
