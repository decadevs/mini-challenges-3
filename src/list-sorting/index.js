"use strict";

function listSorting(needle, haystack) {
  let result;
  let needleExist = false;


  if(haystack.some(x => Array.isArray(x))){

    for(let i = 0; i < haystack.length; i++){

      if(haystack[i].length === 0){result = -1;}

      if(haystack[i].includes(needle)){
        result = [i, haystack[i].lastIndexOf(needle)];
        needleExist = true;
      }
      else if(!needleExist){result = -1}

    }

    return result;
  }

  return haystack.lastIndexOf(needle);

}

module.exports = listSorting;
