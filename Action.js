alert("You've started the game");

var favColor;
var Color;
var answer = true;
var body = document.getElementsByTagName("body")[0];
var choice = document.createElement("h1");
choice.style.fontFamily = "Arial";
while (answer) {
	favColor = prompt("What's your favorite primary color?").toUpperCase();
	switch (favColor) {
		case "RED":
			choice.appendChild(document.createTextNode("No, it is green"));
			choice.style.color = "red";
			body.appendChild(choice);
			body.setAttribute('style', 'background-color: #99ff99');
			answer = false;
			break;
		case "GREEN":
			choice.appendChild(document.createTextNode("No, it is red"));
			choice.style.color = "green";
			body.appendChild(choice);
			body.setAttribute('style', 'background-color: #ff9999');			answer = false;
			break;
		case "BLUE":
			choice.appendChild(document.createTextNode("No, it is yellow"));
			choice.style.color = "blue";
			body.appendChild(choice);
			body.setAttribute('style', 'background-color: #ffff99');			answer = false;
			break;
		case "YELLOW":
			choice.appendChild(document.createTextNode("No, it is blue"));
			choice.style.color = "yellow";
			body.appendChild(choice);
			body.setAttribute('style', 'background-color: #9999ff');			answer = false;
			break;
		default:
			choice.appendChild(document.createTextNode("I said pick a primary color"));
			choice.appendChild(document.createElement("br"));
			body.appendChild(choice);
	}
}