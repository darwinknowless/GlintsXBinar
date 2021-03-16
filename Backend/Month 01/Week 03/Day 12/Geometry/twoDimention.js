const Geometry = require("./geometry");

class TwoDimention extends Geometry {
    constructor(name) {
        super(name, "2D"); // super : manggil class parrents di file geometry.js
    }
    // Overriding method
    introduce() {
        super.introduce();
        console.log(`This is ${this.type}`);
    }

    calculateArea() {
        console.log("This area!");
    }
}

let twoDimention = new TwoDimention("Square");
console.log(twoDimention.name);
twoDimention.introduce();

module.exports = TwoDimention;