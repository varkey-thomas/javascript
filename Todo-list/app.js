const express = require("express");
const bodyParser = require("body-parser");
const { name } = require("ejs");

const app = express();

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) =>
	{
		var today = new Date();
		var day = ['Sunday','Monday','Tuesday','Wednesday','Thurday','Friday','Saturday'];
		var dayName = day[today.getDay()];
		var options = 
			{
				weekday: "long",
				day: "numeric",
				month: "long"
			}
		var date = today.toLocaleDateString("en-US", options)
		if (today.getDay() == 6 || today.getDay() == 0)
		{
			day = date;
		}
		else
		{
			day = date;
		}
			res.render('list', {day: date});
	})

app.post("/", (req, res) => 
	{
		var item = req.body.item;
		console.log(item);
	})

app.listen(3000, () => 
	{
		console.log("port is operational");
	})
