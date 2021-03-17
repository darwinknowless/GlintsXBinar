const ThreeDimention = require("./threeDimention");

class Tube extends ThreeDimention {
    constructor(radius, height) {
      super("Tube");
      
      this.radius = radius;
      this.height = height;
      //return Math.PI * Math.pow (2, radius) * height;
    }

    // Overloading
    introduce(who) {
      super.introduce();
      console.log(`${who}, This is ${this.name}`);
    }

    // Overridding
    calculateVolume() {
        super.calculateVolume();
        let volume = Math.PI * (this.radius * this.radius) * this.height;
        console.log(`${this.name} area is ${volume} cm3 \n`);
    }

    calculateArea() {
        super.calculateArea();
        let area = 2 * (Math.PI * this.radius * (this.radius + this.height));

        console.log(`${this.name} area is ${area} cm2 \n`);
    }
}
  
// let tubeOne = new Tube(7, 21);
// tubeOne.calculateVolume();
// tubeOne.calculateArea();

module.exports = Tube;