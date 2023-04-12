/*
	Working with NodeJS Framework 
*/
import express from "express";							// ES6 method
// const express = require("express");					// ES5 method
require("dotenv").config();
// Preparing methods of express frameworkto use
// This "app" is major handler of the framework for project
const app = express();

// We can run this "PORT" in env file
const PORT = process.env.PORT || 4000;					// If .env PORT fails, then run PORT 4000 

// Using Template Engine for HTML document
app.set("view engine", " ejs");
// Allows "public" folder to be used
app.use(express.static("public"));
// const {indexPage} = require("./routes/public_routes");			// USe this if public_routes.js has multiple exports
const indexPage = require("./routes/public_routes");

// We can use "app.use" instead of app.get using "indexPage" 
app.use("/", indexPage);
// app.get("path", function ());
// app.get("/", (req, res) =>{
// 	// console.log(req);
// 	res.json("Hi NodeJS framework!!");
// });

app.listen(PORT, () =>
{
	console.log(`Server is running at http://localhost:${PORT}`);
})


