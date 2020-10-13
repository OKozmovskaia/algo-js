let arrOriginal = [];
let arrCopy = [];

arrOriginal = ["Apple", "Pear", "Banana"];

// for (let elem of arrOriginal) {
//   arrCopy.push(elem);
// }

arrCopy = Array.from(arrOriginal);

console.log(arrOriginal, arrCopy);

