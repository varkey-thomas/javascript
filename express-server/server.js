const { response } = require("express");
const { request } = require("express");
const express = require("express");
const res = require("express/lib/response");
const app = express();
const port = 3000;

app.get("/", (request,response) =>
	{
		response.send("hello");
	});

app.get("/contact", (req, res) =>
	{
		res.send("contact at vthms@gmail.com");
	})

app.get("/about", (req,res) =>
	{
		res.send("I'm a freelance coder and linux enthusiast");
	})

app.get("/arts", (req, res) =>
	{
		res.send("arts page coming soon");
	})

app.listen(port,() => 
	{
		console.log("server started on port 3000");
	});
