function parent1()
{
	let message = "Hello";
	function child1()
	{
		console.log(message);
	}
	child1();
}
parent1();


function parent2(a)
{
	let msg = "Bye!";
	function child2(msg)
	{
		console.log(a, msg);
	}
	return child2;
}
let parent3= parent2("Hi");
parent3("People");