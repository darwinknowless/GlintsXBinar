const ThreeDimention = require("./threeDimention");

class Cone extends ThreeDimention {
    constructor(radius, height) {
      super("Cone");
      
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
        let volume = (1 / 3) * (Math.PI * (this.radius * this.radius) * this.height);
        console.log(`${this.name} area is ${volume} cm3 \n`);
    }

    calculateArea() {
        super.calculateArea();
        let area = (Math.PI *(this.radius * this.radius)) + (Math.PI * this.radius * (Math.sqrt((this.radius * this.radius)+(this.height * this.height))));

        console.log(`${this.name} area is ${area} cm2 \n`);
    }
}
  
// let coneOne = new Cone(7, 21);
// coneOne.calculateVolume();
// coneOne.calculateArea();

module.exports = Cone;