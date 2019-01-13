/*JS*/

var squares;

window.onload = function()
{
	squares = document.getElementsByClassName("square").childNodes;
	for(var a = 0; a < squares.length; a++)
	{
		squares[a].observe("mouseover", highlight);
		squares[a].observe("mouseout", unhighlight);
	}
	document.getElementsByClassName("button3").observe("click", expand);
}

function highlight()
{
	this.style.width = "40px";
	this.style.height = "40px";
}

function unhighlight()
{
	this.style.width = "30px";
	this.style.height = "30px";
}

function expand()
{
	var x = document.createElement('p');
	x.className = "popup";
	x.innerHTML = "Rating: 3.4/5";
	var y = document.createElement('p');
	y.className = "popup";
	y.innerHTML = "Comments: Blah blah blah";
	
	$(
}