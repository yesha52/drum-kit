//Button Press

for (var i = 0; i < document.querySelectorAll(".drum").length; i++)							//loop through all the buttons
{
	document.querySelectorAll(".drum")[i].addEventListener("click", function()		//if a particular button is clicked
	{
		var buttonInnerHtml = this.innerHTML;																				//pass its innerHTML to both the functions
		makeSound(buttonInnerHtml);
		buttonAnimation(buttonInnerHtml);
	});
}


//Keyboard Press

document.addEventListener("keydown", function(event) {													//check for key preses
	makeSound(event.key);																													//event is the current event that happened, in this case, a particular key is pressed
	buttonAnimation(event.key);																										//pass the key value (the letter pressed) of the event
})

function makeSound(key)																													//parameter is the letter that is clicked or pressed
{
	switch (key)																																	//use switch case to play the corresponding sound
	{
		case "w":
			var tom1 = new Audio("sounds/tom-1.mp3");
			tom1.play();
			break;
		case "a":
			var tom2 = new Audio("sounds/tom-2.mp3");
			tom2.play();
			break;
		case "s":
			var tom3 = new Audio("sounds/tom-3.mp3");
			tom3.play();
			break;
		case "d":
			var tom4 = new Audio("sounds/tom-4.mp3");
			tom4.play();
			break;
		case "j":
			var snare = new Audio("sounds/snare.mp3");
			snare.play();
			break;
		case "k":
			var crash = new Audio("sounds/crash.mp3");
			crash.play();
			break;
		case "l":
			var kick = new Audio("sounds/kick-bass.mp3");
			kick.play();
			break;
		default:
			console.log(buttonInnerHtml);

	}
}

//Button Animation when pressed

function buttonAnimation(currentKey)																						//parameter is the letter that is clicked or pressed
{
	var activeButton = document.querySelector("."+currentKey);										//the class name to each button is given as its letter. for querySelector we should also include '.' before the class name
	activeButton.classList.add("pressed");																				//the class 'pressed' is already defined in css. add it to the button pressed

	setTimeout(function() {																												//after a particular time lag (in this case 0.1 sec) remove the class 'pressed'
		activeButton.classList.remove("pressed");
	}, 100);
}
