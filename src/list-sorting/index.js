function listSorting(needle, haystack) {
  let rows = -1;
  let column = -1;
  let output = [rows, column]

  for (let i=0; i < haystack.length; i++){
      if(Array.isArray(haystack[i])){
          let secondlength = haystack[i].length;
          for(let j = 0; j < secondlength; j++){
              if(needle === haystack[i][j]) {
                rows = i; column = j; output = [i,j];
              }
          }
      }else if(needle === haystack[i]){
          rows = i;
      }
  }
  return column === -1 ? rows : output;
}

module.exports = listSorting;
