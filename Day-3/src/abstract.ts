abstract class Shape {
    abstract area(): number;
    abstract perimeter(): number;
    describe() {
        console.log("I am a shape");
    }
    static create(type: "circle" | "rect" | "triangle", ...args: number[]) {
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

class Circle implements Shape {
    radius: number;
    constructor(radius: number) {
        this.radius = radius;
    }
    area(): number {
        return Math.PI * this.radius * this.radius;
    }
    perimeter(): number {
        return 2 * Math.PI * this.radius;
    }
    describe(): void {
        console.log("Im a Circle");
    }
    create(type: "circle" | "rect" | "triangle", ...args: number[]) {}
}
const circle = new Circle(5);
console.log(circle.area());
circle.describe();

class Rectangle implements Shape {
    length: number;
    breadth: number;
    constructor(length: number, breadth: number) {
        this.length = length;
        this.breadth = breadth;
    }
    area(): number {
        return this.length * this.breadth;
    }
    perimeter(): number {
        return 2 * (this.breadth + this.length);
    }
    describe(): void {
        console.log("Im a Rectangle");
    }
}

class Triangle implements Shape {
    side1: number;
    side2: number;
    side3: number;
    constructor(side1: number, side2: number, side3: number) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
    area(): number {
        let s = this.perimeter();
        return Math.sqrt(
            s * (s - this.side1) * (s - this.side2) * (s - this.side3)
        );
    }
    perimeter(): number {
        return this.side1 + this.side2 + this.side3;
    }
    describe(): void {
        console.log("Im a Rectangle");
    }
}
console.log(Shape.create("circle", 10)?.area());
