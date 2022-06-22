function listSorting(needle, haystack) {
  if(!Array.isArray(haystack[0])){
    return haystack.lastIndexOf(needle)
}
else{
    for (let row = haystack.length-1; row >= 0; row--){
        let column = haystack[row].lastIndexOf(needle)
            if (column !==-1){
                return [row, column]
            }
    }
    return -1
}
}

module.exports = listSorting;
