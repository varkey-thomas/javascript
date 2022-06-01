const express = require("express");
const bodyParser = require("body-parser");
const { name } = require("ejs");
const date = require(__dirname + "/date.js");

const app = express();

var items = [];
var workItem = [];

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) =>
	{
		let day = date.getDate()	
		res.render('list', {listTitle: day, listItem: items});

	})

app.get("/work", (req, res) =>
	{
		res.render("list", {listTitle: "Work List", listItem: workItem});
	})

app.post("/", (req, res) => 
	{
		var item = req.body.item;
		if ( req.body.list === "Work")
		{
			workItem.push(item);	
			res.redirect("/work");
		}
		else
		{
			items.push(item);
			res.redirect("/");
		}
	})

app.get("/about", (req, res) =>
	{
		res.render("about");
	})


app.listen(3000, () => 
	{
		console.log("port is operational");
	})
