var express= require("express"),
	hbs= require("hbs"),
	bodyParser=require("body-parser"),
	bcrypt = require("bcrypt-nodejs"),
	mongoose = require('mongoose'),
	app = express(),
	passport = require("passport"),
	//express-session allows you to stay on the application for a max amount of time
	session = require("express-session");
	//User = require("./user"),
	//localAuth = require("./auth"),

	//set view engine
	app.set("view engine", "hbs");
	//tells the view engine to look for the views folder in the app/views
	//changing the path of the views folder
	app.set("views", path.join(__dirname, "app/views"));
	//dirname== this directory name
	//symbolic linking -- shortcut-- using static route to get to the client folder
	app.use("/static", path.join(__dirname, "app/client"));

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
		extended:true
}));