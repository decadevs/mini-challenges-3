function listSorting(needle, haystack) {
    let pos
    for(i in haystack){
        if(Array.isArray(haystack[i])){
            if(haystack[i].includes(needle)){
                for(j in haystack[i]){
                    if(haystack[i][j] === needle){
                        pos = [Number(i) , Number(j)]
                    }
                }
            }
        }else{
            if(haystack[i] === needle){
                pos = Number(i)
            }
        }
    }

    return pos === undefined ? -1 : pos

}

console.log(listSorting(1, [
    [1],
    [2, 1],
    [3, 1, 2],
    [1, 2, 3, 4],
    [5, 3, 4, 2, 1],
    [0, 0, 0, 0, 0],
  ]))
module.exports = listSorting;
