// Add your Circle class here

let circle;

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  get diameter() {
    return Diameter;
  }
  get circumference() {
    return Circumference ;
  }
  get area() {
    return Area;
  }
  set diameter(){
    Diameter = this.radius * 2
  }
  set circumference(){
    Circumference = math.pi * this.Diameter
  }
  set area() {
    Area = math.pi * this.radius * this.radius;
}
circle = new Circle(6);
circle.diameter ;
circle.diameter = 36;
circle.circumference;
circle.circumference = 100;
