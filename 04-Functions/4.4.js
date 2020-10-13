const readlineSync = require("readline-sync");
// ask user lengtn of array
let arrLength = new Number(readlineSync.question("Enter a number: "));
let arr = [];

// create array
function multiRand(n) {
  for (i = 1; i <= n; i++){
    arr.push(Math.trunc(Math.random()*10));
  }
  return arr;
}

arr = multiRand(arrLength);

// console.log(arr);


// // calculate average
function average(j) {
  let average = j.reduce((a, b) => a + b)/j.length
  return average;
}

let averageArr = average(arr);

// console.log(averageArr);

// calculate min
function min(j) {
  return Math.min(...j);
}

let minArr = min(arr);

// calculate max
function max(j) {
  return Math.max(...j);
}

let maxArr = max(arr);

console.log("Your array: " + arr + " Average: " + averageArr + " Max number: " + maxArr + " Min number: " + minArr);
