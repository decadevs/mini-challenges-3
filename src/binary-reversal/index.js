/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) 
{
    //check the input value to ensure it's a string
    if (typeof value !== "string")
    {
        return `Please enter a valid string`;
    } 
    else
    {
        //cast the inputed value to its number equivalent and store the result
        let valueInt = parseInt(value);

        //if the value in integer is not a number or it's negative prompt the user  
		if (isNaN(valueInt) || valueInt <= 0)
		{
			return `Please enter a positive number in string format`;
        }
        else
        {
            let valueBinary = [];//array variable to hold the input value in binary
            let valueBinaryReversed = [];//array variable to hold the reversed of the binary
            
            //use this loop to convert the inputed value integer equivalent to binary 
            while (valueInt > 0)
            {
                //keep dividing the number by 2 and storing the remainder in the array
                valueBinary.unshift(valueInt % 2);
                valueInt = Math.floor(valueInt/2);
            }
            //pad the valueBinary array with zeros to ensure it is upto 8 bits
            while(valueBinary.length < 8)
            {
                valueBinary.unshift(0);
            }

            /*loop through each element of the binary and store them in a
            *reversed order in the valueBinaryReversed initially defined*/
            valueBinary.forEach( item => { valueBinaryReversed.unshift(item); });
            
            //variable to store the reversed binary decimal equivalent
            let valueReversed = 0; 

            /*the exponent of 2 used during conversion to decimal 
            *ranges from 0 to the binary length minus 1 */         
            let power  = valueBinary.length - 1;

            for (let eachBinary of valueBinaryReversed)
            {
                valueReversed += eachBinary * Math.pow(2, power);
                power--;
            }

            return valueReversed;        
        }
    }
}

module.exports = binaryReversal;
