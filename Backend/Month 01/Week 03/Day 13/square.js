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
      // fungsi "super" manggil function/properti di parents
      console.log(`${who}, This is ${this.name}`);
    }
}
  
let squareOne = new Square(11);
squareOne.introduce("Darwin");
