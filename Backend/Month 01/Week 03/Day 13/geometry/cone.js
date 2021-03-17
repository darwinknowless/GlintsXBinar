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
    calculateArea() {
        super.calculateArea();
        let area = (1 / 3) * (Math.PI * (this.radius * this.radius) * this.height);
        console.log(`${this.name} area is ${area} cm3 \n`);
    }

    calculateCircumference() {
        super.calculateCircumference();
        let circumference = (Math.PI *(this.radius * this.radius)) + (Math.PI * this.radius * (Math.sqrt((this.radius * this.radius)+(this.height * this.height))));

        console.log(`${this.name} area is ${circumference} cm2 \n`);
    }
}
  
// let coneOne = new Cone(11, 12);
// coneOne.calculateArea();
// coneOne.calculateCircumference();

module.exports = Cone;