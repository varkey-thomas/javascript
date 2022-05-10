const express = require("express");
const bodyParser = require("body-parser");
const { response } = require("express");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", (req, res) =>
	{
		res.sendFile(__dirname + "/index.html");
	})

app.post("/", (req, res) => 
	{
		console.log(req.body);
		res.send("Thank you for posting");
	})

app.get("/bmi", (req, res) => 
	{
		res.sendFile(__dirname + "/bmiCalculator.html");
		//res.send("test");
	})

app.post("/bmi", (req, res) => 
	{
		var weight = parseFloat(req.body.weight);
		var height = parseFloat(req.body.height);

		var bmi = weight/height;

		//res.send("Thank you for posting");
		res.send("You're BMI is " + bmi);
	})

app.listen(3000, () =>
	{
		console.log("server has started");
	});
