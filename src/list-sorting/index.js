function listSorting(needle, haystack) {
    // for(var i = 0; i < haystack.length; i++){
    //     if(needle.includes(haystack)){
    //         let position = haystack.lastIndexOf(needle);

    //     }else if (!needle.includes(haystack)){
    //         position = '-1'
    //     }   
    // }
    // return position;
    // for(var i = 0; i < haystack.length; i++){
    //     if(haystack[i] === needle){
    //         let position = haystack.lastIndexOf(needle);
    //     }else{
    //         return '-1';
    //     }
    // }
    // return position;
    if(!Array.isArray(haystack[0])){
        return haystack.lastIndexOf(needle);
    }
    for(let j = haystack.length - 1; j >=0; j--){
        let col = haystack[j].lastIndexOf(needle);
        if(col !== -1){
            return [j, col];
        }
    }
    return -1;


}

module.exports = listSorting;
