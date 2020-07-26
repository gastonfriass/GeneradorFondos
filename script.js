var css = document.querySelector("h3");
var color1 = document.getElementsByClassName("color1")[0];
var color2 = document.getElementsByClassName("color2")[0];
var body = document.getElementById("gradiente");
var colorRandom = document.getElementsByClassName("colorRandom")[0];


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}
document.addEventListener("DOMContentLoaded", setGradient);

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  var colorb = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    colorb += letters[Math.floor(Math.random() * 16)];
  }
  return body.style.background = "linear-gradient(to right, " + color + ", " + colorb  + ")";
}




color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

colorRandom.addEventListener("click", getRandomColor);



