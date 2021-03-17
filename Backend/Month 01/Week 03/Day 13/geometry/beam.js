const ThreeDimention = require("./threeDimention");

class Beam extends ThreeDimention {
    constructor(length, width, height) {
      super("Beam");
      
      this.length = length;
      this.width = width;
      this.height = height;
    }

    // Overloading
    introduce(who) {
      super.introduce();
      console.log(`${who}, This is ${this.name}`);
    }

    // Overridding
    calculateArea() {
        super.calculateArea();
        let area = this.length * this.width * this.height;
        console.log(`${this.name} area is ${area} cm3 \n`);
    }

    calculateCircumference() {
        super.calculateCircumference();
        let circumference = 2 * ((this.length * this.width) + (this.length * this.height ) + (this.width * this.height));

        console.log(`${this.name} area is ${circumference} cm2 \n`);
    }
}
  
// let beamOne = new Beam(11, 12, 13);
// beamOne.calculateArea();
// beamOne.calculateCircumference();

module.exports = Beam;