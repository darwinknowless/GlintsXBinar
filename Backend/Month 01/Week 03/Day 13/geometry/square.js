const TwoDimention = require("./twoDimention");

class Square extends TwoDimention {
    constructor(length) {
      super("Square");
      
      this.length = length;
    }
    /*
    // Overriding method
    introduce() {
      super.introduce();
      console.log(`This is ${this.name}`);
    }
    */

    // Overloading method
    introduce(who) {
      super.introduce();
      // fungsi "super" manggil function/properti/constructor di parents
      console.log(`${who}, This is ${this.name}`);
    }

    // Overridding
    calculateArea() {
        super.calculateArea();
        let area = this.length ** 2;
        console.log(`${this.name} area is ${area} cm2 \n`);
    }

    calculateCircumference() {
        super.calculateCircumference();
        let circumference = 4 * this.length;

        console.log(`${this.name} area is ${circumference} cm2 \n`);
    }
}
  
// let squareOne = new Square(11);
// squareOne.calculateArea();
// squareOne.calculateCircumference();

module.exports = Square;
