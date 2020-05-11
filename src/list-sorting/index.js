function listSorting(needle, haystack) {
    const arrayLength =  haystack.length;
    for (let x= arrayLength-1; x>=0; x--){
      // if the current element is an array
        nestedArr = typeof(haystack[x]) == 'object';
        if(nestedArr) {
            let start = haystack[x].length-1;
            for (y = start; y>=0; y--){
                if(haystack[x][y] == needle) return [x,y];
            }
        }
        // if the current element is not an array
        if(haystack[x] == needle) return x;

    }
    return -1
}


module.exports = listSorting;
