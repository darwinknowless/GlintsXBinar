const { Square, Rectangle, Triangle, Cube } = require("./geometry");

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

console.log(" = = = = = = = = = = CUBE = = = = = = = = = = ");

let cubeOne = new Cube(30);
cubeOne.calculateArea();
cubeOne.calculateCircumference();

