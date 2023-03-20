// Constructor
// Working with object
// "this" keyword will be used to maintain
// Mostly, constructor and classes will use PascalCase  
function Data()
{
	this.name = "Giver Kahadka";
	this.phone = "9811259286";
}
let d1 = new Data();
let d2 = new Data();
// "d1" data
console.log(d1.name);
console.log(d1.phone);
// "d2" data
console.log(d2.name);
console.log(d2.phone);

// NOTE: Object literals allows us to make single object at a time with defined block of code
// But,constructor allows us to make multiple object at a time using same block of constructor
function Student(name, contact)					//  This is a constructor
{
	this.name = name;
	this.contact = contact;
}
let s1 = new Student("Giver", "9811259286");
let s2 = new Student("Dhiraj", "9843382027");

console.log(s1.name);
console.log(s1.contact);
console.log(s2.name);
console.log(s2.contact);
