const express = require("express");
const bodyParser = require("body-parser");
const { name } = require("ejs");

const app = express();

var items = [];
var workItem = [];

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) =>
	{
		var today = new Date();
		var day = ['Sunday','Monday','Tuesday','Wednesday','Thurday','Friday','Saturday'];
		var options = 
			{
				weekday: "long",
				day: "numeric",
				month: "long"
			}
		var date = today.toLocaleDateString("en-US", options)
		day = date;
	
		res.render('list', {listTitle: date, listItem: items});

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


app.listen(3000, () => 
	{
		console.log("port is operational");
	})
