function listSorting(needle, haystack) {
  //Check if its One DIMENSIONAL aRRay
  if(typeof haystack[0] != 'object'){
    return haystack.lastIndexOf(needle);
  }else{
    let col;
    let clonedHaystack = haystack;
    let row; let lastMember;
    while(clonedHaystack.length){
      row = clonedHaystack.length-1;
      lastMember = clonedHaystack.pop();
      col = lastMember.lastIndexOf(needle);
      if(col !== -1) return [row,col];
    }

  }
  return -1;
}

module.exports = listSorting;
