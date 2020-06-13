function listSorting(needle, haystack) {
    if (haystack.length ==0  ){
        return -1;
    }
    if(haystack[0].length == undefined){
        if(haystack.includes(needle)){
            return haystack.lastIndexOf(needle)
        }else{
            return -1;
        }
    }
    let output,
    checkNeedle =0;
    haystack.forEach((n,i)=>{
        if(n.includes(needle)){
            output = [i,n.lastIndexOf(needle)]
        }else{
            checkNeedle +=1
        }
    })
    if(haystack.length==checkNeedle){
        return -1;
    }
    return output;
}
//console.log(listSorting(2, [[6,98,0,2,2],[0,9,8,5,2,3,2]]));

module.exports = listSorting;