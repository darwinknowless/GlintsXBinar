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
    calculateVolume() {
        super.calculateVolume();
        let volume = this.length ** 3;
        console.log(`${this.name} area is ${volume} cm3 \n`);
    }

    calculateArea() {
        super.calculateArea();
        let area = 6 * this.length ** 2;

        console.log(`${this.name} area is ${area} cm2 \n`);
    }
}
  
// let cubeOne = new Cube(10);
// cubeOne.calculateVolume();
// cubeOne.calculateArea();

module.exports = Cube;
