const rainDrop =  (number) =>
{
	let text = "";

	//This is to check if the user input a value
	if(typeof number === "undefined")
	{
		return "Please enter a value";
	}	

	//This is to check if the value is not any other type than number
	else if(number.constructor !== Number)
	{
		return "Input must be a number";
	}

	else if(number < 0)
	{
		return "Please Enter a Positive number";
	}

	//This is to check for real integer
	else{
		if (number % 3 === 0)
   
   		text = "Pling";
   		if(number % 5 === 0)
   		text += "Plang";
 
    	if(number % 7 === 0)

   	    text +="Plong";

 	    if( text === "")
 		text = number;

 	    return text
   }
}
export default rainDrop;