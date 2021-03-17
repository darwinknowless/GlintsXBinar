const ThreeDimention = require("./threeDimention");

class Cube extends ThreeDimention {
    constructor(length) {
      super("Cube");
      
      this.length = length;
    }

    // Overloading
    introduce(who) {
      super.introduce();
      console.log(`${who}, This is ${this.name}`);
    }

    // Overridding
    calculateArea() {
        super.calculateArea();
        let area = this.length ** 3;
        console.log(`${this.name} area is ${area} cm3 \n`);
    }

    calculateCircumference() {
        super.calculateCircumference();
        let circumference = 6 * this.length ** 2;

        console.log(`${this.name} area is ${circumference} cm2 \n`);
    }
}
  
// let cubeOne = new Cube(11);
// cubeOne.calculateArea();
// cubeOne.calculateCircumference();

module.exports = Cube;
