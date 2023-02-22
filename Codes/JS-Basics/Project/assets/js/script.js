/*
Array 
Array always starts from 0
Syntax:
    array (block_size) or [block_size]

Object Types 
User-defined -> {}  
// Objects must be kept inside { }
Built-in -> Date();
*/
// This is Single Dimensional Array 
let person=["Ram", "9810000000", "Kathmandu", "info.ram@gmail.com"];
document.write(`${person[0]}, ${person[1]}, ${person[2]}<hr/>`);
// Here, 0, 1 and 2 are the index of an array

person.forEach((data) => {
    document.write(data);
});

// In Object(represented by . operator)
let person2=
{
    Name:"Manish",
    Age:"22",
    Address:"Kathmandu"
};
// Here, person2 is an object whereas, Name, Age and Address are the items of an object person2.
document.write(`<hr>${person2.Name} <hr>${person2.Age} <hr>${person2.Address}`);

/*
Note: 
In Js, 
-> : tends to 
=>: Fat Arrow, but in array (implies)
*/ 