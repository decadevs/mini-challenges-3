function listSorting(needle, haystack) {
  // check if the haystack is an one dimensional array or multi
  
  var myFirstIndexPosition = [];
  var myLastIndexPosition = [];
  var myReturnPosition = [];
  for(var i = 0; i < haystack.length; i++){
      if(haystack[i].includes(needle)){
          myFirstIndexPosition.push(true);
          myLastIndexPosition.push(haystack[i].lastIndexOf(needle));
      } else{
          myFirstIndexPosition.push(false);
          myLastIndexPosition.push(false);
      }
  }


  if(myFirstIndexPosition.includes(true)){
      myReturnPosition.push(myFirstIndexPosition.lastIndexOf(true), (myLastIndexPosition[myFirstIndexPosition.lastIndexOf(true)]));
      // console.log(myReturnPosition);
      return myReturnPosition;
  } else{
      return -1;
  }


 }



module.exports = listSorting;
