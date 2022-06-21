function listSorting(needle, haystack) {
  let row = -1;
    let column = -1;
    let arr = [row, column]

    for(let i=0;i<haystack.length;i++){
        if(Array.isArray(haystack[i])){
            for(let j=0;j<haystack[i].length ;j++){
                if(needle === haystack[i][j]){
                    row = i;
                    column = j;
                    arr = [i, j];
                }
            }
        }else if(needle === haystack[i]){
            row = i;
        }
    }
    if(column === -1){
        return row;
    }else{
        return arr;
    }

}

module.exports = listSorting;

