class Circle {
  constructor(xPos, yPos, radius) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.radius = radius;
  }

  move(xOffset, yOffset) {
    this.xPos += xOffset;
    this.yPos += yOffset;

    
  }

  get surface() {
    let square = Math.pow(this.radius, 2) * Math.PI;
    return square;
  }
}

const circle = new Circle(5, 10, 3);
console.log(circle, circle.surface);

// move circle
circle.move(10, 15);
console.log(circle);