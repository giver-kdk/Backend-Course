/*
    ES6 Features:
    Higher-order functions are: 
        - functions that make the use of functions as either their argument or their return value.
        - By using functions in both roles is unnecessary.
        - if a function works with either of the two, it becomes a higher-order function
        - In Javascript functions, map, filer and reduce are examples of built-in higher order functions.
*/ 
let array1 = [1, 2, 3, 4 , 5];
// Create custom prototype function "myFilter" that takes "filterOdd" as its argument(callback function)
Array.prototype.myFilter = function (filterOdd)			
{
	let resultArray = [];
	for(let i = 0; i < this.length; i++)				// "this" means the array that uses "myFilter"
	{
		if(filterOdd(this[i]))							// "this[i]"  means the ith element of array that uses "myFilter"
		{
			resultArray.push(this[i]);					// If the element passes the filter test, then add it to "resultArray"
		}
	}
	return resultArray;								
}
// This is the actual filtering test, that each element needs to go through
function filterOdd(num)									// Here, "num" is the array element to be tested
{
	if(num % 2 != 0) return true;
	else return false;
}

// Here, "myFilter" is just like "filter()" in JS and "filterOdd" is like "filter()"'s callback function
let oddArray = array1.myFilter(filterOdd);
console.log(oddArray);