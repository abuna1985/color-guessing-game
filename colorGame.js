var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var title = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {
  this.classList.add("selected");
  hardBtn.classList.remove("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  squares.forEach(function(square, i) {
    //change each color to match given color
    if (colors[i]) {
      square.style.backgroundColor = colors[i];
    } else {
      square.style.display = "none";
    }
  });
  title.style.background = "#4682b4";
  messageDisplay.textContent = "";
});

hardBtn.addEventListener("click", function() {
  this.classList.add("selected");
  easyBtn.classList.remove("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  squares.forEach(function(square, i) {
    square.style.backgroundColor = colors[i];
    square.style.display = "block";
  });
});

resetButton.addEventListener("click", function() {
  resetButton.textContent = "New Colors";
  // generate all new colors
  colors = generateRandomColors(numSquares);
  //pick new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  squares.forEach(function(square, i) {
    //change each color to match given color
    square.style.backgroundColor = colors[i];
  });
  title.style.background = "#4682b4";
  messageDisplay.textContent = "";
});

colorDisplay.textContent = pickedColor;

squares.forEach(function(square, i) {
  // add initial colors to squares
  square.style.backgroundColor = colors[i];
  // add click listeners to squares
  square.addEventListener("click", function() {
    //grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      resetButton.textContent = "Play Again?";
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
  });
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
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
