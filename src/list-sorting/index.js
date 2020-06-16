
function listSorting(needle, haystack) {
    if (haystack.length ==0  ){
        return -1;
    }
  //looking up for single dimension array.
    if(haystack[0].length == undefined){
        if(haystack.includes(needle)){
            return haystack.lastIndexOf(needle)
        }else{
            return -1;
        }
    }
  // handles haystack, if it is a multidimentional array
    let lastIndexOfLastOccuranceOfNeedle,
    checkNeedle =0;
    haystack.forEach((row,rowIndex)=>{
        if(row.includes(needle)){
            lastIndexOfLastOccuranceOfNeedle = [rowIndex,row.lastIndexOf(needle)]
        }else{
            checkNeedle +=1
        }
    })
  //making sure that all the individual arrays that make up the haystack was checked for needle.
    if(haystack.length==checkNeedle){
        return -1;
    }
    return lastIndexOfLastOccuranceOfNeedle;
}

module.exports = listSorting;
