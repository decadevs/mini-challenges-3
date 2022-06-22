function listSorting(needle, haystack) {
  let answer = -1
  let err
 try {
 err = haystack[0][0]
 } catch (error) {
   err = error
 }
 if(err ===undefined){

   haystack.forEach((element,key)=>{
     if(element === needle){
       answer = key
     }
   })
 }else if( err !== undefined){
       for(let outer in haystack){
         for (let i = 0; i < haystack[outer].length; i++) {
           if(haystack[outer][i] == needle){
             answer = [parseInt(outer), i]
           }
         }
  }
 }

  return answer
 }


 module.exports = listSorting;
