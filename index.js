let circle;

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  get diameter() {
    return this.radius * 2;
  }
  get circumference() {
    return Math.pi * this.diameter;
  }
  get area() {
    return Math.pi * this.radius * this.radius;
  }
  set diameter(Diameter) {
    this.radius = Diameter / 2;
  }
  set circumference(Circumference) {
    this.radius = Circumference / (Math.pi * 2);
  }
}
circle = new Circle(6);
circle.diameter;
circle.diameter = 36;
circle.circumference;
circle.circumference = 100;
circle.area;
