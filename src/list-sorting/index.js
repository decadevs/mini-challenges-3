function listSorting(needle, haystack) {
  let output = -1;

  if(haystack.length < 1){
    return output;
  }

  if(typeof haystack[0] !== "number"){
    output = [];
    let index = -1;
    let arrayIndex;

    for(let i=0; i<haystack.length; i++){
      for(let j=0; j<haystack[i].length; j++){
        if(haystack[i][j] === needle){
          arrayIndex = i;
          index = j;
        }
      }
    }
    output.push(arrayIndex, index);
    return index !== -1 ? output : index;
  }else{

    for(let i=0; i<haystack.length; i++){
      if( needle === haystack[i] ){
        output = i;
      }

    }
  }
  return output;
}

module.exports = listSorting;
