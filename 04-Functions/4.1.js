const readlineSync = require("readline-sync");

let square = 0;

function calcSurface (width, length) {
  square = width * length;
  return square;
}

let widthRect = new Number(readlineSync.question("Enter width of rectangle: "));
let lengthRect = new Number(readlineSync.question("Enter length of rectangle: "));

calcSurface(widthRect, lengthRect);

console.log(square);