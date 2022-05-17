const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) =>
	{
		res.sendFile(__dirname + "/index.html");
	})
app.post("/", (req, res) =>
	{	
		const name = req.body.city;
		console.log(name)
		const apiKey = "ece11228b2ea8c08adf55e1c2adc0d9f";
		const url = "https://api.openweathermap.org/data/2.5/weather?q=" + name + "&units=metric&appid=" + apiKey;
		https.get(url, (response) =>
			{
				console.log(response.statusCode);
				response.on("data", (data) => 
					{
						const weatherData = JSON.parse(data);
						const weatherDescription = weatherData.weather[0].description;
						const cityName = weatherData.name;
						const icon = weatherData.weather[0].icon;
						const imgUrl = "http://openweathermap.org/img/wn/" + icon +"@2x.png";
						console.log(weatherDescription);
						res.write("<h1>The current weather at " + cityName + " is "+ weatherDescription +"</h1>");
						res.write("<img src=" + imgUrl + ">")
						res.send();
					})
			});
	})

app.listen(3000, () =>
	{
		console.log("Server has started");
	})


