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

const rectangle = new Rectangle(2,2,10,5);
const otherRectangle = new Rectangle (-10,-5,5,10);

const result = rectangle.collides(otherRectangle);
console.log(result);