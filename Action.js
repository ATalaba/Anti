window.alert("You've started the game");
var body = document.getElementsByTagName("body")[0];
var nameChoice = document.createElement("h1");
var name;

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
	var choice = document.createElement("h1");
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
	var button1 = document.createElement("button");
	button1.setAttribute('onClick', "window.location='http://www.fb.com'");
	button1.appendChild(document.createTextNode("FB"));
	button1.style.fontSize = "32px";
	button1.style.fontFamily = "Garamond";
	button1.style.borderRadius = "200px";
	button1.setAttribute('type', 'button');
	button1.style.height = "100px";
	button1.style.width = "100px";
	body.appendChild(button1);
}

nameChange();
colorChange();
buttons();
