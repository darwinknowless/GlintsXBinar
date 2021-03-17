const { Square, Rectangle, Triangle, Cube, Beam, Tube, Cone } = require("./geometry");
// const Cone = require("./geometry/cone");
// const Tube = require("./geometry/tube");

console.log(" = = = = = = = = = = TWO DIMENTION = = = = = = = = = = ");
console.log(" = = = = = = = = = = SQUARE = = = = = = = = = = ");

let squareOne = new Square(10);
squareOne.calculateArea();
squareOne.calculateCircumference();

console.log(" = = = = = = = = = = RECTANGLE = = = = = = = = = = ");

let rectangleOne = new Rectangle(10, 6);
rectangleOne.calculateArea();
rectangleOne.calculateCircumference();

console.log(" = = = = = = = = = = TRIANGLE = = = = = = = = = = ");

let triangleOne = new Triangle(10, 8);
triangleOne.calculateArea();
triangleOne.calculateCircumference();

console.log(" = = = = = = = = = = THREE DIMENTION = = = = = = = = = = ");
console.log(" = = = = = = = = = = BEAM = = = = = = = = = = ");

let beamOne = new Beam(10, 6, 4);
beamOne.calculateArea();
beamOne.calculateCircumference();

console.log(" = = = = = = = = = = CUBE = = = = = = = = = = ");

let cubeOne = new Cube(10);
cubeOne.calculateArea();
cubeOne.calculateCircumference();

console.log(" = = = = = = = = = = TUBE = = = = = = = = = = ");

let tubeOne = new Tube(7, 21);
tubeOne.calculateArea();
tubeOne.calculateCircumference();

console.log(" = = = = = = = = = = CONE = = = = = = = = = = ");

let coneOne = new Cone(7, 21);
coneOne.calculateArea();
coneOne.calculateCircumference();
