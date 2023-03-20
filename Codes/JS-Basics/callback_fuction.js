function add()
{
	return ("add");
}
function mul()
{
	return ("mul");
}
function mulDynamic(a, b)
{
	return a*b;
}
function calc(a, functionName)
{
	console.log(a + functionName());
}
calc("Addition: ", add);
calc("Multiplication: ", mul);
let dynamic = () => mulDynamic(2, 3);
calc("Dynaamic Multiplication: ", dynamic);