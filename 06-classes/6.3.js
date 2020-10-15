// class Rectangle

class Rectangle {
  constructor (topLeftXPos, topLeftYPos, width, length) {
    this.topLeftXPos = topLeftXPos;
    this.topLeftYPos = topLeftYPos;
    this. width = width;
    this.length = length;
  }

  bottomRightXPos(){
    return this.topLeftXPos + this.width;
  }

  bottomRightYPos(){
    return this.topLeftYPos - this.length;
  }

  collides(otherRectangle) {

    if ((this.topLeftYPos < otherRectangle.bottomRightYPos()) ||
        (this.bottomRightYPos() > otherRectangle.topLeftYPos) ||
        (this.bottomRightXPos() < otherRectangle.topLeftXPos) ||
        (this.topLeftXPos > otherRectangle.bottomRightXPos())) {

      return false;

    } else {
      return true;
    }
  }
}

// function that create rectangle
function rectangle(n) {
  
  const aLotOfRectangles = [];

  while (n > 0) {
    const rect = new Rectangle(
      Math.floor(Math.random() * 50),
      Math.floor(Math.random() * 50),
      Math.floor(Math.random() * 15),
      Math.floor(Math.random() * 15)
    );
    n--;
    aLotOfRectangles.push(rect);
  }
  console.log("array rectangles init: " + aLotOfRectangles);

  const collidesRectangles = [];

  // for-loop for compare rectangle
  for (let i = 0; i < aLotOfRectangles.length; i++) {
    for (let j = i + 1; j < aLotOfRectangles.length; j++) {
      if (aLotOfRectangles[i] != aLotOfRectangles[j]) {
        let overlap = aLotOfRectangles[i].collides(aLotOfRectangles[j]);
        console.log("overlap " + overlap);

        if (overlap === true) {
          collidesRectangles.push(aLotOfRectangles[i]);
          console.log("array collids: " + collidesRectangles);
        }
      }
    }
  }
  return collidesRectangles;
}

const show = rectangle(10);
console.log(show);