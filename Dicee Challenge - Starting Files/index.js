var randomNumber1 = Math.floor(Math.random()*6)+1;

var diceNum = "dice" + randomNumber1 + ".png";

var imgsrc = "images/" + diceNum;

var img = document.querySelectorAll("img")[0];

img.setAttribute("src", imgsrc);

var randomNumber2 = Math.floor(Math.random()*6)+1;

var diceNum1 = "dice" + randomNumber2 + ".png";

var imgsrc1 = "images/" + diceNum1;

var img1 = document.querySelectorAll("img")[1];
img1.setAttribute("src", imgsrc1);


if (randomNumber1 > randomNumber2)
{
	document.querySelector("h1").innerHTML = "Player1 Wins";
}
else if (randomNumber2 > randomNumber1)
{
	document.querySelector("h1").innerHTML = "Player2 Wins";
}
else if (randomNumber1 = randomNumber2)
{
	document.querySelector("h1").innerHTML = "Draw";
}
