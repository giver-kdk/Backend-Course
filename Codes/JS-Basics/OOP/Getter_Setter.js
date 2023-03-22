// Getter and Setter


// "get" ketword helps to create a function that allows to access the object keys indirerctly
let student = {
	name: "Giver Khadka",
	roll: 05,
	address: "Thulobharyang, Kathmandu",
	// "get" instead of "function" allows key access
	get accessName()
	{
		return this.name;				// returns "name" keyword of current object
	}
};

// Now, this method can be used to perform logical logical operations on key and return something as desired
console.log(student.accessName);


// "set" keyword helps to set value of desired keys in object. It's life setter function in useState() of ReactJS
let employee = {
	name: "Ram Chandra",
	id: 1234,
	address: "Sanobharyang, Kathmandu",
	// This setter function must have exactly one parameter to update the "key"
	set changeId(newID)
	{
		this.id = newID;
	}
}
console.log(employee.id);					// Before ID

// Even though setter is a funciton, we can't use function call like: 
// employee.change(5678);

// We need to use the setter like a variable assignment
employee.changeId = 5678;
console.log(employee.id);					// After ID

// Like this, setter can be used to update the keys indirectly using logical operations as desired