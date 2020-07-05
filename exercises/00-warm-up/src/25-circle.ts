export {};

function Circle(radius) {
  this.radius = radius;
  this.area = function() {return Math.PI * radius * radius};
  this.perimeter = function() {return 2 * Math.PI * radius};
}

const c = new Circle(3);
console.log("Area =", c.area()); // Expected output: Area = 28.27
console.log("Perimeter =", c.perimeter()); // Expected output: Perimeter = 18.85
