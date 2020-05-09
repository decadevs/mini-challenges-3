function listSorting(needle, haystack) {

    let lastIndex;


    if (haystack[0] == undefined) {

        lastIndex = -1;
        
    }else {
  

    


    if (haystack[0][0]== undefined){

        for (let index = haystack.length -1; index >= 0; index--) {

                if (haystack[index] == needle) {


                    lastIndex = index;
                    
                break;
            
                    
                } else {

                    lastIndex = -1;
                }
  
         
              
                
        }
          


    } else {

        let count = 0;
       
        for (let index = haystack.length -1; index >= 0; index--) {
                    if (count == 1){
                        break;
                    }

          for (let b = haystack[index].length -1; b >= 0 ; b--) {

                    if (count == 1){
                        break;
                    }
            
                    if (haystack[index][b] == needle) {

                            count = count + 1;


                          lastIndex = [];
                          lastIndex[0]  = index;
                          lastIndex[1] = b;
                     


                        
                    } else {


                        lastIndex = -1;
                    }

                   
              
          }

          

        }


    }

}


    return lastIndex;






}

module.exports = listSorting;
