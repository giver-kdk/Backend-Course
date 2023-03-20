// Object Literal
let company = {
	name: "NCIT",
	payment: function ()
	{
		return "Paid";
	}
}

// Object Literal
let worker = {
	name: "Giver Khadka",
	class: function ()
	{
		return "Taken";
	}
};
console.log(company.name);
console.log("Company: ",company.payment());
console.log(worker.name);
console.log(worker.class());



// console.log(worker.payment());
// Prototype based inheritance
worker.__proto__ = company;
console.log("Worker: " , worker.payment());