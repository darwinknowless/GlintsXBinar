const Geometry = require("./geometry");

class TwoDimention extends Geometry {
    constructor(name) {
        super(name, "2D");
    }

    // Overridding
    introduce() {
        super.introduce();
        console.log(`This is ${this.type}!`);
    }
}

module.exports = TwoDimention;