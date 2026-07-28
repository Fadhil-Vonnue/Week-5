"use strict";
class Shape {
    describe() {
        console.log("I am a shape");
    }
    static create(type, ...args) {
        switch (type) {
            case "circle":
                return new Circle(args[0]);
            case "rect":
                return new Rectangle(args[0], args[1]);
            case "triangle":
                return new Triangle(args[0], args[1], args[2]);
            default:
                return null;
        }
    }
}
// const shape = new Shape(); Cant create an instance of abstract class Shape
class Circle {
    radius;
    constructor(radius) {
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
    perimeter() {
        return 2 * Math.PI * this.radius;
    }
    describe() {
        console.log("Im a Circle");
    }
    create(type, ...args) { }
}
const circle = new Circle(5);
console.log(circle.area());
circle.describe();
class Rectangle {
    length;
    breadth;
    constructor(length, breadth) {
        this.length = length;
        this.breadth = breadth;
    }
    area() {
        return this.length * this.breadth;
    }
    perimeter() {
        return 2 * (this.breadth + this.length);
    }
    describe() {
        console.log("Im a Rectangle");
    }
}
class Triangle {
    side1;
    side2;
    side3;
    constructor(side1, side2, side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
    area() {
        let s = this.perimeter();
        return Math.sqrt(s * (s - this.side1) * (s - this.side2) * (s - this.side3));
    }
    perimeter() {
        return this.side1 + this.side2 + this.side3;
    }
    describe() {
        console.log("Im a Rectangle");
    }
}
console.log(Shape.create("circle", 10)?.area());
