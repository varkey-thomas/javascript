var buttonColour = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickPattern = [];
var level = 0;
var start = false;

$(document).keydown(()=>
	{
		if(!start)
		{
			$("h1").text("Level " + level);
			start = true;
			nextSequence();
		}
	})

$(".btn").click(colour);

function colour()
{
	var userChosenColour = $(this).attr("id")
	userClickPattern.push(userChosenColour);
	playSound(userChosenColour);
	animatePress(userChosenColour);
	checkAsnwer(userClickPattern.length-1);

}

function checkAsnwer(currentLevel)
{
	if (gamePattern[currentLevel] === userClickPattern[currentLevel])		
	{
		console.log("Success");
		if(userClickPattern.length === gamePattern.length)
		{
			console.log(userClickPattern.length);
			setTimeout(()=>
				{
					nextSequence()
				},1000);
		}
	}
		else
		{
			playSound("wrong");
			$("body").addClass("game-over");
			setTimeout(()=>
				{
					$("body").removeClass("game-over");
				}, 200);
			$("h1").text("Game Over, Press Any Key to Restart");
		}
			startOver();
}

function nextSequence()
{
	userClickPattern = [];
	level ++;
	$("h1").text("Level " + level);
	var randomNumber = Math.floor(Math.random()*3) + 1;
	var randomCosenColour = buttonColour[randomNumber];
	gamePattern.push(randomCosenColour);
	$("#" + randomCosenColour).fadeOut(100).fadeIn(100);
	playSound(randomCosenColour);
}

function playSound(name)
{
	var audio = new Audio("sounds/" + name + ".mp3");
	audio.play();
}

function animatePress(currentColour)
{
	var button = currentColour;
	$("#" + button).addClass("pressed");

	setTimeout(()	=>{
	$("#" + button).removeClass("pressed");
	}, 100);
}

function startOver()
{
	level = 0;
	start = false;
	gamePattern = [];
}
