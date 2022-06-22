
function listSorting(needle, haystack) {
     if (Array.isArray(haystack[0])) {
         let output = [];
         haystack.map((currentValues) => {if (currentValues.includes(needle)) {
             output.push(haystack.indexOf(currentValues), currentValues.lastIndexOf(needle));
           }});

         return output.length ? output.slice(output.length - 2) : -1;
       }
       return haystack.lastIndexOf(needle);
 }



module.exports = listSorting;
