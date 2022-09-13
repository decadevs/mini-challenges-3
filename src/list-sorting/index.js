function listSorting(needle, haystack) {
    if(typeof(haystack[0]) == "object"){
        let lastArray = -1;
        let lastIndex;
        for(let i = 0; i < haystack.length; i++){
            if(haystack[i].includes(needle)){
                lastArray = i;
                lastIndex = haystack[i].lastIndexOf(needle)
            }
        }
        if(lastArray != -1){
            return [lastArray, lastIndex]
        }
          else{
            return -1
         }
    }
    else{
        return haystack.lastIndexOf(needle)
}
}
module.exports = listSorting;
