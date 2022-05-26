const express = require("express");
const body_parser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();
app.use(express.static("Public"));
app.use(body_parser.urlencoded({extended: true}));

app.get("/",(req, res) => 
	{
		res.sendFile(__dirname + "/signup.html");
	})

app.post("/", (req, res) =>
	{
		const firstName = req.body.firstname;
		const lastName = req.body.lastname;
		const email = req.body.email;

		console.log(firstName, lastName, email);
		var data = 
			{
				members:
				[
					{
						email_address: email,
						status: "subscribed",
						merge_fields:
						{
							FNAME: firstName,
							LNAME: lastName
						}
					}
				]
			}
		console.log("data working");

		var jsonDATA = JSON.stringify(data);
		
		const url = "https://us14.api.mailchimp.com/3.0/lists/753f56ac3e";

		const options = 
			{
				method: "POST",
				auth: "default:e6e17ae692297f20a6512d0ce1b12819-us14"
			}
		console.log("auth");

		const request = https.request(url, options, (response) =>
		{
			if (response.statusCode === 200)
			{
				res.sendFile(__dirname + "/success.html");
			}
			else
			{
				res.sendFile(__dirname + "/failure.html");
			}
			response.on("data",(data) =>
				{
					console.log(JSON.parse(data));
				})
		});
		request.write(jsonDATA);
		request.end();

	})

app.post("/failure", (req, res) =>
	{
		res.redirect("/");
	})

app.listen(3000, () =>
	{
		console.log("Port is functional");
	})

//API key
//
//e6e17ae692297f20a6512d0ce1b12819-us14

//List id
//753f56ac3e
