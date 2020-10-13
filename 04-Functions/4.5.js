//  Base formula: xd = x2-x1; yd = y2-y1
//  Distance = sqrt(xd * xd + yd * yd)

// Point A = [1, 1], point B = [2, 2] => 1.41
// Point A = [1, 1], point B = [3, 1] => 2
// Point A = [4, 1], point B = [1, 1] => 3
// Point A = [-2, 2], point B = [2, -2] => 5.65



function calcDistance (a, b) {

  let xd = b[0] - a[0];
  let yd = b[1] - a[1];
  let distance = (Math.sqrt((xd * xd) + (yd * yd)));
  return +distance.toFixed(2);

}

const distanceA = calcDistance([1,1], [2,2]);
const distanceB = calcDistance([1,1], [3,1]);
const distanceC = calcDistance([4,1], [1,1]);
const distanceD = calcDistance([-2,2], [2,-2]);

console.log(distanceA, distanceB, distanceC, distanceD);