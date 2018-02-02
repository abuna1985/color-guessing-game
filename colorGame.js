var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var title = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

squares.forEach(function(square, i) {
  // add initial colors to squares
  square.style.backgroundColor = colors[i];
  // add click listeners to squares
  square.addEventListener("click", function() {
    //grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    if(clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      changeColors(clickedColor);
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
});

function changeColors(color) {
  //loop through all the squares
  squares.forEach(function(square) {
    //change each color to match given color
    square.style.backgroundColor = color;
    title.style.backgroundColor = color;
  })
    
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length)
  return colors[random];
}

function generateRandomColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  //pick a "red" from 0 to 255
  var r = Math.floor(Math.random() * 256);
  //pick a "green" from 0 to 255
  var g = Math.floor(Math.random() * 256);
  //pick a "blue" from 0 to 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}