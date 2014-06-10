window.alert("You've started the game");
var body = document.getElementsByTagName("body")[0];
var nameChoice = document.createElement("h1");
var name;
var choice = document.createElement("h1");
var button1 = document.createElement("button");
var button2 = document.createElement("button");


function nameChange() {
	var realName;
	nameChoice.style.fontFamily = "Arial";
	realName = prompt("What is your name?");
	name = realName.split('').reverse().join('');
	nameChoice.appendChild(document.createTextNode("No, it is " + name));
	body.appendChild(nameChoice);
}

function colorChange() {
	var favColor;
	var Color;
	var answer = true;
	choice.style.fontFamily = "Arial";
	while (answer) {
		favColor = prompt("What's your favorite primary color?").toUpperCase();
		switch (favColor) {
			case "RED":
				Color = "green";
				choice.appendChild(document.createTextNode("Now it is " + Color));
				nameChoice.style.color = "green";
				body.appendChild(choice);
				body.setAttribute('style', 'background-color: #99ff99');
				answer = false;
				break;
			case "GREEN":
				Color = "red";
				choice.appendChild(document.createTextNode("Now it is " + Color));
				nameChoice.style.color = "red";
				body.appendChild(choice);
				body.setAttribute('style', 'background-color: #ff9999');
				answer = false;
				break;
			case "BLUE":
				Color = "yellow";
				choice.appendChild(document.createTextNode("Now it is " + Color));
				nameChoice.style.color = "yellow";
				body.appendChild(choice);
				body.setAttribute('style', 'background-color: #ffff99');
				answer = false;
				break;
			case "YELLOW":
				Color = "blue";
				choice.appendChild(document.createTextNode("Now it is " + Color));
				nameChoice.style.color = "blue";
				body.appendChild(choice);
				body.setAttribute('style', 'background-color: #9999ff');
				answer = false;
				break;
			default:
				choice.appendChild(document.createTextNode("I said pick a primary color"));
				choice.appendChild(document.createElement("br"));
				body.appendChild(choice);
		}
	}
}

function buttons() {
	var wouldYou = document.createElement("h1");
	wouldYou.appendChild(document.createTextNode("Would you like to play a platformer?"));
	body.appendChild(wouldYou);
	button1.setAttribute('onClick', /*"window.location='http://www.fb.com'"*/ 'createGame()');
	button1.appendChild(document.createTextNode("Yes"));
	button2.setAttribute('onClick', 'closeWindow');
	button2.appendChild(document.createTextNode("No"));
	button2.style.fontSize = "32px";
	button2.style.fontFamily = "Garamond";
	button2.style.borderRadius = "200px";
	button2.setAttribute('type', 'button');
	button2.style.height = "100px";
	button2.style.width = "100px";
	button1.style.fontSize = "32px";
	button1.style.fontFamily = "Garamond";
	button1.style.borderRadius = "200px";
	button1.setAttribute('type', 'button');
	button1.style.height = "100px";
	button1.style.width = "100px";
	body.appendChild(button1);
	body.appendChild(button2);
}

nameChange();
colorChange();
buttons();

function createGame() {
	body.removeChild(nameChoice);
	body.removeChild(choice);
	body.removeChild(button2);
	body.removeChild(button1);
	var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
}

function preload() {
}

function create() {
}

function update() {
}
