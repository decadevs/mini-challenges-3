function listSorting(needle, haystack) {


    let arr = [];

    for(let i = 0; i <haystack.length; i++){

        if(Array.isArray(haystack[i])){// checking if haystack is a multi dimensional array

           if(haystack[i].includes(needle)){// iterate thru each sub-array

               let row = i;
               let col = haystack[i].lastIndexOf(needle);
               let rowCol = [row, col];
               arr.push(rowCol);

           }

           if(haystack[i] === 0){ // return -1 for empty array
               return -1;
           
           }
          
    
        }
                
        else{
            if(haystack.includes(needle)){ 
                let store = haystack.lastIndexOf(needle);
                arr.push(store);
            }
		
		
		}
		
		

    }

    let temp =arr.pop()

    if(haystack.length !== 0 && temp !== undefined){
        return temp;
    }
    
    else{
        return -1;
    }
    
	

}

module.exports = listSorting;
