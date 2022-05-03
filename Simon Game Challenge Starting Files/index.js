var buttonColour = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickPattern = [];

$(".btn").click(colour);

function colour()
{
	var userChosenColour = $(this).attr("id")
	userClickPattern.push(userChosenColour);
	playSound(userChosenColour);
	animatePress(userChosenColour);
}

function playSound(name)
{
	var audio = new Audio("sounds/" + name + ".mp3");
	audio.play();
}

function animatePress(currentColour)
{
	var button = currentColour;
	console.log(button);
	$("#" + button).addClass("pressed");

	setTimeout(()	=>{
	$("#" + button).removeClass("pressed");
	}, 100);
}

function nextSequence()
{
	var randomNumber = Math.floor(Math.random()*3) + 1;
	var randomCosenColour = buttonColour[randomNumber];
	gamePattern.push(randomCosenColour);
	$("#" + randomCosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
	var audio = new Audio("sounds/" + randomCosenColour + ".mp3");
	audio.play();
}

