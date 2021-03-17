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
    calculateArea() {
        super.calculateArea();
        let area = Math.PI * (this.radius * this.radius) * this.height;
        console.log(`${this.name} area is ${area} cm3 \n`);
    }

    calculateCircumference() {
        super.calculateCircumference();
        let circumference = 2 * (Math.PI * this.radius * (this.radius + this.height));

        console.log(`${this.name} area is ${circumference} cm2 \n`);
    }
}
  
// let tubeOne = new Tube(11, 12, 13);
// tubeOne.calculateArea();
// tubeOne.calculateCircumference();

module.exports = Tube;