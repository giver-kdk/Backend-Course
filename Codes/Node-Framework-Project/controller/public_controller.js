// All the logic for user data is done here cleanly
// All the DB commands and queries can be written here
exports.getIndexPage = (req, res) =>{
	// ".render()" renders the HTML written in .ejs file
	// Here, we are passing title name as object
		res.render("index.ejs", {title: " NodeJS Project"});
};
exports.getAboutPage = (req, res) =>{
		res.render("about.ejs");
};
exports.getContactPage = (req, res) =>{
		res.render("contact.ejs", {title: "NodeJS Project Contact"});
};
// exports.getAboutPage = (req, res) =>{
// 		res.json("This is About router");
// };
// Logic for storing data posted by user
exports.postRegister = (req, res) =>{
	res.json("Register");
};
// Logic for retrieving data given by user
exports.getRegister = (req, res) =>{
		res.json("Register");
};



/*
Term of EJS: 
1) 
	- To make public web pages, we use template engine like EJS
	- We use "response" to render
2) 
	- If we are just creating an API
	- We use .json on "response" directly
	- Without any temmplate engie
API Types: 
	- Public API
	- Private API
	- Enterprise API

API Architecture: 
	- SOAP API(Uses XML documnet)
	- REST API(Uses JSON documnet) / aka RESTfull
	- RPC API(Uses RPC-XML and RPC-JSON)
*/
