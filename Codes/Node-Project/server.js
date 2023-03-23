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
