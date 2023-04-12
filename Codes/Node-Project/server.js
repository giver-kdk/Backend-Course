// Now, we create a server without using any framework

// "http" is default server by JS
const http = require("http");					// Built-in NodeJS package
// Creating server for dynamic activities
const server = http.createServer((req, res) => {
	// Document related activities are done here
	// req = request and res = response
	res.write("This is 1st NodeJS Project");

	res.end();					// Response needs to be ended. This is a problem in pure NodeJS
});

const PORT = 4000;
// Gives server running status for developers
server.listen(PORT, () =>
{
	console.log(`Server is running at: http://localhost:${PORT}`);
});

/*
	1) initialize node package using: 
		- npm init (npm init -y)
	2) server configuration with console message of server running status: 
		- HTTP server
	3) check ad run/start project
		- script, check inside package.json
		- to run: npm start
	4) check on browser window or API testing tools like: 
		- postman
		- vs-code thunder client extension

	Major Methods: GET(To retrieve data) and POST(to create/store data), because
	JS works with DOM of HTML document, 
	HTML Document can only handle GET and POST

*/