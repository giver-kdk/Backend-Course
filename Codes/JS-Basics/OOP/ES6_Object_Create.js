class Person
{
	// Class controls methods and properties
	constructor()							// Constuctor function
	{
		// return 1;
		this.name = "Giver Khadka";
	}
	get data()
	{
		return "Hello World";
	}
}
// "extends" will inherit "p1" from "Person"
class p1 extends Person
{
	constructor()
	{
		// "super()" allows to use parent constructor as well	
		super();
	}
	get  dataChild()
	{
		return "Hello Child"
	}
}
let person1  = new p1;
console.log(person1.data);
console.log(person1.name);
console.log(person1.dataChild);

