function listSorting(needle, haystack) {
	let result=[];
	
	if (typeof(haystack[0])==="object") {
         haystack.forEach((a,i)=>{
      	if(a.lastIndexOf(needle)!=-1){
      		result.push([i,a.lastIndexOf(needle)]);
      	}
      })

      if(result.length>0){
      	return ( result[result.length-1])
      }else{
      return -1
  		}
  }
		
	return haystack.lastIndexOf(needle)
		
	
}

module.exports = listSorting;
