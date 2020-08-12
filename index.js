let circle;

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  get diameter() {
    return this.radius * 2;
  }
  get circumference() {
    return math.pi * this.radius * 2;
  }
  get area() {
    return math.pi * this.radius * this.radius;
  }
  set diameter(Diameter) {
    this.radius = Diameter / 2;
  }
  set circumference(Circumference) {
    this.radius = Circumference / (math.pi * 2);
  }
}
circle = new Circle(6);
circle.diameter;
circle.diameter = 36;
circle.circumference;
circle.circumference = 100;
circle.area;
