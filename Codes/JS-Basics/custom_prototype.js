/*
    ES6 Features:
    Higher-order functions are: 
        - functions that make the use of functions as either their argument or their return value.
        - By using functions in both roles is unnecessary.
        - if a function works with either of the two, it becomes a higher-order function
        - In Javascript functions, map, filer and reduce are examples of built-in higher order functions.
*/ 

// JS Script
const arrData=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// filter odd numbers
filterOdd=[];
for (let i = 0; i < arrData.length; i++)
{
    if((arrData[i]%2)!=0)
    {
            filterOdd.push(arrData[i]);
    }
}

console.log(filterOdd);

// using function 
function arrFilter()
{
    const filterOdd=[];
    for (let i = 0; i < arrData.length; i++)
    {
        if((arrData[i]%2!=0))
        {
            filterOdd.push(arrData[i]);
        }
    }
    return filterOdd;       //calling function filterOdd
}

console.log(arrFilter());   


const data=[1, 2, 3, 4, 5];
// Prototype can be customly created.

// Creating custom prototype in JS
Array.prototype.customFilter=function(fn)
{
    const filtered=[];
    for (let i = 0; i < this.length; i++)
    {
        if (fn(this[i]))
        {
            filtered.push(this[i]);
        }
    }
    return filtered;
}
console.log(Array());

// display numbers elements greater than 2 
const data1=[1, 2, 3, 4, 5];
const filteredData=data1.customFilter(function(el)
{
    if(el>2)
    {
        return el;
    }
});

console.log(filteredData);