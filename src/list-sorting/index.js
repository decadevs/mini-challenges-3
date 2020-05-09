function listSorting(needle, haystack) {

   let stack = [];
    // loop through haystack to check if elem of haystack is an array of integer or an integer
   for(let elem of haystack){
       if(Array.isArray(elem)){
           if(elem.includes(needle)){
               let rowIdx = haystack.indexOf(elem);
               let colIdx = elem.lastIndexOf(needle);
               let arrIndex = [rowIdx, colIdx];
               
               stack.push(arrIndex);
           }
           if(elem.length === 0){
               return -1
           }
       }else{
           if(haystack.includes(needle)){
                let idx = haystack.lastIndexOf(needle);
                stack.push(idx);
           }else{
               stack.push(-1)
           }
                
       }
   }

   let result = stack.pop();
   return (haystack.length!==0 && result !== undefined) ? result: -1;
}

module.exports = listSorting;
