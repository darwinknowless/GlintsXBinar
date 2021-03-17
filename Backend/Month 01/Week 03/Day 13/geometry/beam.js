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
    calculateVolume() {
        super.calculateVolume();
        let volume = this.length * this.width * this.height;
        console.log(`${this.name} area is ${volume} cm3 \n`);
    }

    calculateArea() {
        super.calculateArea();
        let area = 2 * ((this.length * this.width) + (this.length * this.height ) + (this.width * this.height));

        console.log(`${this.name} area is ${area} cm2 \n`);
    }
}
  
// let beamOne = new Beam(10, 6, 4);
// beamOne.calculateVolume();
// beamOne.calculateArea();

module.exports = Beam;