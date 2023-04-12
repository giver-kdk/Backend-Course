import express from "express"
const publicRouter = express.Router();
import {getIndexPage, getAboutPage, getContactPage} from "../controller/public_controller"
publicRouter.get("/", getIndexPage);

publicRouter.get("/about", getAboutPage);

publicRouter.get("/contact", getContactPage);

// All the logic for user data can also be done here cleanly

// publicRouter.get("/", (req, res) =>{
// 	res.json("This is public router");
// });

// publicRouter.get("/about", (req, res) =>{
// 	res.json("Hi! About page from router!");
// });

module.exports = publicRouter;

