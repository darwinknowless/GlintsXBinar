const Geometry = require("./geometry");

class TwoDimention extends Geometry {
    constructor(name) {
        super(name, "2D");
        // fungsi "super" manggil function/properti di parents
    }

    // Overridding
    introduce() {
        super.introduce();
        // fungsi "super" manggil function/properti di parents
        console.log(`This is ${this.type}!`);
    }
}

module.exports = TwoDimention;