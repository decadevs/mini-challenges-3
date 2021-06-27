function listSorting(needle, haystack) {

    let lastIndex = -1, secondIndex = -1;
    for( index in haystack){
       let element = haystack[index];

       if( Array.isArray(element)){ //element is an array
           
        //returns the index of last occurence of needle in element( which is an array)
           let isFoundIndex = element.reduce( (lastOccurIndex, current_val, index)=>{
               if( current_val === needle ) lastOccurIndex = index;
               return lastOccurIndex;
           }, -1);

           //if element exist
           if( isFoundIndex != -1 ){ 
               //set secondIndex
               secondIndex  = isFoundIndex;//represent the column index
               lastIndex = index;//represets the row index
            }
       }else { //element is not an array

            if( element === needle){
                lastIndex = index;//set the row index
                secondIndex = -1; //reset column index
                }//endif
        } //end else
    }//end forloop

    if( secondIndex != -1){ //output if haystack is a multidimensional array
        return [Number(lastIndex), Number(secondIndex)]
    }else {
        //output if haystack is not a multidimensional array
        return Number(lastIndex);
    }

}

module.exports = listSorting;
