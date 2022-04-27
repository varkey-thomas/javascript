let colours = ['darkgreen','maroon','darkgrey']

let button = document.getElementById('colours');


button.addEventListener('click',function()
	{
		var random = colours[Math.floor(Math.random()*colours.length)]
		let section = document.getElementById('section');
		section.style.background = random;
	}
)

function changecolour()
{
    let colors = document.getElementById('colourInput').value;
    document.body.style.backgroundColor = colors
}

if (colors.value = null)
{
    button.click()
}
else
{
    changecolour();
} 
