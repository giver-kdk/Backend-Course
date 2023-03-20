/*
Types of Errors: 
    While coding, there can be three types of errors in the code.
1. Syntax Error
2. Runtime Error
3. Logical Error

1. Syntax Error: 
    When a user makes a mistake in the pre-defined syntax of a programming language, a syntax error may appear. 

2. Runtime Error:
    - When a error occurs during the execution of the program, such as error is known as Runtime Error. 
    - The codes which create runtime errors are known as Exceptions. 
    - Thus, exception handlers are used for handling runtime errors. 
    - Precision is an example of runtime error. 
    - Precision has certain limited. 
    - If we take 2 precision then it takes two digits after decimal.
    => 
    let data = 25.23894343
        console.log(toPrecision(3));
        => 25.239

3. Logical Error: 
    - An error which occurs when there is any logical mistake in the program that may not produce the desired output, and may terminate abnormally. Such an error is known as Logical Error. 

Although Error is a generic constructor, there are following standard built in error types or error constructrs beside it:
    - EvalError 
        An Error has occured in teh 
    - InternalError
    - RangeError
    - ReferenceError
    - SyntaxError
    - URIError(URI->Uniform Resource Indicator)

Exception Handling Statements
    There are following statements that handle if any exception occurs:
        - throw statements
        - try...catch statenetbs
        - try...catch...finally statements

These exception handling statements are discussed in the next section.
// RangeError
let num=1;
try{
    num.toPrecision(500);
    // A number cannot have 500 significant digits. 
}
catch(err)
{
    document.write("<br/>"+err.name);
}

/*
ReferenceError
    A referenceError is thrown if you use (reference), a variable that has not been declared.
*/
let x=1;
try{
    x=y+1;
    // y cannot be used (referenced) 
}
catch(err)
{
    document.write("<br/>"+err.name);
}

// Syntax Error
try{
    eval("alert('Hello");
    //Missing ' will produce an syntax error.
}
catch(err)
{
    document.write("<br/>"+err.name);
}

/*
TypeError
    A TypeError is thrown if you use a value that is outside the range of expected types:
*/
let num1=10;
try{
    num1.toUppercase();
    // You cannot convert a number to uppercase.  
}
catch(err)
{
    document.write("<br/>"+err.name);
}

/*
Uniform Resource Indicator/Identifier (URI)
    A URIError is thrown if you use illegal characteres in a URI function:
*/
try{
    decodeURI("%%%");
    //You cannot URI decode percent signs 
    // Correct URI: https://yubaraj.name.np/#contact
}
catch(err)
{
    document.write("<br/>"+err.name);
}