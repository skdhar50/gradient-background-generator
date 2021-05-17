let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let body = document.getElementById("gradient");
let range = document.getElementById("range");
let output = document.getElementById("output");

function changBackground() {
    style = "linear-gradient(" + range.value + "deg, " + color1.value + ", " + color2.value + ")";
    body.style.background = style;

    output.textContent = style + ";";
}

color1.addEventListener("input", changBackground);

color2.addEventListener("input", changBackground)

range.addEventListener("input", changBackground);
// console.log(color1.value);
console.log(output.textContent);
