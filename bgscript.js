//DEFINING VARIABLES
var currentCSS = document.getElementsByTagName("h3")[0]; //getElementsByTagName needs the index of the specific tag you want to select in the document body
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var body = document.querySelector("body");
var butRandColors = document.getElementById("randomizeColor");

//.random() method generates a floating point (i.e. has a decimal) value between 0 and 1. 16777215 represents the total number of color values that exist from black to white (#000000 - #FFFFFF). 
//Math.floor returns an integer equivalent of the previously generated floating point value. Then, toString(16) converts the integer value to base 16 / hexidecimal.
//concantenating a # to this value results in a six digit hex color code
function generateRandomColor() {
	return "#" + Math.floor(Math.random()*16777215).toString(16);
}

//the two colors are assigned the generated color values from the prior function. 
//The setGradient function is also called in this function so that every time the random colors are selected so that the HTML body matches the 2 color inputs
function setRandomColors() {
	color1.value = generateRandomColor();
	color2.value = generateRandomColor();
	color3.value = generateRandomColor();
	setGradient();
}

function setGradient() {
	body.style.background =
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ", "
	+ color3.value
	+ ")";	

	//sets the current CSS rule to an h3 header
	currentCSS.textContent = body.style.background + ";";
}

//calling the setGradient function before listening for user inputs ensures the initial values of both colors show in the h3 header
setGradient();

//EVENT LISTENERS -
//"DOMContentLoaded" runs after the HTML has been fully read and parsed by the browser
document.addEventListener("DOMContentLoaded", setRandomColors);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
color3.addEventListener("input", setGradient);
butRandColors.addEventListener("click", setRandomColors);