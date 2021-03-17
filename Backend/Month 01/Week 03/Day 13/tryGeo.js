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
beamOne.calculateVolume();
beamOne.calculateArea();

console.log(" = = = = = = = = = = CUBE = = = = = = = = = = ");

let cubeOne = new Cube(10);
cubeOne.calculateVolume();
cubeOne.calculateArea();

console.log(" = = = = = = = = = = TUBE = = = = = = = = = = ");

let tubeOne = new Tube(7, 21);
tubeOne.calculateVolume();
tubeOne.calculateArea();

console.log(" = = = = = = = = = = CONE = = = = = = = = = = ");

let coneOne = new Cone(7, 21);
coneOne.calculateVolume();
coneOne.calculateArea();
