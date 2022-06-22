function listSorting(needle, haystack) {
  let row = -1, col = -1, computed = [row,col], length = haystack.length;
    for(let i=0;i<length;i++){
        if(Array.isArray(haystack[i])){
            let secondlength = haystack[i].length;
            for(let j=0;j<secondlength;j++){
                if(needle === haystack[i][j]){
                    row = i;
                    col = j;
                    computed = [i,j];
                }
            }
        }else if(needle === haystack[i]){
            row =i;
        }
    }
    if(col === -1){
        return row;
    }else{
        return computed;
    }
}

module.exports = listSorting;
