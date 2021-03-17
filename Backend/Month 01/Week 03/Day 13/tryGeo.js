const { Square, Rectangle, Triangle } = require("./geometry");

console.log(" = = = = = = = = = = SQUARE = = = = = = = = = = ");

let squareOne = new Square(12);
squareOne.calculateArea();
squareOne.calculateCircumference();

console.log(" = = = = = = = = = = RECTANGLE = = = = = = = = = = ");

let rectangleOne = new Rectangle(11, 12);
rectangleOne.calculateArea();
rectangleOne.calculateCircumference();

console.log(" = = = = = = = = = = TRIANGLE = = = = = = = = = = ");

let triangleOne = new Triangle(15, 30);
triangleOne.calculateArea();
triangleOne.calculateCircumference();



