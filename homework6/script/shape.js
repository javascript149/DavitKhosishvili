class Shape{
    constructor(name) {
        this.name = name

    }
    area() {
        return "area calculation not implemented for generic shape"
    }

}

class Circle extends shape {
    constructor (name, radius){
        super(name);
        this.radius = radius
    }
    area() {
        return `Area of Circle: ${Math.PI * this.radius * this.radius}`;
    }
}
 class Rectangle extends shape {
    constructor(name, width, height) {
super(name);
    this.width = width;
    this.height = height
    }
    area() {
        return ` area of rectangle: ${this.width * this.height}`;
    }
 }

 class Triangle extends shape {
    constructor(name, base, height){
        super(name);
        this.base = base;
        this.height = height
    }
    area() {
        return `Area of Triangle: ${(this.base * this.height) / 2}`;
    }
 }
 const circle = new Circle("Circle", 5);
const rectangle = new Rectangle("Rectangle", 4, 6);
const triangle = new Triangle("Triangle", 3, 4);
const genericShape = new Shape("Generic Shape");

const outputElement = document.getElementById("output");
outputElement.innerHTML = `
    ${circle.area()}<br>
    ${rectangle.area()}<br>
    ${triangle.area()}<br>
    ${genericShape.area()}