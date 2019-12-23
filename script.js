var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.querySelector("button");

function setGradient() {
        body.style.background = 
        " linear-gradient(to right, " 
        + color1.value 
        + ", " 
        + color2.value 
        + ")";

        randomButton.style.background = 
        " linear-gradient(to right, " 
        + color2.value 
        + ", " 
        + color1.value 
        + ")";
        css.textContent = body.style.background + ";"
}

function generateRandomColors() {
    var letters = "0123456789ABCDEF";
    var col1 = "#";
    var col2 = "#";

    for (i = 0; i < 6; i++) {
        col1 += letters[Math.floor(Math.random() * 16)];
        col2 += letters[Math.floor(Math.random() * 16)];
    }

    color1.value = col1;
    color2.value = col2;

    setGradient();
}


setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", generateRandomColors);