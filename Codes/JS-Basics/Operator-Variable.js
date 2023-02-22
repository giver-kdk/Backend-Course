function calculate(n1, n2, op)
{
	let res = eval(`${parseInt(n1)} ${op} ${parseInt(n2)}`);
	console.log(res);
}
// Using an operator as a variable type
calculate("2", "3", "+");

