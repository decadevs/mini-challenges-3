function listSorting(needle, haystack) {
  let row = -1;
  let column = -1;
  let occurenceIndex = [row, column]

  for (let i=0; i < haystack.length; i++){
      if(Array.isArray(haystack[i])){
          let secondLen = haystack[i].length;
          for(let j = 0; j < secondLen; j++){
              if(needle === haystack[i][j]) {
                row = i; column = j; occurenceIndex = [i,j];
              }
          }
      }else if(needle === haystack[i]){
          row = i;
      }
  }
  return column === -1 ? row : occurenceIndex;
}
module.exports = listSorting;
