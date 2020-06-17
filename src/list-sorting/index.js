function listSorting(needle, haystack) {
  //Check if its a valid Search Item
  if(typeof needle !== 'number'){
   throw TypeError('You must enter a Number');
 }

 //Check if its a valid data given
 if(!Array.isArray(haystack)){
   throw TypeError('You must enter an Array');
 }

 //Check if its One DIMENSIONAL aRRay
 if(!Array.isArray(haystack[0])){
   let location = haystack.lastIndexOf(needle);
   return location;
 }else{
   while(haystack.length){
     rowFound = haystack.length-1;
     lastMember = haystack.pop();
     colPosition = lastMember.lastIndexOf(needle);
     if(colPosition !== -1) return [rowFound,colPosition];
     }
 }
 return -1;
}

module.exports = listSorting;
